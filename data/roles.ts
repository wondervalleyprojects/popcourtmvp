import { Role } from '@/lib/types';

export const roleMeta: Record<
  Role,
  { label: string; subtitle: string; color: string; prompt: string }
> = {
  juror: {
    label: 'Juror',
    subtitle: 'Vote the vibe of truth',
    color: 'text-court-juror',
    prompt: 'You get two outcomes. Trust your instincts.',
  },
  judge: {
    label: 'Judge',
    subtitle: 'Final word, zero hesitation',
    color: 'text-court-judge',
    prompt: 'Pick the ruling that becomes PopCourt law.',
  },
  prosecutor: {
    label: 'Prosecutor',
    subtitle: 'Bring the heat',
    color: 'text-court-prosecutor',
    prompt: 'Drop your sharpest accusation in one punchy line.',
  },
  defense: {
    label: 'Defense',
    subtitle: 'Spin it. Save it. Win it.',
    color: 'text-court-defense',
    prompt: 'Protect your client with facts... and flair.',
  },
  spectator: {
    label: 'Spectator',
    subtitle: 'React and predict chaos',
    color: 'text-court-spectator',
    prompt: 'Call the winner and toss in a spicy reaction.',
  },
};

export const roleOrder: Role[] = ['juror', 'judge', 'prosecutor', 'defense', 'spectator'];
