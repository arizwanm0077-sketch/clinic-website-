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
import { ArrowLeft, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acne & Acne Scar Care | Aurevia Skin & Hair Clinic",
  description: "Specialist-led combination protocols including subcision, laser resurfacing, and microneedling RF for deep atrophic acne scars.",
};

export default function AcneScarTreatmentPage() {
  return (
    <>
      <Section spacing="hero" surface="ivory" className="border-b border-brand-stone/30">
        <Container>
          <Button as="link" href="/treatments/skin" variant="quiet" className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-text-muted hover:text-brand-sage mb-6">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to skin treatments
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Stack gap="md">
                <Eyebrow>Bespoke Dermal Remodeling</Eyebrow>
                <Heading level={1} size="xl">Acne and acne-scar care</Heading>
                <BodyText size="lg" muted className="mt-2">
                  Atrophic acne scars are complex structural challenges. We reject single-modality templates in favor of tailored combination therapy, gently releasing fibrotic scar tissues and stimulating healthy dermal scaffolding.
                </BodyText>
                
                <div className="flex flex-wrap gap-6 mt-4 text-xs font-mono text-brand-text-muted">
                  <div>
                    <span className="block opacity-60 uppercase text-[10px] tracking-wider">Downtime</span>
                    <span className="text-brand-green-deep font-semibold">3 to 5 days</span>
                  </div>
                  <div>
                    <span className="block opacity-60 uppercase text-[10px] tracking-wider">Expected Sessions</span>
                    <span className="text-brand-green-deep font-semibold">3 to 5 sessions</span>
                  </div>
                  <div>
                    <span className="block opacity-60 uppercase text-[10px] tracking-wider">Interval</span>
                    <span className="text-brand-green-deep font-semibold">4 to 6 weeks</span>
                  </div>
                  <div>
                    <span className="block opacity-60 uppercase text-[10px] tracking-wider">Supervision</span>
                    <span className="text-brand-green-deep font-semibold">Qualified Dermatologist</span>
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <Button as="link" href="/book" variant="primary">
                    Book diagnostic consultation
                  </Button>
                  <Button as="link" href="/contact" variant="secondary">
                    Inquire via WhatsApp
                  </Button>
                </div>
              </Stack>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/5] bg-brand-stone/10 overflow-hidden rounded-sm">
              <ResponsiveMedia 
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1200" 
                alt="Aurevia advanced microneedling RF platform in treatment suite"
                fill
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Clinical Science and Approach */}
      <Section spacing="default" surface="stone" className="bg-brand-stone/10 border-b border-brand-stone/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono tracking-wider text-brand-sage-dark uppercase block mb-1">Dermal Science</span>
              <Heading level={2} size="md">Our clinical methodology</Heading>
              <BodyText size="sm" muted className="mt-4">
                Depressed acne scars are anchored by tough, fibrotic tissue bands pulling down on the epidermis. Topical creams cannot reach these depths. 
              </BodyText>
              <BodyText size="sm" muted className="mt-2">
                We combine subcision—to gently sever those deep mechanical bonds—with microneedling radiofrequency (MNRF) and laser toning to trigger a cascade of organized, healthy, collagen production.
              </BodyText>
            </div>

            <div className="lg:col-span-8">
              <Grid cols={2} gap="md">
                {[
                  {
                    title: "Diagnostic Subcision",
                    desc: "A meticulous, micro-targeted technique where a specialist needle is used to release tight, underlying scar anchors under local numbing."
                  },
                  {
                    title: "Microneedling RF (MNRF)",
                    desc: "Delivers controlled thermal energy precisely to the deeper dermis, stimulating neo-collagenesis without thermal damage to the surface."
                  },
                  {
                    title: "Fractional Laser Toning",
                    desc: "Refines outer epidermis texture, targets post-inflammatory vascular redness, and blends scar boundaries with surrounding skin."
                  },
                  {
                    title: "Barrier-Supporting Peels",
                    desc: "Gentle chemical exfoliators to stimulate upper-layer cellular renewal and clarify active acne triggers simultaneously."
                  }
                ].map((step, idx) => (
                  <Card key={idx} surface="white" className="p-6 border border-brand-stone/40">
                    <Stack gap="xs">
                      <div className="flex gap-2 items-center text-brand-sage-dark mb-1">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span className="font-serif font-medium text-sm text-brand-green-deep">{step.title}</span>
                      </div>
                      <p className="text-xs text-brand-text-muted leading-relaxed">
                        {step.desc}
                      </p>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            </div>
          </div>
        </Container>
      </Section>

      {/* Patient Guidelines: Suitability, Recovery, Risks */}
      <Section spacing="default" surface="ivory">
        <Container size="narrow">
          <Stack gap="lg">
            <div className="text-center">
              <span className="text-xs font-mono tracking-wider text-brand-sage-dark uppercase">Patient Care Guide</span>
              <Heading level={2} size="lg" className="mt-2">What you need to expect</Heading>
            </div>

            <div className="space-y-6 mt-8">
              <div className="flex gap-4 items-start pb-6 border-b border-brand-stone/30">
                <ShieldCheck className="w-6 h-6 text-brand-sage shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-medium text-brand-green-deep text-base mb-1">Suitability Assessment</h3>
                  <p className="text-xs text-brand-text-muted leading-relaxed">
                    This therapy is ideal for post-acne boxcar, rolling, and atrophic scars. It requires active acne triggers to be relatively stable first. During your consultation, your dermatologist will map out your specific scar types to ensure optimal outcomes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start pb-6 border-b border-brand-stone/30">
                <ShieldCheck className="w-6 h-6 text-brand-sage shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-medium text-brand-green-deep text-base mb-1">Downtime & Recovery</h3>
                  <p className="text-xs text-brand-text-muted leading-relaxed">
                    Expect 2 to 3 days of localized swelling, mild bruising from subcision, and a tiny grid pattern of redness. This is a positive indicator of biological activation. Makeup can usually be safely worn after 48 hours with proper physical sunscreen protection.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start pb-6">
                <HelpCircle className="w-6 h-6 text-brand-sage shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-medium text-brand-green-deep text-base mb-1">Risks & Honest Limitations</h3>
                  <p className="text-xs text-brand-text-muted leading-relaxed">
                    While combination therapy is highly effective, deep atrophic scars can rarely be erased completely. Our clinical target is 50% to 80% improvement in structural depth, restoring texture uniformity. Potential temporary risks include localized post-inflammatory darkening, which we manage with bespoke barrier-repair protocols.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer block */}
            <div className="p-6 bg-brand-stone/20 border border-brand-stone/60 rounded-sm mt-8 text-center">
              <p className="text-[10px] text-brand-text-muted italic leading-relaxed">
                *Medical Disclaimer: All clinical therapies require an initial biological suitability assessment. Individual outcomes differ depending on genetics, cellular repair capability, skin types, and strict compliance with our customized post-care instructions.
              </p>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  );
}
