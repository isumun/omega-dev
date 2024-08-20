export interface Job {
  id: string;
  organization: string;
  logo: string;
  office: string;
  salary: string;
  jobType: string;
  city: string;
  created_at: string;
  updated_at: string;
  currency: string;
  gradient: number;
  is_archived: boolean | null;
  organization_icon_formats: { type: string; url: string }[];
  price_from: number;
  price_to: number;
  slug: string;
  workday: string | null;
  date: string;
  time: string;
  location: string;
  title: string;
  cover: string;
  cover_formats: Array<null | { type: string; url: string }>;
  icon: string;
  name: string;
  jobs_count: number;
  events_count: number;
  meetups_count: number;
  telegram_chats: Array<{ label: string; value: string }>;
  telegram_channels: Array<{ label: string; value: string }>;
  websites: Array<{ label: string; value: string }>;
  facebook: Array<{ label: string; value: string }>;
  youtube: Array<{ label: string; value: string }>;
  github: Array<{ label: string; value: string }>;
  devkg: Array<{ label: string; value: string }>;
}