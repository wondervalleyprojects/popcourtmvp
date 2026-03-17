import Link from 'next/link';
import { notFound } from 'next/navigation';
import { RoleCard } from '@/components/roles/RoleCard';
import { Button } from '@/components/ui/Button';
import { getCaseById } from '@/data/cases';
import { roleOrder } from '@/data/roles';

export default async function RoleSelectionPage({ params }: { params: Promise<{ caseId: string }> }) {
  const { caseId } = await params;
  const caseData = getCaseById(caseId);
  if (!caseData) notFound();

  return (
    <main className="space-y-4">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-court-accent">Role Select</p>
        <h1 className="text-2xl font-black">{caseData.title}</h1>
        <p className="text-sm text-white/80">Who are you in this courtroom saga?</p>
      </header>
      <div className="space-y-3">
        {roleOrder.map((role) => (
          <RoleCard key={role} role={role} caseId={caseData.id} />
        ))}
      </div>
      <Link href="/cases">
        <Button variant="ghost">Pick Another Case</Button>
      </Link>
    </main>
  );
}
