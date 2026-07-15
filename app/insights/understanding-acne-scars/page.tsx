import React from "react";
import { 
  Container, 
  Section, 
  Stack, 
  Heading, 
  Eyebrow, 
  BodyText, 
  Button,
  Card,
  ResponsiveMedia 
} from "@/components/primitives";
import { ArrowLeft, BookOpen, Clock, User, Quote } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Understanding Acne Scars Guide | Aurevia Skin & Hair Clinic",
  description: "An evidence-based guide to why atrophic scars form and how modern dermatologists combine subcision and lasers to restore skin uniformity.",
};

export default function UnderstandingAcneScarsPage() {
  return (
    <>
      {/* Article Header */}
      <Section spacing="hero" surface="ivory" className="border-b border-brand-stone/30">
        <Container size="narrow">
          <Button as="link" href="/insights" variant="quiet" className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-text-muted hover:text-brand-sage mb-6">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to scientific insights
          </Button>

          <Stack gap="sm">
            <span className="text-[10px] tracking-widest font-mono text-brand-sage-dark uppercase block">
              Dermal Science · Acne Scars
            </span>
            <Heading level={1} size="xl" className="leading-tight">
              Understanding acne scars: Why they form & how they are remodeled
            </Heading>

            <div className="flex gap-6 items-center text-xs font-mono text-brand-text-muted mt-4">
              <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-brand-sage" /> By Dr Ananya Rao</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-brand-sage" /> 6 min read</span>
              <span>•</span>
              <span>Published: June 12, 2026</span>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* Article Body */}
      <Section spacing="default" surface="ivory">
        <Container size="narrow">
          <article className="prose max-w-none text-brand-text-main text-sm sm:text-base leading-relaxed space-y-6">
            
            <p className="font-medium text-brand-green-deep">
              Acne scarring is a complex structural challenge that affects both the aesthetic uniformity of the skin and emotional self-confidence. To treat scars effectively, we must first understand the mechanical biology beneath the surface.
            </p>

            <div className="relative aspect-video w-full bg-brand-stone/10 overflow-hidden rounded-sm my-8">
              <ResponsiveMedia 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200" 
                alt="Aurevia clinical microneedling equipment closeup"
                fill
              />
            </div>

            <Heading level={2} size="md" className="pt-4 text-brand-green-deep">
              Why do atrophic (depressed) scars form?
            </Heading>
            <p>
              When a severe acne cyst or nodule forms in the skin, it triggers a massive inflammatory immune response in the deeper dermal layer. This intense inflammation damages the surrounding healthy skin scaffolding, which is made of collagen and elastin fibers.
            </p>
            <p>
              As the body attempts to heal this localized wound, it often does so in a hurried, disorganized fashion. Specialized cells called fibroblasts lay down tough, dense, fibrotic scar bands. These bands anchor the superficial epidermis down to the deep fat-pad layers of the face. As a result, the outer skin is pulled downward, creating visible depressions commonly classified as boxcar, rolling, or deep icepick scars.
            </p>

            {/* Editorial Quote block */}
            <Card surface="stone" className="my-8 border-l-4 border-brand-sage bg-brand-stone/20 p-6 md:p-8 rounded-r-sm">
              <Quote className="w-8 h-8 text-brand-sage opacity-40 mb-3" />
              <p className="font-serif italic text-brand-green-deep text-base md:text-lg leading-relaxed">
                &ldquo;Modern clinical dermatology has moved entirely away from aggressive single-modality laser stripping. We now focus on releasing deep mechanical anchors first, then restoring cellular scaffolding gently.&rdquo;
              </p>
              <span className="text-[10px] tracking-wider font-mono text-brand-text-muted uppercase block mt-3">
                — Dr Ananya Rao, Senior Consultant Dermatologist
              </span>
            </Card>

            <Heading level={2} size="md" className="pt-4 text-brand-green-deep">
              The clinical solution: Multimodal remodeling
            </Heading>
            <p>
              Because scars are anchored deeply, superficial topical creams cannot reach or resolve them. An effective clinical remodeling plan must target multiple depths:
            </p>
            
            <ol className="space-y-4 list-decimal pl-4 mt-4">
              <li>
                <strong>Mechanical Release (Subcision):</strong> Using a specialized clinical needle, we gently sever the tough, fibrotic anchors pulling the skin surface down. Once released, the depressed scar immediately springs upward.
              </li>
              <li>
                <strong>Thermal Induction (Microneedling RF):</strong> Once released, we deliver controlled radiofrequency energy precisely to the deeper dermis, stimulating fibroblasts to produce organized, healthy type-I collagen to fill the void.
              </li>
              <li>
                <strong>Textural Refinement (Fractional Resurfacing):</strong> Finally, gentle laser toning helps smooth the outer margins, reducing boundary shadows and clearing any post-inflammatory redness or darkening.
              </li>
            </ol>

            <Heading level={2} size="md" className="pt-4 text-brand-green-deep">
              The importance of unhurried diagnostics
            </Heading>
            <p>
              Remodeling takes time because it relies on your body&apos;s biological collagen-synthesis cycle, which typically takes 4 to 6 weeks. A patient-first dermatologist will always analyze your skin barrier health before suggesting energy procedures to ensure your cells are healthy enough to rebuild correctly.
            </p>

          </article>

          {/* CTA segment inside article */}
          <div className="pt-12 mt-12 border-t border-brand-stone/30 text-center">
            <span className="text-xs font-mono tracking-wider text-brand-sage-dark uppercase block mb-2">Need advice?</span>
            <Heading level={2} size="sm" className="mb-4">Schedule an acne scar assessment</Heading>
            <Button as="link" href="/book" variant="primary">
              Book diagnostic session
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
