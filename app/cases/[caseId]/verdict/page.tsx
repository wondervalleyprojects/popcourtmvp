import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ReplayActions } from '@/components/verdict/ReplayActions';
import { VerdictReveal } from '@/components/verdict/VerdictReveal';
import { Button } from '@/components/ui/Button';
import { getCaseById } from '@/data/cases';
import { roleMeta } from '@/data/roles';
import { computeVerdict } from '@/lib/game';
import { Role } from '@/lib/types';

const validRoles: Role[] = ['juror', 'judge', 'prosecutor', 'defense', 'spectator'];

export default async function VerdictPage({
  params,
  searchParams,
}: {
  params: Promise<{ caseId: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { caseId } = await params;
  const query = await searchParams;

  const caseData = getCaseById(caseId);
  if (!caseData) notFound();

  const roleRaw = typeof query.role === 'string' ? query.role : 'juror';
  const role = validRoles.includes(roleRaw as Role) ? (roleRaw as Role) : 'juror';
  const selection = typeof query.selection === 'string' ? query.selection : undefined;
  const argument = typeof query.argument === 'string' ? query.argument : undefined;
  const reaction = typeof query.reaction === 'string' ? query.reaction : undefined;

  const verdict = computeVerdict({ caseData, role, selection, argument, reaction });

  return (
    <main className="space-y-4">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-court-accent">Verdict Reveal</p>
        <p className="text-sm text-white/75">
          {roleMeta[role].emoji} {roleMeta[role].label} decision locked in.
        </p>
      </header>
      <VerdictReveal verdict={verdict} />
      <ReplayActions caseId={caseData.id} role={role} />
      <Link href={`/cases/${caseData.id}/play?role=${role}`}>
        <Button variant="ghost">Re-open Evidence Board</Button>
      </Link>
    </main>
  );
}
