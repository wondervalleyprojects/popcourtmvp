import { Role } from '@/lib/types';

export const roleMeta: Record<
  Role,
  {
    label: string;
    subtitle: string;
    color: string;
    prompt: string;
    emoji: string;
    accentRing: string;
    accentBg: string;
  }
> = {
  juror: {
    label: 'Juror',
    subtitle: 'Vote the vibe of truth',
    color: 'text-court-juror',
    prompt: 'You get two outcomes. Trust your instincts.',
    emoji: '🗳️',
    accentRing: 'ring-court-juror/40',
    accentBg: 'from-court-juror/20 to-transparent',
  },
  judge: {
    label: 'Judge',
    subtitle: 'Final word, zero hesitation',
    color: 'text-court-judge',
    prompt: 'Pick the ruling that becomes PopCourt law.',
    emoji: '👩‍⚖️',
    accentRing: 'ring-court-judge/40',
    accentBg: 'from-court-judge/20 to-transparent',
  },
  prosecutor: {
    label: 'Prosecutor',
    subtitle: 'Bring the heat',
    color: 'text-court-prosecutor',
    prompt: 'Drop your sharpest accusation in one punchy line.',
    emoji: '🔥',
    accentRing: 'ring-court-prosecutor/40',
    accentBg: 'from-court-prosecutor/20 to-transparent',
  },
  defense: {
    label: 'Defense',
    subtitle: 'Spin it. Save it. Win it.',
    color: 'text-court-defense',
    prompt: 'Protect your client with facts... and flair.',
    emoji: '🛡️',
    accentRing: 'ring-court-defense/40',
    accentBg: 'from-court-defense/20 to-transparent',
  },
  spectator: {
    label: 'Spectator',
    subtitle: 'React and predict chaos',
    color: 'text-court-spectator',
    prompt: 'Call the winner and toss in a spicy reaction.',
    emoji: '🍿',
    accentRing: 'ring-court-spectator/40',
    accentBg: 'from-court-spectator/20 to-transparent',
  },
};

export const roleOrder: Role[] = ['juror', 'judge', 'prosecutor', 'defense', 'spectator'];
