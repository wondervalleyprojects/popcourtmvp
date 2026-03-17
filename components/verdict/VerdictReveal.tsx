import { VerdictResult } from '@/lib/types';
import { Card } from '@/components/ui/Card';

export function VerdictReveal({ verdict }: { verdict: VerdictResult }) {
  const shareLine = `PopCourt ruled: ${verdict.outcome.label} (${verdict.confidence}% dramatic certainty)`;

  return (
    <Card className="space-y-4 border-court-accent/60 bg-gradient-to-br from-court-panel via-[#241f45] to-black/80 text-center ring-1 ring-court-accent/30">
      <p className="text-xs uppercase tracking-[0.2em] text-court-accent">Final Verdict</p>
      <p className="mx-auto inline-flex rotate-[-4deg] rounded-full border border-court-accent/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-court-accent">
        Court Stamp: Officially Messy
      </p>
      <h2 className="text-3xl font-black leading-tight text-court-text">{verdict.headline}</h2>
      <p className="text-sm text-white/85">{verdict.reason}</p>
      <div>
        <p className="text-xs text-white/65">Confidence Meter</p>
        <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/15">
          <div className="h-full bg-court-accent transition-all duration-700" style={{ width: `${verdict.confidence}%` }} />
        </div>
        <p className="mt-1 text-sm font-semibold text-white">{verdict.confidence}% Dramatic Certainty</p>
      </div>
      <p className="rounded-2xl border border-white/15 bg-black/20 px-3 py-2 text-xs text-white/75">Share line: “{shareLine}”</p>
    </Card>
  );
}
