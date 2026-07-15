// Centralized typed demonstration data for Aurevia Skin & Hair Clinic
// Satisfies STEP 6: CENTRALIZE ALL CONTENT

export interface DemoMetadata {
  isDemo: boolean;
  contentStatus: "demo";
  requiresClientApproval: boolean;
}

export const demoMetadata: DemoMetadata = {
  isDemo: true,
  contentStatus: "demo",
  requiresClientApproval: true,
};

export interface Treatment {
  id: string;
  title: string;
  category: "skin" | "hair" | "laser" | "aesthetics";
  shortDescription: string;
  longDescription: string;
  suitability: string;
  downtime: string;
  expectedSessions: string;
  clinicalApproach: string;
  isFeatured?: boolean;
}

export interface Concern {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  educationalInfo: string;
  symptomsAndCauses: string;
  clinicalGuidance: string;
  recommendedTreatments: string[]; // Treatment IDs
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  carePhilosophy: string;
  areasOfInterest: string[];
  languages: string[];
  consultationApproach: string;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Insight {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string;
  image: string;
  publishDate: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface TechnologyItem {
  id: string;
  name: string;
  description: string;
}

export interface ClinicDetails {
  name: string;
  tagline: string;
  description: string;
  taglineSecondary: string;
  trustParagraph: string;
}

export const clinicDetails: ClinicDetails = {
  name: "Aurevia Skin & Hair Clinic",
  tagline: "Evidence-led dermatology. Naturally confident results.",
  description: "Premium, specialist-led dermatology and aesthetic care delivered in a calm, private clinical environment.",
  taglineSecondary: "A sanctuary of clinical excellence",
  trustParagraph: "Every skin and hair plan is designed and supervised by our specialist dermatologists, utilizing advanced evidence-based protocols to deliver subtle, natural-looking results.",
};

export const treatmentsData: Treatment[] = [
  {
    id: "acne-scar-treatment",
    title: "Acne and acne-scar care",
    category: "skin",
    shortDescription: "Tailored combination protocols to reduce active acne, improve skin texture, and smooth deep-set scars.",
    longDescription: "Our approach to acne scars combines advanced subcision, energy-based resurfacing, and tailored regenerative treatments. By stimulating collagen synthesis at precise dermal depths, we gradually raise depressed scar tissue and restore skin uniformity.",
    suitability: "Suitable for post-acne atrophic scars (boxcar, rolling, icepick) and persistent active acne.",
    downtime: "3 to 5 days of mild redness and micro-crusting depending on resurfacing intensity.",
    expectedSessions: "3 to 5 sessions spaced 4 to 6 weeks apart for optimal dermal remodeling.",
    clinicalApproach: "Multimodal therapy combining microneedling RF, fractional resurfacing, and focused subcision.",
    isFeatured: true,
  },
  {
    id: "pigmentation-consultation",
    title: "Pigmentation consultation",
    category: "skin",
    shortDescription: "Specialist investigation and custom programs for melasma, sun damage, and post-inflammatory hyperpigmentation.",
    longDescription: "Hyperpigmentation requires rigorous assessment of depth and triggers. We formulate comprehensive plans that combine gentle light-based therapies, targeted topical barrier support, and strict UV protection protocols to restore pigment balance safely.",
    suitability: "Ideal for melasma, age spots, freckles, and post-inflammatory darkening.",
    downtime: "None to minimal; temporary darkening of pigment spots for 2-3 days is normal.",
    expectedSessions: "4 to 6 sessions depending on pigmentation depth (epidermal vs. dermal).",
    clinicalApproach: "Melanocyte regulation using Q-switched technology, gentle chemical peels, and barrier repair.",
    isFeatured: true,
  },
  {
    id: "skin-rejuvenation",
    title: "Skin rejuvenation",
    category: "skin",
    shortDescription: "Clinical therapies to restore skin elasticity, hydration, and natural radiance.",
    longDescription: "Modern skin rejuvenation focuses on dermal hydration and cellular renewal. Using non-crosslinked hyaluronic acid, amino acids, and gentle thermal energy, we restore the skin's natural scaffolding and glow from within.",
    suitability: "Suitable for dullness, fine lines, mild laxity, and dehydrated skin.",
    downtime: "12 to 24 hours of minor injection-point papules or transient redness.",
    expectedSessions: "2 to 3 starter sessions, followed by maintenance every 6 months.",
    clinicalApproach: "Micro-droplet intradermal therapy paired with tailored botanical peels.",
    isFeatured: false,
  },
  {
    id: "hair-loss-consultation",
    title: "Hair-loss consultation",
    category: "hair",
    shortDescription: "Medical trichology assessments and evidence-backed therapies for male and female pattern hair thinning.",
    longDescription: "Hair thinning is multifactorial, involving genetics, hormones, and scalp micro-environments. Our dermatologists perform deep trichoscopy evaluations to deliver customized topical regimes, nutritional support, and growth-factor treatments.",
    suitability: "Recommended for androgenetic alopecia, telogen effluvium, and early-stage hair thinning.",
    downtime: "None; immediate return to daily activities.",
    expectedSessions: "Ongoing home care with clinic-based therapies every 4 weeks for 6 months.",
    clinicalApproach: "Trichoscopic scalp mapping, growth factor micro-infusions, and follicular stabilization.",
    isFeatured: true,
  },
  {
    id: "scalp-health-assessment",
    title: "Scalp health assessment",
    category: "hair",
    shortDescription: "Specialist care for chronic dandruff, psoriasis, and inflammatory scalp conditions.",
    longDescription: "A healthy scalp is the prerequisite for optimal hair growth. We isolate and treat inflammatory conditions, yeast overgrowth, and dry scalp syndrome using targeted clinical cleansers, anti-inflammatory solutions, and hydration therapies.",
    suitability: "Ideal for persistent itching, flaking, scalp redness, or oily dandruff.",
    downtime: "None.",
    expectedSessions: "1 to 3 sessions for symptomatic stabilization, supported by custom home care.",
    clinicalApproach: "Exfoliative scalp clarifying, anti-fungal or anti-inflammatory solutions, and barrier support.",
    isFeatured: false,
  },
  {
    id: "laser-hair-reduction",
    title: "Laser hair reduction",
    category: "laser",
    shortDescription: "Precision medical laser platforms safe for all skin types, managed by trained clinical staff.",
    longDescription: "Our clinic utilizes gold-standard diode and Nd:YAG laser technologies to target hair follicles selectively. With integrated contact cooling systems, we ensure maximum comfort and efficacy while protecting the surrounding epidermis, even on darker skin tones.",
    suitability: "Safe for all Fitzpatrick skin types, targeting unwanted face and body hair.",
    downtime: "None; minor erythema (redness) resolving within a few hours.",
    expectedSessions: "6 to 8 sessions to capture all hair growth cycles.",
    clinicalApproach: "Melanin-specific wavelengths with continuous cooling for safe and permanent follicle stabilization.",
    isFeatured: true,
  },
  {
    id: "laser-skin-procedures",
    title: "Laser skin procedures",
    category: "laser",
    shortDescription: "Non-ablative laser treatments to refine pore size, smooth texture, and tone vascular redness.",
    longDescription: "Using gentle, non-ablative laser wavelengths, we target micro-vascular networks and stimulate collagen in the upper dermis. This refines skin texture, minimizes dilated pores, and calms persistent facial flushing without peeling.",
    suitability: "Ideal for rosacea, facial redness, enlarged pores, and early fine lines.",
    downtime: "Minimal; slight pinkness for 1 to 2 hours.",
    expectedSessions: "3 to 5 sessions spaced 3 weeks apart.",
    clinicalApproach: "Vascular-targeted wavelengths and low-fluence Q-switched toning.",
    isFeatured: false,
  },
  {
    id: "considered-aesthetic-treatments",
    title: "Considered aesthetic treatments",
    category: "aesthetics",
    shortDescription: "Subtle facial balancing and structural restoration using premium, certified clinical formulations.",
    longDescription: "We believe in structural restoration over artificial augmentation. By placing dermal support at key anatomical focal points, we restore lost youthful volumes, soften shadows, and harmonize facial proportions while preserving your natural expressions.",
    suitability: "For volume loss, deep folds, structural shadows, and subtle facial balancing.",
    downtime: "1 to 2 days of mild swelling or potential minor bruising at placement sites.",
    expectedSessions: "Usually achieved in a single, careful session with a 2-week follow-up review.",
    clinicalApproach: "Anatomical deep-layer structural support using premium FDA-approved hyaluronic fillers.",
    isFeatured: true,
  },
];

export const concernsData: Concern[] = [
  {
    id: "acne-and-acne-scars",
    title: "Acne and acne scars",
    category: "Skin & Texture",
    shortDescription: "From persistent adult breakouts to deep-seated atrophic scarring, we address both active inflammation and textural damage.",
    educationalInfo: "Acne is an inflammatory condition of the pilosebaceous unit. When severe or picked, it damages the surrounding collagen scaffold, leading to atrophic (depressed) or hypertrophic (raised) scars.",
    symptomsAndCauses: "Caused by sebum overproduction, follicular hyperkeratinization, bacterial colonization, and systemic inflammation. Textural scars form when the healing process lacks sufficient structural collagen.",
    clinicalGuidance: "Early intervention is key to preventing permanent structural scars. Avoid aggressive scrubbing or popping, which deepens dermal inflammation. Seek a structured combination of anti-inflammatory care and collagen-induction therapies.",
    recommendedTreatments: ["acne-scar-treatment", "skin-rejuvenation"],
  },
  {
    id: "pigmentation",
    title: "Pigmentation",
    category: "Skin Tone",
    shortDescription: "Uneven patches, dark spots, and melasma triggered by hormones, UV exposure, or post-inflammatory recovery.",
    educationalInfo: "Melanocytes produce melanin in response to triggers like UV rays and hormones. Melasma is typically dermal or mixed-depth, requiring highly controlled, non-aggressive therapy to avoid rebound darkening.",
    symptomsAndCauses: "Sun spots, hormonal melasma, and post-inflammatory hyperpigmentation (PIH) caused by acne, injuries, or aggressive cosmetic treatments.",
    clinicalGuidance: "Always wear broad-spectrum physical sunscreen (SPF 50+, PA++++). Avoid harsh scrubbing or highly acidic products without supervision, as irritation can trigger secondary hyperpigmentation.",
    recommendedTreatments: ["pigmentation-consultation", "laser-skin-procedures"],
  },
  {
    id: "uneven-texture",
    title: "Uneven texture",
    category: "Skin & Texture",
    shortDescription: "Enlarged pores, rough skin surface, and superficial scarring that detract from a smooth, reflective complexion.",
    educationalInfo: "Skin texture is dictated by cell turnover rate and dermal collagen support. Slower renewal leaves dead skin cells clustered on the surface, while loss of collagen causes pores to slacken and appear larger.",
    symptomsAndCauses: "Slow cellular turnover, cumulative sun damage, environmental pollutants, and age-related collagen decline.",
    clinicalGuidance: "Focus on gentle daily exfoliation (such as PHAs or low-strength BHAs) paired with barrier-repairing ceramides. Clinical laser toning can significantly tighten surrounding collagen structures to refine pores.",
    recommendedTreatments: ["skin-rejuvenation", "laser-skin-procedures"],
  },
  {
    id: "hair-thinning",
    title: "Hair thinning",
    category: "Hair & Scalp",
    shortDescription: "Gradual reduction in hair density, widening parting lines, or excessive daily hair shed.",
    educationalInfo: "Hair thinning is frequently androgenetic (hormonal miniaturization of follicles) or temporary shedding (telogen effluvium) triggered by nutritional gaps, stress, or post-viral recovery.",
    symptomsAndCauses: "Genetic predisposition, dihydrotestosterone (DHT) sensitivity, nutritional deficiencies (iron, vitamin D), and chronic scalp micro-inflammation.",
    clinicalGuidance: "Treat hair loss early while follicles are still active; once a follicle is completely scar-replaced, medical restoration is highly limited. Combine home medical therapies with in-clinic follicular stimulation.",
    recommendedTreatments: ["hair-loss-consultation"],
  },
  {
    id: "scalp-concerns",
    title: "Scalp concerns",
    category: "Hair & Scalp",
    shortDescription: "Chronic dandruff, dry flaking, itching, redness, or oily buildup on the scalp.",
    educationalInfo: "A compromised scalp barrier allows microbes to flourish, causing inflammation and shedding. Dandruff is often an inflammatory reaction to naturally occurring Malassezia yeast.",
    symptomsAndCauses: "Seborrheic dermatitis, scalp psoriasis, product buildup, and barrier dysfunction.",
    clinicalGuidance: "Avoid applying heavy botanical oils directly to an inflamed scalp, as they feed yeast. Use clinical shampoos with active anti-fungal and soothing agents, allowing them to sit on the scalp for 3-5 minutes before rinsing.",
    recommendedTreatments: ["scalp-health-assessment"],
  },
  {
    id: "signs-of-skin-ageing",
    title: "Signs of skin ageing",
    category: "Aesthetics",
    shortDescription: "Loss of volume in the mid-face, deepening of expression lines, and early structural laxity.",
    educationalInfo: "Intrinsic ageing decreases collagen and elastin production by about 1% annually after age 25. Extrinsic ageing (sun, pollution) accelerates this process, degrading the skin's structural scaffolding.",
    symptomsAndCauses: "Deepening nasolabial folds, volume loss in the cheeks/temples, static fine lines, and downward structural shift.",
    clinicalGuidance: "Prioritize sunscreen and topical retinoids as your preventive baseline. Clinical collagen stimulators and structural dermal balancing can naturally restore facial contours without modifying your unique features.",
    recommendedTreatments: ["considered-aesthetic-treatments", "skin-rejuvenation"],
  },
];

export const doctorsData: Doctor[] = [
  {
    id: "dr-ananya-rao",
    name: "Dr Ananya Rao",
    role: "Senior Consultant Dermatologist",
    carePhilosophy: "I believe dermatology should be a partnership. My goal is to demystify skin health, providing patients with evidence-backed, conservative care plans that honor their skin's natural biology.",
    areasOfInterest: ["Clinical Dermatology", "Acne Scar Remodeling", "Laser Pharmacology"],
    languages: ["English", "Kannada", "Hindi"],
    consultationApproach: "A thorough 30-minute diagnostic session focusing on medical history, current lifestyle factors, and high-magnification trichoscopy or dermatoscopy before outlining treatment directions.",
    image: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "dr-meera-iyer",
    name: "Dr Meera Iyer",
    role: "Consultant Aesthetic Dermatologist",
    carePhilosophy: "True aesthetic medicine is invisible. I focus on structural restoration—restoring what time has depleted so my patients leave looking rested, balanced, and entirely like themselves.",
    areasOfInterest: ["Structural Facial Balancing", "Injectable Collagen Stimulators", "Melasma Management"],
    languages: ["English", "Tamil", "Kannada"],
    consultationApproach: "An anatomical facial-balancing analysis evaluating bone structure, fat pad placement, and skin quality to recommend subtle and precise intervention points.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000",
  },
];

export const technologiesData: TechnologyItem[] = [
  {
    id: "skin-imaging",
    name: "Advanced Skin Assessment & Imaging",
    description: "Multi-spectral imaging to analyze pigment depth, UV damage, and vascular networks beneath the superficial layer."
  },
  {
    id: "laser-platforms",
    name: "Precision Controlled Laser Platforms",
    description: "Gold-standard diode and Nd:YAG lasers with real-time temperature feedback and continuous contact cooling for safety."
  },
  {
    id: "sterile-protocols",
    name: "Sterile Procedural Protocols",
    description: "Medical-grade sanitization and completely closed surgical/procedural environments matching absolute hospital standards."
  },
  {
    id: "private-suites",
    name: "Private Consultation Environment",
    description: "Sound-isolated, comfortable consultation rooms that respect your complete privacy and ease of communication."
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Reception & Lounge",
    description: "A calm, clutter-free space designed with natural textures and soft light to set a peaceful tone from the moment you enter.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "gallery-2",
    title: "Private Consultation Suite",
    description: "Where our specialist dermatologists conduct thorough, unhurried diagnostics and treatment planning sessions.",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "gallery-3",
    title: "Advanced Laser Treatment Room",
    description: "Equipped with precision clinical laser systems and advanced cooling technologies for safe, comfortable treatments.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "gallery-4",
    title: "Clinical Procedure Room",
    description: "Maintained under rigorous hospital-grade sterile protocols to ensure absolute safety during dermatological procedures.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1200",
  },
];

export const insightsData: Insight[] = [
  {
    id: "understanding-acne-scars",
    title: "Understanding acne scars",
    category: "Skin Science",
    readTime: "6 min read",
    publishDate: "June 12, 2026",
    summary: "An evidence-based guide to why atrophic scars form and how modern dermatologists combine subcision and lasers to restore skin uniformity.",
    content: "Acne scarring is a complex structural challenge. When a severe acne cyst heals, it often leaves behind fibrotic bands that pull the skin surface down, creating depressed or atrophic scars. Modern clinical dermatology has moved away from aggressive single-modality resurfacing. Instead, we use a combined approach: subcision to gently release those deep fibrotic anchors, paired with fractional energy (like Microneedling RF) to rebuild cellular collagen structure from within. This combined methodology achieves far more predictable, natural smoothing with a fraction of the traditional recovery downtime.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "building-considered-hair-care-plan",
    title: "Building a considered hair-care plan",
    category: "Trichology",
    readTime: "5 min read",
    publishDate: "May 28, 2026",
    summary: "Ditch the commercial serums. Learn how clinical trichology stabilizes hair thinning by focusing on scalp micro-inflammation and cellular growth factors.",
    content: "Achieving healthy hair starts at the root—literally. Follicular thinning is driven by genetic DHT sensitivity, local inflammation, and micro-nutritional gaps. Rather than relying on commercial shampoos, an effective hair-stabilization plan relies on clinically validated topical therapies, follicle-level growth factor micro-infusions, and clarifying treatments that support a balanced scalp microbiome. Regular trichoscopy allows us to track follicle diameter and growth phases over time, making real-time adjustments before permanent miniaturization occurs.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "what-to-expect-during-skin-consultation",
    title: "What to expect during a skin consultation",
    category: "Patient Guide",
    readTime: "4 min read",
    publishDate: "May 15, 2026",
    summary: "Demystifying your first visit. Why our dermatologists spend 30 minutes analyzing your barrier and lifestyle before discussing any procedural treatment.",
    content: "At Aurevia, we believe a clinical consultation should never be a sales pitch. Your initial visit is a comprehensive 30-minute diagnostic session. Our specialist dermatologists will perform a deep barrier assessment, review your full medical history, and analyze your current lifestyle and skincare ingredients. Only when we fully understand the underlying triggers of your concern do we present a balanced, conservative treatment roadmap. This ensuring you never undergo unnecessary procedures and receive care tailored precisely to your biology.",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1200",
  },
];

export const faqsData: FAQ[] = [
  {
    id: "faq-1",
    question: "How should I choose the right treatment?",
    answer: "You do not need to choose your treatment in advance. We recommend booking a comprehensive initial consultation. Our specialist dermatologists will evaluate your skin or scalp under magnification, diagnose your specific concern, and design a customized, evidence-based plan suitable for you.",
  },
  {
    id: "faq-2",
    question: "What happens during the first consultation?",
    answer: "Your initial consultation is a thorough, unhurried 30-minute session. We perform high-magnification diagnostics, review your full medical history, analyze your current lifestyle and skincare routine, and discuss your goals. We then provide an honest, clinical recommendation without any commercial pressure.",
  },
  {
    id: "faq-3",
    question: "Can I book if I am unsure which treatment I need?",
    answer: "Absolutely. In fact, most of our new patients start exactly this way. Simply choose the general area of your concern (such as 'Skin Texture' or 'Hair Thinning') or select 'I am not sure' during our booking process. Your session will begin as an open diagnostic consultation.",
  },
  {
    id: "faq-4",
    question: "How long does a consultation take?",
    answer: "A standard initial consultation takes approximately 30 minutes. If you decide to go ahead with certain simple, non-downtime procedures on the same day, additional time may be required, which we will discuss during your session.",
  },
  {
    id: "faq-5",
    question: "Are treatment plans personalised?",
    answer: "Yes, entirely. We do not believe in pre-packaged beauty menus. Every face, skin type, and hair density is unique. Your dermatologist will customize the frequency, intensity, and combinations of clinical therapies to align with your recovery window, skin tolerance, and biological response.",
  },
  {
    id: "faq-6",
    question: "What should I bring to my appointment?",
    answer: "We recommend bringing a list of your current skincare products, active topical medications, and any recent blood work or medical reports related to your health. If possible, arrive with a clean, makeup-free face so we can assess your skin barrier accurately.",
  },
  {
    id: "faq-7",
    question: "How are follow-up consultations arranged?",
    answer: "Depending on your specific plan, follow-up consultations are scheduled at key biological milestones (typically 4 to 6 weeks apart) to evaluate your progress, adjust home-care formulas, and perform subsequent clinical steps. You can manage these easily online or through our reception desk.",
  },
];
