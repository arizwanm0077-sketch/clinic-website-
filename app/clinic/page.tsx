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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Clinic Experience | Aurevia Skin & Hair Clinic",
  description: "Take a virtual tour of Aurevia's tranquil clinical spaces in Indiranagar, Bengaluru, designed to support comfort and calm.",
};

export default function ClinicExperiencePage() {
  return (
    <>
      <Section spacing="hero" surface="ivory" className="border-b border-brand-stone/30">
        <Container size="narrow" className="text-center">
          <Stack gap="md" align="center">
            <Eyebrow>Our Environment</Eyebrow>
            <Heading level={1} size="xl">The clinic experience</Heading>
            <BodyText size="lg" muted className="mt-4 max-w-2xl mx-auto">
              Our clinic environment is curated to minimize clinical anxiety. Designed with natural textures, soft ivory tones, and natural ambient light, Aurevia is a peaceful sanctuary for dermatological care.
            </BodyText>
          </Stack>
        </Container>
      </Section>

      <Section spacing="default" surface="ivory">
        <Container>
          <Grid cols={2} gap="lg">
            {[
              {
                title: "Reception & Tranquil Lounge",
                desc: "A warm, ivory-textured welcoming space featuring soft timber elements, comfortable seats, and botanical accents designed to help you calm and rest upon arrival.",
                image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
                fallback: "Aurevia Reception Suite"
              },
              {
                title: "Diagnostic Consultation Suites",
                desc: "Completely soundproofed, comfortable diagnostic rooms where our consulting dermatologists perform unhurried assessments using advanced dermatoscopy.",
                image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=1200",
                fallback: "Consultation Suite"
              },
              {
                title: "Advanced Laser Procedure Room",
                desc: "Maintained under rigorous hospital-grade sanitary parameters, equipped with state-of-the-art precision controlled energy laser systems.",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
                fallback: "Laser Procedure Room"
              },
              {
                title: "Post-Procedure Recovery Bay",
                desc: "A quiet, private lounge space where patients relax after procedures while receiving custom barrier cooling elements and a warm diagnostic review.",
                image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1200",
                fallback: "Post-Procedure Bay"
              }
            ].map((room, idx) => (
              <Card key={idx} surface="white" className="overflow-hidden border border-brand-stone/40 hover:shadow-md transition-all duration-300">
                <div className="relative aspect-[16/10] w-full bg-brand-stone/10 overflow-hidden">
                  <ResponsiveMedia src={room.image} alt={room.title} fill />
                </div>
                <CardContent className="p-8">
                  <span className="text-[9px] tracking-widest font-mono text-brand-sage-dark uppercase block mb-1">
                    Clinic Tour · Area 0{idx + 1}
                  </span>
                  <Heading level={2} size="sm" className="text-brand-green-deep mb-2">
                    {room.title}
                  </Heading>
                  <p className="text-xs text-brand-text-muted leading-relaxed">
                    {room.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </Grid>

          <div className="mt-16 text-center max-w-md mx-auto">
            <Heading level={2} size="sm" className="mb-4">Visit our clinic in Indiranagar</Heading>
            <BodyText size="sm" muted className="mb-6">
              Aurevia Clinic is located in a premium, highly accessible enclave in Bengaluru. All clinical visits are strictly by prior appointment only.
            </BodyText>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button as="link" href="/book" variant="primary" className="flex-1">
                Book a consultation
              </Button>
              <Button as="link" href="/contact" variant="secondary" className="flex-1">
                View contact details
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
