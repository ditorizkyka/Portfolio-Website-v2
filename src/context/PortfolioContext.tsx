// // contexts/PortfolioContext.tsx
// 'use client';

// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { PortfolioService } from '../lib/services/PortfolioServices';
// import type { PortfolioData } from '../types/portfolio';

// interface PortfolioContextType {
//   data: PortfolioData | null;
//   loading: boolean;
//   error: string | null;
//   progress: number;
//   refetch: () => Promise<void>;
// }

// const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

// interface PortfolioProviderProps {
//   children: ReactNode;
// }

// export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({ children }) => {
//   const [data, setData] = useState<PortfolioData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [progress, setProgress] = useState(0);

//   const fetchData = async () => {
//     try {
//       console.log('🔄 Fetching portfolio data...');
//       setLoading(true);
//       setError(null);
//       setProgress(0);

//       const portfolioData = await PortfolioService.fetchAllData((prog) => {
//         setProgress(prog);
//       });

//       setData(portfolioData);
      
//       // Smooth completion animation
//       setProgress(100);
      
//       await new Promise(resolve => setTimeout(resolve, 500));
      
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Failed to load portfolio data');
//       console.error('Portfolio data fetch error:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const value: PortfolioContextType = {
//     data,
//     loading,
//     error,
//     progress,
//     refetch: fetchData,
//   };

//   return (
//     <PortfolioContext.Provider value={value}>
//       {children}
//     </PortfolioContext.Provider>
//   );
// };

// /**
//  * Custom hook to access portfolio data
//  * @throws Error if used outside PortfolioProvider
//  */
// export const usePortfolio = (): PortfolioContextType => {
//   const context = useContext(PortfolioContext);
//   if (!context) {
//     throw new Error('usePortfolio must be used within PortfolioProvider');
//   }
//   return context;
// };