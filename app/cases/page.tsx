import Link from 'next/link';
import { CaseCard } from '@/components/cases/CaseCard';
import { Button } from '@/components/ui/Button';
import { cases } from '@/data/cases';

export default function CasesPage() {
  return (
    <main className="space-y-4">
      <header className="space-y-2 pt-2">
        <p className="text-xs uppercase tracking-[0.2em] text-court-accent">Docket</p>
        <h1 className="text-2xl font-black">Choose Tonight&apos;s Case</h1>
      </header>
      <div className="space-y-3">
        {cases.map((caseData) => (
          <CaseCard key={caseData.id} caseData={caseData} />
        ))}
      </div>
      <Link href="/">
        <Button variant="ghost">Back Home</Button>
      </Link>
    </main>
  );
}
