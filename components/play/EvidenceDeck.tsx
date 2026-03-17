'use client';

import { useState } from 'react';
import { CaseData } from '@/lib/types';
import { Card } from '@/components/ui/Card';
import { ProgressDots } from '@/components/ui/ProgressDots';
import { Button } from '@/components/ui/Button';

const sideTone: Record<'prosecution' | 'defense' | 'neutral', string> = {
  prosecution: 'text-court-prosecutor',
  defense: 'text-court-defense',
  neutral: 'text-white/70',
};

export function EvidenceDeck({ caseData, onComplete }: { caseData: CaseData; onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const current = caseData.evidence[index];
  const last = index === caseData.evidence.length - 1;

  const next = () => {
    if (last) {
      onComplete();
      return;
    }
    setIndex((v) => v + 1);
  };

  return (
    <div className="space-y-4">
      <Card className="min-h-64 space-y-3 transition-all duration-300 animate-[fadeSlide_240ms_ease-out]">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.2em] text-court-accent">Evidence {index + 1} / {caseData.evidence.length}</p>
          <p className={`text-xs font-semibold uppercase ${sideTone[current.side]}`}>{current.side}</p>
        </div>
        <h3 className="text-xl font-black text-court-text">{current.title}</h3>
        <p className="text-sm leading-relaxed text-white/85">{current.body}</p>
        {current.punchline ? <p className="text-sm italic text-white/65">“{current.punchline}”</p> : null}
      </Card>
      <ProgressDots total={caseData.evidence.length} active={index} />
      <p className="text-center text-xs text-white/60">Tap through the receipts to unlock deliberation.</p>
      <div className="sticky bottom-3">
        <Button onClick={next} size="lg">{last ? 'Enter Deliberation ⚖️' : 'Next Receipt →'}</Button>
      </div>
    </div>
  );
}
