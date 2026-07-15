import { brandConfig } from "@/config/brand";
import { ArrowRight, Search, FileText, ChevronRight, Check } from "lucide-react";
import {
  Container,
  Section,
  Stack,
  Grid,
  Heading,
  Eyebrow,
  BodyText,
  Button,
  IconButton,
  TextLink,
  Label,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  FormHelpText,
  FormErrorMessage,
  Card,
  CardContent,
  ResponsiveMedia,
  SectionHeader,
  SplitSection,
  LoadingSkeleton,
  EmptyState,
  InlineFeedback,
} from "@/components/primitives";

export default function PrimitivesPresentationPage() {
  return (
    <main className="min-h-screen bg-brand-ivory pb-24">
      <Section spacing="hero" surface="sage">
        <Container>
          <Stack gap="lg" className="max-w-3xl">
            <Eyebrow className="text-brand-ivory/80">Phase 2 Complete</Eyebrow>
            <Heading level={1} className="text-white">
              {brandConfig.name} <br />
              <span className="italic font-normal opacity-90">UI Primitives</span>
            </Heading>
            <BodyText size="lg" className="text-white/90">
              Temporary presentation page for reviewing the core UI primitives. This establishes the foundation for future sections without implementing full layouts.
            </BodyText>
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container>
          <Stack gap="2xl">
            
            {/* Typography */}
            <Stack gap="lg">
              <div className="border-b border-brand-stone pb-2">
                <Heading level={3} size="md">Typography System</Heading>
              </div>
              <Grid cols={2} gap="lg">
                <Stack gap="md">
                  <div>
                    <Eyebrow className="mb-2">Display (Playfair)</Eyebrow>
                    <Heading level={1}>Quiet luxury.</Heading>
                  </div>
                  <div>
                    <Eyebrow className="mb-2">Heading XL (Playfair)</Eyebrow>
                    <Heading level={2} size="xl">Medical credibility.</Heading>
                  </div>
                  <div>
                    <Eyebrow className="mb-2">Heading LG (Playfair)</Eyebrow>
                    <Heading level={3} size="lg">Treatment philosophy.</Heading>
                  </div>
                </Stack>
                <Stack gap="md">
                  <div>
                    <Eyebrow className="mb-2">Body LG (Inter)</Eyebrow>
                    <BodyText size="lg">Evidence-led dermatology, personalised treatment planning, and thoughtful follow-up, delivered in a calm environment.</BodyText>
                  </div>
                  <div>
                    <Eyebrow className="mb-2">Body MD (Inter)</Eyebrow>
                    <BodyText size="md">Evidence-led dermatology, personalised treatment planning, and thoughtful follow-up, delivered in a calm environment.</BodyText>
                  </div>
                  <div>
                    <Eyebrow className="mb-2">Body SM Muted (Inter)</Eyebrow>
                    <BodyText size="sm" muted>Evidence-led dermatology, personalised treatment planning, and thoughtful follow-up, delivered in a calm environment.</BodyText>
                  </div>
                </Stack>
              </Grid>
            </Stack>

            {/* Buttons & Links */}
            <Stack gap="lg">
              <div className="border-b border-brand-stone pb-2">
                <Heading level={3} size="md">Buttons & Links</Heading>
              </div>
              <Grid cols="asymmetric-right" gap="xl">
                <Stack gap="md" align="start">
                  <Button variant="primary" icon={<ArrowRight className="h-4 w-4" />} iconPosition="trailing">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="quiet">Quiet Button</Button>
                  <Button variant="primary" loading>Loading State</Button>
                  <Button variant="primary" disabled>Disabled State</Button>
                </Stack>
                <Stack gap="lg">
                  <Stack direction="row" gap="md">
                    <IconButton aria-label="Search" variant="primary">
                      <Search className="h-4 w-4" />
                    </IconButton>
                    <IconButton aria-label="Search" variant="secondary">
                      <Search className="h-4 w-4" />
                    </IconButton>
                    <IconButton aria-label="Search" variant="quiet">
                      <Search className="h-4 w-4" />
                    </IconButton>
                  </Stack>
                  <Stack direction="col" gap="sm" align="start">
                    <TextLink href="#" showArrow>Explore treatments</TextLink>
                    <TextLink href="#" showArrow={false} underline={false}>Quiet text link</TextLink>
                  </Stack>
                </Stack>
              </Grid>
            </Stack>

            {/* Form Controls */}
            <Stack gap="lg">
              <div className="border-b border-brand-stone pb-2">
                <Heading level={3} size="md">Form Controls</Heading>
              </div>
              <Grid cols={2} gap="xl">
                <Stack gap="md">
                  <div>
                    <Label htmlFor="demo-input" required>Full Name</Label>
                    <Input id="demo-input" placeholder="e.g. Jane Doe" />
                    <FormHelpText>Please enter your legal name.</FormHelpText>
                  </div>
                  <div>
                    <Label htmlFor="demo-select">Preferred Time</Label>
                    <Select id="demo-select">
                      <option>Morning (10 AM - 1 PM)</option>
                      <option>Afternoon (2 PM - 5 PM)</option>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="demo-error" required>Email Address</Label>
                    <Input id="demo-error" error defaultValue="invalid-email" />
                    <FormErrorMessage>Please enter a valid email address.</FormErrorMessage>
                  </div>
                </Stack>
                <Stack gap="md">
                  <div>
                    <Label htmlFor="demo-textarea">Message</Label>
                    <Textarea id="demo-textarea" placeholder="How can we help you?" />
                  </div>
                  <Stack gap="sm" className="mt-2">
                    <div className="flex items-center gap-3">
                      <Checkbox id="demo-check" />
                      <Label htmlFor="demo-check" className="mb-0">I accept the terms</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <Radio id="demo-radio1" name="radio-demo" defaultChecked />
                      <Label htmlFor="demo-radio1" className="mb-0">New patient</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <Radio id="demo-radio2" name="radio-demo" />
                      <Label htmlFor="demo-radio2" className="mb-0">Returning patient</Label>
                    </div>
                  </Stack>
                </Stack>
              </Grid>
            </Stack>

            {/* Section Header & Split Section */}
            <Stack gap="lg">
              <div className="border-b border-brand-stone pb-2">
                <Heading level={3} size="md">Composition Primitives</Heading>
              </div>
              <Stack gap="2xl">
                <SectionHeader 
                  eyebrow="Treatments"
                  title="Advanced care for your skin."
                  description="We offer a range of specialist-led treatments designed to restore confidence and enhance your natural features."
                  action={<Button variant="secondary">View all treatments</Button>}
                  layout="split"
                />
                
                <SplitSection
                  mediaContent={
                    <ResponsiveMedia
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
                      alt="Demonstration clinic interior"
                      aspectRatio="portrait"
                      fallbackText="Media Placeholder"
                    />
                  }
                  textContent={
                    <Stack gap="lg" className="max-w-md">
                      <SectionHeader
                        eyebrow="Our Approach"
                        title="Evidence-led care."
                        description="Every treatment plan is tailored to your unique skin profile, ensuring natural-looking, sustainable results."
                      />
                      <Stack gap="sm">
                        {["Specialist-led consultation", "Personalised treatment planning", "Thoughtful aftercare"].map(item => (
                          <div key={item} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-brand-sage shrink-0" />
                            <BodyText>{item}</BodyText>
                          </div>
                        ))}
                      </Stack>
                    </Stack>
                  }
                  proportions="media-large"
                />
              </Stack>
            </Stack>

            {/* Cards & States */}
            <Stack gap="lg">
              <div className="border-b border-brand-stone pb-2">
                <Heading level={3} size="md">Cards & States</Heading>
              </div>
              <Grid cols={3} gap="lg">
                <Card interaction="hover">
                  <ResponsiveMedia
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200"
                    alt="Acne treatment"
                    aspectRatio="video"
                  />
                  <CardContent className="space-y-4">
                    <Eyebrow>Skin</Eyebrow>
                    <Heading level={4} size="sm">Acne Scar Revision</Heading>
                    <BodyText size="sm" muted>Advanced laser and microneedling protocols designed to restore skin texture.</BodyText>
                    <TextLink href="#" showArrow>Discover</TextLink>
                  </CardContent>
                </Card>
                
                <EmptyState 
                  title="No appointments"
                  description="You have no upcoming consultations scheduled."
                  icon={<FileText className="h-8 w-8" />}
                  action={<Button variant="secondary" size="sm">Book now</Button>}
                />

                <Card surface="stone">
                  <CardContent className="space-y-4">
                    <LoadingSkeleton variant="circular" className="h-12 w-12" />
                    <LoadingSkeleton variant="rectangular" className="h-6 w-3/4" />
                    <Stack gap="sm">
                      <LoadingSkeleton variant="text" />
                      <LoadingSkeleton variant="text" />
                      <LoadingSkeleton variant="text" className="w-4/5" />
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>

              {/* Inline Feedback Layout */}
              <Grid cols={2} gap="md" className="mt-2">
                <InlineFeedback 
                  variant="info"
                  message="The clinic will be closed on upcoming public holidays."
                />
                <InlineFeedback 
                  variant="success"
                  title="Request sent"
                  message="We will contact you shortly."
                />
              </Grid>
            </Stack>

          </Stack>
        </Container>
      </Section>
    </main>
  );
}
