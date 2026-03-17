'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { EvidenceDeck } from '@/components/play/EvidenceDeck';
import { RoleActionPanel } from '@/components/play/RoleActionPanel';
import { Button } from '@/components/ui/Button';
import { getCaseById } from '@/data/cases';
import { roleMeta } from '@/data/roles';
import { Role } from '@/lib/types';

const validRoles: Role[] = ['juror', 'judge', 'prosecutor', 'defense', 'spectator'];

export default function CasePlayPage() {
  const params = useParams<{ caseId: string }>();
  const search = useSearchParams();
  const caseData = useMemo(() => getCaseById(params.caseId), [params.caseId]);
  const roleQuery = search.get('role') as Role | null;
  const role = roleQuery && validRoles.includes(roleQuery) ? roleQuery : 'juror';
  const [deliberationOpen, setDeliberationOpen] = useState(false);

  if (!caseData) {
    return (
      <main className="space-y-3">
        <h1 className="text-xl font-bold">Case not found.</h1>
        <Link href="/cases">
          <Button>Back to Docket</Button>
        </Link>
      </main>
    );
  }

  return (
    <main className="space-y-4">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-court-accent">Case Play · {caseData.category}</p>
        <h1 className="text-2xl font-black leading-tight">{caseData.title}</h1>
        <p className="text-sm text-white/75">{caseData.coreQuestion}</p>
        <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80">
          <span>{roleMeta[role].emoji}</span>
          <span className={roleMeta[role].color}>{roleMeta[role].label}</span>
        </p>
        <p className="text-xs text-white/60">Values in tension: {caseData.valuesInTension.join(' • ')}</p>
        <p className="text-sm text-white/75">
          {!deliberationOpen ? 'Step 1: Review every receipt.' : 'Step 2: Make your move.'}
        </p>
      </header>

      {!deliberationOpen ? (
        <EvidenceDeck caseData={caseData} onComplete={() => setDeliberationOpen(true)} />
      ) : (
        <RoleActionPanel caseData={caseData} role={role} />
      )}
    </main>
  );
}
