import { navigationConfig } from '@/config/navigation';
import { Container } from '@/components/primitives';

export function TrustStrip() {
  return (
    <div className="bg-brand-green-deep text-white/90 text-xs py-2 block">
      <Container size="wide" className="flex justify-center sm:justify-between items-center">
        <p className="tracking-wide hidden sm:block">{navigationConfig.trustStrip.text}</p>
        <p className="tracking-wide sm:hidden">{navigationConfig.trustStrip.mobileText}</p>
        <div className="hidden sm:flex gap-4">
          {navigationConfig.trustStrip.actions.map((action) => (
            <a key={action.label} href={action.href} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-brand-green-deep rounded-sm">
              {action.label}
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
