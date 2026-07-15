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
import { ArrowLeft, Mail, Calendar, HelpCircle, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr Ananya Rao Biography | Aurevia Skin & Hair Clinic",
  description: "Read the biography of Dr Ananya Rao, Senior Consultant Dermatologist, and explore her diagnostic consultation approach.",
};

export default function DrAnanyaPage() {
  return (
    <>
      <Section spacing="hero" surface="ivory" className="border-b border-brand-stone/30">
        <Container>
          <Button as="link" href="/doctors" variant="quiet" className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-text-muted hover:text-brand-sage mb-6">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to specialists directory
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-[3/4] w-full bg-brand-stone/10 overflow-hidden rounded-sm">
              <ResponsiveMedia 
                src="https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=1000" 
                alt="Dr Ananya Rao"
                fill
              />
            </div>

            <div className="lg:col-span-7">
              <Stack gap="md">
                <Eyebrow>Clinic Co-Founder</Eyebrow>
                <Heading level={1} size="xl">Dr Ananya Rao</Heading>
                <span className="text-xs font-mono tracking-wider text-brand-sage-dark uppercase block -mt-2">
                  Senior Consultant Dermatologist
                </span>
                
                <BodyText size="lg" muted className="mt-2">
                  &ldquo;I believe dermatology should be a partnership. My goal is to demystify skin health, providing patients with evidence-backed, conservative care plans that honor their skin&apos;s natural biology.&rdquo;
                </BodyText>

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-brand-stone/30 text-xs font-mono text-brand-text-muted">
                  <div>
                    <span className="block opacity-60 uppercase text-[10px] tracking-wider">Experience</span>
                    <span className="text-brand-green-deep font-semibold">12+ Years Clinical Practice</span>
                  </div>
                  <div>
                    <span className="block opacity-60 uppercase text-[10px] tracking-wider">Languages Spoken</span>
                    <span className="text-brand-green-deep font-semibold">English, Kannada, Hindi</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button as="link" href="/book" variant="primary">
                    Book consultation with Dr Rao
                  </Button>
                </div>
              </Stack>
            </div>
          </div>
        </Container>
      </Section>

      {/* Areas of Interest and Professional Background */}
      <Section spacing="default" surface="stone" className="bg-brand-stone/10 border-b border-brand-stone/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono tracking-wider text-brand-sage-dark uppercase block mb-1">Clinical Portfolio</span>
              <Heading level={2} size="md">Specialist expertise</Heading>
              <BodyText size="sm" muted className="mt-4">
                Dr Ananya Rao specializes in deep-layer dermal remodeling, pharmacology of active topicals, and high-precision laser procedures.
              </BodyText>
              <BodyText size="sm" muted className="mt-2">
                She guides her research and clinical treatments around restoring structural integrity to damaged epidermal barriers.
              </BodyText>
            </div>

            <div className="lg:col-span-8">
              <Grid cols={2} gap="md">
                {[
                  {
                    title: "Advanced Acne Scar Remodeling",
                    desc: "Supervising subcision and fractional RF therapies to release deep fibrotic tissue bands and stimulate collagen scaffolding."
                  },
                  {
                    title: "Laser Pharmacology",
                    desc: "Calibration of medical laser platforms safe for all skin shades, optimizing epidermal pigment balancing without rebound risks."
                  },
                  {
                    title: "Barrier Integrity Assessment",
                    desc: "Investigating chronic inflammation, adult acne, and barrier compromises under high-magnification dermatoscopy."
                  },
                  {
                    title: "Medical Trichology",
                    desc: "Applying deep trichoscopic scalp diagnostics to address early-stage androgenetic pattern hair loss and alopecia."
                  }
                ].map((spec, idx) => (
                  <Card key={idx} surface="white" className="p-6 border border-brand-stone/40">
                    <Stack gap="xs">
                      <div className="flex gap-2 items-center text-brand-sage-dark mb-1">
                        <CheckCircle className="w-4 h-4 shrink-0 text-brand-sage" />
                        <span className="font-serif font-medium text-sm text-brand-green-deep">{spec.title}</span>
                      </div>
                      <p className="text-xs text-brand-text-muted leading-relaxed">
                        {spec.desc}
                      </p>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            </div>
          </div>
        </Container>
      </Section>

      {/* Consultation Approach */}
      <Section spacing="default" surface="ivory">
        <Container size="narrow">
          <Stack gap="lg" className="text-center">
            <Eyebrow>Clinical Consultation</Eyebrow>
            <Heading level={2} size="lg">The 30-minute diagnostic session</Heading>
            <BodyText size="md" muted className="max-w-xl mx-auto leading-relaxed">
              Dr Rao strictly follows a diagnostics-first policy. She believes a medical consultation should never be a commercial sales pitch.
            </BodyText>

            <div className="text-left max-w-xl mx-auto mt-8 space-y-6">
              {[
                {
                  title: "1. Detailed Dermal Diagnostic",
                  desc: "We analyze your skin barrier under medical-grade high-magnification systems to measure oil production, structural density, and pigment depth."
                },
                {
                  title: "2. Complete Medical & Lifestyle Audit",
                  desc: "We review your active topical skincare ingredients, medical history, systemic triggers, and stressors that could affect cellular healing."
                },
                {
                  title: "3. Conservative Treatment Roadmap",
                  desc: "We deliver an honest, clinical treatment roadmap detailing options, expected outcomes, sessions, downtime parameters, and transparent costs."
                }
              ].map((step, idx) => (
                <div key={idx} className="pb-6 border-b border-brand-stone/30 last:border-b-0">
                  <h3 className="font-serif font-medium text-brand-green-deep text-base mb-1">{step.title}</h3>
                  <p className="text-xs text-brand-text-muted leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Button as="link" href="/book" variant="primary">
                Book diagnostics session
              </Button>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  );
}
