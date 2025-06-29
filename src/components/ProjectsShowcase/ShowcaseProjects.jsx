import React, { useState } from 'react';
import { Github, X, Calendar, Code } from 'lucide-react';
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
import pollusafe from '../../assets/project-image/pollusafe.jpg'; // Adjust the path as necessary

import ScrambleText from "../widget/buttonAnimation"; // Adjust the path as necessary
import {
    Dumbbell,
    Rocket,
    PenTool,
    ExternalLink,
    ArrowRight
} from "lucide-react";
// Di akhir file ProjectsSection.js


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
    image: telmind, // dummy
    title: "Tel-Mind Powered Gemini",
    label: "AI Integration Projects",
    description: "Aplikasi Flutter yang menghasilkan respons AI cerdas berbasis Gemini API.",
    githubUrl: "https://github.com/ditorizkyka/Tel-Mind-Powered-by-Gemini",
    duration: "1 bulan",
    stack: ["Flutter", "Gemini API", "Generative AI"],
    fullDescription: "Eksperimen awal teknologi AI generatif dalam aplikasi berbasis teks.",
    implementation: "Integrasi Flutter dan Gemini API untuk membangun UI dan text-based generative AI engine."
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
    githubUrl: "https://github.com/ditorizkyka/Money-Mate-ABP-Projects",
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
    image: medpelvis, // dummy
    title: "MedPelvis Mobile",
    label: "Mobile App Projects",
    description: "Aplikasi edukatif tentang anatomi tubuh dan mekanisme persalinan melalui video dan visual interaktif.",
    githubUrl: "https://github.com/ditorizkyka/MedPelvis-Mobile",
    duration: "1 bulan",
    stack: ["Flutter", "Riverpod", "GoRouter", "YouTube API"],
    fullDescription: "Aplikasi pembelajaran interaktif yang membahas bagian pelvis, lengan, kaki, serta mekanisme persalinan menggunakan ilustrasi, deskripsi detail, dan video edukatif.",
    implementation: "Dibangun menggunakan Flutter dengan implementasi state management Riverpod dan navigasi menggunakan GoRouter. Menyediakan layout responsif dan video pembelajaran terintegrasi dengan YouTube."
  }

];


export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  


  const truncateText = (text, maxLines = 2) => {
    const words = text.split(' ');
    const maxWords = maxLines * 15;
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  const getLabelColor = (label) => {
    return label === 'SEAL Projects' 
      ? 'bg-blue-100 text-blue-800 border-blue-200'
      : 'bg-green-100 text-green-800 border-green-200';
  };

  const openDialog = (project) => {
    setSelectedProject(project);
  };

  const closeDialog = () => {
    setSelectedProject(null);
  };

  return (
    <section className=" bg-black min-h-screen text-left" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-7xl mx-auto ">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <h1 className="text-4xl font-bold text-white">All projects details</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-4xl leading-relaxed">
            Formulating comprehensive strategies to meet your design goals and exceed expectations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0A0A0B] border border-[#1f1f1f] text-[#999999] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              onClick={() => openDialog(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                
                {/* Floating Label */}
                <div className="absolute top-3 right-3">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm bg-opacity-90 ${getLabelColor(project.label)}`}>
                    {project.label}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                {/* Project Title */}
                <h3 className="text-md font-bold text-white mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-[#999999] text-xs leading-relaxed mb-3 line-clamp-2">
                  {truncateText(project.description)}
                </p>

                {/* GitHub Button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1f1f1f] text-[#CCCCCC] hover:bg-gray-800 text-sm font-medium rounded-lg transition-colors duration-200 group/btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-4 h-4 text-[#CCCCCC] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Load More Button */}
        
        <div className="flex gap-4 w-full px-4">
  {/* GitHub Button */}
  <a
    href="https://github.com/ditorizkyka"
    target="_blank"
    rel="noopener noreferrer"
    className="w-1/2"
  >
    <button className="w-full flex items-center justify-center space-x-2 bg-[#141415] hover:bg-[#1f1f20] px-6 py-3 rounded-lg transition-colors group">
      <ScrambleText
        text="GITHUB PROJECTS"
        className="text-md text-[#CCCCCC] group-hover:text-[#FFFFFF] transition-colors"
      />
      <ArrowRight className="w-4 h-4 text-[#CCCCCC] group-hover:text-[#FFFFFF] transition-colors" />
    </button>
  </a>

  {/* Google Drive Button */}
  <a
    href="https://drive.google.com/file/d/1rxH1fs-9ii1ltH8OgwQL3mqYI2GU2_2y/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="w-1/2"
  >
    <button className="w-full flex items-center justify-center space-x-2 bg-[#141415] hover:bg-[#1f1f20] px-6 py-3 rounded-lg transition-colors group">
      <ScrambleText
        text="DRIVE FILES"
        className="text-md text-[#CCCCCC] group-hover:text-[#FFFFFF] transition-colors"
      />
      <ArrowRight className="w-4 h-4 text-[#CCCCCC] group-hover:text-[#FFFFFF] transition-colors" />
    </button>
  </a>
</div>

        
      </div>

      {/* Dialog Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#0A0A0B] border border-[#1f1f1f] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Dialog Header */}
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button
                onClick={closeDialog}
                className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Floating Label in Dialog */}
              <div className="absolute top-4 left-4">
                <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full border backdrop-blur-sm bg-opacity-90 ${getLabelColor(selectedProject.label)}`}>
                  {selectedProject.label}
                </span>
              </div>
            </div>

            {/* Dialog Content */}
            <div className="p-6">
              {/* Project Title */}
              <h2 className="text-2xl font-bold text-white mb-4">
                {selectedProject.title}
              </h2>

              {/* Duration and Stack Info */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Durasi: {selectedProject.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Code className="w-4 h-4" />
                  <span className="text-sm">Tech Stack</span>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#1f1f1f] text-blue-400 text-sm rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Full Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Deskripsi</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Implementation */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Implementasi</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {selectedProject.implementation}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                {/* Main Buttons */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 w-1/2 justify-center"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </a>
                  <button
                    onClick={closeDialog}
                    className="px-6 py-3 bg-[#1f1f1f] hover:bg-gray-800 text-gray-300 font-medium rounded-lg transition-colors duration-200 w-1/2"
                  >
                    Close
                  </button>
                </div>

                {/* New Buttons */}
                {/* New Buttons */}
  <div className="flex gap-4">
    <button
      className="w-1/2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-all"
    >
      Live Demo
    </button>
    <button
      className="w-1/2 px-6 py-3 bg-green-700 hover:bg-green-600 text-white font-medium rounded-lg transition-all"
    >
      Documentation
    </button>
  </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}