export type Repository = {
  id: number;
  name: string;
  full_name?: string;
  description?: string;
  homepage?: string;
  html_url?: string;
  language?: string;
  created_at: string;
};

export type Myself = {
  name?: string;
  avatar_url?: string;
  bio?: string;
  company?: string;
  created_at?: string;
  location?: string;
  followers?: number;
  following?: number;
}

export type UserTime = {
  datetime?: string;
  day_of_week?: number;
  day_of_year?: number;
  timezone?: string;
  week_number?: number;
}
