import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function ReplayActions({ caseId, role }: { caseId: string; role: string }) {
  return (
    <div className="space-y-3">
      <Link href="/cases">
        <Button size="lg">Play Another Case 🔁</Button>
      </Link>
      <Link href={`/cases/${caseId}/roles`}>
        <Button variant="secondary" size="lg">Switch Role in This Case</Button>
      </Link>
    </div>
  );
}
