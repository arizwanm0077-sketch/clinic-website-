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
import { Lock, ShieldAlert, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible Results | Aurevia Skin & Hair Clinic",
  description: "Our policy on medical ethics: why we protect patient confidentiality and do not display misleading before-and-after imagery.",
};

export default function ResultsPage() {
  return (
    <>
      <Section spacing="hero" surface="ivory" className="border-b border-brand-stone/30">
        <Container size="narrow" className="text-center">
          <Stack gap="md" align="center">
            <Eyebrow>Clinical Ethics</Eyebrow>
            <Heading level={1} size="xl">Responsible results & confidentiality</Heading>
            <BodyText size="lg" muted className="mt-4 max-w-2xl mx-auto">
              In clinical medicine, biological responses vary. We choose not to participate in the commercial practice of displaying artificial before-and-after photographs. Instead, we prioritize honest, verifiable case studies.
            </BodyText>
          </Stack>
        </Container>
      </Section>

      {/* Main visual placeholder and policy declaration */}
      <Section spacing="default" surface="ivory">
        <Container size="narrow">
          <Card surface="white" className="p-8 md:p-12 border border-brand-stone/60 text-center relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-brand-stone/50 px-2 py-0.5 text-[9px] font-mono tracking-wider uppercase rounded-sm">
              Patient Protection
            </div>

            <div className="flex flex-col items-center justify-center py-6">
              <div className="p-4 rounded-full bg-brand-stone/20 text-brand-text-muted mb-4">
                <Lock className="w-8 h-8 opacity-40" />
              </div>
              
              <Heading level={2} size="md" className="font-serif italic text-brand-green-deep mb-2">
                &ldquo;Client-approved result imagery will appear here.&rdquo;
              </Heading>

              <BodyText size="sm" muted className="max-w-md leading-relaxed mb-8">
                To respect absolute patient confidentiality and medical ethics, Aurevia only shares verified clinical cases inside private treatment suites under strict professional guidelines.
              </BodyText>

              <div className="grid grid-cols-2 gap-4 w-full pt-6 border-t border-brand-stone/30 text-left text-xs font-mono">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-text-muted block">Classification</span>
                  <span className="text-brand-green-deep font-semibold">Dermal Resurfacing</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-text-muted block">Session Count</span>
                  <span className="text-brand-green-deep font-semibold">4 Sessions</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-text-muted block">Interval</span>
                  <span className="text-brand-green-deep font-semibold">16 Weeks</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-text-muted block">Consent Status</span>
                  <span className="text-brand-green-deep font-semibold">Private Option Only</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-brand-stone/20 text-left text-xs text-brand-text-muted leading-relaxed italic">
              *Disclaimer: Clinical outcomes differ significantly between skin characteristics, genetic predisposition, lifestyle factors, and strict compliance with our customized post-care instructions. Safe, long-term skin barrier health is our primary goal.
            </div>
          </Card>
        </Container>
      </Section>

      {/* Why We Protect Confidentially */}
      <Section spacing="default" surface="stone" className="bg-brand-stone/10 border-t border-brand-stone/30">
        <Container>
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider text-brand-sage-dark uppercase block">Our Philosophy</span>
            <Heading level={2} size="lg" className="mt-2">Why we protect patient privacy</Heading>
          </div>

          <Grid cols={3} gap="lg" className="max-w-5xl mx-auto">
            <Card surface="white" className="p-8 border border-brand-stone/40">
              <Stack gap="sm">
                <div className="w-8 h-8 rounded-full bg-brand-sage/10 text-brand-sage-dark flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage" />
                </div>
                <Heading level={3} size="xs">Confidence-First Ethics</Heading>
                <BodyText size="xs" muted>
                  We treat skin concerns as medical conditions, not marketing products. Patients trust us to heal their skin without exposing their sensitive journeys.
                </BodyText>
              </Stack>
            </Card>

            <Card surface="white" className="p-8 border border-brand-stone/40">
              <Stack gap="sm">
                <div className="w-8 h-8 rounded-full bg-brand-sage/10 text-brand-sage-dark flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage" />
                </div>
                <Heading level={3} size="xs">Biological Uniqueness</Heading>
                <BodyText size="xs" muted>
                  No two skin barriers react identically. Showcasing a &apos;perfect&apos; case can create unrealistic expectations that ignore your unique genetic healing timeline.
                </BodyText>
              </Stack>
            </Card>

            <Card surface="white" className="p-8 border border-brand-stone/40">
              <Stack gap="sm">
                <div className="w-8 h-8 rounded-full bg-brand-sage/10 text-brand-sage-dark flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage" />
                </div>
                <Heading level={3} size="xs">Dignity in Healing</Heading>
                <BodyText size="xs" muted>
                  Our treatment suites are private enclaves. If you decide to go ahead, your diagnostic photographs are encrypted and never utilized for commercial promotions.
                </BodyText>
              </Stack>
            </Card>
          </Grid>

          <div className="mt-16 text-center max-w-md mx-auto">
            <Heading level={2} size="sm" className="mb-4">Begin a personalized assessment</Heading>
            <Button as="link" href="/book" variant="primary" className="w-full">
              Book initial diagnostics
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
