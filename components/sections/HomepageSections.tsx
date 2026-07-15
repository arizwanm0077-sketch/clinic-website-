'use client';

import React, { useState } from "react";
import Image from "next/image";
import { 
  Container, 
  Section, 
  Stack, 
  Grid, 
  Heading, 
  Eyebrow, 
  BodyText, 
  Button, 
  Card, 
  CardContent,
  ResponsiveMedia, 
  SectionHeader,
  SplitSection 
} from "@/components/primitives";
import { 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  Plus, 
  Minus, 
  Activity, 
  User, 
  Sparkles, 
  Flame, 
  BookOpen, 
  Calendar,
  Lock
} from "lucide-react";
import { 
  treatmentsData, 
  concernsData, 
  doctorsData, 
  technologiesData, 
  galleryData, 
  insightsData, 
  faqsData,
  demoMetadata
} from "@/config/demoData";
import { motion, AnimatePresence } from "motion/react";

export function HomepageSections() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const filteredTreatments = activeCategory === "all" 
    ? treatmentsData.filter(t => t.isFeatured)
    : treatmentsData.filter(t => t.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => prev === id ? null : id);
  };

  return (
    <>
      {/* SECTION 1: CREDENTIALS & TRUST BAR */}
      <Section spacing="compact" className="border-y border-brand-stone/30 bg-brand-stone/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 py-4">
            <div className="flex gap-4 items-start">
              <div className="p-2 rounded-sm bg-brand-sage/10 text-brand-sage-dark shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-lg font-medium text-brand-green-deep block mb-1">Dermatologist Led</span>
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  Every care path is designed and supervised by qualified medical specialist doctors.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="p-2 rounded-sm bg-brand-sage/10 text-brand-sage-dark shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-lg font-medium text-brand-green-deep block mb-1">Evidence Based</span>
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  We use clinically proven technologies and strictly medical-grade protocols.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-2 rounded-sm bg-brand-sage/10 text-brand-sage-dark shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-lg font-medium text-brand-green-deep block mb-1">Completely Private</span>
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  All consultations and procedures happen in private, secure medical suites.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2: TREATMENT-CATEGORY DISCOVERY */}
      <Section spacing="default" surface="ivory">
        <Container>
          <SectionHeader
            eyebrow="Clinical Portfolio"
            title="Our treatment categories"
            description="We offer structured specialist care across four core clinical disciplines, focusing on natural outcomes and skin barrier health."
            layout="split"
            className="mb-12 md:mb-16"
          />

          <Grid cols={4} gap="lg">
            {[
              {
                title: "Skin",
                href: "/treatments/skin",
                desc: "Medical dermatology and advanced resurfacing for chronic conditions and textural integrity.",
                image: "/images/aurevia_skin_dermatology_1784122198580.jpg",
                fallback: "Aurevia medical skin assessment",
                badge: "Dermatology"
              },
              {
                title: "Hair",
                href: "/treatments/hair",
                desc: "Clinical trichology, medical-grade scalp support, and scientifically validated thinning solutions.",
                image: "/images/aurevia_hair_trichology_1784122213035.jpg",
                fallback: "Aurevia hair follicle analysis",
                badge: "Trichology"
              },
              {
                title: "Laser",
                href: "/treatments/laser",
                desc: "Precision energy-based platforms configured specifically for safe, high-efficacy dermal therapy.",
                image: "/images/aurevia_laser_platform_1784122229157.jpg",
                fallback: "Precision medical laser system",
                badge: "Precision Energy"
              },
              {
                title: "Aesthetics",
                href: "/treatments/aesthetics",
                desc: "Subtle structural restoration and facial balancing designed around unique anatomical scaffolding.",
                image: "/images/aurevia_aesthetic_art_1784122245484.jpg",
                fallback: "Refined aesthetic care",
                badge: "Anatomical"
              }
            ].map((cat, idx) => (
              <Card key={idx} surface="white" interaction="hover" className="flex flex-col h-full group">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-stone/20">
                  <Image
                    src={cat.image}
                    alt={cat.fallback}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={idx < 2}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] tracking-widest uppercase bg-brand-green-deep text-white px-2.5 py-1 font-mono rounded-sm">
                      {cat.badge}
                    </span>
                  </div>
                </div>
                <CardContent className="flex-1 flex flex-col justify-between p-6">
                  <Stack gap="sm">
                    <Heading level={3} size="sm" className="group-hover:text-brand-sage-dark transition-colors">
                      {cat.title}
                    </Heading>
                    <p className="text-sm text-brand-text-muted leading-relaxed">
                      {cat.desc}
                    </p>
                  </Stack>
                  <div className="pt-6 mt-6 border-t border-brand-stone/30">
                    <Button as="link" href={cat.href} variant="quiet" className="group-hover:translate-x-1 transition-transform duration-200">
                      Explore category <ArrowRight className="w-4 h-4 ml-1 inline-block" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* SECTION 3: CONCERN-LED DISCOVERY */}
      <Section spacing="default" surface="stone" className="relative overflow-hidden bg-brand-stone/30">
        <Container>
          <SectionHeader
            eyebrow="Targeted Solutions"
            title="Discover care by concern"
            description="We guide our patients based on their current clinical concerns, ensuring a balanced, diagnosis-first assessment before any treatment is suggested."
            layout="stacked"
            align="center"
            className="mb-12 text-center"
          />

          <Grid cols={3} gap="md">
            {concernsData.map((con) => (
              <Card key={con.id} surface="white" className="p-8 border border-brand-stone/60">
                <Stack gap="md" className="h-full justify-between">
                  <Stack gap="xs">
                    <span className="text-[10px] tracking-widest font-mono text-brand-sage-dark uppercase">
                      {con.category}
                    </span>
                    <Heading level={3} size="sm" className="mb-2">
                      {con.title}
                    </Heading>
                    <p className="text-sm text-brand-text-muted leading-relaxed">
                      {con.shortDescription}
                    </p>
                  </Stack>
                  <div className="pt-6 border-t border-brand-stone/20 flex justify-between items-center">
                    <span className="text-xs text-brand-text-muted italic">Evidence-backed guides</span>
                    <Button as="link" href={`/concerns/${con.id}`} variant="quiet">
                      View guidance <ArrowRight className="w-4 h-4 ml-1 inline-block" />
                    </Button>
                  </div>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* SECTION 4: SIGNATURE TREATMENTS */}
      <Section spacing="default" surface="ivory">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeader
              eyebrow="Clinical Highlights"
              title="Signature treatments"
              description="A selected preview of our core specialist-supervised dermatological and aesthetic interventions."
            />
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-sm border transition-all ${
                  activeCategory === "all" 
                    ? "bg-brand-green-deep text-white border-brand-green-deep" 
                    : "bg-white text-brand-text-muted border-brand-stone hover:border-brand-sand"
                }`}
              >
                Featured
              </button>
              {["skin", "hair", "laser", "aesthetics"].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-sm border transition-all ${
                    activeCategory === cat 
                      ? "bg-brand-green-deep text-white border-brand-green-deep" 
                      : "bg-white text-brand-text-muted border-brand-stone hover:border-brand-sand"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Grid cols={2} gap="lg">
                {filteredTreatments.map((treat) => (
                  <Card key={treat.id} surface="white" className="p-8 border border-brand-stone/40 hover:border-brand-sand transition-all duration-300">
                    <Stack gap="md" className="h-full justify-between">
                      <Stack gap="xs">
                        <span className="text-[10px] tracking-widest font-mono text-brand-sage-dark uppercase">
                          Category · {treat.category}
                        </span>
                        <Heading level={3} size="md" className="mb-2">
                          {treat.title}
                        </Heading>
                        <p className="text-sm text-brand-text-muted leading-relaxed">
                          {treat.shortDescription}
                        </p>
                      </Stack>
                      
                      <div className="grid grid-cols-2 gap-4 py-4 my-2 border-y border-brand-stone/30">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block">Downtime</span>
                          <span className="text-xs text-brand-green-deep font-medium">{treat.downtime}</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block">Expected Sessions</span>
                          <span className="text-xs text-brand-green-deep font-medium">{treat.expectedSessions}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <span className="text-xs text-brand-text-muted">Specialist Supervised</span>
                        <Button as="link" href={`/treatments/${treat.category}/${treat.id}`} variant="secondary" size="sm">
                          Clinical details
                        </Button>
                      </div>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            </motion.div>
          </AnimatePresence>
        </Container>
      </Section>

      {/* SECTION 5: MEET THE SPECIALISTS */}
      <Section spacing="default" surface="stone" className="bg-brand-stone/20">
        <Container>
          <SectionHeader
            eyebrow="Medical Leadership"
            title="Meet our specialists"
            description="Our dermatologists are highly trained specialist doctors committed to providing evidence-led, clinically responsible care."
            layout="split"
            className="mb-12 md:mb-16"
          />

          <Grid cols={2} gap="lg">
            {doctorsData.map((doc) => (
              <Card key={doc.id} surface="white" className="flex flex-col md:flex-row h-full overflow-hidden border border-brand-stone/50">
                <div className="relative w-full md:w-[40%] aspect-[3/4] bg-brand-stone/10 shrink-0">
                  <ResponsiveMedia
                    src={doc.image}
                    alt={doc.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 30vw, 20vw"
                    fallbackText={doc.name}
                  />
                  <div className="absolute top-4 left-4 md:hidden">
                    <span className="text-[10px] tracking-widest font-mono uppercase bg-brand-green-deep text-white px-2.5 py-1">
                      Specialist
                    </span>
                  </div>
                </div>
                <CardContent className="flex-1 flex flex-col justify-between p-8">
                  <Stack gap="md">
                    <div>
                      <Heading level={3} size="md" className="mb-1">
                        {doc.name}
                      </Heading>
                      <span className="text-xs tracking-wider font-mono text-brand-sage-dark uppercase block">
                        {doc.role}
                      </span>
                    </div>

                    <p className="text-sm italic text-brand-text-muted leading-relaxed">
                      &ldquo;{doc.carePhilosophy}&rdquo;
                    </p>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block mb-1">Areas of Interest</span>
                      <div className="flex flex-wrap gap-1.5">
                        {doc.areasOfInterest.map((interest, i) => (
                          <span key={i} className="text-xs bg-brand-stone/50 px-2.5 py-0.5 text-brand-text-main rounded-sm font-sans">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block">Languages Spoken</span>
                      <span className="text-xs text-brand-text-main">{doc.languages.join(", ")}</span>
                    </div>
                  </Stack>

                  <div className="pt-6 mt-6 border-t border-brand-stone/30">
                    <Button as="link" href={`/doctors/${doc.id}`} variant="quiet">
                      Read full biography <ArrowRight className="w-4 h-4 ml-1 inline-block" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* SECTION 6: CONSULTATION JOURNEY */}
      <Section spacing="default" surface="ivory">
        <Container>
          <SectionHeader
            eyebrow="Clinical Framework"
            title="The consultation journey"
            description="Our structured care delivery pathways ensure every diagnostic parameter is accounted for before clinical steps begin."
            layout="stacked"
            align="center"
            className="mb-16 text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[2.25rem] left-[10%] right-[10%] h-[1px] bg-brand-stone/60" aria-hidden="true" />
            
            {[
              {
                step: "01",
                title: "Share your concern",
                desc: "Schedule a private consultation and share your skin or hair concern. We start without pre-packaged templates."
              },
              {
                step: "02",
                title: "Receive considered assessment",
                desc: "Our dermatologists conduct diagnostic magnification to examine your cellular biology and skin barrier health."
              },
              {
                step: "03",
                title: "Review suitable care options",
                desc: "Explore a conservative medical plan outlining clinical therapies, expected sessions, costs, and downtime."
              },
              {
                step: "04",
                title: "Thoughtful follow-up",
                desc: "We monitor biological healing at set milestones, adapting home protocols to support lasting, natural integrity."
              }
            ].map((journey, i) => (
              <div key={i} className="relative flex flex-col items-start text-left md:text-center md:items-center">
                <div className="w-12 h-12 rounded-sm bg-white border border-brand-stone flex items-center justify-center font-serif text-lg font-medium text-brand-green-deep shadow-sm mb-6 z-10 md:mx-auto">
                  {journey.step}
                </div>
                <Heading level={4} size="sm" className="mb-2">
                  {journey.title}
                </Heading>
                <p className="text-xs text-brand-text-muted leading-relaxed max-w-xs md:mx-auto">
                  {journey.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 7: TECHNOLOGY & SAFETY */}
      <Section spacing="default" surface="stone" className="bg-brand-stone/10">
        <Container>
          <SectionHeader
            eyebrow="Safety First"
            title="Technology & clinical safety"
            description="Our focus is medical accountability. We maintain strict procedural environments and carefully calibrated energy platforms."
            layout="split"
            className="mb-12 md:mb-16"
          />

          <Grid cols={4} gap="md">
            {technologiesData.map((tech) => (
              <Card key={tech.id} surface="white" className="p-6 border border-brand-stone/40">
                <Stack gap="sm">
                  <div className="w-8 h-8 rounded-sm bg-brand-sage/10 text-brand-sage-dark flex items-center justify-center mb-2">
                    <Check className="w-4 h-4" />
                  </div>
                  <Heading level={4} size="sm">
                    {tech.name}
                  </Heading>
                  <p className="text-xs text-brand-text-muted leading-relaxed">
                    {tech.description}
                  </p>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* SECTION 8: RESPONSIBLE RESULTS CONCEPT */}
      <Section spacing="default" surface="ivory">
        <Container>
          <SectionHeader
            eyebrow="Evidence of Care"
            title="Responsible results"
            description="Dermatology results vary based on biological response, skin type, and absolute compliance. We do not use misleading before-and-after photographs."
            layout="stacked"
            align="center"
            className="mb-12 text-center"
          />

          <div className="max-w-4xl mx-auto border border-brand-stone/60 bg-white p-8 md:p-12 rounded-sm text-center relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-brand-stone/50 px-2 py-0.5 text-[9px] font-mono tracking-wider uppercase rounded-sm">
              Clinical Policy
            </div>
            
            <div className="flex flex-col items-center justify-center py-8">
              <div className="p-4 rounded-full bg-brand-stone/30 text-brand-text-muted mb-4">
                <Lock className="w-8 h-8 opacity-40" />
              </div>
              <p className="font-serif text-lg md:text-xl text-brand-green-deep font-medium italic mb-2">
                &ldquo;Client-approved result imagery will appear here.&rdquo;
              </p>
              <p className="text-xs text-brand-text-muted max-w-md leading-relaxed mb-6">
                To respect absolute patient confidentiality and medical ethics, Aurevia only shares verified clinical cases inside private treatment suites under strict professional guidelines.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-brand-stone/30 text-left">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block">Classification</span>
                  <span className="text-xs text-brand-green-deep font-medium">Acne Scar Care</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block">Session Count</span>
                  <span className="text-xs text-brand-green-deep font-medium">4 Sessions</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block">Timeframe</span>
                  <span className="text-xs text-brand-green-deep font-medium">16 Weeks</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block">Patient Consent</span>
                  <span className="text-xs text-brand-green-deep font-medium">Active (Private Option)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-brand-stone/20 text-center">
              <p className="text-[10px] text-brand-text-muted/70 italic leading-relaxed">
                *Disclaimer: All clinical images are verified cases under strict supervision. Biological response differs significantly between skin characteristics and recovery compliance. Safe results are primary.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 9: CLINIC EXPERIENCE GALLERY */}
      <Section spacing="default" surface="stone" className="bg-brand-stone/20">
        <Container>
          <SectionHeader
            eyebrow="Our Environment"
            title="The clinic experience"
            description="Every detail of our space is curated to provide a quiet, tranquil environment that minimizes medical anxiety and supports your calm state."
            layout="split"
            className="mb-12 md:mb-16"
          />

          <Grid cols={4} gap="md">
            {[
              {
                title: "Reception & Lounge",
                desc: "A warm, ivory-textured lounge designed with natural timber elements and soft ambient lighting.",
                image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
                fallback: "Aurevia Reception Suite"
              },
              {
                title: "Consultation Suite",
                desc: "A spacious and completely sound-insulated environment focused on open clinical diagnostics.",
                image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=1200",
                fallback: "Consultation Suite"
              },
              {
                title: "Advanced Laser Suite",
                desc: "Maintained under clinical parameters to deliver precision dermal treatments with safety.",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
                fallback: "Clinical treatment room"
              },
              {
                title: "Recovery & Care Suite",
                desc: "A quiet post-procedure relaxation bay with customized care services and privacy.",
                image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1200",
                fallback: "Aurevia Private Lounge"
              }
            ].map((gal, idx) => (
              <Card key={idx} surface="white" className="group overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-stone/10">
                  <ResponsiveMedia
                    src={gal.image}
                    alt={gal.fallback}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <CardContent className="p-6">
                  <Heading level={4} size="xs" className="mb-1 text-brand-green-deep">
                    {gal.title}
                  </Heading>
                  <p className="text-xs text-brand-text-muted leading-relaxed">
                    {gal.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* SECTION 10: EDUCATIONAL INSIGHTS */}
      <Section spacing="default" surface="ivory">
        <Container>
          <SectionHeader
            eyebrow="Dermatological Insights"
            title="Educational insights"
            description="Our dermatologists regularly publish evidence-led articles to demystify skin science and support considered home regimens."
            layout="split"
            className="mb-12 md:mb-16"
          />

          <Grid cols={3} gap="lg">
            {insightsData.map((ins) => (
              <Card key={ins.id} surface="white" className="flex flex-col h-full group" interaction="hover">
                <div className="relative aspect-[16/10] w-full bg-brand-stone/10 overflow-hidden">
                  <ResponsiveMedia
                    src={ins.image}
                    alt={ins.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] tracking-wider uppercase bg-brand-green-deep text-white px-2.5 py-1 font-mono">
                      {ins.category}
                    </span>
                  </div>
                </div>
                <CardContent className="flex-1 flex flex-col justify-between p-6">
                  <Stack gap="sm">
                    <div className="flex justify-between items-center text-[10px] font-mono text-brand-text-muted">
                      <span>{ins.publishDate}</span>
                      <span>{ins.readTime}</span>
                    </div>
                    <Heading level={3} size="sm" className="group-hover:text-brand-sage-dark transition-colors">
                      {ins.title}
                    </Heading>
                    <p className="text-xs text-brand-text-muted leading-relaxed">
                      {ins.summary}
                    </p>
                  </Stack>
                  <div className="pt-6 mt-6 border-t border-brand-stone/30">
                    <Button as="link" href={`/insights/${ins.id}`} variant="quiet">
                      Read scientific guide <ArrowRight className="w-4 h-4 ml-1 inline-block" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* SECTION 11: FAQ */}
      <Section spacing="default" surface="stone" className="bg-brand-stone/10 border-t border-brand-stone/40">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Clinical FAQ"
            title="Frequently asked questions"
            description="We believe in clear, uncompromised answers. Browse answers to our standard clinical parameters."
            layout="stacked"
            align="center"
            className="mb-12 text-center"
          />

          <Stack gap="md" className="max-w-2xl mx-auto">
            {faqsData.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="bg-white border border-brand-stone/50 rounded-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left font-serif text-brand-green-deep hover:text-brand-sage-dark focus-visible:outline-none focus-visible:bg-brand-stone/10 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif font-medium text-base sm:text-lg leading-relaxed">
                      {faq.question}
                    </span>
                    <span className="shrink-0 ml-4 p-1 rounded-full bg-brand-stone/20 text-brand-text-muted">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-brand-stone/20 text-sm text-brand-text-muted leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </Stack>
        </Container>
      </Section>

      {/* SECTION 12: FINAL CONSULTATION CTA */}
      <Section spacing="default" surface="dark" className="relative overflow-hidden bg-brand-green-deep text-white text-center py-24">
        <Container size="narrow">
          <Stack gap="lg" align="center" className="max-w-xl mx-auto">
            <Eyebrow className="text-brand-sand">Start Your Skin Journey</Eyebrow>
            <Heading level={2} size="xl" className="text-white">
              Schedule your diagnostic private consultation
            </Heading>
            <BodyText size="lg" className="text-brand-stone/80">
              Meet our dermatologists in an unhurried, evidence-led clinical assessment tailored entirely to your skin barrier health and structure.
            </BodyText>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto justify-center">
              <Button as="link" href="/book" variant="primary" className="bg-brand-sand text-brand-green-deep border-brand-sand hover:bg-brand-sand/90">
                Book a consultation
              </Button>
              <Button as="link" href="/contact" variant="secondary" className="border-white text-white hover:bg-white/10">
                Contact the clinic
              </Button>
            </div>

            <div className="pt-8 border-t border-brand-stone/20 w-full flex items-center justify-center gap-6 text-xs text-brand-stone/60">
              <span>Appointment required</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-sand" />
              <span>Indiranagar, Bengaluru</span>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  );
}
