import Link from 'next/link';
import { roleMeta } from '@/data/roles';
import { Role } from '@/lib/types';
import { Card } from '@/components/ui/Card';

export function RoleCard({ role, caseId }: { role: Role; caseId: string }) {
  const meta = roleMeta[role];
  return (
    <Link href={`/cases/${caseId}/play?role=${role}`}>
      <Card className={`space-y-2 bg-gradient-to-br ${meta.accentBg} ring-1 ${meta.accentRing} active:scale-[0.98] transition-transform`}>
        <p className="text-xs text-white/75">{meta.emoji} ROLE</p>
        <h3 className={`text-xl font-black ${meta.color}`}>{meta.label}</h3>
        <p className="text-sm text-white/85">{meta.subtitle}</p>
        <p className="text-xs text-white/65">{meta.prompt}</p>
      </Card>
    </Link>
  );
}
