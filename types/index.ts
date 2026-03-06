export interface UserProfile {
  name: string;
  bio: string;
  avatar: string;
  location?: string;
  company?: string;
  blog?: string;
  github: string;
  email: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  homepage?: string;
  language?: string;
  stars: number;
  url: string;
  topics: string[];
  created_at: string;
  updated_at: string;
}

export interface BlogLink {
  id: string;
  title: string;
  description: string;
  url: string;
  date: string;
  tags?: string[];
}
