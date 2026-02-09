// // services/PortfolioService.ts (dengan huruf kapital seperti struktur Anda)
// import { supabase } from '../supabase/client';
// import type { PortfolioData } from '../../types/portfolio';

// // services/PortfolioService.ts
// const { data: profile } = await supabase.from('projects').select('*').single();
// console.log('✅ Profile Data:', profile); // ⬅️ LIHAT DATA DI SINI

// export class PortfolioService {
//   private static cache: PortfolioData | null = null;
//   private static cacheTime: number = 0;
//   private static CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

//   /**
//    * Fetch all portfolio data with progress tracking
//    * @param onProgress - Callback function to track loading progress (0-100)
//    * @returns Portfolio data object
//    */
//   static async fetchAllData(
//     onProgress?: (progress: number) => void
//   ): Promise<PortfolioData> {
//     // Check cache first
//     const now = Date.now();
//     if (this.cache && (now - this.cacheTime) < this.CACHE_DURATION) {
//       onProgress?.(100);
//       return this.cache;
//     }

//     const totalSteps = 7;
//     let currentStep = 0;

//     const updateProgress = () => {
//       currentStep++;
//       const progress = (currentStep / totalSteps) * 100;
//       onProgress?.(progress);
//     };

//     try {
//       // 1. Fetch Profile
//       const { data: profile, error: profileError } = await supabase
//         .from('profile')
//         .select('*')
//         .single();
      
//       if (profileError) console.error('Profile fetch error:', profileError);
//       updateProgress();
//       console.log('✅ Profile Datass:', profile); // ⬅️ LIHAT DATA DI SINI

//       // 2. Fetch Academics
//       const { data: academics, error: academicsError } = await supabase
//         .from('academics')
//         .select('*')
//         .order('start_year', { ascending: false });
      
//       if (academicsError) console.error('Academics fetch error:', academicsError);
//       updateProgress();

//       // 3. Fetch Certifications
//       const { data: certifications, error: certificationsError } = await supabase
//         .from('certifications')
//         .select('*')
//         .order('issued_date', { ascending: false });
      
//       if (certificationsError) console.error('Certifications fetch error:', certificationsError);
//       updateProgress();

//       // 4. Fetch Tech Stacks
//       const { data: techStacks, error: techStacksError } = await supabase
//         .from('tech_stacks')
//         .select('*')
//         .order('is_featured', { ascending: false });
      
//       if (techStacksError) console.error('Tech stacks fetch error:', techStacksError);
//       updateProgress();

//       // 5. Fetch Experiences
//       const { data: experiences, error: experiencesError } = await supabase
//         .from('experiences')
//         .select('*')
//         .order('start_date', { ascending: false });
      
//       if (experiencesError) console.error('Experiences fetch error:', experiencesError);
//       updateProgress();

//       // 6. Fetch Social Projects
//       const { data: socialProjects, error: socialProjectsError } = await supabase
//         .from('social_projects')
//         .select('*')
//         .order('created_at', { ascending: false });
      
//       if (socialProjectsError) console.error('Social projects fetch error:', socialProjectsError);
//       updateProgress();

//       // 7. Fetch Projects
//       const { data: projects, error: projectsError } = await supabase
//         .from('projects')
//         .select('*')
//         .order('created_at', { ascending: false });
      
//       if (projectsError) console.error('Projects fetch error:', projectsError);
//       updateProgress();

//       // Compile portfolio data
//       const portfolioData: PortfolioData = {
//         profile: profile || null,
//         academics: academics || [],
//         certifications: certifications || [],
//         techStacks: techStacks || [],
//         experiences: experiences || [],
//         socialProjects: socialProjects || [],
//         projects: projects || [],
//       };

//       // Cache the data
//       this.cache = portfolioData;
//       this.cacheTime = now;

//       return portfolioData;
//     } catch (error) {
//       console.error('Error fetching portfolio data:', error);
//       throw error;
//     }
//   }

//   /**
//    * Clear cached data
//    */
//   static clearCache() {
//     this.cache = null;
//     this.cacheTime = 0;
//   }

//   /**
//    * Get cached data if available
//    */
//   static getCachedData(): PortfolioData | null {
//     const now = Date.now();
//     if (this.cache && (now - this.cacheTime) < this.CACHE_DURATION) {
//       return this.cache;
//     }
//     return null;
//   }

//   /**
//    * Check if cache is still valid
//    */
//   static isCacheValid(): boolean {
//     const now = Date.now();
//     return this.cache !== null && (now - this.cacheTime) < this.CACHE_DURATION;
//   }
// }