// types/portfolio.ts

export interface ProfileData {
  id: string;
  full_name: string;
  short_name: string;
  bio: string;
  avatar_url: string;
  email: string;
  whatsapp_number: string;
  url_linkedin: string;
  url_github: string;
  url_instagram: string;
  url_threads: string;
  cv_url: string;
}

export interface AcademicData {
  id: string;
  institution: string;
  logo_url: string;
  website: string;
  degree: string;
  major: string;
  duration: string;
  description: string;
  start_year: number;
}

export interface CertificationData {
  id: string;
  created_at: string;
  title: string;
  issuer: string;
  issued_date: string;
  image_url: string;
  short_description: string;
  long_description: string;
  skills_learned: string[];
  credential_link: string;
}

export interface TechStackData {
  id: string;
  created_at: string;
  name: string;
  category: string;
  icon_url: string;
  doc_url: string;
  is_featured: boolean;
}

export interface ExperienceData {
  id: string;
  created_at: string;
  company_name: string;
  company_logo: string;
  company_url: string;
  role: string;
  employment_type: string;
  duration: string;
  start_date: string;
  is_current: boolean;
  description: string;
}

export interface SocialProjectData {
  id: string;
  created_at: string;
  title: string;
  slug: string;
  role: string;
  label: string;
  duration: string;
  description: string;
  image_url: string;
  skills_learned: string[];
}

export interface ProjectData {
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

export interface PortfolioData {
  profile: ProfileData | null;
  academics: AcademicData[];
  certifications: CertificationData[];
  techStacks: TechStackData[];
  experiences: ExperienceData[];
  socialProjects: SocialProjectData[];
  projects: ProjectData[];
}