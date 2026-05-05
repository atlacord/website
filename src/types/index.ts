export type Category = 'music'|'movie'|'karaoke'|'contest'|'avatargames'|'weeklydiscussion';

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  category: Category;
  host: string;
  registered: number;
  tags: string[];
}

export interface Member {
  name: string;
  role: string;
  joinedYear: number;
  bio: string;
}