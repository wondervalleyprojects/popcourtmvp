import Link from 'next/link';
import { Hero } from '@/components/home/Hero';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col justify-between gap-6">
      <div className="space-y-5 pt-12">
        <Hero />
        <Card>
          <p className="text-sm text-white/80">
            Enter court, choose your role, swipe through spicy evidence, and drop a ruling in under two minutes.
          </p>
        </Card>
      </div>
      <Link href="/cases" className="pb-6">
        <Button className="text-base">Start Court Session</Button>
      </Link>
    </main>
  );
}
