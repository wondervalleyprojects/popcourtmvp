import { VerdictResult } from '@/lib/types';
import { Card } from '@/components/ui/Card';

export function VerdictReveal({ verdict }: { verdict: VerdictResult }) {
  return (
    <Card className="space-y-4 border-court-accent/50 bg-gradient-to-br from-court-panel to-black/70 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-court-accent">Final Verdict</p>
      <h2 className="text-3xl font-black text-court-text">{verdict.headline}</h2>
      <p className="text-sm text-white/80">{verdict.reason}</p>
      <div>
        <p className="text-xs text-white/60">Confidence Meter</p>
        <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/15">
          <div className="h-full bg-court-accent" style={{ width: `${verdict.confidence}%` }} />
        </div>
        <p className="mt-1 text-sm font-semibold text-white">{verdict.confidence}% Dramatic Certainty</p>
      </div>
    </Card>
  );
}
