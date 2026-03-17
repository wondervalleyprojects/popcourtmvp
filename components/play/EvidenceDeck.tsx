'use client';

import { useState } from 'react';
import { CaseData } from '@/lib/types';
import { Card } from '@/components/ui/Card';
import { ProgressDots } from '@/components/ui/ProgressDots';
import { Button } from '@/components/ui/Button';

export function EvidenceDeck({ caseData, onComplete }: { caseData: CaseData; onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const current = caseData.evidence[index];

  const next = () => {
    if (index === caseData.evidence.length - 1) {
      onComplete();
      return;
    }
    setIndex((v) => v + 1);
  };

  return (
    <div className="space-y-3">
      <Card className="min-h-56 space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-court-accent">Evidence {index + 1}</p>
        <h3 className="text-lg font-semibold text-court-text">{current.title}</h3>
        <p className="text-sm text-white/80">{current.body}</p>
        {current.punchline ? <p className="text-sm italic text-white/60">“{current.punchline}”</p> : null}
      </Card>
      <ProgressDots total={caseData.evidence.length} active={index} />
      <Button onClick={next}>{index === caseData.evidence.length - 1 ? 'Proceed to Deliberation' : 'Next Evidence'}</Button>
    </div>
  );
}
