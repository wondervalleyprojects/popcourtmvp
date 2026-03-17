'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CaseData, Role } from '@/lib/types';
import { roleMeta } from '@/data/roles';

export function RoleActionPanel({ caseData, role }: { caseData: CaseData; role: Role }) {
  const [selection, setSelection] = useState(caseData.outcomes[0]?.id);
  const [argument, setArgument] = useState('');
  const [reaction, setReaction] = useState(caseData.spectatorReactions[0] ?? '🍿');

  const href = useMemo(() => {
    const params = new URLSearchParams({ role, selection: selection ?? '' });
    if (argument.trim()) params.set('argument', argument.trim());
    if (reaction.trim()) params.set('reaction', reaction.trim());
    return `/cases/${caseData.id}/verdict?${params.toString()}`;
  }, [argument, caseData.id, reaction, role, selection]);

  return (
    <Card className="space-y-3">
      <h3 className={`text-lg font-bold ${roleMeta[role].color}`}>{roleMeta[role].label} Action</h3>

      {(role === 'juror' || role === 'judge') && (
        <div className="space-y-2">
          {caseData.outcomes.map((option) => (
            <button
              key={option.id}
              className={`w-full rounded-2xl border p-3 text-left text-sm ${selection === option.id ? 'border-court-accent bg-court-accent/20' : 'border-white/20 bg-white/5'}`}
              onClick={() => setSelection(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {(role === 'prosecutor' || role === 'defense') && (
        <>
          <div className="space-y-2">
            {caseData.draftedArguments[role].map((line) => (
              <button
                key={line}
                className="w-full rounded-2xl border border-white/20 bg-white/5 p-3 text-left text-sm"
                onClick={() => setArgument(line)}
              >
                {line}
              </button>
            ))}
          </div>
          <textarea
            value={argument}
            onChange={(e) => setArgument(e.target.value.slice(0, 140))}
            placeholder="Or write your own argument (max 140 chars)"
            className="h-24 w-full rounded-2xl border border-white/20 bg-black/20 p-3 text-sm text-court-text placeholder:text-white/50"
          />
        </>
      )}

      {role === 'spectator' && (
        <div className="space-y-2">
          <p className="text-sm text-white/70">Who wins your timeline?</p>
          <div className="space-y-2">
            {caseData.outcomes.slice(0, 2).map((option) => (
              <button
                key={option.id}
                className={`w-full rounded-2xl border p-3 text-left text-sm ${selection === option.id ? 'border-court-spectator bg-court-spectator/20' : 'border-white/20 bg-white/5'}`}
                onClick={() => setSelection(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {caseData.spectatorReactions.map((item) => (
              <button
                key={item}
                className={`rounded-full border px-3 py-1 text-sm ${reaction === item ? 'border-court-accent bg-court-accent/20' : 'border-white/25'}`}
                onClick={() => setReaction(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      <Link href={href}>
        <Button>Reveal Verdict</Button>
      </Link>
    </Card>
  );
}
