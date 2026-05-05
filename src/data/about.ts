export interface TimelineEvent {
  year: string;
  month: string;
  title: string;
  description: string;
  milestone?: boolean;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2020',
    month: 'April',
    title: 'A Small Server Begins',
    description:
      'What started as a handful of friends in a Discord server quickly became something bigger. After the series returned to Netflix, fans flooded in and the community was born.',
    milestone: true,
  },
  {
    year: '2020',
    month: 'August',
    title: 'First Community Event',
    description:
      'Our first organized rewatch — just 12 people on a voice call with terrible audio — became the blueprint for everything that followed. Someone still has the screenshot.',
  },
  {
    year: '2021',
    month: 'February',
    title: 'The Nation System Launches',
    description:
      'Members could now be sorted into one of the four nations, giving the community its signature structure. The Fire Nation immediately became the most chaotic channel.',
  },
  {
    year: '2021',
    month: 'September',
    title: '1,000 Members',
    description:
      'We hit our first major milestone — 1,000 members across all four nations. The Earth Kingdom threw a party. The Air Nomads meditated. The Water Tribe argued about Sokka.',
    milestone: true,
  },
  {
    year: '2022',
    month: 'June',
    title: 'First Annual Art Tournament',
    description:
      'The Agni Kai Art Tournament became our most-loved recurring event, drawing over 80 submissions in its first year. Fan art has been a cornerstone of our identity ever since.',
    milestone: true,
  },
  {
    year: '2023',
    month: 'January',
    title: 'Website & Events Calendar',
    description:
      'We launched a proper home on the web — the site you\'re reading right now. Centralizing events, announcements, and community info in one place changed everything.',
  },
  {
    year: '2023',
    month: 'October',
    title: '5,000 Members',
    description:
      'Five thousand fans, four nations, one community. We celebrated with a 24-hour rewatch marathon that somehow held together. Sokka carried us through the hard hours.',
    milestone: true,
  },
  {
    year: '2024',
    month: 'Present',
    title: 'Still Going, Still Growing',
    description:
      'We continue to grow, host events, and welcome fans old and new. The story isn\'t over — not by a long shot. The world of Avatar still has so much left to explore.',
    milestone: true,
  },
];