import { useState } from "react";
import ScrambleText from "../widget/buttonAnimation"; // Adjust the path as necessary
import {
    Dumbbell,
    Rocket,
    PenTool,
    ExternalLink,
    ArrowRight
} from "lucide-react";
import telmind from '../../assets/project-image/telmind.jpg'; // Adjust the path as necessary
import catclassification from '../../assets/project-image/cat-classification.jpg'; // Adjust the path as necessary
import crabPrediction from '../../assets/project-image/crab-prediction.png';
import vehicleDetection from '../../assets/project-image/vehicle-detection.jpg';
import catDetection from '../../assets/project-image/cat-detection.jpg'; 
import potholeDetection from '../../assets/project-image/pothole-detection.png';
import medpelvis from '../../assets/project-image/medpelvis.jpg';
import moneyMate from '../../assets/project-image/moneyMate.jpg'; // Adjust the path as necessary
import waveEdu from '../../assets/project-image/waveEdu.png';
import cardCCredit from '../../assets/project-image/cardCredit.jpg'; 
import pollusafe from '../../assets/project-image/pollusafe.jpg'; 
import { Link } from "react-router-dom";

// Import projects dari file ProjectsSection
const projects = [
  {
    id: 1,
    image: crabPrediction, // dummy
    title: "Crab Age Prediction",
    label: "AI/ML Projects",
    description: "Prediksi usia kepiting menggunakan kNN untuk mengoptimalkan kualitas berdasarkan umur.",
    githubUrl: "https://github.com/ditorizkyka/Artificial-Intelligence-Projects/blob/main/AI-Project.ipynb",
    duration: "2 bulan",
    stack: ["Python", "kNN", "Google Colab"],
    fullDescription: "Model regresi dengan kNN untuk memprediksi umur kepiting guna meningkatkan kualitas panen.",
    implementation: "Implementasi dari awal menggunakan Python di Google Colab, dengan visualisasi dan preprocessing data."
  },
  
   {
    id: 2,
    image: medpelvis, // dummy
    title: "MedPelvis Mobile",
    label: "Mobile App Projects",
    description: "Aplikasi edukatif tentang anatomi tubuh dan mekanisme persalinan melalui video dan visual interaktif.",
    githubUrl: "https://github.com/ditorizkyka/MedPelvis-Mobile",
    duration: "1 bulan",
    stack: ["Flutter", "Riverpod", "GoRouter", "YouTube API"],
    fullDescription: "Aplikasi pembelajaran interaktif yang membahas bagian pelvis, lengan, kaki, serta mekanisme persalinan menggunakan ilustrasi, deskripsi detail, dan video edukatif.",
    implementation: "Dibangun menggunakan Flutter dengan implementasi state management Riverpod dan navigasi menggunakan GoRouter. Menyediakan layout responsif dan video pembelajaran terintegrasi dengan YouTube."
  },
  {
    id: 3,
    image: catclassification , // dummy
    title: "Cat Breed Classification",
    label: "Computer Vision",
    description: "Klasifikasi jenis kucing dari citra menggunakan model CNN seperti VGG16 dan MobileNetV2.",
    githubUrl: "https://github.com/ditorizkyka",
    duration: "1 bulan",
    stack: ["TensorFlow", "VGG16", "MobileNetV2", "InceptionV3"],
    fullDescription: "Tugas akhir dari mata kuliah Computer Vision untuk klasifikasi jenis kucing.",
    implementation: "Dataset dari Roboflow dengan bounding box, evaluasi dilakukan berdasarkan akurasi dan precision-recall."
  },
  {
    id: 4,
    image: catDetection, // dummy
    title: "Cat Breed Detection with YOLOv11",
    label: "Real-time Detection",
    description: "Deteksi real-time jenis kucing dengan YOLOv11 menggunakan kamera laptop.",
    githubUrl: "https://github.com/ditorizkyka",
    duration: "2 minggu",
    stack: ["YOLOv11-S", "PyTorch", "OpenCV"],
    fullDescription: "Eksperimen mendeteksi jenis kucing menggunakan YOLOv11 dengan input kamera.",
    implementation: "Model dilatih dan diuji menggunakan input video langsung dengan evaluasi akurasi dan kecepatan."
  },
  {
    id: 5,
    image: vehicleDetection, // dummy
    title: "Vehicle Detection on Aerial Images",
    label: "Computer Vision",
    description: "Deteksi kendaraan dari citra drone dengan YOLOv11 untuk monitoring lalu lintas.",
    githubUrl: "https://github.com/lal4lal/Vehicle-Aerial-Image-Detection",
    duration: "3 bulan",
    stack: ["YOLOv11n", "YOLOv11s", "Ultralytics"],
    fullDescription: "Model deteksi ringan menggunakan YOLOv11n/s dengan akurasi tinggi (mAP@0.5 hingga 98%).",
    implementation: "Dilatih menggunakan dataset drone aerial dengan Ultralytics framework, evaluasi menggunakan Precision dan Recall."
  },
  {
    id: 6,
    image: potholeDetection, // dummy
    title: "Pothole Detection with SR & YOLOv9-T",
    label: "Image Enhancement",
    description: "Deteksi lubang jalan dengan YOLOv9-T dan peningkatan citra melalui Stable Diffusion SR.",
    githubUrl: "https://github.com/ditorizkyka",
    duration: "2 bulan",
    stack: ["YOLOv9-T", "Stable Diffusion SR", "Computer Vision"],
    fullDescription: "Perbandingan deteksi lubang jalan menggunakan citra mentah vs citra yang telah ditingkatkan.",
    implementation: "Evaluasi dengan mAP, precision, dan recall untuk mengukur performa pasca-enhancement."
  },
  {
    id: 7,
    image: pollusafe, // dummy
    title: "Pollusafe App",
    label: "Mobile App Projects",
    description: "Aplikasi pemantauan kualitas udara dengan fitur notifikasi AQI real-time dan integrasi Google Maps.",
    githubUrl: "https://github.com/ditorizkyka/Pollusafe-App",
    duration: "3 bulan",
    stack: ["Flutter", "Firebase", "Google Maps", "AQI API"],
    fullDescription: "Memberikan informasi AQI dan peringatan kualitas udara kepada pengguna.",
    implementation: "Menggunakan Flutter dengan Riverpod, GoRouter, dan HTTP GET/POST untuk API. Fitur map dan autentikasi Firebase."
  },
  {
    id: 8,
    image: waveEdu, // dummy
    title: "Wave Education",
    label: "Web & Mobile",
    description: "Platform pembelajaran pemrograman dengan quiz interaktif dan reward.",
    githubUrl: "https://github.com/ditorizkyka/Wave-Education",
    duration: "3 bulan",
    stack: ["Flutter", "Spring Boot", "MySQL"],
    fullDescription: "Aplikasi pembelajaran terstruktur untuk semua level dengan modul interaktif.",
    implementation: "Frontend Flutter, backend Spring Boot, dan database MySQL. Fitur progress tracking dan quiz."
  },
  {
    id: 9,
    image: moneyMate, // dummy
    title: "MoneyMate App",
    label: "Personal Finance",
    description: "Aplikasi pencatatan pengeluaran harian dengan statistik pengeluaran dan fitur konversi mata uang.",
    githubUrl: "https://github.com/ditorizkyka/MoneyMate",
    duration: "1 bulan",
    stack: ["Flutter", "Firebase", "GETX"],
    fullDescription: "Tracking pengeluaran pengguna secara real-time dan visualisasi data keuangan.",
    implementation: "Menggunakan GETX untuk state management dan Firebase untuk autentikasi dan penyimpanan data."
  },
  {
    id: 10,
    image: cardCCredit, // dummy
    title: "Credit Card Segmentation",
    label: "Machine Learning",
    description: "Segmentasi pengguna kartu kredit menggunakan K-Means untuk mendukung keputusan bisnis.",
    githubUrl: "https://github.com/ditorizkyka/Machine-Learning-Project",
    duration: "1 bulan",
    stack: ["Python", "K-Means", "Streamlit"],
    fullDescription: "Analisis pola penggunaan kartu kredit berdasarkan jumlah kartu, limit, dan frekuensi layanan.",
    implementation: "Implementasi clustering dengan visualisasi PCA, input user interaktif via Streamlit."
  },
    {
    id: 11,
    image: telmind, // dummy
    title: "Tel-Mind Powered Gemini",
    label: "AI Integration Projects",
    description: "Aplikasi Flutter yang menghasilkan respons AI cerdas berbasis Gemini API.",
    githubUrl: "https://github.com/ditorizkyka",
    duration: "1 bulan",
    stack: ["Flutter", "Gemini API", "Generative AI"],
    fullDescription: "Eksperimen awal teknologi AI generatif dalam aplikasi berbasis teks.",
    implementation: "Integrasi Flutter dan Gemini API untuk membangun UI dan text-based generative AI engine."
  },

];
/* eslint-disable no-unused-vars */
const MyTopProjects = () => {
  // ✅ Perbaiki useState - tambahkan hoveredProject state
  const [hoveredProject, setHoveredProject] = useState(null);
  
  // Ambil hanya 6 project teratas untuk ditampilkan di Top Projects
  const topProjects = projects.slice(0, 3);

  // Fungsi untuk mengonversi GitHub URL menjadi format yang lebih bersih
  const formatGithubUrl = (githubUrl) => {
    return githubUrl.replace('https://github.com/', 'github.com/');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="relative z-10 container mx-auto py-12">
        {/* Header */}
        <div>
            <div className="flex items-center space-x-3 mb-4">
            <PenTool className="w-7 h-7" />
            <h2
                className="text-3xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
                My Top Projects
            </h2>
            </div>

            {/* Geser paragraf sejajar ke ikon */}
            <div className="">
            <p 
                className="text-[#999999] mb-12 leading-relaxed text-xl text-left"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
                Selected impactful projects showcasing my technical skills, creativity, and real-world problem-solving capabilities.
            </p>
            </div>
        </div>
        
        {/* Projects Grid */}
        <div className="space-y-12 mb-10 text-left mx-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {topProjects.map((project) => (
            <div
              key={project.id}
              className="group h-40 lg:h-70 relative rounded-3xl overflow-hidden transition-all duration-700 hover:scale-[1.02] flex flex-col lg:flex-row gap-0 bg-[#0A0A0B] backdrop-blur-xl border border-white/10"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Section - Container */}
              <div className="lg:w-1/2 my-4 ml-4 relative overflow-hidden rounded-3xl lg:rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br opacity-90"></div>
                <div className="absolute inset-0 bg-black/10"></div>
                
                {/* Tampilkan gambar asli dari project */}
                <div className="relative z-10 w-full h-full">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 px-6 py-8 flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-row gap-3 justify-between mb-6">
                    <h2 className="text-2xl lg:text-2xl font-bold text-white line-clamp-2">
                      {project.title}
                    </h2>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex text-[#999999] font-semibold border-[#1f1f1f] items-center gap-2 px-4 py-2 bg-[#141415] rounded-md text-md transition-all duration-300 border w-fit hover:bg-[#1f1f20]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Github
                    </a>
                  </div>
 
                  <div className="flex flex-wrap gap-3 text-sm mb-6">
                    <span className="bg-[#1f1f1f] text-[#999999] text-xs px-2 py-1 rounded-full">
                      {project.label}
                    </span>
                    <span className="bg-[#1f1f1f] text-[#999999] text-xs px-2 py-1 rounded-full">
                      {project.duration}
                    </span>
                  </div>

                 <p className="text-base leading-relaxed text-[#999999] line-clamp-2">
                  {project.description}
                </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.stack.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-2 py-1 bg-[#1f1f1f] text-[#999999] text-xs rounded-md">
                        +{project.stack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link to="/projects">
          <div className="flex justify-center items-center mx-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <button className="w-full flex items-center space-x-2 bg-[#141415] hover:bg-[#1f1f20] px-6 py-3 rounded-lg transition-colors justify-center group">
              <ScrambleText
                text="VIEW ALL PROJECTS"
                className="text-md text-[#CCCCCC] group-hover:text-[#FFFFFF] transition-colors"
              />
              <ArrowRight className="w-4 h-4 text-[#CCCCCC] group-hover:text-[#FFFFFF] transition-colors" />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MyTopProjects;