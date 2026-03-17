'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { EvidenceDeck } from '@/components/play/EvidenceDeck';
import { RoleActionPanel } from '@/components/play/RoleActionPanel';
import { Button } from '@/components/ui/Button';
import { getCaseById } from '@/data/cases';
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
      <header className="space-y-1">
        <p className="text-xs uppercase tracking-[0.2em] text-court-accent">Case Play</p>
        <h1 className="text-2xl font-black">{caseData.title}</h1>
        <p className="text-sm text-white/80">Review the evidence, then make your move as {role}.</p>
      </header>

      {!deliberationOpen ? (
        <EvidenceDeck caseData={caseData} onComplete={() => setDeliberationOpen(true)} />
      ) : (
        <RoleActionPanel caseData={caseData} role={role} />
      )}
    </main>
  );
}
