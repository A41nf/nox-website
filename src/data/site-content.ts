import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgeCheck,
  Clock3,
  Dumbbell,
  HeartPulse,
  MessageSquareQuote,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

export type LocaleLabel = {
  ar: string;
  en: string;
  fr: string;
  hi: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  price: string;
  duration: string;
  icon: LucideIcon;
};

export type CoachItem = {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  quote: string;
};

export type TestimonialItem = {
  name: string;
  result: string;
  quote: string;
};

export type WhyItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const brandName = "NOX";

export const navItems = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن NOX" },
  { href: "/services", label: "الخدمات" },
  { href: "/coaches", label: "المدربون" },
  { href: "/careers", label: "الوظائف" },
  { href: "/contact", label: "تواصل معنا" },
] as const;

export const languageItems: LocaleLabel[] = [
  { ar: "العربية", en: "Arabic", fr: "Arabe", hi: "अरबी" },
  { ar: "الإنجليزية", en: "English", fr: "Anglais", hi: "अंग्रेज़ी" },
  { ar: "الفرنسية", en: "French", fr: "Français", hi: "फ़्रेंच" },
  { ar: "الهندية", en: "Hindi", fr: "Hindi", hi: "हिंदी" },
];

export const contactDetails = {
  phone: "+968 9361 1220",
  whatsapp: "https://wa.me/96893611220",
  email: "hello@noxtraining.om",
  address: "الخوير، مسقط، سلطنة عُمان",
  hours: "السبت إلى الخميس | 6:00 صباحاً - 11:00 مساءً",
};

export const heroStats = [
  { value: "1:1", label: "تدريب شخصي دقيق" },
  { value: "45", label: "دقيقة تركيز مكثف" },
  { value: "4", label: "لغات لخدمة متعددة الجنسيات" },
  { value: "0", label: "أعذار مقبولة" },
];

export const services: ServiceItem[] = [
  {
    id: "personal-training",
    title: "التدريب الشخصي",
    subtitle: "جلسات مصممة حول هدفك وسلوكك اليومي",
    description:
      "برنامج فردي مكثف يركز على خسارة الدهون، بناء القوة، إعادة تشكيل الجسم، ورفع الانضباط اليومي داخل وخارج النادي.",
    bullets: ["تقييم أولي كامل", "خطة أداء أسبوعية", "متابعة تغذية وعادات", "قياسات تقدم دورية"],
    price: "من 180 ريال / باقة شهرية",
    duration: "3 إلى 5 جلسات أسبوعياً",
    icon: Dumbbell,
  },
  {
    id: "ems-training",
    title: "EMS Training",
    subtitle: "تحفيز عضلي عالي الكفاءة في وقت أقل",
    description:
      "خيار ممتاز لأصحاب الجداول المزدحمة ممن يريدون جلسات قصيرة بشدة عالية، مع إشراف تقني دقيق وتركيز على الجودة.",
    bullets: ["جلسات قصيرة 20 دقيقة", "مناسب للوقت المحدود", "تركيز على التفعيل العضلي", "إشراف مباشر من المدرب"],
    price: "من 220 ريال / باقة شهرية",
    duration: "2 إلى 3 جلسات أسبوعياً",
    icon: Zap,
  },
  {
    id: "conditioning",
    title: "Strength & Conditioning",
    subtitle: "لمن يريد أداءً رياضياً أعلى وجسماً أقوى",
    description:
      "برامج موجهة لتحسين اللياقة، القوة، التحمل، والحركة. مناسبة للرياضيين والهواة الجادين الباحثين عن مستوى أعلى.",
    bullets: ["اختبارات أداء", "تطوير قوة وتحمل", "تحسين الحركة", "تدرج محسوب للأحمال"],
    price: "من 160 ريال / باقة شهرية",
    duration: "3 جلسات أسبوعياً",
    icon: Activity,
  },
  {
    id: "small-group",
    title: "Small Group Coaching",
    subtitle: "طاقة جماعية بدون فقدان الجودة",
    description:
      "مجموعات صغيرة بإيقاع قوي ومراقبة فعلية، تجمع بين الحماس الجماعي والانضباط الفردي ضمن بيئة بوتيك خاصة.",
    bullets: ["مجموعات محدودة", "برامج تناسب المستوى", "جو تحفيزي منظم", "متابعة أداء داخل الجلسة"],
    price: "من 95 ريال / باقة شهرية",
    duration: "حتى 6 أشخاص في المجموعة",
    icon: Users,
  },
];

