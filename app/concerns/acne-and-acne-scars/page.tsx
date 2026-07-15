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
  CardContent 
} from "@/components/primitives";
import { ArrowLeft, ArrowRight, ShieldAlert, Sparkles, BookOpen, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acne & Acne Scars Patient Guide | Aurevia Skin & Hair Clinic",
  description: "An evidence-led clinical guide explaining the physiological triggers of acne and how we restore textural integrity.",
};

export default function AcneScarsConcernPage() {
  return (
    <>
      <Section spacing="hero" surface="ivory" className="border-b border-brand-stone/30">
        <Container size="narrow">
          <Button as="link" href="/concerns" variant="quiet" className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-text-muted hover:text-brand-sage mb-6">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to concern directory
          </Button>

          <Stack gap="sm">
            <span className="text-[10px] tracking-widest font-mono text-brand-sage-dark uppercase block">
              Dermatological Guide
            </span>
            <Heading level={1} size="xl">Understanding acne & acne scars</Heading>
            <BodyText size="lg" muted className="mt-4">
              Acne is not merely a superficial aesthetic challenge; it is a complex inflammatory disease of the hair follicle and oil glands. Left unchecked, deep inflammation can permanently alter your skin scaffolding.
            </BodyText>
          </Stack>
        </Container>
      </Section>

      {/* Deep Educational Info & Causes */}
      <Section spacing="default" surface="stone" className="bg-brand-stone/10 border-b border-brand-stone/30">
        <Container>
          <Grid cols={2} gap="xl">
            <div className="space-y-6">
              <span className="text-xs font-mono tracking-wider text-brand-sage-dark uppercase block mb-1">
                01 · Physiological Triggers
              </span>
              <Heading level={2} size="md">Why does active acne occur?</Heading>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                Active breakouts are triggered by a combination of follicular hyper-keratinization (buildup of dead cells), excessive sebum production stimulated by hormonal factors, and subsequent colonization by the bacteria <em>Cutibacterium acnes</em>. 
              </p>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                This triggers a localized immune response, leading to visible inflammation, papules, cysts, and potential structural tissue damage.
              </p>
            </div>

            <div className="space-y-6">
              <span className="text-xs font-mono tracking-wider text-brand-sage-dark uppercase block mb-1">
                02 · Textural Scarring
              </span>
              <Heading level={2} size="md">How do atrophic scars form?</Heading>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                When deep cystic inflammation compromises the surrounding skin, it disrupts the natural collagen scaffolding of the dermis. As the body attempts to repair this damage, tough, fibrotic anchors form in the deeper layers. 
              </p>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                These fibrotic bands pull the surface skin downward, creating visible depressions or depressed &quot;atrophic&quot; scars (commonly classified as boxcar, rolling, or icepick scars).
              </p>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Clinical Guidance */}
      <Section spacing="default" surface="ivory" className="border-b border-brand-stone/30">
        <Container size="narrow">
          <Card surface="white" className="p-8 border border-brand-stone/40">
            <Stack gap="md">
              <div className="flex gap-3 items-center text-brand-sage">
                <ShieldAlert className="w-6 h-6 shrink-0 text-brand-sage-dark" />
                <Heading level={2} size="sm" className="text-brand-green-deep">Specialist clinical advice</Heading>
              </div>
              
              <BodyText size="md" muted className="leading-relaxed">
                Our dermatologists recommend addressing active inflammation first before initiating intensive collagen-induction therapies. 
              </BodyText>
              
              <ul className="space-y-3 pl-4 text-xs text-brand-text-muted list-disc leading-relaxed">
                <li><strong>Do not squeeze or scrub active cysts:</strong> Mechanical trauma deepens dermal inflammation, significantly increasing the probability of deep structural scarring.</li>
                <li><strong>Optimize your skin barrier:</strong> Harsh daily scrubbing compromises your pH balance. Prioritize gentle cleansers and non-comedogenic moisturizers containing ceramides.</li>
                <li><strong>Avoid unscientific DIY formulations:</strong> Aggressive acids can cause secondary chemical burns and post-inflammatory hyperpigmentation. Always seek doctor-supervised topical regimens first.</li>
              </ul>
            </Stack>
          </Card>
        </Container>
      </Section>

      {/* Recommended Treatments & CTA */}
      <Section spacing="default" surface="ivory">
        <Container>
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider text-brand-sage-dark uppercase block">Care Integration</span>
            <Heading level={2} size="lg" className="mt-2">Recommended clinical therapies</Heading>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card surface="white" className="p-8 border border-brand-stone/40">
              <Stack gap="sm" className="h-full justify-between">
                <div>
                  <Heading level={3} size="sm" className="text-brand-green-deep mb-2">Acne and acne-scar care</Heading>
                  <p className="text-xs text-brand-text-muted leading-relaxed">
                    Our customized combination protocols combine subcision (releasing deep fibrotic scar anchors) with microneedling RF and skin resurfacing to restore dermal scaffolds.
                  </p>
                </div>
                <div className="pt-6 border-t border-brand-stone/20">
                  <Button as="link" href="/treatments/skin/acne-scar-treatment" variant="secondary" size="sm" className="w-full">
                    View clinical approach <ArrowRight className="w-4 h-4 ml-1 inline-block" />
                  </Button>
                </div>
              </Stack>
            </Card>

            <Card surface="white" className="p-8 border border-brand-stone/40">
              <Stack gap="sm" className="h-full justify-between">
                <div>
                  <Heading level={3} size="sm" className="text-brand-green-deep mb-2">Skin rejuvenation</Heading>
                  <p className="text-xs text-brand-text-muted leading-relaxed">
                    Ideal for gentle dermal hydration and supporting cellular recovery pathways using highly sterile, non-crosslinked biocompatible formulations.
                  </p>
                </div>
                <div className="pt-6 border-t border-brand-stone/20">
                  <Button as="link" href="/treatments/skin" variant="secondary" size="sm" className="w-full">
                    Explore skin rejuvenation <ArrowRight className="w-4 h-4 ml-1 inline-block" />
                  </Button>
                </div>
              </Stack>
            </Card>
          </div>

          <div className="mt-16 text-center max-w-md mx-auto">
            <Heading level={3} size="sm" className="mb-4">Begin your structured skin assessment</Heading>
            <Button as="link" href="/book" variant="primary" className="w-full">
              Book initial consultation
            </Button>
            <p className="text-[10px] text-brand-text-muted mt-2 italic">
              Our 30-minute diagnostic session is the key starting point.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
