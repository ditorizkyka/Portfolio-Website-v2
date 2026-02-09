export interface Certification {
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