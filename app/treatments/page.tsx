import React from "react";
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
  SectionHeader 
} from "@/components/primitives";
import { ArrowRight, Sparkles } from "lucide-react";
import { treatmentsData } from "@/config/demoData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatments Portfolio | Aurevia Skin & Hair Clinic",
  description: "Browse our specialist-led clinical treatments across Skin, Hair, Laser, and Aesthetics.",
};

export default function TreatmentsPage() {
  const categories = [
    {
      id: "skin",
      title: "Medical Dermatology & Resurfacing",
      desc: "Comprehensive solutions for acne scars, melasma, barrier repair, and custom skin wellness.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200",
      treatments: treatmentsData.filter(t => t.category === "skin"),
    },
    {
      id: "hair",
      title: "Clinical Trichology & Scalp Support",
      desc: "Advanced follicular assessments and hair loss therapies targeting density and scalp micro-environments.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200",
      treatments: treatmentsData.filter(t => t.category === "hair"),
    },
    {
      id: "laser",
      title: "Precision Energy-Based Lasers",
      desc: "Gold-standard laser wavelengths safe for all Fitzpatrick skin types, targeting hair reduction and tone.",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1200",
      treatments: treatmentsData.filter(t => t.category === "laser"),
    },
    {
      id: "aesthetics",
      title: "Refined, Natural Enhancement",
      desc: "Subtle anatomical restoration and facial balancing using premium injectable scaffolding.",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200",
      treatments: treatmentsData.filter(t => t.category === "aesthetics"),
    }
  ];

  return (
    <>
      <Section spacing="hero" surface="ivory" className="border-b border-brand-stone/30">
        <Container size="narrow" className="text-center">
          <Stack gap="md" align="center">
            <Eyebrow>Our Portfolio</Eyebrow>
            <Heading level={1} size="xl">Clinical treatment categories</Heading>
            <BodyText size="lg" muted className="mt-4 max-w-2xl mx-auto">
              We offer bespoke, dermatologist-supervised treatment pathways using state-of-the-art platforms, structured carefully around your biological goals and skin barrier health.
            </BodyText>
          </Stack>
        </Container>
      </Section>

      <Section spacing="default" surface="ivory">
        <Container>
          <Stack gap="xl">
            {categories.map((cat, idx) => (
              <div key={cat.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-8 border-b border-brand-stone/30 last:border-b-0">
                <div className="lg:col-span-5">
                  <div className="sticky top-28">
                    <div className="relative aspect-[4/3] w-full bg-brand-stone/10 overflow-hidden rounded-sm mb-6">
                      <ResponsiveMedia src={cat.image} alt={cat.title} fill />
                    </div>
                    <span className="text-[10px] tracking-widest font-mono text-brand-sage-dark uppercase block mb-1">
                      Clinical Category
                    </span>
                    <Heading level={2} size="md" className="mb-2">
                      {cat.title}
                    </Heading>
                    <p className="text-sm text-brand-text-muted leading-relaxed mb-6">
                      {cat.desc}
                    </p>
                    <Button as="link" href={`/treatments/${cat.id}`} variant="secondary">
                      Explore category path
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 gap-4">
                    {cat.treatments.map((t) => (
                      <Card key={t.id} surface="white" className="p-6 hover:shadow-md transition-all duration-300">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                          <Stack gap="xs">
                            <Heading level={3} size="xs" className="text-brand-green-deep">
                              {t.title}
                            </Heading>
                            <p className="text-xs text-brand-text-muted leading-relaxed max-w-xl">
                              {t.shortDescription}
                            </p>
                            <div className="flex flex-wrap gap-4 mt-2 text-[10px] text-brand-text-muted font-mono">
                              <span>Downtime: {t.downtime}</span>
                              <span>•</span>
                              <span>Expected sessions: {t.expectedSessions}</span>
                            </div>
                          </Stack>
                          <Button as="link" href={`/treatments/${cat.id}/${t.id}`} variant="quiet" className="shrink-0 text-xs mt-1">
                            Details <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Stack>
        </Container>
      </Section>
    </>
  );
}
