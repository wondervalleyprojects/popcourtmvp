export type Role = 'juror' | 'judge' | 'prosecutor' | 'defense' | 'spectator';

export type EvidenceSide = 'prosecution' | 'defense' | 'neutral';

export type EvidenceCard = {
  id: string;
  side: EvidenceSide;
  title: string;
  body: string;
  punchline?: string;
};

export type OutcomeOption = {
  id: string;
  label: string;
};

export type CaseData = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  premise: string;
  tags: string[];
  evidence: EvidenceCard[];
  outcomes: OutcomeOption[];
  draftedArguments: {
    prosecutor: string[];
    defense: string[];
  };
  spectatorReactions: string[];
  canonicalVerdictId: string;
};

export type VerdictResult = {
  outcome: OutcomeOption;
  headline: string;
  reason: string;
  confidence: number;
};
