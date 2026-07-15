import React from 'react';
import { Container, Button, Stack, Heading, BodyText, ResponsiveMedia } from '@/components/primitives';
import { Check } from 'lucide-react';

export function HomepageHero() {
  return (
    <section className="relative w-full bg-brand-ivory pt-8 lg:pt-0 overflow-hidden">
      <Container size="wide" className="px-0 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:min-h-[85vh]">
          
          {/* Text Content */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center px-6 lg:px-0 lg:pr-12 xl:pr-20 py-12 lg:py-24 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
            <Stack gap="xl">
              <Stack gap="md">
                <span className="text-brand-sage-dark font-medium tracking-widest uppercase text-sm">
                  Specialist-led skin and hair care
                </span>
                
                <Heading level={1} size="xl" className="font-serif text-brand-green-deep">
                  Advanced care for skin <br className="hidden md:block" />
                  that feels confidently yours.
                </Heading>
                
                <BodyText size="lg" className="text-brand-text-main max-w-lg">
                  Evidence-led dermatology, personalised treatment planning, and thoughtful follow-up, delivered in a calm, private clinical environment.
                </BodyText>
              </Stack>

              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <Button as="link" href="/book" variant="primary" size="lg">
                  Book a consultation
                </Button>
                <Button as="link" href="/treatments" variant="quiet" size="lg" className="group">
                  Explore treatments
                  <span className="inline-block ml-1 transition-transform group-hover:translate-x-1 duration-200">→</span>
                </Button>
              </div>

              {/* Trust Indicator */}
              <div className="pt-8 mt-4 border-t border-brand-stone/30">
                <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-y-3 gap-x-6 text-sm text-brand-text-muted">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-sage-dark" aria-hidden="true" />
                    <span>Dermatologist-led consultations</span>
                  </li>
                  <li className="hidden sm:block w-1 h-1 rounded-full bg-brand-stone/60" aria-hidden="true" />
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-sage-dark" aria-hidden="true" />
                    <span>Personalised plans</span>
                  </li>
                  <li className="hidden sm:block w-1 h-1 rounded-full bg-brand-stone/60" aria-hidden="true" />
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-sage-dark" aria-hidden="true" />
                    <span>Modern clinical technology</span>
                  </li>
                </ul>
              </div>
            </Stack>
          </div>

          {/* Media Content */}
          <div className="w-full lg:w-[55%] relative flex flex-col justify-center px-4 sm:px-6 lg:px-0 pb-12 lg:pb-0 animate-in fade-in slide-in-from-right-8 duration-700 delay-200 fill-mode-both">
            <ResponsiveMedia
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1600"
              alt="A premium and calm dermatology clinic consultation room with soft ivory textures and natural light"
              priority
              fill
              containerClassName="w-full aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:h-[90%] rounded-sm shadow-xl"
              sizes="(max-width: 1024px) 100vw, 55vw"
              fallbackText="Aurevia Clinical Environment"
            />
            
            {/* Floating Care Card */}
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 right-6 sm:right-auto max-w-[280px] bg-white/95 backdrop-blur-sm p-6 sm:p-7 rounded-sm shadow-lg border border-brand-stone/20 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500 fill-mode-both z-10">
              <Stack gap="sm">
                <span className="font-serif text-xl text-brand-green-deep leading-tight">Care designed around you</span>
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  Private consultations and considered treatment planning for natural results.
                </p>
              </Stack>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
