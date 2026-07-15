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
  title: "Clinical Trichology & Hair Restoration | Treatments",
  description: "Specialist assessments, scalp diagnostics, and evidence-backed hair thinning solutions.",
};

export default function HairTreatmentsPage() {
  const treatments = treatmentsData.filter(t => t.category === "hair");

  return (
    <>
      <Section spacing="hero" surface="ivory" className="border-b border-brand-stone/30">
        <Container size="narrow" className="text-center">
          <Stack gap="md" align="center">
            <Button as="link" href="/treatments" variant="quiet" className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-text-muted hover:text-brand-sage mb-4">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to treatments portfolio
            </Button>
            <Eyebrow>Clinical Discipline</Eyebrow>
            <Heading level={1} size="xl">Clinical Trichology & Scalp Support</Heading>
            <BodyText size="lg" muted className="mt-4 max-w-2xl mx-auto">
              Our hair and scalp pathways prioritize precise trichoscopy evaluations. We stabilize pattern thinning and clear scalp inflammatory conditions using clinically validated, evidence-backed methodologies.
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
                      Trichology Therapy
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
                      Book assessment
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
