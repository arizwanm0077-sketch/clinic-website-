'use client';

import React, { useState } from "react";
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
import { Phone, Mail, Clock, MapPin, CheckCircle, AlertCircle, MessageSquare } from "lucide-react";
import { clinicConfig } from "@/config/clinic";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.phone.trim()) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }
    if (!formState.consent) {
      setErrorMsg("Please accept the consultation contact consent.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);
    // Simulate submit
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      <Section spacing="hero" surface="ivory" className="border-b border-brand-stone/30">
        <Container size="narrow" className="text-center">
          <Stack gap="md" align="center">
            <Eyebrow>Connect With Us</Eyebrow>
            <Heading level={1} size="xl">Contact our clinic</Heading>
            <BodyText size="lg" muted className="mt-4 max-w-2xl mx-auto">
              Our clinical care coordinators are here to assist with booking times, direction parameters, and post-procedure inquiries. Reach out to us via phone, email, or our structured form.
            </BodyText>
          </Stack>
        </Container>
      </Section>

      <Section spacing="default" surface="ivory">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Col: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-mono tracking-wider text-brand-sage-dark uppercase block mb-3">
                  Clinic Location
                </span>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-stone/20 text-brand-green-deep rounded-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-medium text-brand-green-deep text-lg mb-1">Indiranagar, Bengaluru</h3>
                    <p className="text-sm text-brand-text-muted leading-relaxed">
                      {clinicConfig.location.address}
                    </p>
                    <a 
                      href={clinicConfig.location.googleMapsUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-brand-sage-dark hover:text-brand-sage underline block mt-2"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono tracking-wider text-brand-sage-dark uppercase block mb-3">
                  Inquiries & Bookings
                </span>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-brand-stone/20 text-brand-green-deep rounded-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-brand-text-muted uppercase tracking-wider block">Telephone</h4>
                      <a href={`tel:${clinicConfig.contact.phone.replace(/\s+/g, '')}`} className="text-sm text-brand-green-deep font-semibold block mt-1 hover:text-brand-sage-dark transition-colors">
                        {clinicConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-brand-stone/20 text-brand-green-deep rounded-sm">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-brand-text-muted uppercase tracking-wider block">WhatsApp</h4>
                      <a href={`https://wa.me/${clinicConfig.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-green-deep font-semibold block mt-1 hover:text-brand-sage-dark transition-colors">
                        {clinicConfig.contact.whatsapp}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-brand-stone/20 text-brand-green-deep rounded-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-brand-text-muted uppercase tracking-wider block">Email Address</h4>
                      <a href={`mailto:${clinicConfig.contact.email}`} className="text-sm text-brand-green-deep font-semibold block mt-1 hover:text-brand-sage-dark transition-colors">
                        {clinicConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono tracking-wider text-brand-sage-dark uppercase block mb-3">
                  Clinic Hours
                </span>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-stone/20 text-brand-green-deep rounded-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-sm text-brand-text-muted space-y-1">
                    <div className="flex justify-between gap-12">
                      <span className="font-medium text-brand-green-deep">Weekdays</span>
                      <span>{clinicConfig.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between gap-12">
                      <span className="font-medium text-brand-green-deep">Saturdays</span>
                      <span>{clinicConfig.hours.saturday}</span>
                    </div>
                    <div className="flex justify-between gap-12">
                      <span className="font-medium text-brand-green-deep">Sundays</span>
                      <span>{clinicConfig.hours.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Inquiry Form */}
            <div className="lg:col-span-7">
              <Card surface="white" className="p-8 border border-brand-stone/60">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Heading level={2} size="sm" className="mb-2">Send a direct message</Heading>
                      <BodyText size="xs" muted>
                        We respond to all clinical inquiries within 2 hours during active clinic hours.
                      </BodyText>
                    </div>

                    {errorMsg && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-sm text-red-800 text-xs flex gap-2 items-start" role="alert">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-brand-text-muted mb-2">
                        Your Full Name *
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        placeholder="Jane Doe"
                        value={formState.name}
                        onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 bg-brand-ivory border border-brand-stone rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-brand-text-muted mb-2">
                          Email Address *
                        </label>
                        <input 
                          type="email" 
                          id="email"
                          required
                          placeholder="jane@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-3 bg-brand-ivory border border-brand-stone rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-brand-text-muted mb-2">
                          Telephone Number *
                        </label>
                        <input 
                          type="tel" 
                          id="phone"
                          required
                          placeholder="+91 99000 00000"
                          value={formState.phone}
                          onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full px-4 py-3 bg-brand-ivory border border-brand-stone rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-brand-text-muted mb-2">
                        How can we assist you?
                      </label>
                      <textarea 
                        id="message" 
                        rows={4}
                        placeholder="Please describe your dermal or trichology concern..."
                        value={formState.message}
                        onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full px-4 py-3 bg-brand-ivory border border-brand-stone rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        id="consent"
                        checked={formState.consent}
                        onChange={(e) => setFormState(prev => ({ ...prev, consent: e.target.checked }))}
                        className="mt-1 w-4 h-4 text-brand-sage focus:ring-brand-sage border-brand-stone rounded-sm"
                      />
                      <label htmlFor="consent" className="text-xs text-brand-text-muted leading-relaxed cursor-pointer select-none">
                        I consent to Aurevia Clinic contacting me via phone, email, or WhatsApp to coordinate consultation requests. *
                      </label>
                    </div>

                    <div>
                      <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Transmitting..." : "Send direct message"}
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-12 h-12 bg-brand-sage/10 text-brand-sage-dark flex items-center justify-center rounded-full mx-auto mb-4">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <Heading level={2} size="sm" className="mb-2">Inquiry message transmitted</Heading>
                    <BodyText size="xs" muted className="mb-6 max-w-sm mx-auto">
                      Thank you. Your message has been received. Our clinical coordinator will respond within 2 hours during normal business hours.
                    </BodyText>
                    <Button onClick={() => setSubmitted(false)} variant="secondary" size="sm">
                      Send another message
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
