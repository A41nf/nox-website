import { NextResponse } from "next/server";

const FIELDS = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
const LIMIT = 12;

export const revalidate = 3600;

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json({ error: "Instagram token not configured" }, { status: 503 });
  }

  try {
    const url = `https://graph.instagram.com/me/media?fields=${FIELDS}&limit=${LIMIT}&access_token=${token}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      const err = await res.json();
      return NextResponse.json({ error: err?.error?.message ?? "Instagram API error" }, { status: 502 });
    }

    const data = await res.json();
    const posts = (data.data ?? []).filter(
      (post: { media_type: string; media_url?: string; thumbnail_url?: string }) =>
        post.media_url || post.thumbnail_url,
    );

    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json({ error: "Failed to fetch Instagram posts" }, { status: 500 });
  }
}
