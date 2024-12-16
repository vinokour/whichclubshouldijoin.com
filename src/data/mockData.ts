import { Club, Category, CareerPath } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Academic', icon: 'book' },
  { id: '2', name: 'Sports', icon: 'trophy' },
  { id: '3', name: 'Arts', icon: 'palette' },
  { id: '4', name: 'Technology', icon: 'code-2' },
  { id: '5', name: 'Cultural', icon: 'globe' },
  { id: '6', name: 'Service', icon: 'heart-handshake' },
];

export const careerPaths: CareerPath[] = [
  { id: '1', name: 'Investment Banking', description: 'Career opportunities in investment banking and financial services' },
  { id: '2', name: 'Trading', description: 'Roles in financial markets and trading' },
  { id: '3', name: 'Software Engineering', description: 'Careers in software development and engineering' },
  { id: '4', name: 'Product Management', description: 'Product management roles in tech companies' },
  { id: '5', name: 'Sports Management', description: 'Careers in sports administration and management' },
  { id: '6', name: 'Consulting', description: 'Management and strategy consulting roles' },
  { id: '7', name: 'Research', description: 'Academic and industry research positions' },
];

export const clubs: Club[] = [
  {
    id: '1',
    name: 'Code Crafters',
    category: 'Technology',
    description: 'A community of passionate programmers working on innovative projects.',
    memberCount: 45,
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800',
    tags: ['Programming', 'Web Development', 'AI'],
    meetingSchedule: 'Every Tuesday at 6 PM',
    contactEmail: 'codecrafters@university.edu',
    careerPaths: ['Software Engineering', 'Product Management']
  },
  {
    id: '2',
    name: 'Global Culture Society',
    category: 'Cultural',
    description: 'Celebrating diversity through cultural exchange and events.',
    memberCount: 78,
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800',
    tags: ['Culture', 'Events', 'International'],
    meetingSchedule: 'Fridays at 5 PM',
    contactEmail: 'globalculture@university.edu',
    careerPaths: ['Consulting', 'Research']
  },
  {
    id: '3',
    name: 'Debate Masters',
    category: 'Academic',
    description: 'Fostering critical thinking through competitive debate.',
    memberCount: 32,
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800',
    tags: ['Debate', 'Public Speaking', 'Critical Thinking'],
    meetingSchedule: 'Wednesdays at 7 PM',
    contactEmail: 'debatemasters@university.edu',
    careerPaths: ['Consulting', 'Investment Banking']
  }
];