export type SanityImage = {
  asset?: {
    _ref?: string;
    _type?: string;
  };
} | null;

export type Coach = {
  _id?: string;
  name: string;
  nameAr?: string | null;
  photo?: SanityImage;
  bio: string;
  bioAr?: string | null;
  credentials?: string | null;
  specialties?: string[] | null;
  specialtiesAr?: string[] | null;
  order?: number | null;
};

export type BlogPost = {
  _id?: string;
  title: string;
  titleAr?: string | null;
  slug?: {
    current?: string;
  } | null;
  excerpt: string;
  excerptAr?: string | null;
  body?: PortableTextBlock[] | null;
  bodyAr?: PortableTextBlock[] | null;
  thumbnail?: SanityImage;
  category?: string | null;
  publishedAt?: string | null;
  readTimeMinutes?: number | null;
};

export type Testimonial = {
  _id?: string;
  name: string;
  quote: string;
  quoteAr?: string | null;
  result: string;
  resultAr?: string | null;
  duration: string;
  durationAr?: string | null;
  featured?: boolean | null;
  order?: number | null;
};

export type FaqItem = {
  _id?: string;
  category: string;
  question: string;
  questionAr?: string | null;
  answer: string;
  answerAr?: string | null;
  order?: number | null;
};

export type ScheduleClass = {
  _id?: string;
  day: string;
  time: string;
  classType: string;
  classTypeAr?: string | null;
  coach: string;
  location: string;
};

export type Guide = {
  _id?: string;
  title: string;
  titleAr?: string | null;
  description: string;
  descriptionAr?: string | null;
  category: string;
  categoryAr?: string | null;
  file?: {
    asset?: {
      url?: string;
    };
  } | null;
  order?: number | null;
};

export type PortableTextSpan = {
  _type?: "span";
  text?: string | null;
};

export type PortableTextBlock = {
  _type?: "block";
  _key?: string;
  style?: string | null;
  children?: PortableTextSpan[] | null;
};

export type Service = {
  _id?: string;
  title: string;
  titleAr?: string | null;
  description: string;
  descriptionAr?: string | null;
  benefits?: string[] | null;
  benefitsAr?: string[] | null;
  price?: string | null;
  priceAr?: string | null;
  icon?: string | null;
  order?: number | null;
};

export type SiteSettings = {
  _id?: string;
  phone?: string | null;
  whatsapp?: string | null;
  address?: string | null;
  addressAr?: string | null;
  hours?: string | null;
  hoursAr?: string | null;
  freshaUrl?: string | null;
  instagramUrl?: string | null;
  tiktokUrl?: string | null;
};

export type CareerOpening = {
  _id?: string;
  id: string;
  title: string;
  titleEn?: string | null;
  type: "full" | "part";
  location: string;
  description: string;
  requirements?: string[] | null;
  whatsapp?: string | null;
  isOpen?: boolean | null;
  order?: number | null;
};
