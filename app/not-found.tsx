import React from 'react';
import { Container, Stack, Heading, BodyText, Button } from '@/components/primitives';
import { ArrowLeft } from 'lucide-react';

export default function GlobalNotFound() {
  return (
    <Container className="py-32 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <Stack gap="lg" align="center" className="max-w-md">
        <Heading level={1} size="lg">The page you’re looking for is not available.</Heading>
        <BodyText size="lg" muted>
          Return to the clinic homepage or explore available treatment categories.
        </BodyText>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <Button as="link" href="/" variant="primary" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="leading">
            Return home
          </Button>
          <Button as="link" href="/treatments" variant="secondary">
            Explore treatments
          </Button>
        </div>
      </Stack>
    </Container>
  );
}
