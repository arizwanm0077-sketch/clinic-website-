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
  ResponsiveMedia 
} from "@/components/primitives";
import { ArrowRight } from "lucide-react";
import { doctorsData } from "@/config/demoData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Specialists | Aurevia Skin & Hair Clinic",
  description: "Meet our consulting dermatologists, highly trained medical doctors committed to evidence-led, ethical patient care.",
};

export default function DoctorsPage() {
  return (
    <>
      <Section spacing="hero" surface="ivory" className="border-b border-brand-stone/30">
        <Container size="narrow" className="text-center">
          <Stack gap="md" align="center">
            <Eyebrow>Clinical Leadership</Eyebrow>
            <Heading level={1} size="xl">Our consulting specialists</Heading>
            <BodyText size="lg" muted className="mt-4 max-w-2xl mx-auto">
              Our clinic is governed by qualified dermatologists who are medical doctors first. We prioritize precise diagnostics, clinical safety, and honest, patient-centric recommendations.
            </BodyText>
          </Stack>
        </Container>
      </Section>

      <Section spacing="default" surface="ivory">
        <Container>
          <Grid cols={2} gap="lg">
            {doctorsData.map((doc) => (
              <Card key={doc.id} surface="white" className="flex flex-col h-full overflow-hidden border border-brand-stone/40 hover:shadow-md transition-all duration-300">
                <div className="relative aspect-[16/10] w-full bg-brand-stone/10 overflow-hidden">
                  <ResponsiveMedia src={doc.image} alt={doc.name} fill />
                </div>
                <CardContent className="flex-1 flex flex-col justify-between p-8">
                  <Stack gap="md">
                    <div>
                      <Heading level={2} size="md" className="text-brand-green-deep">
                        {doc.name}
                      </Heading>
                      <span className="text-xs font-mono tracking-wider text-brand-sage-dark uppercase block mt-1">
                        {doc.role}
                      </span>
                    </div>

                    <p className="text-sm italic text-brand-text-muted leading-relaxed">
                      &ldquo;{doc.carePhilosophy}&rdquo;
                    </p>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block mb-1">Key Disciplines</span>
                      <div className="flex flex-wrap gap-2">
                        {doc.areasOfInterest.map((interest, i) => (
                          <span key={i} className="text-xs bg-brand-stone/40 px-2.5 py-0.5 text-brand-text-main rounded-sm">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Stack>

                  <div className="pt-6 mt-8 border-t border-brand-stone/30 flex justify-between items-center">
                    <span className="text-xs text-brand-text-muted">Languages: {doc.languages.join(", ")}</span>
                    <Button as="link" href={`/doctors/${doc.id}`} variant="primary" size="sm">
                      Read full biography <ArrowRight className="w-4 h-4 ml-1 inline-block" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}
