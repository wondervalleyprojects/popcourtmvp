import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function ReplayActions({ caseId, role }: { caseId: string; role: string }) {
  return (
    <div className="space-y-3">
      <Link href="/cases">
        <Button>Next Case</Button>
      </Link>
      <Link href={`/cases/${caseId}/roles`}>
        <Button variant="secondary">Replay This Case as {role}</Button>
      </Link>
    </div>
  );
}
