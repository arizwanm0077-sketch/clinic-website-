import React from 'react';
import { Container, Stack, LoadingSkeleton } from '@/components/primitives';

export default function GlobalLoading() {
  return (
    <Container className="py-24 animate-in fade-in duration-500">
      <Stack gap="xl" className="max-w-3xl mx-auto">
        <Stack gap="sm">
          <LoadingSkeleton variant="rectangular" className="h-10 w-2/3 md:w-1/2" />
          <LoadingSkeleton variant="text" className="w-full" />
          <LoadingSkeleton variant="text" className="w-5/6" />
        </Stack>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <LoadingSkeleton variant="rectangular" className="h-64 w-full" />
          <LoadingSkeleton variant="rectangular" className="h-64 w-full" />
        </div>
      </Stack>
    </Container>
  );
}
