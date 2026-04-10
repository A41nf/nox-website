"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Play } from "lucide-react";
import { Reveal } from "@/src/components/ui/reveal";
import { SectionHeading } from "@/src/components/ui/section-heading";

type InstagramPost = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM" | string;
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

type InstagramResponse = {
  posts?: InstagramPost[];
  error?: string;
};

function truncateCaption(caption?: string) {
  if (!caption) {
    return "تابع أحدث لحظات NOX على إنستغرام.";
  }

  return caption.length > 80 ? `${caption.slice(0, 77)}...` : caption;
}

function InstagramSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/instagram", { signal: controller.signal });
        const data = (await res.json()) as InstagramResponse;

        if (!res.ok) {
          throw new Error(data.error ?? "Failed to load Instagram posts");
        }

        setPosts(data.posts ?? []);
      } catch (err) {
        if (controller.signal.aborted) {
          return;
        }

        setPosts([]);
        setError(err instanceof Error ? err.message : "Failed to load Instagram posts");
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    void loadPosts();

    return () => controller.abort();
  }, [retryKey]);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const updateScrollState = () => {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      setCanScrollPrev(slider.scrollLeft > 8);
      setCanScrollNext(slider.scrollLeft < maxScrollLeft - 8);
    };

    updateScrollState();
    slider.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      slider.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [isLoading, posts.length]);

  const scrollSlider = (direction: "prev" | "next") => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const firstCard = slider.querySelector<HTMLElement>("[data-instagram-card]");
    const cardWidth = firstCard?.offsetWidth ?? slider.clientWidth;
    const gap = 24;
    const left = direction === "next" ? cardWidth + gap : -(cardWidth + gap);

    slider.scrollBy({ left, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
          >
            <div className="aspect-square bg-white/10" />
            <div className="space-y-3 p-5">
              <div className="h-4 w-24 rounded-full bg-white/10" />
              <div className="h-4 w-full rounded-full bg-white/10" />
              <div className="h-4 w-2/3 rounded-full bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-12 rounded-[2rem] border border-[#E80028]/30 bg-[linear-gradient(135deg,rgba(232,0,40,0.12),rgba(255,255,255,0.03),rgba(13,13,13,1))] p-8 text-center">
        <p className="text-xl font-black text-white">تعذر تحميل منشورات إنستغرام</p>
        <p className="mt-3 text-base leading-8 text-white/75">{error}</p>
        <button
          type="button"
          onClick={() => setRetryKey((current) => current + 1)}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-[#E80028] bg-[#E80028] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#c70023] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
        >
          إعادة المحاولة
        </button>
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-14 text-center">
        <p className="text-xl font-black text-white">لا توجد منشورات حديثة حالياً</p>
        <p className="mt-3 text-base leading-8 text-white/75">أضف التوكن وستظهر آخر تحديثات NOX هنا تلقائياً.</p>
      </div>
    );
  }

  return (
    <div className="relative mt-12">
      <button
        type="button"
        onClick={() => scrollSlider("prev")}
        disabled={!canScrollPrev}
        className="absolute left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0D0D0D]/90 text-white transition hover:border-[#E80028] hover:text-[#E80028] disabled:cursor-not-allowed disabled:opacity-35 sm:inline-flex"
        aria-label="Previous Instagram posts"
      >
        <ChevronLeft size={20} aria-hidden />
      </button>

      <button
        type="button"
        onClick={() => scrollSlider("next")}
        disabled={!canScrollNext}
        className="absolute right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0D0D0D]/90 text-white transition hover:border-[#E80028] hover:text-[#E80028] disabled:cursor-not-allowed disabled:opacity-35 sm:inline-flex"
        aria-label="Next Instagram posts"
      >
        <ChevronRight size={20} aria-hidden />
      </button>

      <div
        ref={sliderRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {posts.map((post, index) => {
          const imageSrc = post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url ?? post.thumbnail_url;

          if (!imageSrc) {
            return null;
          }

          return (
            <motion.a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noreferrer"
              data-instagram-card
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
              className="group min-w-full snap-start overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] sm:min-w-[calc((100%-1.5rem)/2)] lg:min-w-[calc((100%-3rem)/3)]"
            >
              <div className="relative aspect-square overflow-hidden bg-[#0D0D0D]">
                {/* Instagram media uses raw img per the implementation requirement. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageSrc}
                  alt={post.caption ? truncateCaption(post.caption) : "NOX Instagram post"}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
                {post.media_type === "VIDEO" ? (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/65 px-3 py-1 text-[11px] font-bold tracking-[0.24em] text-white">
                    <Play size={12} className="fill-current" />
                    VIDEO
                  </span>
                ) : null}
              </div>

              <div className="p-5 text-right">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-block rounded bg-white px-2 py-0.5 text-xs font-bold tracking-[0.28em] text-[#E80028]">INSTAGRAM</span>
                  <ExternalLink size={16} className="text-white/45 transition group-hover:text-white" aria-hidden />
                </div>
                <p className="mt-4 min-h-[3.5rem] text-sm leading-7 text-white/80">{truncateCaption(post.caption)}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

export function InstagramSection() {
  return (
    <section className="bg-white/[0.03] py-24" aria-label="آخر اللقطات من NOX على إنستغرام">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="INSTAGRAM"
            title="آخر اللقطات من NOX"
            description="مقتطفات سريعة من الجلسات، الأجواء، والتفاصيل التي تعكس شخصية الاستوديو كما هي."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <InstagramSlider />
        </Reveal>
      </div>
    </section>
  );
}
