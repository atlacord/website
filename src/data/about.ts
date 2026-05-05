import { Nation } from '@/types';

export interface TimelineEvent {
  year: string;
  month: string;
  title: string;
  description: string;
  nation: Nation;
  milestone?: boolean;
}

export interface Founder {
  name: string;
  role: string;
  nation: Nation;
  bio: string;
  symbol: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2020',
    month: 'April',
    title: 'A Small Server Begins',
    description:
      'What started as a handful of friends in a Discord server quickly became something bigger. After the series returned to Netflix, fans flooded in and the community was born.',
    nation: 'air',
    milestone: true,
  },
  {
    year: '2020',
    month: 'August',
    title: 'First Community Event',
    description:
      'Our first organized rewatch — just 12 people on a voice call with terrible audio — became the blueprint for everything that followed. Someone still has the screenshot.',
    nation: 'water',
  },
  {
    year: '2021',
    month: 'February',
    title: 'The Nation System Launches',
    description:
      'Members could now be sorted into one of the four nations, giving the community its signature structure. The Fire Nation immediately became the most chaotic channel.',
    nation: 'fire',
  },
  {
    year: '2021',
    month: 'September',
    title: '1,000 Members',
    description:
      'We hit our first major milestone — 1,000 members across all four nations. The Earth Kingdom threw a party. The Air Nomads meditated. The Water Tribe argued about Sokka.',
    nation: 'earth',
    milestone: true,
  },
  {
    year: '2022',
    month: 'June',
    title: 'First Annual Art Tournament',
    description:
      'The Agni Kai Art Tournament became our most-loved recurring event, drawing over 80 submissions in its first year. Fan art has been a cornerstone of our identity ever since.',
    nation: 'fire',
    milestone: true,
  },
  {
    year: '2023',
    month: 'January',
    title: 'Website & Events Calendar',
    description:
      'We launched a proper home on the web — the site you\'re reading right now. Centralizing events, announcements, and community info in one place changed everything.',
    nation: 'air',
  },
  {
    year: '2023',
    month: 'October',
    title: '5,000 Members',
    description:
      'Five thousand fans, four nations, one community. We celebrated with a 24-hour rewatch marathon that somehow held together. Sokka carried us through the hard hours.',
    nation: 'water',
    milestone: true,
  },
  {
    year: '2024',
    month: 'Present',
    title: 'Still Going, Still Growing',
    description:
      'We continue to grow, host events, and welcome fans old and new. The story isn\'t over — not by a long shot. The world of Avatar still has so much left to explore.',
    nation: 'earth',
    milestone: true,
  },
];

export const founders: Founder[] = [
  {
    name: '[Founder Name]',
    role: 'Founder & Avatar',
    nation: 'air',
    symbol: '◎',
    bio: 'Started the server on a whim in April 2020 and never looked back. Lover of lore, bad puns, and Appa. Replace this with a real bio!',
  },
  {
    name: '[Co-Founder Name]',
    role: 'Co-Founder & Water Tribe Elder',
    nation: 'water',
    symbol: '〜',
    bio: 'Brought order to chaos in the early days. Responsible for the nation system and half the event formats we still use. Replace this with a real bio!',
  },
  {
    name: '[Mod Name]',
    role: 'Head Moderator & Earth Kingdom General',
    nation: 'earth',
    symbol: '⬡',
    bio: 'Keeps the community grounded (pun intended). Has read every ATLA comic twice. Toph is the correct answer. Replace this with a real bio!',
  },
  {
    name: '[Mod Name]',
    role: 'Events Lead & Fire Nation Strategist',
    nation: 'fire',
    symbol: '△',
    bio: 'The brain behind the art tournaments and watch parties. Believes Zuko\'s redemption arc is peak fiction. Replace this with a real bio!',
  },
];
