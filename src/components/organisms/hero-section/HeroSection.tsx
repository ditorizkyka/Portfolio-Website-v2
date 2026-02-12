import React from 'react';
import { Mail } from 'lucide-react';
import ScrambleText from '../../atoms/buttonAnimation';
import HeroImage from '../../atoms/HeroImage';
import { Profile } from '@/src/types/profile';

const HeroSection: React.FC<{ profile: Profile }> = ({ profile }) => {
  console.log('HeroSection profile prop:', profile);
  return (
    // UBAH 1: Gunakan Grid untuk Mobile, dan Flex untuk Desktop
    // 'grid-cols-[auto_1fr]' membuat kolom kiri otomatis (foto) dan kanan sisa ruang (nama)
    <section className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-4 md:flex md:flex-row md:items-start md:space-x-8 md:mb-4 font-space-grotesk">

      {/* UBAH 2: Bungkus HeroImage dengan container bergaya "Kartu" */}
      {/* row-span-2 artinya di mobile dia makan tinggi baris tapi tidak lebar penuh */}
      <div className="row-span-1 md:w-auto shrink-0">
        <div className="bg-[#141415] border border-[#333333] rounded-2xl overflow-hidden w-25 h-27.5 md:w-auto md:h-auto flex items-end justify-center pt-2">
          {/* Kita atur ukuran HeroImage agar pas di dalam kotak */}
          <div className="w-24 md:w-70 md:h-70">
            <HeroImage src={profile.avatar_url} />
          </div>
        </div>
      </div>

      {/* Content Wrapper - Dipecah agar responsif */}
      <div className="contents md:block md:flex-1 text-left" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>

        {/* BAGIAN HEADER (Hello + Nama) */}
        {/* Di mobile ini akan masuk ke kolom kanan grid */}
        <div className="flex flex-col justify-baseline md:block">
          {/* Salutation */}
          <div className="flex items-center space-x-2 mb-3 md:mb-2">
            <span className="text-xl md:text-xl">👋</span>
            <span className="text-sm md:text-lg text-[#CCCCCC] font-light">Hello I Am</span>
          </div>

          {/* Name */}
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            {profile.full_name}
          </h1>
        </div>

        {/* BAGIAN BODY (Deskripsi + Tombol) */}
        {/* 'col-span-2' artinya di mobile dia akan turun ke bawah dan mengambil lebar penuh (kiri ke kanan) */}

        {/* Description */}
        <div className="col-span-2 md:w-full mt-2 md:mt-4">
          <p className="text-sm md:text-lg text-[#CCCCCC] mb-6 leading-relaxed max-w-2xl text-justify md:text-left">
            {profile.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 w-full">
            {/* Email Button */}
            <a
              href={profile.email}
              className="bg-[#141415] px-6 py-3 rounded-lg flex items-center space-x-2 justify-center border border-transparent hover:border-[#333333] transition-all group"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#CCCCCC] group-hover:text-white" />
              <ScrambleText text="EMAIL ME" className="text-md md:text-md text-[#CCCCCC] group-hover:text-white " />
            </a>

            {/* WhatsApp Button */}
            <a
              href={profile.whatsapp_number}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#141415] px-6 py-3 rounded-lg flex items-center space-x-2 justify-center border border-transparent hover:border-[#333333] transition-all group"
            >
              <WhatsAppIcon />
              <ScrambleText text="CONTACT ME" className="text-sm md:text-md md:text-md text-[#CCCCCC] group-hover:text-white" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

// Ikon WA tetap sama
const WhatsAppIcon: React.FC = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 32 32" className="text-[#CCCCCC]">
    <path d="M16 .5C7.439.5.5 7.439.5 16c0 2.826.739 5.479 2.027 7.812L.5 31.5l7.906-2.027A15.418 15.418 0 0016 31.5c8.561 0 15.5-6.939 15.5-15.5S24.561.5 16 .5zm0 28.062a12.446 12.446 0 01-6.395-1.77l-.459-.271-4.688 1.203 1.25-4.562-.298-.47A12.356 12.356 0 013.938 16c0-6.682 5.38-12.062 12.062-12.062S28.062 9.318 28.062 16 22.682 28.562 16 28.562zm7.07-9.454c-.393-.197-2.312-1.14-2.67-1.271-.359-.132-.62-.197-.88.197-.26.393-1.01 1.27-1.24 1.534-.23.264-.459.296-.85.099-.393-.198-1.66-.611-3.166-1.949-1.17-1.043-1.96-2.336-2.19-2.729-.23-.393-.024-.604.173-.801.178-.178.393-.46.59-.693.197-.23.263-.394.393-.658.132-.264.066-.494-.033-.693-.098-.198-.88-2.123-1.205-2.912-.317-.76-.642-.658-.88-.67l-.75-.012c-.264 0-.693.099-1.056.494-.362.394-1.38 1.349-1.38 3.292 0 1.943 1.411 3.817 1.61 4.088.197.264 2.773 4.232 6.719 5.935.94.405 1.673.646 2.245.827.943.3 1.8.258 2.478.157.755-.113 2.312-.943 2.641-1.857.327-.914.327-1.701.23-1.857-.098-.157-.362-.26-.755-.459z" />
  </svg>
);

export default HeroSection;