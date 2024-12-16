export interface Club {
  id: string;
  name: string;
  category: string;
  description: string;
  memberCount: number;
  imageUrl: string;
  tags: string[];
  meetingSchedule: string;
  contactEmail: string;
  careerPaths: string[];
}

export type Category = {
  id: string;
  name: string;
  icon: string;
};

export type CareerPath = {
  id: string;
  name: string;
  description: string;
};