export const whyNox: WhyItem[] = [
  {
    title: "انضباط قبل الدافع",
    description: "نعتمد على أنظمة واضحة وعادات قابلة للقياس، لا على الحماس المؤقت.",
    icon: ShieldCheck,
  },
  {
    title: "تجربة بوتيك خاصة",
    description: "عدد محدود، اهتمام فعلي، وبيئة هادئة لكنها شرسة في النتائج.",
    icon: Sparkles,
  },
  {
    title: "برامج مبنية على الهدف",
    description: "كل برنامج يبدأ من واقعك الحالي وينتهي بخطة تنفيذ يومية قابلة للاستمرار.",
    icon: Target,
  },
  {
    title: "متابعة حقيقية",
    description: "نقيس الأداء، الالتزام، والمحيط اليومي حتى لا تتوقف النتائج عند باب النادي.",
    icon: BadgeCheck,
  },
];

export const coaches: CoachItem[] = [
  {
    name: "الكابتن سيف",
    role: "Head Performance Coach",
    bio: "يقود برامج التحول البدني للرجال والنساء مع تركيز قوي على القوة، إعادة التكوين الجسدي، والانضباط التنفيذي.",
    specialties: ["Body Recomposition", "Strength", "Accountability"],
    quote: "النتيجة تبدأ حين يتوقف التفاوض مع النفس.",
  },
  {
    name: "الكابتنة مريم",
    role: "Women’s Coaching Specialist",
    bio: "تتخصص في اللياقة النسائية، التمرين الآمن، رفع الثقة، وتصميم رحلات تدريب مستدامة للنساء المشغولات.",
    specialties: ["Women Fitness", "Lifestyle Habits", "Confidence"],
    quote: "القوة ليست شكلًا فقط، بل طريقة عيش.",
  },
  {
    name: "الكابتن عمر",
    role: "EMS & Conditioning Coach",
    bio: "يركز على الجلسات عالية الكفاءة، تحسين الحركة، والتدريب الذكي للعملاء أصحاب الوقت المحدود.",
    specialties: ["EMS", "Conditioning", "Mobility"],
    quote: "إذا كان الوقت محدوداً، فلا بد أن تكون الجودة أعلى.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "أحمد",
    result: "خسر 11 كجم خلال 14 أسبوعاً",
    quote: "أول مكان تعامل مع التزامي بجدية. كل شيء كان واضحاً: تدريب، متابعة، ومحاسبة.",
  },
  {
    name: "ريهام",
    result: "رفعت قوتها وثقتها بعد 3 أشهر",
    quote: "الخصوصية عالية، الجو راقٍ، والمدربون يعرفون متى يدفعونك ومتى يعدلون الخطة.",
  },
  {
    name: "فيصل",
    result: "عاد للياقة بعد سنوات من الانقطاع",
    quote: "NOX ليس نادياً عادياً. هو نظام يجعلك تتوقف عن التسويف.",
  },
];

export const aboutPillars = [
  {
    title: "تدريب بلا أعذار",
    text: "اسم NOX ليس شعاراً فقط. هو المعيار الذي نحاسب به أنفسنا وعملاءنا يومياً.",
  },
  {
    title: "نتائج قابلة للقياس",
    text: "نحوّل الهدف العام إلى مؤشرات أداء أسبوعية واضحة: حضور، التزام، قوة، تكوين جسدي.",
  },
  {
    title: "بيئة نخبوية",
    text: "نحافظ على تجربة بوتيك حقيقية: خصوصية، هدوء، جودة، وانتباه كامل للتفاصيل.",
  },
];

export const contactHighlights = [
  {
    title: "رد سريع",
    description: "عادة خلال ساعات العمل نفسها.",
    icon: MessageSquareQuote,
  },
  {
    title: "موقع يسهل الوصول إليه",
    description: "في قلب مسقط بالقرب من الأحياء الحيوية.",
    icon: Clock3,
  },
  {
    title: "تجربة صحية مسؤولة",
    description: "تدرج آمن، تقييم أولي، ومتابعة واعية للحالة.",
    icon: HeartPulse,
  },
];
