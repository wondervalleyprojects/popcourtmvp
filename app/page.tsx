import Link from 'next/link';
import { Hero } from '@/components/home/Hero';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col justify-between gap-8">
      <div className="space-y-6 pt-10">
        <Hero />
        <Card className="space-y-2">
          <p className="text-xs uppercase tracking-[0.16em] text-court-accent">2-minute game loop</p>
          <p className="text-sm text-white/85">Pick a case. Pick a role. Review receipts. Drop a ruling. Bask in chaos.</p>
        </Card>
      </div>
      <div className="sticky bottom-4 space-y-2 pb-4">
        <Link href="/cases">
          <Button className="text-base" size="lg">Start Court Session</Button>
        </Link>
        <p className="text-center text-xs text-white/60">No login. No setup drama. Just vibes and verdicts.</p>
      </div>
    </main>
  );
}
