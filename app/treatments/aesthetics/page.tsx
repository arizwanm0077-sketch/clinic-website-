import React from "react";
import { 
  Container, 
  Section, 
  Stack, 
  Heading, 
  Eyebrow, 
  BodyText, 
  Button,
  Card 
} from "@/components/primitives";
import { ArrowLeft } from "lucide-react";
import { treatmentsData } from "@/config/demoData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refined Aesthetic Medicine | Treatments",
  description: "Considered, subtle facial balancing and structural restoration using certified dermal scaffolding.",
};

export default function AestheticsTreatmentsPage() {
  const treatments = treatmentsData.filter(t => t.category === "aesthetics");

  return (
    <>
      <Section spacing="hero" surface="ivory" className="border-b border-brand-stone/30">
        <Container size="narrow" className="text-center">
          <Stack gap="md" align="center">
            <Button as="link" href="/treatments" variant="quiet" className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-text-muted hover:text-brand-sage mb-4">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to treatments portfolio
            </Button>
            <Eyebrow>Clinical Discipline</Eyebrow>
            <Heading level={1} size="xl">Considered Aesthetic Medicine</Heading>
            <BodyText size="lg" muted className="mt-4 max-w-2xl mx-auto">
              We reject artificial proportions. Our aesthetic practice is focused entirely on precise anatomical volume restoration and facial balancing that honors your unique, individual expressions.
            </BodyText>
          </Stack>
        </Container>
      </Section>

      <Section spacing="default" surface="ivory">
        <Container size="narrow">
          <Stack gap="md">
            {treatments.map((t) => (
              <Card key={t.id} surface="white" className="p-8 border border-brand-stone/40 hover:border-brand-sand transition-all duration-300">
                <Stack gap="md">
                  <div>
                    <span className="text-[10px] tracking-widest font-mono text-brand-sage-dark uppercase block mb-1">
                      Structural Restoration
                    </span>
                    <Heading level={2} size="md">
                      {t.title}
                    </Heading>
                  </div>
                  
                  <p className="text-sm text-brand-text-muted leading-relaxed">
                    {t.shortDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-brand-stone/30 text-xs">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block">Downtime</span>
                      <span className="font-medium text-brand-green-deep">{t.downtime}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block">Expected Course</span>
                      <span className="font-medium text-brand-green-deep">{t.expectedSessions}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs italic text-brand-text-muted">Specialist supervised</span>
                    <Button as="link" href="/book" variant="primary" size="sm">
                      Book aesthetic consult
                    </Button>
                  </div>
                </Stack>
              </Card>
            ))}
          </Stack>
        </Container>
      </Section>
    </>
  );
}
