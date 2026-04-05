import type { Metadata } from "next";
import BlogClient from "@/components/BlogClient";
import { getBlogPosts } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Blog",
  description: "Training, nutrition, recovery, and mindset articles from NOX Personal Training.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return <BlogClient posts={posts} />;
}
