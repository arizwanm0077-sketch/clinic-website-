import React from 'react';
import Link from 'next/link';
import { brandConfig } from '@/config/brand';
import { clinicConfig } from '@/config/clinic';
import { navigationConfig } from '@/config/navigation';
import { Container, Grid, Stack, Heading, BodyText, Button } from '@/components/primitives';
import { Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-green-deep text-brand-ivory pt-16 md:pt-24 pb-24 md:pb-12 border-t border-brand-stone">
      <Container size="wide">
        <Stack gap="2xl">
          <Grid cols={4} gap="xl" className="border-b border-white/10 pb-16">
            
            <Stack gap="lg" className="col-span-1 md:col-span-2 lg:col-span-1">
              <Link 
                href="/" 
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep rounded-sm w-fit"
                aria-label={`${brandConfig.name} Home`}
              >
                <span className="font-serif text-3xl font-medium tracking-tight text-white">
                  Aurevia.
                </span>
              </Link>
              <BodyText size="sm" className="text-white/80 max-w-xs">
                {brandConfig.tagline}
              </BodyText>
            </Stack>

            {navigationConfig.footer.groups.map((group) => (
              <Stack key={group.title} gap="md">
                <Heading level={3} size="xs" className="text-white tracking-widest uppercase font-sans text-xs">
                  {group.title}
                </Heading>
                <Stack gap="sm" as="ul">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href}
                        className="text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep rounded-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </Stack>
              </Stack>
            ))}

            <Stack gap="lg" className="col-span-1 md:col-span-2 lg:col-span-1">
              <Stack gap="sm">
                <Heading level={3} size="xs" className="text-white tracking-widest uppercase font-sans text-xs">
                  Contact
                </Heading>
                <BodyText size="sm" className="text-white/70">
                  <a href={`tel:${clinicConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors block py-0.5">{clinicConfig.contact.phone}</a>
                  <a href={`mailto:${clinicConfig.contact.email}`} className="hover:text-white transition-colors block py-0.5">{clinicConfig.contact.email}</a>
                </BodyText>
              </Stack>
              <Stack gap="sm">
                <Heading level={3} size="xs" className="text-white tracking-widest uppercase font-sans text-xs">
                  Clinic Hours
                </Heading>
                <BodyText size="sm" className="text-white/70">
                  Mon-Fri: {clinicConfig.hours.weekdays}<br/>
                  Sat: {clinicConfig.hours.saturday}<br/>
                  Sun: {clinicConfig.hours.sunday}
                </BodyText>
              </Stack>
            </Stack>

          </Grid>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <BodyText size="xs" className="text-white/50 max-w-2xl">
              Demonstration website created using fictional and placeholder content. Clinic information, credentials, treatments, reviews, and results must be verified before production use.
            </BodyText>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full lg:w-auto">
              <Button as="link" href="/book" variant="secondary" className="bg-transparent border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                Book a consultation
              </Button>
              <div className="flex gap-4 w-full sm:w-auto justify-start">
                <a href={clinicConfig.social.instagram} className="text-white/50 hover:text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep rounded-sm" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={clinicConfig.social.facebook} className="text-white/50 hover:text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep rounded-sm" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-white/40 text-xs">
            <p>&copy; {new Date().getFullYear()} {brandConfig.name}. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              {navigationConfig.footer.legal.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-sage focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep rounded-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </Stack>
      </Container>
    </footer>
  );
}
