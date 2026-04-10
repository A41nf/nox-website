"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import type { BlogPost, PortableTextBlock } from "@/lib/types";

type BlogPostClientProps = {
  post: BlogPost;
};

function blockToText(blocks?: PortableTextBlock[] | null) {
  return (blocks ?? [])
    .map((block) => (block.children ?? []).map((child) => child.text ?? "").join("").trim())
    .filter(Boolean);
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const { t, isArabic } = useLocale();
  const title = isArabic ? post.titleAr ?? post.title : post.title;
  const excerpt = isArabic ? post.excerptAr ?? post.excerpt : post.excerpt;

  const paragraphs = useMemo(() => {
    const localizedBody = isArabic ? post.bodyAr ?? post.body : post.body;
    return blockToText(localizedBody);
  }, [isArabic, post.body, post.bodyAr]);

  const date = post.publishedAt
    ? new Intl.DateTimeFormat(isArabic ? "ar" : "en", { dateStyle: "long" }).format(new Date(post.publishedAt))
    : null;

  return (
    <article className={`mx-auto w-full max-w-4xl px-4 pt-10 md:px-8 ${isArabic ? "font-cairo" : ""}`}>
      <Link href="/blog" className="text-sm font-semibold uppercase tracking-[0.18em] text-nox-red">
        {isArabic ? "العودة إلى المدونة" : "Back to Blog"}
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {post.category ? (
          <span className="rounded-full bg-gradient-to-r from-nox-red to-red-700 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
            {t.blog.categories[post.category as keyof typeof t.blog.categories] ?? post.category}
          </span>
        ) : null}
        {date ? <span className="text-xs uppercase tracking-[0.16em] text-white/75">{date}</span> : null}
      </div>

      <h1 className="mt-4 text-4xl font-black uppercase leading-tight text-white md:text-6xl">
        {title}
      </h1>
      <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">{excerpt}</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/80 md:text-base">
        {paragraphs.map((paragraph, index) => (
          <p key={`${post._id ?? post.slug?.current ?? post.title}-${index}`}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
