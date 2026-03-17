import { CaseData } from '@/lib/types';

export const cases: CaseData[] = [
  {
    id: 'group-chat-screenshot',
    slug: 'group-chat-screenshot',
    title: 'The Group Chat Screenshot Scandal',
    subtitle: 'Private tea goes public',
    premise: 'A private rant was leaked to the whole friend circle. Betrayal or accountability?',
    tags: ['friendship', 'receipts', 'chaos'],
    outcomes: [
      { id: 'guilty-leak', label: 'Guilty of Leakery' },
      { id: 'justified-whistleblower', label: 'Justified Whistleblower' },
      { id: 'everybody-messy', label: 'Everybody Is Messy' },
    ],
    canonicalVerdictId: 'everybody-messy',
    evidence: [
      {
        id: 'e1',
        side: 'prosecution',
        title: 'Timestamp Trouble',
        body: 'The screenshot was posted 14 seconds after the rant hit the chat.',
        punchline: 'That speed says premeditation, your honor.',
      },
      {
        id: 'e2',
        side: 'defense',
        title: 'Context Bomb',
        body: 'The rant included a false rumor that could hurt someone publicly.',
        punchline: 'Leaking might have stopped bigger drama.',
      },
      {
        id: 'e3',
        side: 'neutral',
        title: 'Emoji Forensics',
        body: 'Seven people reacted with 👀 before anyone denied it.',
        punchline: 'Silence is not innocence. It is performance.',
      },
    ],
    draftedArguments: {
      prosecutor: ['This was calculated betrayal dressed as concern.', 'You broke trust for clout.'],
      defense: ['The leak prevented a lie from spreading.', 'Messy? Yes. Malicious? No.'],
    },
    spectatorReactions: ['🍿 Peak chaos', '👀 I knew it', '⚖️ Justice for the receipts'],
  },
  {
    id: 'last-slice-heist',
    slug: 'last-slice-heist',
    title: 'The Last Slice Heist',
    subtitle: 'Midnight fridge felony',
    premise: 'One slice of pizza vanished before movie night. The roommate trial begins.',
    tags: ['roommates', 'food-crimes', 'petty'],
    outcomes: [
      { id: 'slice-theft', label: 'Convicted: Slice Theft' },
      { id: 'fair-snack', label: 'Legal Midnight Snack' },
      { id: 'community-service', label: 'Buy Two Pies as Penance' },
    ],
    canonicalVerdictId: 'community-service',
    evidence: [
      {
        id: 'e1',
        side: 'prosecution',
        title: 'Grease Fingerprint',
        body: 'Grease marks match the accused roommate\'s favorite gamer mouse.',
      },
      {
        id: 'e2',
        side: 'defense',
        title: 'Open-Fridge Doctrine',
        body: 'No sticky note, no label, no legal ownership.',
      },
      {
        id: 'e3',
        side: 'neutral',
        title: 'Witness Testimony',
        body: 'Neighbor heard the words “finders eaters” at 1:12 AM.',
      },
    ],
    draftedArguments: {
      prosecutor: ['If it was yours, why eat in the dark?', 'The grease doesn\'t lie.'],
      defense: ['The slice was abandoned property.', 'No label means no crime.'],
    },
    spectatorReactions: ['🍕 Criminal behavior', '😂 Give them a napkin and move on', '🔥 This is personal'],
  },
  {
    id: 'dance-credit-dispute',
    slug: 'dance-credit-dispute',
    title: 'The Viral Dance Credit Dispute',
    subtitle: 'Who owns eight counts?',
    premise: 'A dance move went viral. Creator says stolen. Influencer says inspired.',
    tags: ['creator-drama', 'viral', 'credit'],
    outcomes: [
      { id: 'credit-creator', label: 'Credit the Creator' },
      { id: 'fair-remix', label: 'Fair Remix Culture' },
      { id: 'collab-order', label: 'Mandatory Collab Arc' },
    ],
    canonicalVerdictId: 'credit-creator',
    evidence: [
      {
        id: 'e1',
        side: 'prosecution',
        title: 'Original Post',
        body: 'Creator uploaded the move 3 weeks earlier with low views.',
      },
      {
        id: 'e2',
        side: 'defense',
        title: 'Remix Defense',
        body: 'Influencer added new transitions, staging, and a beat switch.',
      },
      {
        id: 'e3',
        side: 'neutral',
        title: 'Comment Court',
        body: 'Top comment says: “Tag the originator. It\'s free.”',
      },
    ],
    draftedArguments: {
      prosecutor: ['Virality does not erase authorship.', 'Credit is the minimum, not a bonus.'],
      defense: ['Culture evolves through remix.', 'Inspiration isn\'t theft by default.'],
    },
    spectatorReactions: ['🕺 Tag the original', '📈 It\'s giving algorithm luck', '⚖️ Split the credit'],
  },
];

export const getCaseById = (id: string) => cases.find((c) => c.id === id);
