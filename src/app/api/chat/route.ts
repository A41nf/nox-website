type ChatRequestBody = {
  message?: string;
  locale?: "ar" | "en";
};

type AnthropicMessageResponse = {
  content?: Array<{
    type?: string;
    text?: string;
  }>;
  error?: {
    message?: string;
  };
};

const SYSTEM_PROMPT = `You are NOX Assistant, the AI helper for NOX Personal Training in Muscat, Oman.
NOX offers personal training, EMS training, and group classes.
Keep answers short (2-4 sentences), direct, and on-brand - disciplined, no fluff.
If asked about pricing, say plans start from 70 OMR/month for group classes, 95 OMR for 8 EMS sessions, and 180 OMR/month for personal training.
If asked about booking, direct users to book via Fresha or WhatsApp +968 9361 1220.
Always respond in the same language the user writes in.`;

function getFallbackReply(locale: "ar" | "en") {
  return locale === "ar"
    ? "حالياً ما أقدر أرد بشكل كامل. تواصل معنا عبر واتساب على +968 9361 1220 أو احجز عبر Fresha."
    : "I can't respond fully right now. Contact NOX on WhatsApp at +968 9361 1220 or book via Fresha.";
}

export async function POST(request: Request) {
  let locale: "ar" | "en" = "en";

  try {
    const body = (await request.json()) as ChatRequestBody;
    const message = body.message?.trim();
    locale = body.locale === "ar" ? "ar" : "en";

    if (!message) {
      return Response.json({ reply: getFallbackReply(locale) }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      console.error("ANTHROPIC_API_KEY is not set");
      return Response.json({ reply: getFallbackReply(locale) }, { status: 500 });
    }

    const localeInstruction =
      locale === "ar"
        ? "The user's locale is Arabic. Reply in Arabic."
        : "The user's locale is English. Reply in English.";

    const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 220,
        system: `${SYSTEM_PROMPT}\n${localeInstruction}`,
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    const data = (await anthropicResponse.json()) as AnthropicMessageResponse;

    if (!anthropicResponse.ok) {
      console.error("Anthropic API error:", data.error?.message ?? anthropicResponse.statusText);
      return Response.json({ reply: getFallbackReply(locale) }, { status: 200 });
    }

    const reply =
      data.content
        ?.filter((item) => item.type === "text" && item.text)
        .map((item) => item.text?.trim())
        .filter(Boolean)
        .join("\n") ?? "";

    if (!reply) {
      return Response.json({ reply: getFallbackReply(locale) }, { status: 200 });
    }

    return Response.json({ reply });
  } catch (error) {
    console.error("Chat route failed:", error);
    return Response.json({ reply: getFallbackReply(locale) }, { status: 200 });
  }
}
