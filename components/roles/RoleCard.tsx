import Link from 'next/link';
import { roleMeta } from '@/data/roles';
import { Role } from '@/lib/types';
import { Card } from '@/components/ui/Card';

export function RoleCard({ role, caseId }: { role: Role; caseId: string }) {
  const meta = roleMeta[role];
  return (
    <Link href={`/cases/${caseId}/play?role=${role}`}>
      <Card className="space-y-2 active:scale-[0.98] transition-transform">
        <h3 className={`text-lg font-bold ${meta.color}`}>{meta.label}</h3>
        <p className="text-sm text-white/80">{meta.subtitle}</p>
        <p className="text-xs text-white/60">{meta.prompt}</p>
      </Card>
    </Link>
  );
}
