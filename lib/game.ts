import { roleMeta } from '@/data/roles';
import { CaseData, Role, VerdictResult } from '@/lib/types';

const hashString = (value: string) =>
  value.split('').reduce((acc, char) => (acc * 31 + char.charCodeAt(0)) % 997, 7);

export const computeVerdict = ({
  caseData,
  role,
  selection,
  argument,
  reaction,
}: {
  caseData: CaseData;
  role: Role;
  selection?: string;
  argument?: string;
  reaction?: string;
}): VerdictResult => {
  const defaultOutcome = caseData.outcomes.find((o) => o.id === caseData.canonicalVerdictId) ?? caseData.outcomes[0];

  let outcome = defaultOutcome;
  if (selection) {
    const picked = caseData.outcomes.find((o) => o.id === selection);
    if (picked) {
      outcome = picked;
    }
  }

  const dramaticSeed = hashString(`${caseData.id}-${role}-${selection ?? 'none'}-${argument ?? ''}-${reaction ?? ''}`);
  const confidence = 67 + (dramaticSeed % 28);

  const roleLabel = roleMeta[role].label;
  const reasonBits = [
    role === 'spectator' ? `The crowd energy was "${reaction ?? 'OBJECTION!'}".` : undefined,
    argument ? `Statement entered: "${argument.slice(0, 90)}".` : undefined,
    outcome.id === caseData.canonicalVerdictId
      ? caseData.canonicalVerdictRationale
      : `Alternative ruling selected: ${outcome.label}.`,
  ].filter(Boolean);

  return {
    outcome,
    headline:
      outcome.id === caseData.canonicalVerdictId
        ? caseData.canonicalVerdictHeadline
        : `${outcome.label} — Court Is In Session`,
    reason: `${roleLabel} influence registered. ${reasonBits.join(' ')}`,
    confidence,
    verdictClass: outcome.id === caseData.canonicalVerdictId ? caseData.canonicalVerdictClass : outcome.label,
    sentence: outcome.id === caseData.canonicalVerdictId ? caseData.sentence : 'Sentence stayed pending on this alternate ruling.',
  };
};
