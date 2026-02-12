import React, { useState } from 'react';
import { Layers, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { TechStack } from '@/src/types/techStack';
import StackCard from '../../molecules/StackCard';

const MyStacks: React.FC<{ stacks: TechStack[] }> = ({ stacks }) => {
  const [showAll, setShowAll] = useState(false);
  const MOBILE_LIMIT = 4; // Jumlah item yang muncul awal di mobile

  // 1. Pisahkan data berdasarkan is_featured
  const featuredStacks = stacks.filter((stack) => stack.is_featured);
  const otherStacks = stacks.filter((stack) => !stack.is_featured);

  return (
    <section className="bg-black text-white font-space-grotesk ">
      <div className="max-w-6xl mx-auto ">

        {/* Header Utama */}
        <div className="mb-10 md:pb-4">
          <div className="flex items-center gap-3 mb-2 md:mb-4">
            <Layers className="w-6 h-6 text-white" />
            <h2 className="text-2xl md:text-3xl font-bold">Tech Stack</h2>
          </div>
          <p className="text-[#888] text-sm md:text-xl max-w-2xl">
            My technical arsenal for building scalable digital solutions.
          </p>
        </div>

        {/* === SECTION 1: FEATURED (Power Tech) === */}
        {featuredStacks.length > 0 && (
          <div className="mb-8">
            {/* Sub-header untuk Featured */}
            <div className="flex items-center gap-2 mb-8 text-white">
              <Zap className="w-4 h-4 fill-current" />
              <h3 className="text-sm font-bold tracking-widest uppercase">Core Technologies</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredStacks.map((stack) => (
                <div
                  key={stack.name}
                  className="group relative rounded-xl transition-all duration-300 hover:-translate-y-1"
                >


                  {/* Content Wrapper */}
                  <div className="relative">
                    <StackCard stack={stack} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* === SECTION 2: OTHER STACKS === */}
        {otherStacks.length > 0 && (
          <div>
            {/* Separator Halus */}
            <div className="mb-6 flex items-center gap-2 text-[#666]">
              <div className="h-px flex-1 bg-[#333]"></div>
              <span className="text-xs font-medium uppercase tracking-wider">Additional Tools</span>
              <div className="h-px flex-1 bg-[#333]"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {otherStacks.map((stack, index) => (
                <div
                  key={stack.name}
                  // LOGIC VISIBILITY:
                  // - Jika index < limit: Tampil (block)
                  // - Jika showAll true: Tampil (block)
                  // - Sisanya: Hidden di Mobile, tapi Block di Desktop (md:block)
                  className={`
                        ${index < MOBILE_LIMIT || showAll ? 'block' : 'hidden md:block'}
                        opacity-90 hover:opacity-100 transition-opacity
                    `}
                >
                  <StackCard stack={stack} />
                </div>
              ))}
            </div>

            {/* Load More Button (Mobile Only) */}
            {/* Tombol ini hilang otomatis di layar desktop (md:hidden) */}
            <div className="mt-8 text-center md:hidden">
              {otherStacks.length > MOBILE_LIMIT && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#333] bg-transparent text-xs font-medium text-[#888] hover:text-white hover:border-white/40 transition-all active:scale-95"
                >
                  <span>{showAll ? 'Show Less' : `View All (${otherStacks.length - MOBILE_LIMIT} more)`}</span>
                  {showAll ? (
                    <ChevronUp className="w-3 h-3" />
                  ) : (
                    <ChevronDown className="w-3 h-3" />
                  )}
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default MyStacks;