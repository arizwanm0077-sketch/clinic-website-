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
import { Shield, Sparkles, User, FileCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Aurevia Skin & Hair Clinic",
  description: "Learn about Aurevia's medical governance, patient-first care philosophy, and commitment to naturally confident results.",
};

export default function AboutPage() {
  return (
    <>
      {/* Editorial Header */}
      <Section spacing="hero" surface="ivory" className="border-b border-brand-stone/30">
        <Container size="narrow" className="text-center">
          <Stack gap="md" align="center">
            <Eyebrow>Our Foundation</Eyebrow>
            <Heading level={1} size="xl">Evidence-led dermatology. Naturally confident results.</Heading>
            <BodyText size="lg" muted className="mt-4 max-w-2xl mx-auto">
              Aurevia was founded to bridge the gap between rigorous medical science and premium, patient-first aesthetic care. We believe that skin and hair health is deeply personal, requiring unhurried diagnostics and bespoke, conservative therapies.
            </BodyText>
          </Stack>
        </Container>
      </Section>

      {/* Core Values / Philosophy */}
      <Section spacing="default" surface="stone" className="bg-brand-stone/10">
        <Container>
          <Grid cols={3} gap="lg">
            <Card surface="white" className="p-8 border border-brand-stone/40">
              <Stack gap="sm">
                <div className="w-10 h-10 rounded-sm bg-brand-sage/10 text-brand-sage-dark flex items-center justify-center mb-2">
                  <Shield className="w-5 h-5" />
                </div>
                <Heading level={2} size="sm">Absolute Medical Integrity</Heading>
                <BodyText size="sm" muted>
                  We are medical doctors first. Every assessment, technology calibrating, and clinical formulation is governed by strict evidence-based guidelines and safety protocols.
                </BodyText>
              </Stack>
            </Card>

            <Card surface="white" className="p-8 border border-brand-stone/40">
              <Stack gap="sm">
                <div className="w-10 h-10 rounded-sm bg-brand-sage/10 text-brand-sage-dark flex items-center justify-center mb-2">
                  <User className="w-5 h-5" />
                </div>
                <Heading level={2} size="sm">Patient-Centric Care</Heading>
                <BodyText size="sm" muted>
                  We do not believe in pre-packaged beauty menus. Our consultations last an unhurried 30 minutes, prioritizing long-term biological health over immediate commercial transactions.
                </BodyText>
              </Stack>
            </Card>

            <Card surface="white" className="p-8 border border-brand-stone/40">
              <Stack gap="sm">
                <div className="w-10 h-10 rounded-sm bg-brand-sage/10 text-brand-sage-dark flex items-center justify-center mb-2">
                  <Sparkles className="w-5 h-5" />
                </div>
                <Heading level={2} size="sm">Subtle, Natural Outcomes</Heading>
                <BodyText size="sm" muted>
                  True restoration is invisible. Our goal is to enhance your natural anatomical scaffolding and stabilize skin-barrier biology so you leave looking refreshed and completely like yourself.
                </BodyText>
              </Stack>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Editorial Split Section */}
      <Section spacing="default" surface="ivory">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] w-full bg-brand-stone/10 overflow-hidden rounded-sm">
              <ResponsiveMedia 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
                alt="Aurevia private consultation suite"
                fill
              />
            </div>
            <div className="lg:col-span-6">
              <Stack gap="md" className="max-w-xl">
                <span className="text-xs font-mono tracking-wider text-brand-sage-dark uppercase">Our Governance</span>
                <Heading level={2} size="lg">Supervised clinical environments</Heading>
                <BodyText size="md" muted>
                  Our clinic is maintained under strict sterile and technical standards. Every equipment system is calibrated according to global safety parameters, ensuring precision energy delivery and absolute patient comfort.
                </BodyText>
                <BodyText size="md" muted>
                  We focus on professional accountability. All staff members undergo continuous clinical coaching, and we strictly use FDA-approved or certified biocompatible compounds to restore structural volumes.
                </BodyText>
                <div className="pt-4">
                  <Button as="link" href="/doctors" variant="primary">
                    Meet our dermatologists
                  </Button>
                </div>
              </Stack>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
