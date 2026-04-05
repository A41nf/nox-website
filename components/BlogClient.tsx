"use client";

import { useMemo } from "react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLocale } from "@/lib/i18n";
import { urlFor } from "@/lib/sanity";
import type { BlogPost } from "@/lib/types";

type FallbackPost = {
  title: string;
  excerpt: string;
  category: string;
  minutes: string;
  date: string;
  href: string;
};

type BlogClientProps = {
  posts?: BlogPost[] | null;
};

export default function BlogClient({ posts }: BlogClientProps) {
  const { t, isArabic } = useLocale();
  const b = t.blog;
  const fallbackPosts: FallbackPost[] = b.posts.map((post) => ({ ...post }));

  const postData = useMemo(() => {
    if (!posts || posts.length === 0) {
      return fallbackPosts;
    }

    return posts.map((post) => ({
      title: isArabic ? post.titleAr ?? post.title : post.title,
      excerpt: isArabic ? post.excerptAr ?? post.excerpt : post.excerpt,
      category: post.category ?? "Training",
      minutes: String(post.readTimeMinutes ?? 5),
      date: post.publishedAt
        ? new Intl.DateTimeFormat(isArabic ? "ar" : "en", {
            dateStyle: "long",
          }).format(new Date(post.publishedAt))
        : "",
      href: post.slug?.current ? `/blog/${post.slug.current}` : "/blog/getting-started",
      thumbnail: post.thumbnail,
    }));
  }, [fallbackPosts, isArabic, posts]);

  return (
    <section className={`mx-auto w-full max-w-7xl px-4 pt-10 md:px-8 ${isArabic ? "font-cairo" : ""}`}>
      <SectionHeader label={b.label} title={b.title} description={b.description} />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {postData.map((post, i) => (
          <Link
            key={post.title}
            href={post.href}
            className="overflow-hidden rounded-2xl border border-white/10 bg-nox-grey/60 transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              src={"thumbnail" in post && post.thumbnail ? urlFor(post.thumbnail).width(800).height(400).url() : `https://picsum.photos/seed/nox-blog-${i + 1}/800/400`}
              alt={post.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-nox-red/60 bg-nox-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-nox-red">
                  {b.categories[post.category as keyof typeof b.categories] ?? post.category}
                </span>
                <span className="text-xs uppercase tracking-[0.16em] text-white/70">
                  {post.minutes} {b.readTime}
                </span>
                {post.date ? (
                  <span className="text-xs uppercase tracking-[0.16em] text-white/70">{post.date}</span>
                ) : null}
              </div>
              <h2 className="mt-5 text-2xl font-bold text-white">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-8 text-sm text-white/70">{b.comingSoon}</p>
    </section>
  );
}
