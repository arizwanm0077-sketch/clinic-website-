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
  Card 
} from "@/components/primitives";
import { ArrowRight } from "lucide-react";
import { concernsData } from "@/config/demoData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Concerns | Aurevia Skin & Hair Clinic",
  description: "Explore evidence-based patient guides and specialist guidance for common skin, scalp, and aesthetic concerns.",
};

export default function ConcernsPage() {
  return (
    <>
      <Section spacing="hero" surface="ivory" className="border-b border-brand-stone/30">
        <Container size="narrow" className="text-center">
          <Stack gap="md" align="center">
            <Eyebrow>Patient Education</Eyebrow>
            <Heading level={1} size="xl">Clinical concern directory</Heading>
            <BodyText size="lg" muted className="mt-4 max-w-2xl mx-auto">
              We guide our patients based on their primary biological symptoms. Browse our evidence-led directories to understand the underlying science of your skin and hair concerns.
            </BodyText>
          </Stack>
        </Container>
      </Section>

      <Section spacing="default" surface="ivory">
        <Container>
          <Grid cols={2} gap="lg">
            {concernsData.map((con) => (
              <Card key={con.id} surface="white" className="p-8 border border-brand-stone/40 hover:border-brand-sand transition-all duration-300 flex flex-col justify-between">
                <Stack gap="md">
                  <div>
                    <span className="text-[10px] tracking-widest font-mono text-brand-sage-dark uppercase block mb-1">
                      {con.category}
                    </span>
                    <Heading level={2} size="md">
                      {con.title}
                    </Heading>
                  </div>
                  
                  <p className="text-sm text-brand-text-muted leading-relaxed">
                    {con.shortDescription}
                  </p>
                  
                  <div className="pt-4 border-t border-brand-stone/10 text-xs text-brand-text-muted leading-relaxed italic">
                    Includes educational insights, physiological triggers, and recommended therapies.
                  </div>
                </Stack>

                <div className="pt-6 mt-6 border-t border-brand-stone/30 flex justify-between items-center">
                  <span className="text-xs text-brand-text-muted">Evidence-backed guides</span>
                  <Button as="link" href={`/concerns/${con.id}`} variant="primary" size="sm">
                    Read guide <ArrowRight className="w-4 h-4 ml-1 inline-block" />
                  </Button>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}
