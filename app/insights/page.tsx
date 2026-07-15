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
import { ArrowRight } from "lucide-react";
import { insightsData } from "@/config/demoData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Educational Insights | Aurevia Skin & Hair Clinic",
  description: "Evidence-led articles written by our specialist dermatologists to demystify skin and hair science.",
};

export default function InsightsPage() {
  return (
    <>
      <Section spacing="hero" surface="ivory" className="border-b border-brand-stone/30">
        <Container size="narrow" className="text-center">
          <Stack gap="md" align="center">
            <Eyebrow>Dermal Science</Eyebrow>
            <Heading level={1} size="xl">Educational insights</Heading>
            <BodyText size="lg" muted className="mt-4 max-w-2xl mx-auto">
              Our specialists believe in empowering patients through education. Explore science-backed articles covering skin barrier health, trichology, and advanced clinical laser principles.
            </BodyText>
          </Stack>
        </Container>
      </Section>

      <Section spacing="default" surface="ivory">
        <Container>
          <Grid cols={3} gap="lg">
            {insightsData.map((ins) => (
              <Card key={ins.id} surface="white" className="flex flex-col h-full group" interaction="hover">
                <div className="relative aspect-[16/10] w-full bg-brand-stone/10 overflow-hidden">
                  <ResponsiveMedia src={ins.image} alt={ins.title} fill />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] tracking-wider uppercase bg-brand-green-deep text-white px-2.5 py-1 font-mono">
                      {ins.category}
                    </span>
                  </div>
                </div>
                <CardContent className="flex-1 flex flex-col justify-between p-6">
                  <Stack gap="sm">
                    <div className="flex justify-between items-center text-[10px] font-mono text-brand-text-muted">
                      <span>{ins.publishDate}</span>
                      <span>{ins.readTime}</span>
                    </div>
                    <Heading level={3} size="sm" className="group-hover:text-brand-sage-dark transition-colors">
                      {ins.title}
                    </Heading>
                    <p className="text-xs text-brand-text-muted leading-relaxed">
                      {ins.summary}
                    </p>
                  </Stack>
                  <div className="pt-6 mt-6 border-t border-brand-stone/30">
                    <Button as="link" href={`/insights/${ins.id}`} variant="quiet">
                      Read scientific guide <ArrowRight className="w-4 h-4 ml-1 inline-block" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}
