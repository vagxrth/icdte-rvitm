export interface Speaker {
  id: number;
  name: string;
  title: string;
  organization: string;
  bio: string;
  image: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface ImportantDate {
  id: number;
  title: string;
  date: string;
  description?: string;
}

export interface CommitteeMember {
  id: number;
  name: string;
  role: string;
  affiliation: string;
  country: string;
}

export interface Track {
  id: number;
  title: string;
  description: string;
  topics: string[];
}

export interface RegistrationType {
  id: number;
  type: string;
  price: number;
  description: string;
  features: string[];
}

export interface Event {
  id: number;
  day: string;
  date: string;
  activities: Array<{
    id: number;
    time: string;
    title: string;
    location?: string;
    speakers?: string[];
  }>;
}