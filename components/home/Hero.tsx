import { appTagline, quickRules } from '@/lib/copy';

export function Hero() {
  return (
    <header className="space-y-3 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-court-accent">PopCourt</p>
      <h1 className="text-4xl font-black leading-tight text-court-text">Order in the Group Chat.</h1>
      <p className="mx-auto max-w-xs text-sm text-white/80">{appTagline}</p>
      <p className="text-xs text-white/60">{quickRules}</p>
    </header>
  );
}
