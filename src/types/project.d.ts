export interface Project {
  id: string;
  created_at: string;
  title: string;
  slug: string;
  duration: string;
  short_description: string;
  long_description: string;
  images: string[];
  tech_stack: string[];
  repo_link: string;
  demo_link: string;
  category: string;
  is_featured: boolean;
}