"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const FRESHA_URL = "https://www.fresha.com";

export type Locale = "en" | "ar";

export const translations = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      services: "Services",
      personalTraining: "Personal Training",
      ems: "EMS",
      groupClasses: "Group Classes",
      coaches: "Coaches",
      calculators: "Calculators",
      schedule: "Schedule",
      blog: "Blog",
      contact: "Contact",
      bookNow: "Book Now",
    },
    hero: {
      eyebrow: "Elite Training. Zero Excuses.",
      title: "NOEXCUSE",
      description: "Elite personal training for those who demand more.",
    },
    cta: {
      bookConsultation: "Book Free Consultation",
      exploreServices: "Explore Services",
      bookViaFresha: "Book via Fresha",
    },
    about: {
      label: "About NOX",
      title: "Built on Discipline.",
      body1:
        "NOX was built for people who are done with half-commitment. We blend elite-level coaching, science-based programming, and a culture of accountability to produce serious physical outcomes.",
      body2:
        "Our philosophy is direct: train hard, train smart, stay consistent. Every client journey starts with assessment and ends with measurable transformation.",
      valuesLabel: "Core Values",
      valuesTitle: "What Drives NOX",
      valuesDesc:
        "The standards that define how we coach and how we expect clients to show up.",
      studioLabel: "Studio",
      studioTitle: "Designed for Performance",
      studioDesc:
        "A boutique setup engineered for focus, quality, and high-intensity execution.",
      values: [
        {
          title: "Discipline",
          description: "No shortcuts. No distractions. Consistent execution.",
        },
        {
          title: "Precision",
          description: "Every session is programmed with intent and tracked with data.",
        },
        {
          title: "Accountability",
          description: "We coach behavior, not just workouts.",
        },
        {
          title: "Results",
          description: "Everything we do must create measurable progress.",
        },
      ],
      features: [
        "Private coaching stations",
        "Dedicated EMS suite",
        "Small-group performance zone",
        "On-site body composition tracking",
        "Recovery and mobility area",
        "Client progress dashboard",
      ],
    },
    services: {
      label: "Services",
      title: "Training Paths Built for Results",
      description:
        "Choose the service model that fits your goals. Every track is coached with precision and discipline.",
      services: [
        {
          title: "Personal Training",
          description:
            "One-on-one high-performance coaching tailored to your current level, schedule, and physique targets.",
          benefits: [
            "Individual assessment and movement screening",
            "Progressive strength and conditioning blocks",
            "Weekly accountability check-ins",
            "Nutrition alignment for faster results",
          ],
          price: "From 180 OMR / month",
        },
        {
          title: "EMS Training",
          description:
            "Electro Muscle Stimulation sessions that intensify recruitment patterns and training density in less time.",
          benefits: [
            "Time-efficient full-body sessions",
            "Joint-friendly intensity and controlled loading",
            "Enhanced activation for stubborn muscle groups",
            "Integrated with your primary training plan",
          ],
          price: "From 95 OMR / 8 sessions",
        },
        {
          title: "Group Classes",
          description:
            "Small-group coaching for clients who thrive in a driven environment without sacrificing technical attention.",
          benefits: [
            "Limited class size for coaching quality",
            "Structured progression by training cycle",
            "Performance and conditioning benchmarks",
            "Community-driven accountability",
          ],
          price: "From 70 OMR / month",
        },
      ],
      bookNow: "Book Now",
      bookAriaLabel: "Book",
    },
    coaches: {
      label: "Coaches",
      title: "Experts Behind Every Result",
      description:
        "Certified coaches with practical systems and high accountability standards.",
      specialties: "Specialties",
      filterLabel: "Coach specialty filters",
      all: "All",
      specialtyOptions: {
        Strength: "Strength",
        "Fat Loss": "Fat Loss",
        EMS: "EMS",
        Rehab: "Rehab",
        Conditioning: "Conditioning",
      },
      coaches: [
        {
          name: "Coach Adam",
          specialties: ["Strength", "Fat Loss"],
          bio: "Leads body recomposition and advanced strength development for professionals.",
          credentials: "NASM CPT, CSCS",
        },
        {
          name: "Coach Layla",
          specialties: ["EMS", "Rehab"],
          bio: "Integrates correctional training with EMS protocols for performance and pain-free movement.",
          credentials: "ACE CPT, EMS Specialist",
        },
        {
          name: "Coach Kareem",
          specialties: ["Conditioning", "Strength"],
          bio: "Builds athletic systems focused on power, speed, and work capacity.",
          credentials: "EXOS Performance Specialist",
        },
        {
          name: "Coach Noor",
          specialties: ["Fat Loss", "Conditioning"],
          bio: "Designs high-compliance transformation systems for sustainable fat loss.",
          credentials: "Precision Nutrition L1",
        },
      ],
      filterAriaLabel: "Filter coaches by",
    },
    contact: {
      label: "Contact",
      title: "Start Your NOX Journey",
      description: "Tell us your goal and we will map your first phase.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      phone: "Phone",
      phonePlaceholder: "+968 ...",
      serviceInterest: "Service Interest",
      message: "Message",
      messagePlaceholder: "Tell us your goal and current challenge",
      send: "Send Inquiry",
      studioInfo: "Studio Info",
      address: "Address",
      addressValue: "Muscat, Oman",
      hours: "Hours",
      hoursValue: "Sat - Thu: 6:00 AM - 11:00 PM",
      whatsapp: "Chat on WhatsApp",
      map: "Map",
      mapPlaceholder: "Interactive map placeholder",
      contactFormAria: "Contact form",
      submitAria: "Submit contact form",
      whatsappAria: "Open WhatsApp chat",
      mapAria: "Map placeholder",
      serviceOptions: [
        { value: "personal", label: "Personal Training" },
        { value: "ems", label: "EMS Training" },
        { value: "group", label: "Group Classes" },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Answers Before You Commit",
      description:
        "Clear expectations on training, pricing, results, and how NOX operates in Muscat.",
      categories: {
        gettingStarted: "Getting Started",
        services: "Services",
        pricing: "Pricing",
        results: "Results",
      },
      questions: [
        {
          category: "gettingStarted",
          question: "Do I need training experience before joining NOX?",
          answer:
            "No. Most new clients start with an assessment in Muscat and we build their plan from their current level, mobility, and schedule.",
        },
        {
          category: "gettingStarted",
          question: "How many sessions per week should I start with?",
          answer:
            "Most clients begin with 3 sessions per week. If your goal is aggressive fat loss or athletic conditioning, we may recommend 4 to 5 sessions with recovery built in.",
        },
        {
          category: "gettingStarted",
          question: "What should I bring to my first session?",
          answer:
            "Bring training shoes, a water bottle, a small towel, and comfortable workout clothes. For EMS, we will explain the fitted base layer before your first session.",
        },
        {
          category: "gettingStarted",
          question: "Is there a minimum age to train at NOX?",
          answer:
            "General coaching starts from age 16 with parent approval when required. Younger athletes can be accepted for private performance coaching after consultation.",
        },
        {
          category: "services",
          question: "Is nutrition guidance included in the program?",
          answer:
            "Yes. We provide practical nutrition coaching aligned with your training phase, daily routine, and body-composition goals.",
        },
        {
          category: "services",
          question: "What exactly is EMS training?",
          answer:
            "EMS uses electrical muscle stimulation to increase muscle recruitment during guided movements. Sessions are coach-led and used as part of a wider training strategy, not as a shortcut.",
        },
        {
          category: "services",
          question: "Do you offer group classes or only private sessions?",
          answer:
            "We offer both. Group classes are capped for coaching quality, while private training is fully customized for your exact goals and constraints.",
        },
        {
          category: "services",
          question: "Can you accommodate injuries or post-rehab training?",
          answer:
            "Yes. We regularly work with clients managing knee, back, and shoulder issues. We modify movement selection and loading after reviewing your history and any medical guidance.",
        },
        {
          category: "services",
          question: "Is online coaching available if I travel often?",
          answer:
            "Yes. We can combine in-studio coaching in Muscat with online programming, habit check-ins, and progress reviews when you are away.",
        },
        {
          category: "pricing",
          question: "How much does personal training cost?",
          answer:
            "Private coaching plans typically start from 180 OMR per month depending on session frequency, coaching format, and whether EMS is included.",
        },
        {
          category: "pricing",
          question: "Are there package options for EMS sessions?",
          answer:
            "Yes. EMS packages are usually booked in blocks, with common options such as 8-session and 12-session plans depending on your training target.",
        },
        {
          category: "pricing",
          question: "What is your cancellation policy?",
          answer:
            "We ask for at least 12 hours notice for rescheduling. Late cancellations may count as used sessions unless there is a genuine emergency.",
        },
        {
          category: "results",
          question: "How soon will I see results?",
          answer:
            "Most committed clients notice changes in energy, strength, and routine within 2 to 4 weeks. Visible body-composition changes usually become clear across 8 to 12 weeks.",
        },
        {
          category: "results",
          question: "Can NOX help with fat loss and muscle gain at the same time?",
          answer:
            "Yes, especially for beginners, returners, and clients with inconsistent training history. The program needs compliance with sessions, sleep, and nutrition for this to work well.",
        },
      ],
    },
    calculators: {
      label: "Calculators",
      title: "Practical Numbers for Better Decisions",
      description:
        "Estimate training, hydration, calories, and macros before you start your NOX plan.",
      bmi: {
        title: "BMI Calculator",
        description: "Weight in kilograms and height in centimeters.",
        weight: "Weight (kg)",
        height: "Height (cm)",
        calculate: "Calculate",
        reset: "Reset",
        result: "BMI",
        categories: {
          underweight: "Underweight",
          normal: "Normal",
          overweight: "Overweight",
          obese: "Obese",
        },
        placeholder: "Enter your numbers to see your BMI.",
        error: "Enter a valid weight and height.",
      },
      calories: {
        title: "Daily Calorie Calculator",
        description: "Mifflin-St Jeor formula for estimated TDEE.",
        weight: "Weight (kg)",
        height: "Height (cm)",
        age: "Age",
        gender: "Gender",
        activity: "Activity Level",
        genderOptions: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ],
        activityOptions: [
          { value: "sedentary", label: "Sedentary" },
          { value: "light", label: "Lightly Active" },
          { value: "moderate", label: "Moderately Active" },
          { value: "active", label: "Active" },
          { value: "veryActive", label: "Very Active" },
        ],
        calculate: "Calculate",
        reset: "Reset",
        resultSuffix: "kcal / day estimated maintenance",
        placeholder: "Add your profile to estimate daily calories.",
        error: "Enter valid weight, height, and age.",
      },
      water: {
        title: "Water Intake Calculator",
        description: "Simple hydration estimate based on body weight.",
        weight: "Weight (kg)",
        calculate: "Calculate",
        reset: "Reset",
        resultSuffix: "liters / day",
        placeholder: "Hydration target appears here.",
        error: "Enter a valid body weight.",
      },
      macros: {
        title: "Macro Calculator",
        description: "Uses your TDEE and current goal to estimate daily macros.",
        tdee: "TDEE (kcal)",
        goal: "Goal",
        goalOptions: [
          { value: "fat loss", label: "Fat Loss" },
          { value: "maintenance", label: "Maintenance" },
          { value: "muscle gain", label: "Muscle Gain" },
        ],
        calculate: "Calculate",
        reset: "Reset",
        calories: "Calories",
        protein: "Protein",
        carbs: "Carbs",
        fats: "Fats",
        placeholder: "Daily macro targets appear here.",
        error: "Enter a valid TDEE.",
      },
      frequency: {
        title: "Training Frequency Calculator",
        description: "Recommended weekly sessions based on goal and experience.",
        goal: "Goal",
        level: "Fitness Level",
        goalOptions: [
          { value: "fat loss", label: "Fat Loss" },
          { value: "muscle gain", label: "Muscle Gain" },
          { value: "general fitness", label: "General Fitness" },
          { value: "athletic performance", label: "Athletic Performance" },
        ],
        levelOptions: [
          { value: "beginner", label: "Beginner" },
          { value: "intermediate", label: "Intermediate" },
          { value: "advanced", label: "Advanced" },
        ],
        recommendations: {
          "fat loss": {
            beginner: "3 sessions/week",
            intermediate: "4 sessions/week",
            advanced: "5 sessions/week",
          },
          "muscle gain": {
            beginner: "3 to 4 sessions/week",
            intermediate: "4 to 5 sessions/week",
            advanced: "5 to 6 sessions/week",
          },
          "general fitness": {
            beginner: "2 to 3 sessions/week",
            intermediate: "3 to 4 sessions/week",
            advanced: "4 sessions/week",
          },
          "athletic performance": {
            beginner: "3 sessions/week",
            intermediate: "4 to 5 sessions/week",
            advanced: "5 to 6 sessions/week",
          },
        },
        calculate: "Calculate",
        reset: "Reset",
        resultSuffix: "recommended",
        placeholder: "Your suggested weekly training frequency appears here.",
      },
    },
    schedule: {
      label: "Schedule",
      title: "Weekly Class Flow",
      description:
        "Preview the current Muscat class timetable. Friday is reserved for recovery and private appointments only.",
      filterByDay: "Filter by day",
      filterByClass: "Filter by class",
      noClass: "No class",
      all: "All",
      days: {
        Saturday: "Saturday",
        Sunday: "Sunday",
        Monday: "Monday",
        Tuesday: "Tuesday",
        Wednesday: "Wednesday",
        Thursday: "Thursday",
      },
      classTypes: {
        HIIT: "HIIT",
        Strength: "Strength",
        Mobility: "Mobility",
        "EMS Circuit": "EMS Circuit",
        "Boxing Conditioning": "Boxing Conditioning",
      },
      sessions: [
        { day: "Saturday", time: "6:00 AM", classType: "Strength", coach: "Coach Rashid", location: "Al Khuwair Studio" },
        { day: "Saturday", time: "8:00 AM", classType: "HIIT", coach: "Coach Mariam", location: "Qurum Studio" },
        { day: "Saturday", time: "10:00 AM", classType: "Mobility", coach: "Coach Huda", location: "Al Khuwair Studio" },
        { day: "Saturday", time: "5:00 PM", classType: "EMS Circuit", coach: "Coach Yousuf", location: "Al Khuwair Studio" },
        { day: "Saturday", time: "7:00 PM", classType: "Boxing Conditioning", coach: "Coach Sami", location: "Madinat Sultan Qaboos" },
        { day: "Saturday", time: "9:00 PM", classType: "Strength", coach: "Coach Mariam", location: "Qurum Studio" },
        { day: "Sunday", time: "6:00 AM", classType: "HIIT", coach: "Coach Rashid", location: "Al Khuwair Studio" },
        { day: "Sunday", time: "8:00 AM", classType: "Strength", coach: "Coach Sami", location: "Madinat Sultan Qaboos" },
        { day: "Sunday", time: "10:00 AM", classType: "EMS Circuit", coach: "Coach Yousuf", location: "Al Khuwair Studio" },
        { day: "Sunday", time: "5:00 PM", classType: "Mobility", coach: "Coach Huda", location: "Qurum Studio" },
        { day: "Sunday", time: "7:00 PM", classType: "Strength", coach: "Coach Mariam", location: "Al Khuwair Studio" },
        { day: "Sunday", time: "9:00 PM", classType: "HIIT", coach: "Coach Rashid", location: "Qurum Studio" },
        { day: "Monday", time: "6:00 AM", classType: "Strength", coach: "Coach Sami", location: "Madinat Sultan Qaboos" },
        { day: "Monday", time: "8:00 AM", classType: "Mobility", coach: "Coach Huda", location: "Al Khuwair Studio" },
        { day: "Monday", time: "10:00 AM", classType: "EMS Circuit", coach: "Coach Yousuf", location: "Qurum Studio" },
        { day: "Monday", time: "5:00 PM", classType: "Boxing Conditioning", coach: "Coach Rashid", location: "Madinat Sultan Qaboos" },
        { day: "Monday", time: "7:00 PM", classType: "HIIT", coach: "Coach Mariam", location: "Al Khuwair Studio" },
        { day: "Monday", time: "9:00 PM", classType: "Strength", coach: "Coach Sami", location: "Qurum Studio" },
        { day: "Tuesday", time: "6:00 AM", classType: "HIIT", coach: "Coach Rashid", location: "Al Khuwair Studio" },
        { day: "Tuesday", time: "8:00 AM", classType: "Strength", coach: "Coach Mariam", location: "Qurum Studio" },
        { day: "Tuesday", time: "10:00 AM", classType: "Mobility", coach: "Coach Huda", location: "Al Khuwair Studio" },
        { day: "Tuesday", time: "5:00 PM", classType: "EMS Circuit", coach: "Coach Yousuf", location: "Qurum Studio" },
        { day: "Tuesday", time: "7:00 PM", classType: "Strength", coach: "Coach Sami", location: "Madinat Sultan Qaboos" },
        { day: "Tuesday", time: "9:00 PM", classType: "Boxing Conditioning", coach: "Coach Rashid", location: "Al Khuwair Studio" },
        { day: "Wednesday", time: "6:00 AM", classType: "Mobility", coach: "Coach Huda", location: "Al Khuwair Studio" },
        { day: "Wednesday", time: "8:00 AM", classType: "Strength", coach: "Coach Sami", location: "Madinat Sultan Qaboos" },
        { day: "Wednesday", time: "10:00 AM", classType: "EMS Circuit", coach: "Coach Yousuf", location: "Al Khuwair Studio" },
        { day: "Wednesday", time: "5:00 PM", classType: "HIIT", coach: "Coach Mariam", location: "Qurum Studio" },
        { day: "Wednesday", time: "7:00 PM", classType: "Boxing Conditioning", coach: "Coach Rashid", location: "Madinat Sultan Qaboos" },
        { day: "Wednesday", time: "9:00 PM", classType: "Strength", coach: "Coach Sami", location: "Al Khuwair Studio" },
        { day: "Thursday", time: "6:00 AM", classType: "Strength", coach: "Coach Mariam", location: "Qurum Studio" },
        { day: "Thursday", time: "8:00 AM", classType: "HIIT", coach: "Coach Rashid", location: "Al Khuwair Studio" },
        { day: "Thursday", time: "10:00 AM", classType: "Mobility", coach: "Coach Huda", location: "Madinat Sultan Qaboos" },
        { day: "Thursday", time: "5:00 PM", classType: "EMS Circuit", coach: "Coach Yousuf", location: "Al Khuwair Studio" },
        { day: "Thursday", time: "7:00 PM", classType: "Strength", coach: "Coach Sami", location: "Qurum Studio" },
        { day: "Thursday", time: "9:00 PM", classType: "Boxing Conditioning", coach: "Coach Rashid", location: "Al Khuwair Studio" },
      ],
    },
    testimonials: {
      label: "Testimonials",
      title: "Proof in the Process",
      description:
        "Detailed feedback from clients who trained consistently and treated the process seriously.",
      stats: [
        "Average client loses 8kg in 12 weeks",
        "91% of clients train 3+ times weekly by week four",
        "Top retention comes from accountability and structured nutrition",
      ],
      durationLabel: "Duration",
      testimonials: [
        {
          name: "Ahmed Al Hinai",
          result: "-11kg and waist reduction",
          quote:
            "I joined NOX after years of inconsistent training. The difference was the structure. Every week had a purpose, every session was tracked, and my coach kept me honest with food and recovery. In 14 weeks I dropped 11kg, my blood pressure improved, and I finally stopped restarting every month.",
          duration: "14 weeks",
        },
        {
          name: "Maha Al Balushi",
          result: "Visible muscle definition",
          quote:
            "I wanted to get stronger without feeling lost in a crowded gym. The boutique setup in Muscat made a huge difference. The coaching is direct, the sessions move fast, and I now train four times per week with confidence. My shoulders, posture, and overall shape changed noticeably in three months.",
          duration: "12 weeks",
        },
        {
          name: "Faisal Al Lawati",
          result: "Returned from lower-back pain",
          quote:
            "After recurring back pain, I needed coaching that would rebuild me properly. NOX adjusted my plan, improved my movement quality, and progressed me carefully. I am now deadlifting pain-free, moving better at work, and training harder than I have in years.",
          duration: "16 weeks",
        },
        {
          name: "Sara Al Riyami",
          result: "-7kg and better energy",
          quote:
            "I travel often between Muscat and Dubai, so consistency was always my weakness. The mix of in-studio sessions and online accountability kept me on track. I lost 7kg, stopped late-night snacking, and my energy during the workday improved more than I expected.",
          duration: "10 weeks",
        },
        {
          name: "Yousuf Al Farsi",
          result: "Conditioning and boxing endurance",
          quote:
            "The boxing conditioning classes gave me exactly the challenge I wanted. They were intense but still coached with precision. My stamina improved, I dropped body fat, and I actually look forward to training after work now.",
          duration: "9 weeks",
        },
        {
          name: "Noor Al Habsi",
          result: "Body recomposition",
          quote:
            "I had tried quick-fix plans before, but NOX was the first place that combined food guidance, training progression, and real accountability. I did not just lose weight. I built shape, strength, and a routine I can keep.",
          duration: "15 weeks",
        },
        {
          name: "Khalid Al Kindi",
          result: "EMS and strength progression",
          quote:
            "My work hours are brutal, so EMS sessions helped me keep momentum without feeling like I was missing progress. Combined with two strength sessions each week, I leaned out and got stronger despite a demanding schedule.",
          duration: "8 weeks",
        },
        {
          name: "Huda Al Busaidi",
          result: "Confidence and routine",
          quote:
            "The best result was not only physical. I became someone who trains consistently. The coaches are disciplined without being generic. They know when to push and when to adjust, and that balance kept me committed.",
          duration: "12 weeks",
        },
      ],
    },
    blog: {
      label: "Blog",
      title: "Coaching Notes From NOX",
      description:
        "Short reads on training, recovery, nutrition, and the discipline required for change.",
      readMore: "Read More",
      comingSoon: "Coming Soon — Full blog launching soon.",
      categories: {
        Nutrition: "Nutrition",
        Training: "Training",
        Recovery: "Recovery",
        Mindset: "Mindset",
      },
      readTime: "min read",
      posts: [
        {
          title: "Getting Started at NOX",
          excerpt:
            "How your consultation, assessment, and first training phase work inside the NOX system.",
          category: "Training",
          minutes: "6",
          date: "April 4, 2026",
          href: "/blog/getting-started",
        },
        {
          title: "Nutrition Habits That Actually Survive Busy Weeks",
          excerpt:
            "Four simple nutrition systems that keep fat loss moving when work gets heavy.",
          category: "Nutrition",
          minutes: "5",
          date: "April 2, 2026",
          href: "/blog/getting-started",
        },
        {
          title: "Why Recovery Is Part of the Program",
          excerpt:
            "Sleep, mobility, and recovery discipline matter more than most clients expect.",
          category: "Recovery",
          minutes: "4",
          date: "March 29, 2026",
          href: "/blog/getting-started",
        },
        {
          title: "The Mindset Shift That Stops Restarting",
          excerpt:
            "The problem is rarely motivation. It is usually an environment with no structure.",
          category: "Mindset",
          minutes: "5",
          date: "March 24, 2026",
          href: "/blog/getting-started",
        },
      ],
    },
    startHere: {
      label: "Start Here",
      title: "Your First Four Steps",
      description:
        "Everything at NOX starts with clarity. This is the onboarding flow from first contact to first phase.",
      steps: [
        {
          number: "01",
          title: "Book Consultation",
          description:
            "Tell us your goal, schedule, and current challenge so we can point you to the right service path.",
        },
        {
          number: "02",
          title: "Assessment",
          description:
            "We review movement quality, body-composition markers, training history, and any injury considerations.",
        },
        {
          number: "03",
          title: "Custom Plan",
          description:
            "You receive a program structure built around your goals, recovery capacity, and weekly availability.",
        },
        {
          number: "04",
          title: "Start Training",
          description:
            "We begin execution, track compliance, and adjust quickly so progress stays measurable from week one.",
        },
      ],
      quickAnswersTitle: "Quick answers before you contact us",
      quickAnswers: [
        {
          question: "How long is the first consultation?",
          answer: "Usually 20 to 30 minutes depending on your history and goals.",
        },
        {
          question: "Can I start if I have been inactive for years?",
          answer: "Yes. Many clients start from a low baseline and progress safely with coaching.",
        },
        {
          question: "Do I need to decide on EMS before I come in?",
          answer: "No. We can recommend whether EMS makes sense after the assessment.",
        },
      ],
      ctaLabel: "Next Step",
      ctaTitle: "Speak to the Team",
      ctaDescription:
        "If you want a direct answer on the best starting point, use the contact page and tell us what result you want.",
      bookNow: "Contact NOX",
    },
    guides: {
      label: "Guides",
      title: "Free Resources for Clients",
      description:
        "Useful reading for people who want structure before they commit to a full coaching plan.",
      download: "Download Free Guide",
      emailNote: "Enter your email to unlock free guides",
      guides: [
        {
          title: "The NOX Beginner's Training Blueprint",
          description:
            "A practical starting structure for new clients building consistency and technique.",
          category: "Training",
        },
        {
          title: "Nutrition Fundamentals for Fat Loss",
          description:
            "How to organize meals, protein, and routine without overcomplicating the process.",
          category: "Nutrition",
        },
        {
          title: "Recovery Protocol Guide",
          description:
            "Simple sleep, mobility, hydration, and deload practices that support harder training.",
          category: "Recovery",
        },
        {
          title: "EMS Training: What to Expect",
          description:
            "A clear breakdown of how EMS works at NOX and who tends to benefit most.",
          category: "EMS",
        },
        {
          title: "Home Workout Supplement Plan",
          description:
            "Short sessions and movement blocks for busy weeks when you cannot make every studio session.",
          category: "Lifestyle",
        },
        {
          title: "Goal Setting for Body Transformation",
          description:
            "Set measurable targets, weekly standards, and realistic timelines that keep momentum high.",
          category: "Mindset",
        },
      ],
    },
    home: {
      stats: [
        { label: "Clients" },
        { label: "Coaches" },
        { label: "Service Lines" },
        { label: "Accountability" },
      ],
      philosophyLabel: "Philosophy",
      philosophyTitle: "We Don't Do Easy.",
      philosophyDesc: "At NOX, intensity is structured. Discipline is coached. Results are measured. You are not here to participate. You are here to transform.",
      philosophyBody: "We build performance-driven plans that combine training precision, recovery strategy, and uncompromising accountability. Whether your target is fat loss, athletic power, or total body confidence, our mission is simple: remove excuses and install a repeatable system.",
      servicesLabel: "Services",
      servicesTitle: "What We Offer",
      servicesDesc: "High-accountability training systems built around your level and targets.",
      learnMore: "Learn More",
      services: [
        { title: "Personal Training", description: "One-to-one sessions built around your body composition, movement quality, and specific performance targets." },
        { title: "EMS Training", description: "High-efficiency neuromuscular sessions designed for clients who demand results in less time." },
        { title: "Group Classes", description: "Small elite groups where precision coaching, intensity, and accountability remain non-negotiable." },
      ],
      whyLabel: "Why NOX",
      whyTitle: "Built for Serious Results",
      whyDesc: "A disciplined coaching system that combines elite standards with human accountability.",
      reasons: [
        { title: "Science-Backed", description: "Every program is built from evidence-based protocols tailored to your baseline and goals." },
        { title: "Accountability", description: "You get structure, progress tracking, and coach check-ins that remove guesswork." },
        { title: "Expert Coaches", description: "Our team combines high-level certifications with practical coaching that produces outcomes." },
        { title: "Results Guaranteed", description: "If you commit to the process, we commit to delivering measurable transformation." },
      ],
      teamLabel: "Team",
      teamTitle: "Meet Your Coaches",
      teamDesc: "Experienced coaches, direct communication, and plans that fit real schedules.",
      viewAllCoaches: "View All Coaches",
      coaches: [
        { name: "Coach Adam", specialties: ["Strength", "Fat Loss"], bio: "Specialist in body recomposition and strength progression for busy professionals." },
        { name: "Coach Layla", specialties: ["EMS", "Rehab"], bio: "Focused on movement correction, pain-free training, and accelerated recovery outcomes." },
        { name: "Coach Kareem", specialties: ["Athletic", "Conditioning"], bio: "Builds explosive performance systems for athletes and high-performing executives." },
      ],
      testimonialsLabel: "Testimonials",
      testimonialsTitle: "Client Results",
      testimonialsDesc: "What happens when consistency meets a high-standard coaching environment.",
      testimonials: [
        { quote: "NOX changed my discipline. I dropped 14kg and gained strength in under six months.", name: "Ahmed S.", result: "-14kg in 6 months" },
        { quote: "The coaching is direct and professional. Every session has purpose and precision.", name: "Sara M.", result: "Visible body recomposition" },
        { quote: "I stopped starting over. The accountability system is what finally made me consistent.", name: "Faisal R.", result: "4 sessions/week for 8 months" },
      ],
      ctaBannerTitle: "No More Excuses. Start Today.",
      addressLabel: "Address",
      addressValue: "Muscat, Oman",
      phoneLabel: "Phone",
      hoursLabel: "Hours",
      hoursValue: "Sat - Thu: 6:00 AM - 11:00 PM",
      whatsapp: "WhatsApp",
      faqLabel: "FAQ",
      faqTitle: "Answers Before You Start",
      faqDesc: "Clear expectations from day one.",
      faqItems: [
        { question: "Do I need prior training experience?", answer: "No. We assess your current level and start from where you are with a structured progression plan." },
        { question: "How often should I train?", answer: "Most clients start with 3-4 sessions weekly depending on goals, recovery, and schedule." },
        { question: "Is nutrition included?", answer: "Yes. You receive practical nutrition guidance aligned with your training program and lifestyle." },
        { question: "Can I combine EMS and strength training?", answer: "Yes. Hybrid protocols are one of our most effective formats when programmed correctly." },
      ],
    },
  },
  ar: {
    navbar: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      personalTraining: "تدريب شخصي",
      ems: "تدريب EMS",
      groupClasses: "حصص جماعية",
      coaches: "المدربون",
      calculators: "الحاسبات",
      schedule: "الجدول",
      blog: "المدونة",
      contact: "تواصل معنا",
      bookNow: "احجز الآن",
    },
    hero: {
      eyebrow: "تدريب نخبوي. بلا أعذار.",
      title: "بلا أعذار",
      description: "تدريب شخصي نخبوي لمن يريد نتائج حقيقية.",
    },
    cta: {
      bookConsultation: "احجز استشارة مجانية",
      exploreServices: "استكشف الخدمات",
      bookViaFresha: "احجز عبر Fresha",
    },
    about: {
      label: "من نحن",
      title: "مبنيون على الانضباط.",
      body1:
        "نوكس بُنيت لمن انتهى من نصف الالتزام. نجمع بين التدريب على مستوى النخبة، والبرامج المبنية على العلم، وثقافة المساءلة لتحقيق نتائج جسدية حقيقية.",
      body2:
        "فلسفتنا مباشرة: تدرب بجد، تدرب بذكاء، كن متسقاً. كل رحلة عميل تبدأ بالتقييم وتنتهي بالتحول القابل للقياس.",
      valuesLabel: "القيم الأساسية",
      valuesTitle: "ما يدفع نوكس",
      valuesDesc:
        "المعايير التي تحدد كيف نتدرب وكيف نتوقع من العملاء أن يحضروا.",
      studioLabel: "الاستوديو",
      studioTitle: "مصمم للأداء",
      studioDesc:
        "إعداد متميز مصمم للتركيز والجودة وتنفيذ التدريب عالي الكثافة.",
      values: [
        {
          title: "الانضباط",
          description: "لا اختصارات. لا تشتيت. تنفيذ متسق.",
        },
        {
          title: "الدقة",
          description: "كل حصة مبرمجة بقصد ومتتبعة بالبيانات.",
        },
        {
          title: "المساءلة",
          description: "نتدرب على السلوك، ليس فقط التمارين.",
        },
        {
          title: "النتائج",
          description: "كل ما نفعله يجب أن يخلق تقدماً قابلاً للقياس.",
        },
      ],
      features: [
        "محطات تدريب خاصة",
        "جناح EMS مخصص",
        "منطقة أداء للمجموعات الصغيرة",
        "تتبع تكوين الجسم في الموقع",
        "منطقة التعافي والحركة",
        "لوحة تقدم العميل",
      ],
    },
    services: {
      label: "الخدمات",
      title: "مسارات تدريب مبنية للنتائج",
      description:
        "اختر نموذج الخدمة الذي يناسب أهدافك. كل مسار يُدرَّب بدقة وانضباط.",
      services: [
        {
          title: "التدريب الشخصي",
          description:
            "تدريب فردي عالي الأداء مصمم خصيصاً لمستواك الحالي وجدولك وأهدافك الجسدية.",
          benefits: [
            "تقييم فردي وفحص حركي",
            "كتل القوة والتكييف التقدمية",
            "متابعة أسبوعية للمساءلة",
            "توافق غذائي لنتائج أسرع",
          ],
          price: "ابتداءً من 180 ريال عماني / شهرياً",
        },
        {
          title: "تدريب EMS",
          description:
            "جلسات التحفيز الكهربائي للعضلات التي تعزز أنماط التجنيد العضلي وكثافة التدريب في وقت أقل.",
          benefits: [
            "جلسات لكامل الجسم فعالة في الوقت",
            "كثافة صديقة للمفاصل وتحميل متحكم به",
            "تفعيل معزز للمجموعات العضلية العنيدة",
            "مدمجة مع خطتك التدريبية الأساسية",
          ],
          price: "ابتداءً من 95 ريال عماني / 8 جلسات",
        },
        {
          title: "الحصص الجماعية",
          description:
            "تدريب للمجموعات الصغيرة للعملاء الذين يزدهرون في بيئة محفزة دون التضحية بالاهتمام الفني.",
          benefits: [
            "حجم صف محدود لجودة التدريب",
            "تقدم منظم حسب دورة التدريب",
            "معايير الأداء والتكييف",
            "مساءلة مدفوعة بالمجتمع",
          ],
          price: "ابتداءً من 70 ريال عماني / شهرياً",
        },
      ],
      bookNow: "احجز الآن",
      bookAriaLabel: "احجز",
    },
    coaches: {
      label: "المدربون",
      title: "الخبراء وراء كل نتيجة",
      description:
        "مدربون معتمدون بأنظمة عملية ومعايير مساءلة عالية.",
      specialties: "التخصصات",
      filterLabel: "فلاتر تخصص المدربين",
      all: "الكل",
      specialtyOptions: {
        Strength: "القوة",
        "Fat Loss": "فقدان الدهون",
        EMS: "EMS",
        Rehab: "إعادة التأهيل",
        Conditioning: "التكييف",
      },
      coaches: [
        {
          name: "المدرب آدم",
          specialties: ["Strength", "Fat Loss"],
          bio: "يقود برامج إعادة تكوين الجسم وتطوير القوة المتقدم للمحترفين.",
          credentials: "NASM CPT, CSCS",
        },
        {
          name: "المدربة ليلى",
          specialties: ["EMS", "Rehab"],
          bio: "تدمج التدريب التصحيحي مع بروتوكولات EMS للأداء والحركة الخالية من الألم.",
          credentials: "ACE CPT, EMS Specialist",
        },
        {
          name: "المدرب كريم",
          specialties: ["Conditioning", "Strength"],
          bio: "يبني أنظمة رياضية تركز على القوة والسرعة والقدرة على العمل.",
          credentials: "EXOS Performance Specialist",
        },
        {
          name: "المدربة نور",
          specialties: ["Fat Loss", "Conditioning"],
          bio: "تصمم أنظمة تحول عالية الالتزام لفقدان الدهون بشكل مستدام.",
          credentials: "Precision Nutrition L1",
        },
      ],
      filterAriaLabel: "تصفية المدربين حسب",
    },
    contact: {
      label: "تواصل معنا",
      title: "ابدأ رحلتك مع نوكس",
      description: "أخبرنا بهدفك وسنضع خارطة مرحلتك الأولى.",
      name: "الاسم",
      namePlaceholder: "اسمك",
      email: "البريد الإلكتروني",
      emailPlaceholder: "you@example.com",
      phone: "الهاتف",
      phonePlaceholder: "+968 ...",
      serviceInterest: "الخدمة المطلوبة",
      message: "الرسالة",
      messagePlaceholder: "أخبرنا بهدفك والتحدي الحالي",
      send: "إرسال الاستفسار",
      studioInfo: "معلومات الاستوديو",
      address: "العنوان",
      addressValue: "مسقط، عُمان",
      hours: "ساعات العمل",
      hoursValue: "السبت - الخميس: 6:00 صباحاً - 11:00 مساءً",
      whatsapp: "الدردشة على واتساب",
      map: "الخريطة",
      mapPlaceholder: "الخريطة التفاعلية",
      contactFormAria: "نموذج التواصل",
      submitAria: "إرسال نموذج التواصل",
      whatsappAria: "فتح محادثة واتساب",
      mapAria: "عنصر نائب للخريطة",
      serviceOptions: [
        { value: "personal", label: "تدريب شخصي" },
        { value: "ems", label: "تدريب EMS" },
        { value: "group", label: "حصص جماعية" },
      ],
    },
    faq: {
      label: "الأسئلة الشائعة",
      title: "إجابات قبل أن تلتزم",
      description:
        "توقعات واضحة حول التدريب، والأسعار، والنتائج، وكيفية عمل نوكس في مسقط.",
      categories: {
        gettingStarted: "البداية",
        services: "الخدمات",
        pricing: "الأسعار",
        results: "النتائج",
      },
      questions: [
        {
          category: "gettingStarted",
          question: "هل أحتاج إلى خبرة تدريبية قبل الانضمام إلى نوكس؟",
          answer:
            "لا. يبدأ معظم العملاء الجدد بتقييم في مسقط، ثم نبني خطتهم انطلاقاً من مستواهم الحالي وحركتهم وجدولهم.",
        },
        {
          category: "gettingStarted",
          question: "كم جلسة أسبوعياً يجب أن أبدأ بها؟",
          answer:
            "يبدأ معظم العملاء بـ 3 جلسات أسبوعياً. إذا كان هدفك فقدان الدهون بشكل مكثف أو التكييف الرياضي، فقد نوصي بـ 4 إلى 5 جلسات مع تضمين التعافي.",
        },
        {
          category: "gettingStarted",
          question: "ماذا يجب أن أحضر معي في أول جلسة؟",
          answer:
            "أحضر حذاء تدريب، وزجاجة ماء، ومنشفة صغيرة، وملابس مريحة للتمرين. بالنسبة لـ EMS، سنشرح لك الطبقة الأساسية المناسبة قبل جلستك الأولى.",
        },
        {
          category: "gettingStarted",
          question: "هل هناك حد أدنى للعمر للتدرب في نوكس؟",
          answer:
            "يبدأ التدريب العام من عمر 16 سنة مع موافقة ولي الأمر عند الحاجة. ويمكن قبول الرياضيين الأصغر سناً في تدريب الأداء الخاص بعد الاستشارة.",
        },
        {
          category: "services",
          question: "هل يشمل البرنامج إرشادات غذائية؟",
          answer:
            "نعم. نقدّم تدريباً غذائياً عملياً متوافقاً مع مرحلتك التدريبية وروتينك اليومي وأهداف تكوين الجسم.",
        },
        {
          category: "services",
          question: "ما هو تدريب EMS بالضبط؟",
          answer:
            "يستخدم EMS التحفيز الكهربائي للعضلات لزيادة تجنيد العضلات أثناء الحركات الموجهة. الجلسات يقودها مدرب وتُستخدم ضمن استراتيجية تدريب أوسع، وليست اختصاراً.",
        },
        {
          category: "services",
          question: "هل تقدمون حصصاً جماعية أم جلسات خاصة فقط؟",
          answer:
            "نقدّم الاثنين. الحصص الجماعية محدودة العدد للحفاظ على جودة التدريب، بينما التدريب الخاص مخصص بالكامل لأهدافك وقيودك الدقيقة.",
        },
        {
          category: "services",
          question: "هل يمكنكم التعامل مع الإصابات أو التدريب بعد إعادة التأهيل؟",
          answer:
            "نعم. نعمل بانتظام مع عملاء يديرون مشاكل الركبة والظهر والكتف. نعدّل اختيار الحركات والأحمال بعد مراجعة تاريخك وأي توجيهات طبية.",
        },
        {
          category: "services",
          question: "هل يتوفر التدريب أونلاين إذا كنت أسافر كثيراً؟",
          answer:
            "نعم. يمكننا دمج التدريب داخل الاستوديو في مسقط مع البرمجة أونلاين، ومتابعة العادات، ومراجعات التقدم عندما تكون بعيداً.",
        },
        {
          category: "pricing",
          question: "كم تكلفة التدريب الشخصي؟",
          answer:
            "تبدأ خطط التدريب الخاص عادةً من 180 ريالاً عمانياً شهرياً بحسب عدد الجلسات، ونمط التدريب، وما إذا كان EMS مشمولاً.",
        },
        {
          category: "pricing",
          question: "هل توجد باقات لجلسات EMS؟",
          answer:
            "نعم. عادةً ما تُحجز باقات EMS على شكل مجموعات، مع خيارات شائعة مثل 8 جلسات و12 جلسة بحسب هدفك التدريبي.",
        },
        {
          category: "pricing",
          question: "ما هي سياسة الإلغاء لديكم؟",
          answer:
            "نطلب إشعاراً قبل 12 ساعة على الأقل لإعادة الجدولة. قد تُحتسب الإلغاءات المتأخرة كجلسات مستخدمة ما لم تكن هناك حالة طارئة حقيقية.",
        },
        {
          category: "results",
          question: "متى سأبدأ برؤية النتائج؟",
          answer:
            "يلاحظ معظم العملاء الملتزمين تغييرات في الطاقة والقوة والروتين خلال 2 إلى 4 أسابيع. أما التغييرات الواضحة في تكوين الجسم فعادةً تظهر خلال 8 إلى 12 أسبوعاً.",
        },
        {
          category: "results",
          question: "هل يمكن لنوكس أن يساعد في فقدان الدهون وبناء العضلات في الوقت نفسه؟",
          answer:
            "نعم، خاصةً للمبتدئين، والعائدين للتدريب، والعملاء ذوي التاريخ التدريبي غير المنتظم. يحتاج البرنامج إلى التزام بالجلسات والنوم والتغذية ليعمل ذلك بشكل جيد.",
        },
      ],
    },
    calculators: {
      label: "الحاسبات",
      title: "أرقام عملية لقرارات أفضل",
      description:
        "احسب التدريب والترطيب والسعرات والمغذيات الكبرى قبل بدء خطتك في نوكس.",
      bmi: {
        title: "حاسبة مؤشر كتلة الجسم",
        description: "الوزن بالكيلوغرام والطول بالسنتيمتر.",
        weight: "الوزن (كجم)",
        height: "الطول (سم)",
        calculate: "احسب",
        reset: "إعادة تعيين",
        result: "مؤشر كتلة الجسم",
        categories: {
          underweight: "نقص الوزن",
          normal: "طبيعي",
          overweight: "زيادة الوزن",
          obese: "سمنة",
        },
        placeholder: "أدخل أرقامك لرؤية مؤشر كتلة جسمك.",
        error: "أدخل وزناً وطولاً صحيحين.",
      },
      calories: {
        title: "حاسبة السعرات اليومية",
        description: "معادلة ميفلين-سانت جور للسعرات المقدرة.",
        weight: "الوزن (كجم)",
        height: "الطول (سم)",
        age: "العمر",
        gender: "الجنس",
        activity: "مستوى النشاط",
        genderOptions: [
          { value: "male", label: "ذكر" },
          { value: "female", label: "أنثى" },
        ],
        activityOptions: [
          { value: "sedentary", label: "خامل" },
          { value: "light", label: "نشاط خفيف" },
          { value: "moderate", label: "نشاط معتدل" },
          { value: "active", label: "نشيط" },
          { value: "veryActive", label: "نشيط جداً" },
        ],
        calculate: "احسب",
        reset: "إعادة تعيين",
        resultSuffix: "سعرة حرارية / يوم (صيانة مقدرة)",
        placeholder: "أضف ملفك الشخصي لتقدير السعرات اليومية.",
        error: "أدخل وزناً وطولاً وعمراً صحيحين.",
      },
      water: {
        title: "حاسبة استهلاك الماء",
        description: "تقدير الترطيب البسيط بناءً على وزن الجسم.",
        weight: "الوزن (كجم)",
        calculate: "احسب",
        reset: "إعادة تعيين",
        resultSuffix: "لتر / يوم",
        placeholder: "هدف الترطيب يظهر هنا.",
        error: "أدخل وزن جسم صحيح.",
      },
      macros: {
        title: "حاسبة المغذيات الكبرى",
        description:
          "تستخدم معدل حرق السعرات اليومي وهدفك الحالي لتقدير المغذيات اليومية.",
        tdee: "معدل الحرق اليومي (سعرة)",
        goal: "الهدف",
        goalOptions: [
          { value: "fat loss", label: "فقدان الدهون" },
          { value: "maintenance", label: "الصيانة" },
          { value: "muscle gain", label: "بناء العضلات" },
        ],
        calculate: "احسب",
        reset: "إعادة تعيين",
        calories: "السعرات",
        protein: "بروتين",
        carbs: "كربوهيدرات",
        fats: "دهون",
        placeholder: "أهداف المغذيات اليومية تظهر هنا.",
        error: "أدخل معدل حرق يومي صحيح.",
      },
      frequency: {
        title: "حاسبة تكرار التدريب",
        description: "الجلسات الأسبوعية الموصى بها بناءً على الهدف والخبرة.",
        goal: "الهدف",
        level: "مستوى اللياقة",
        goalOptions: [
          { value: "fat loss", label: "فقدان الدهون" },
          { value: "muscle gain", label: "بناء العضلات" },
          { value: "general fitness", label: "اللياقة العامة" },
          { value: "athletic performance", label: "الأداء الرياضي" },
        ],
        levelOptions: [
          { value: "beginner", label: "مبتدئ" },
          { value: "intermediate", label: "متوسط" },
          { value: "advanced", label: "متقدم" },
        ],
        recommendations: {
          "fat loss": {
            beginner: "3 جلسات/الأسبوع",
            intermediate: "4 جلسات/الأسبوع",
            advanced: "5 جلسات/الأسبوع",
          },
          "muscle gain": {
            beginner: "3 إلى 4 جلسات/الأسبوع",
            intermediate: "4 إلى 5 جلسات/الأسبوع",
            advanced: "5 إلى 6 جلسات/الأسبوع",
          },
          "general fitness": {
            beginner: "2 إلى 3 جلسات/الأسبوع",
            intermediate: "3 إلى 4 جلسات/الأسبوع",
            advanced: "4 جلسات/الأسبوع",
          },
          "athletic performance": {
            beginner: "3 جلسات/الأسبوع",
            intermediate: "4 إلى 5 جلسات/الأسبوع",
            advanced: "5 إلى 6 جلسات/الأسبوع",
          },
        },
        calculate: "احسب",
        reset: "إعادة تعيين",
        resultSuffix: "موصى به",
        placeholder: "تكرار التدريب الأسبوعي المقترح يظهر هنا.",
      },
    },
    schedule: {
      label: "الجدول",
      title: "تدفق الحصص الأسبوعية",
      description:
        "اطلع على الجدول الزمني الحالي لحصص مسقط. الجمعة مخصصة للتعافي والمواعيد الخاصة فقط.",
      filterByDay: "تصفية حسب اليوم",
      filterByClass: "تصفية حسب الحصة",
      noClass: "لا توجد حصة",
      all: "الكل",
      days: {
        Saturday: "السبت",
        Sunday: "الأحد",
        Monday: "الاثنين",
        Tuesday: "الثلاثاء",
        Wednesday: "الأربعاء",
        Thursday: "الخميس",
      },
      classTypes: {
        HIIT: "هيت",
        Strength: "القوة",
        Mobility: "الحركة",
        "EMS Circuit": "دائرة EMS",
        "Boxing Conditioning": "تكييف الملاكمة",
      },
      sessions: [
        { day: "Saturday", time: "6:00 AM", classType: "Strength", coach: "المدرب راشد", location: "استوديو الخوير" },
        { day: "Saturday", time: "8:00 AM", classType: "HIIT", coach: "المدربة مريم", location: "استوديو القرم" },
        { day: "Saturday", time: "10:00 AM", classType: "Mobility", coach: "المدربة هدى", location: "استوديو الخوير" },
        { day: "Saturday", time: "5:00 PM", classType: "EMS Circuit", coach: "المدرب يوسف", location: "استوديو الخوير" },
        { day: "Saturday", time: "7:00 PM", classType: "Boxing Conditioning", coach: "المدرب سامي", location: "مدينة السلطان قابوس" },
        { day: "Saturday", time: "9:00 PM", classType: "Strength", coach: "المدربة مريم", location: "استوديو القرم" },
        { day: "Sunday", time: "6:00 AM", classType: "HIIT", coach: "المدرب راشد", location: "استوديو الخوير" },
        { day: "Sunday", time: "8:00 AM", classType: "Strength", coach: "المدرب سامي", location: "مدينة السلطان قابوس" },
        { day: "Sunday", time: "10:00 AM", classType: "EMS Circuit", coach: "المدرب يوسف", location: "استوديو الخوير" },
        { day: "Sunday", time: "5:00 PM", classType: "Mobility", coach: "المدربة هدى", location: "استوديو القرم" },
        { day: "Sunday", time: "7:00 PM", classType: "Strength", coach: "المدربة مريم", location: "استوديو الخوير" },
        { day: "Sunday", time: "9:00 PM", classType: "HIIT", coach: "المدرب راشد", location: "استوديو القرم" },
        { day: "Monday", time: "6:00 AM", classType: "Strength", coach: "المدرب سامي", location: "مدينة السلطان قابوس" },
        { day: "Monday", time: "8:00 AM", classType: "Mobility", coach: "المدربة هدى", location: "استوديو الخوير" },
        { day: "Monday", time: "10:00 AM", classType: "EMS Circuit", coach: "المدرب يوسف", location: "استوديو القرم" },
        { day: "Monday", time: "5:00 PM", classType: "Boxing Conditioning", coach: "المدرب راشد", location: "مدينة السلطان قابوس" },
        { day: "Monday", time: "7:00 PM", classType: "HIIT", coach: "المدربة مريم", location: "استوديو الخوير" },
        { day: "Monday", time: "9:00 PM", classType: "Strength", coach: "المدرب سامي", location: "استوديو القرم" },
        { day: "Tuesday", time: "6:00 AM", classType: "HIIT", coach: "المدرب راشد", location: "استوديو الخوير" },
        { day: "Tuesday", time: "8:00 AM", classType: "Strength", coach: "المدربة مريم", location: "استوديو القرم" },
        { day: "Tuesday", time: "10:00 AM", classType: "Mobility", coach: "المدربة هدى", location: "استوديو الخوير" },
        { day: "Tuesday", time: "5:00 PM", classType: "EMS Circuit", coach: "المدرب يوسف", location: "استوديو القرم" },
        { day: "Tuesday", time: "7:00 PM", classType: "Strength", coach: "المدرب سامي", location: "مدينة السلطان قابوس" },
        { day: "Tuesday", time: "9:00 PM", classType: "Boxing Conditioning", coach: "المدرب راشد", location: "استوديو الخوير" },
        { day: "Wednesday", time: "6:00 AM", classType: "Mobility", coach: "المدربة هدى", location: "استوديو الخوير" },
        { day: "Wednesday", time: "8:00 AM", classType: "Strength", coach: "المدرب سامي", location: "مدينة السلطان قابوس" },
        { day: "Wednesday", time: "10:00 AM", classType: "EMS Circuit", coach: "المدرب يوسف", location: "استوديو الخوير" },
        { day: "Wednesday", time: "5:00 PM", classType: "HIIT", coach: "المدربة مريم", location: "استوديو القرم" },
        { day: "Wednesday", time: "7:00 PM", classType: "Boxing Conditioning", coach: "المدرب راشد", location: "مدينة السلطان قابوس" },
        { day: "Wednesday", time: "9:00 PM", classType: "Strength", coach: "المدرب سامي", location: "استوديو الخوير" },
        { day: "Thursday", time: "6:00 AM", classType: "Strength", coach: "المدربة مريم", location: "استوديو القرم" },
        { day: "Thursday", time: "8:00 AM", classType: "HIIT", coach: "المدرب راشد", location: "استوديو الخوير" },
        { day: "Thursday", time: "10:00 AM", classType: "Mobility", coach: "المدربة هدى", location: "مدينة السلطان قابوس" },
        { day: "Thursday", time: "5:00 PM", classType: "EMS Circuit", coach: "المدرب يوسف", location: "استوديو الخوير" },
        { day: "Thursday", time: "7:00 PM", classType: "Strength", coach: "المدرب سامي", location: "استوديو القرم" },
        { day: "Thursday", time: "9:00 PM", classType: "Boxing Conditioning", coach: "المدرب راشد", location: "استوديو الخوير" },
      ],
    },
    testimonials: {
      label: "شهادات العملاء",
      title: "الدليل في الالتزام",
      description:
        "آراء مفصلة من عملاء تدربوا باستمرارية وتعاملوا مع العملية بجدية.",
      stats: [
        "يفقد العميل المتوسط 8 كجم خلال 12 أسبوعاً",
        "91% من العملاء يتدربون 3 مرات أسبوعياً أو أكثر بحلول الأسبوع الرابع",
        "أعلى معدلات الاستمرار تأتي من المساءلة والتغذية المنظمة",
      ],
      durationLabel: "المدة",
      testimonials: [
        {
          name: "أحمد الهنائي",
          result: "-11 كجم وانخفاض في محيط الخصر",
          quote:
            "انضممت إلى نوكس بعد سنوات من التدريب غير المنتظم. الفرق كان في الهيكل. كل أسبوع كان له هدف، وكل جلسة كانت متتبعة، ومدربي جعلني ملتزماً بالطعام والتعافي. خلال 14 أسبوعاً خسرت 11 كجم، وتحسن ضغط الدم لدي، وأخيراً توقفت عن البدء من جديد كل شهر.",
          duration: "14 أسبوعاً",
        },
        {
          name: "مها البلوشية",
          result: "تحديد عضلي واضح",
          quote:
            "كنت أريد أن أصبح أقوى من دون أن أشعر بالضياع في نادٍ مزدحم. الإعداد البوتيكي في مسقط أحدث فرقاً كبيراً. التدريب مباشر، والجلسات سريعة الإيقاع، وأنا الآن أتدرب أربع مرات أسبوعياً بثقة. تغير كتفاي ووضعية جسمي وشكلي العام بشكل ملحوظ خلال ثلاثة أشهر.",
          duration: "12 أسبوعاً",
        },
        {
          name: "فيصل اللواتي",
          result: "عودة بعد ألم أسفل الظهر",
          quote:
            "بعد ألم ظهر متكرر، كنت أحتاج إلى تدريب يعيد بناء جسمي بالطريقة الصحيحة. نوكس عدّل خطتي، وحسّن جودة حركتي، وطورني بحذر. الآن أؤدي الرفعة الميتة من دون ألم، وأتحرك بشكل أفضل في العمل، وأتدرب بقوة أكبر مما فعلت منذ سنوات.",
          duration: "16 أسبوعاً",
        },
        {
          name: "سارة الريامية",
          result: "-7 كجم وطاقة أفضل",
          quote:
            "أسافر كثيراً بين مسقط ودبي، لذلك كانت الاستمرارية دائماً نقطة ضعفي. مزيج الجلسات داخل الاستوديو والمتابعة أونلاين أبقاني على المسار. خسرت 7 كجم، وتوقفت عن تناول الوجبات الخفيفة ليلاً، وتحسنت طاقتي خلال يوم العمل أكثر مما توقعت.",
          duration: "10 أسابيع",
        },
        {
          name: "يوسف الفارسي",
          result: "تكييف وتحمل في الملاكمة",
          quote:
            "حصص تكييف الملاكمة منحتني التحدي الذي كنت أريده بالضبط. كانت مكثفة لكن ما زالت تُدرَّب بدقة. تحملي تحسن، وخسرت دهوناً، وأصبحت فعلاً أتطلع إلى التدريب بعد العمل.",
          duration: "9 أسابيع",
        },
        {
          name: "نور الحبسية",
          result: "إعادة تكوين الجسم",
          quote:
            "جربت خططاً سريعة من قبل، لكن نوكس كان أول مكان يجمع بين التوجيه الغذائي، وتدرج التدريب، والمساءلة الحقيقية. لم أفقد الوزن فقط، بل بنيت شكلاً وقوة وروتيناً يمكنني الاستمرار عليه.",
          duration: "15 أسبوعاً",
        },
        {
          name: "خالد الكندي",
          result: "تطور في EMS والقوة",
          quote:
            "ساعات عملي قاسية، لذلك ساعدتني جلسات EMS على الحفاظ على الزخم من دون أن أشعر أنني أفقد التقدم. ومع جلستي قوة أسبوعياً، أصبحت أنحف وأقوى رغم الجدول المزدحم.",
          duration: "8 أسابيع",
        },
        {
          name: "هدى البوسعيدية",
          result: "ثقة وروتين ثابت",
          quote:
            "أفضل نتيجة لم تكن جسدية فقط. أصبحت شخصاً يتدرب باستمرار. المدربون منضبطون من دون أن يكونوا نمطيين. يعرفون متى يدفعونك ومتى يعدّلون، وهذا التوازن أبقاني ملتزمة.",
          duration: "12 أسبوعاً",
        },
      ],
    },
    blog: {
      label: "المدونة",
      title: "ملاحظات تدريبية من نوكس",
      description:
        "قراءات قصيرة عن التدريب والتعافي والتغذية والانضباط المطلوب للتغيير.",
      readMore: "اقرأ المزيد",
      comingSoon: "قريباً — إطلاق المدونة الكاملة قريباً.",
      categories: {
        Nutrition: "التغذية",
        Training: "التدريب",
        Recovery: "التعافي",
        Mindset: "العقلية",
      },
      readTime: "دقائق قراءة",
      posts: [
        {
          title: "البداية في نوكس",
          excerpt:
            "كيف تعمل الاستشارة والتقييم ومرحلتك التدريبية الأولى داخل نظام نوكس.",
          category: "Training",
          minutes: "6",
          date: "4 أبريل 2026",
          href: "/blog/getting-started",
        },
        {
          title: "عادات غذائية تصمد فعلاً في الأسابيع المزدحمة",
          excerpt:
            "أربعة أنظمة غذائية بسيطة تحافظ على تقدم فقدان الدهون عندما يزداد ضغط العمل.",
          category: "Nutrition",
          minutes: "5",
          date: "2 أبريل 2026",
          href: "/blog/getting-started",
        },
        {
          title: "لماذا التعافي جزء من البرنامج",
          excerpt:
            "النوم والحركة وانضباط التعافي أهم مما يتوقعه معظم العملاء.",
          category: "Recovery",
          minutes: "4",
          date: "29 مارس 2026",
          href: "/blog/getting-started",
        },
        {
          title: "التحول الذهني الذي يوقف إعادة البدء",
          excerpt:
            "المشكلة نادراً ما تكون في الدافع. غالباً ما تكون في بيئة بلا هيكل.",
          category: "Mindset",
          minutes: "5",
          date: "24 مارس 2026",
          href: "/blog/getting-started",
        },
      ],
    },
    startHere: {
      label: "ابدأ هنا",
      title: "أول أربع خطوات لك",
      description:
        "كل شيء في نوكس يبدأ بالوضوح. هذا هو مسار الانضمام من أول تواصل حتى أول مرحلة.",
      steps: [
        {
          number: "01",
          title: "احجز استشارة",
          description:
            "أخبرنا بهدفك وجدولك والتحدي الحالي حتى نوجهك إلى مسار الخدمة المناسب.",
        },
        {
          number: "02",
          title: "التقييم",
          description:
            "نراجع جودة الحركة ومؤشرات تكوين الجسم والتاريخ التدريبي وأي اعتبارات تتعلق بالإصابات.",
        },
        {
          number: "03",
          title: "الخطة المخصصة",
          description:
            "تحصل على هيكل برنامج مبني حول أهدافك وقدرتك على التعافي وتوفرك الأسبوعي.",
        },
        {
          number: "04",
          title: "ابدأ التدريب",
          description:
            "نبدأ التنفيذ، ونتابع الالتزام، ونعدل بسرعة حتى يبقى التقدم قابلاً للقياس من الأسبوع الأول.",
        },
      ],
      quickAnswersTitle: "إجابات سريعة قبل أن تتواصل معنا",
      quickAnswers: [
        {
          question: "كم تستغرق الاستشارة الأولى؟",
          answer: "عادةً من 20 إلى 30 دقيقة حسب تاريخك وأهدافك.",
        },
        {
          question: "هل يمكنني البدء إذا كنت غير نشط منذ سنوات؟",
          answer: "نعم. يبدأ كثير من العملاء من مستوى منخفض ويتقدمون بأمان مع التدريب.",
        },
        {
          question: "هل يجب أن أقرر بشأن EMS قبل أن أحضر؟",
          answer: "لا. يمكننا أن نوصي بما إذا كان EMS مناسباً بعد التقييم.",
        },
      ],
      ctaLabel: "الخطوة التالية",
      ctaTitle: "تحدث إلى الفريق",
      ctaDescription:
        "إذا كنت تريد إجابة مباشرة عن أفضل نقطة بداية، فاستخدم صفحة التواصل وأخبرنا بالنتيجة التي تريدها.",
      bookNow: "تواصل مع نوكس",
    },
    guides: {
      label: "الأدلة والموارد",
      title: "موارد مجانية للعملاء",
      description:
        "قراءات مفيدة لمن يريدون هيكلاً واضحاً قبل الالتزام بخطة تدريب كاملة.",
      download: "تحميل الدليل المجاني",
      emailNote: "أدخل بريدك الإلكتروني لفتح الأدلة المجانية",
      guides: [
        {
          title: "مخطط تدريب المبتدئين من نوكس",
          description:
            "هيكل بداية عملي للعملاء الجدد الذين يبنون الاستمرارية والتقنية.",
          category: "التدريب",
        },
        {
          title: "أساسيات التغذية لفقدان الدهون",
          description:
            "كيف تنظم الوجبات والبروتين والروتين دون تعقيد العملية.",
          category: "التغذية",
        },
        {
          title: "دليل بروتوكول التعافي",
          description:
            "ممارسات بسيطة للنوم والحركة والترطيب وتقليل الحمل تدعم تدريباً أقوى.",
          category: "التعافي",
        },
        {
          title: "تدريب EMS: ماذا تتوقع",
          description:
            "شرح واضح لكيفية عمل EMS في نوكس ومن يستفيد منه غالباً أكثر.",
          category: "EMS",
        },
        {
          title: "خطة دعم التمارين المنزلية",
          description:
            "جلسات قصيرة وبلوكات حركة للأسابيع المزدحمة عندما لا تستطيع حضور كل جلسات الاستوديو.",
          category: "نمط الحياة",
        },
        {
          title: "تحديد الأهداف لتحول الجسم",
          description:
            "ضع أهدافاً قابلة للقياس ومعايير أسبوعية وجداول زمنية واقعية تحافظ على الزخم.",
          category: "العقلية",
        },
      ],
    },
    home: {
      stats: [
        { label: "عميل" },
        { label: "مدرب" },
        { label: "خطوط خدمة" },
        { label: "مساءلة" },
      ],
      philosophyLabel: "الفلسفة",
      philosophyTitle: "لا نفعل السهل.",
      philosophyDesc: "في نوكس، الكثافة منظمة. الانضباط مُدرَّب. النتائج تُقاس. أنت لست هنا للمشاركة. أنت هنا للتحول.",
      philosophyBody: "نبني خططاً تدريبية مدفوعة بالأداء تجمع بين الدقة التدريبية واستراتيجية التعافي والمساءلة الصارمة. سواء كان هدفك فقدان الدهون أو القوة الرياضية أو الثقة الجسدية الكاملة، مهمتنا بسيطة: إزالة الأعذار وتثبيت نظام قابل للتكرار.",
      servicesLabel: "الخدمات",
      servicesTitle: "ما نقدمه",
      servicesDesc: "أنظمة تدريب بمساءلة عالية مبنية حول مستواك وأهدافك.",
      learnMore: "اعرف المزيد",
      services: [
        { title: "التدريب الشخصي", description: "جلسات فردية مبنية حول تكوين جسمك وجودة حركتك وأهداف أدائك المحددة." },
        { title: "تدريب EMS", description: "جلسات عصبية عضلية عالية الكفاءة مصممة للعملاء الذين يطلبون نتائج في وقت أقل." },
        { title: "الحصص الجماعية", description: "مجموعات نخبوية صغيرة حيث يبقى التدريب الدقيق والكثافة والمساءلة غير قابلة للتفاوض." },
      ],
      whyLabel: "لماذا نوكس",
      whyTitle: "مبني لنتائج جادة",
      whyDesc: "نظام تدريب منضبط يجمع بين المعايير النخبوية والمساءلة الإنسانية.",
      reasons: [
        { title: "مبني على العلم", description: "كل برنامج مبني من بروتوكولات قائمة على الأدلة ومصممة لأساسك وأهدافك." },
        { title: "المساءلة", description: "تحصل على هيكل وتتبع للتقدم ومتابعات من المدرب تزيل التخمين." },
        { title: "مدربون خبراء", description: "يجمع فريقنا شهادات عالية المستوى مع تدريب عملي يحقق النتائج." },
        { title: "نتائج مضمونة", description: "إذا التزمت بالعملية، نلتزم نحن بتحقيق تحول قابل للقياس." },
      ],
      teamLabel: "الفريق",
      teamTitle: "تعرف على مدربيك",
      teamDesc: "مدربون ذوو خبرة، تواصل مباشر، وخطط تناسب الجداول الحقيقية.",
      viewAllCoaches: "عرض جميع المدربين",
      coaches: [
        { name: "المدرب أدم", specialties: ["القوة", "فقدان الدهون"], bio: "متخصص في إعادة تكوين الجسم وتطور القوة للمحترفين المشغولين." },
        { name: "المدربة ليلى", specialties: ["EMS", "إعادة التأهيل"], bio: "تركز على تصحيح الحركة والتدريب الخالي من الألم ونتائج التعافي المتسارعة." },
        { name: "المدرب كريم", specialties: ["الرياضي", "التكييف"], bio: "يبني أنظمة أداء متفجرة للرياضيين والمديرين التنفيذيين ذوي الأداء العالي." },
      ],
      testimonialsLabel: "الشهادات",
      testimonialsTitle: "نتائج العملاء",
      testimonialsDesc: "ما يحدث عندما يلتقي الاتساق ببيئة تدريب عالية المستوى.",
      testimonials: [
        { quote: "غيّر نوكس انضباطي. فقدت 14 كيلو واكتسبت قوة في أقل من ستة أشهر.", name: "أحمد س.", result: "14- كيلو في 6 أشهر" },
        { quote: "التدريب مباشر واحترافي. كل جلسة لها هدف ودقة.", name: "سارة م.", result: "إعادة تكوين جسم واضحة" },
        { quote: "توقفت عن البداية من جديد. نظام المساءلة هو ما جعلني أخيراً منتظماً.", name: "فيصل ر.", result: "4 جلسات/أسبوع لمدة 8 أشهر" },
      ],
      ctaBannerTitle: "لا مزيد من الأعذار. ابدأ اليوم.",
      addressLabel: "العنوان",
      addressValue: "مسقط، عُمان",
      phoneLabel: "الهاتف",
      hoursLabel: "ساعات العمل",
      hoursValue: "السبت - الخميس: 6:00 صباحاً - 11:00 مساءً",
      whatsapp: "واتساب",
      faqLabel: "الأسئلة الشائعة",
      faqTitle: "إجابات قبل أن تبدأ",
      faqDesc: "توقعات واضحة من اليوم الأول.",
      faqItems: [
        { question: "هل أحتاج إلى خبرة تدريبية مسبقة؟", answer: "لا. نقيّم مستواك الحالي ونبدأ من حيث أنت مع خطة تطور منظمة." },
        { question: "كم مرة يجب أن أتدرب؟", answer: "يبدأ معظم العملاء بـ 3-4 جلسات أسبوعياً حسب الأهداف والتعافي والجدول." },
        { question: "هل التغذية مشمولة؟", answer: "نعم. تحصل على توجيه غذائي عملي متوافق مع برنامجك التدريبي وأسلوب حياتك." },
        { question: "هل يمكنني الجمع بين EMS والتدريب بالأثقال؟", answer: "نعم. البروتوكولات الهجينة هي أحد أكثر صيغنا فعالية عند البرمجة الصحيحة." },
      ],
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Translations;
  isArabic: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Always start with "en" so server and client render the same HTML.
  // After mount, read localStorage and switch if needed.
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored = localStorage.getItem("nox-locale");
    if (stored === "ar") setLocale("ar");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "ar" ? "rtl" : "ltr";
    localStorage.setItem("nox-locale", locale);
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale((current) => (current === "en" ? "ar" : "en")),
      t: translations[locale],
      isArabic: locale === "ar",
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
}
