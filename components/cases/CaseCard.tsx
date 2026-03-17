import Link from 'next/link';
import { CaseData } from '@/lib/types';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { Button } from '@/components/ui/Button';

export function CaseCard({ caseData }: { caseData: CaseData }) {
  return (
    <Card className="space-y-3 border-white/20">
      <p className="text-xs uppercase tracking-[0.2em] text-court-accent">Case File · {caseData.category}</p>
      <h2 className="text-xl font-black leading-tight text-court-text">{caseData.title}</h2>
      <p className="text-sm text-white/85">{caseData.subtitle}</p>
      <div className="flex flex-wrap gap-2">
        {caseData.tags.map((tag) => (
          <Pill key={tag} label={tag} />
        ))}
      </div>
      <p className="text-sm text-white/70">{caseData.premise}</p>
      <p className="text-xs text-white/60">Core question: {caseData.coreQuestion}</p>
      <Link href={`/cases/${caseData.id}/roles`}>
        <Button size="lg">Hear the Case 🎬</Button>
      </Link>
    </Card>
  );
}
