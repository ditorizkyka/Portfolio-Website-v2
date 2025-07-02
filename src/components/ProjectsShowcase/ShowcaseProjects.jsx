import React, { useEffect, useState } from 'react';
import { Github, X, Calendar, Code , Link, Shapes, Radio} from 'lucide-react';
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
    fullDescription: "Crab Age Prediction adalah salah satu proyek untuk memprediksi usia kepiting guna memaksimalkan kualitas kepiting berdasarkan usianya. Model ini dibuat dari nol untuk mengimplementasikan algoritma k-Nearest Neighbors (kNN) pada permasalahan regresi.",
    implementation: `
  <p>Proses dimulai dengan <strong>preprocessing</strong> data seperti pengecekan null dan penanganan outlier.</p>
  <p>Fitur yang digunakan: <em>Sex, Length, Diameter, Height, Weight, Shucked Weight, Viscera Weight, Shell Weight</em>.</p>
  <ul style="margin-left: 1rem; list-style-type: disc;">
    <li>Data dibagi menjadi 80% training dan 20% testing.</li>
    <li>Scaling dilakukan menggunakan StandardScaler.</li>
    <li>Model kNN Regression diimplementasikan manual.</li>
    <li>Nilai <code>k = 3</code> dipilih berdasarkan evaluasi terbaik.</li>
  </ul>
  <p>Hasil evaluasi: MAE = 0.084, MSE = 0.042, RMSE = 0.207, R² = 0.9938.</p>
`,
    isDeployed : false,
    liveUrl: "",

},
  {
    id: 2,
    image: telmind, // dummy
    title: "Tel-Mind Powered Gemini",
    label: "AI/ML Projects",
    description: "Aplikasi Flutter yang menghasilkan respons AI cerdas berbasis Gemini API.",
    githubUrl: "https://github.com/ditorizkyka/Tel-Mind-Powered-by-Gemini",
    duration: "1 bulan",
    stack: ["Flutter", "Gemini API", "Generative AI"],
    fullDescription: "Tel-Mind adalah aplikasi yang membantu pengguna menghasilkan respons yang kreatif dan cerdas menggunakan generative AI. Tel-Mind didukung oleh Gemini API, yang memungkinkan pengguna untuk mengeksplorasi kekuatan kecerdasan buatan. Tel-Mind, sebuah aplikasi berbasis Flutter, difokuskan sepenuhnya pada fitur AI berbasis teks sebagai bagian dari eksperimen awal mereka terhadap teknologi generatif.",
    implementation: `
  <p>Implementasi proyek <strong>Tel-Mind</strong> dilakukan dengan membangun aplikasi Flutter yang terintegrasi dengan <strong>Gemini API</strong> untuk menghasilkan respons berbasis teks menggunakan <em>Generative AI</em>.</p>
  <p>Langkah-langkah utama dalam pengembangan:</p>
  <ul style="margin-left: 1rem; list-style-type: disc;">
    <li>Integrasi <strong>Gemini API</strong> ke dalam Flutter menggunakan HTTP request untuk mengirim dan menerima data teks.</li>
    <li>Perancangan antarmuka pengguna yang minimalis dan fokus pada input-output teks.</li>
    <li>Menggunakan <code>Riverpod</code> untuk manajemen state dan <code>GoRouter</code> untuk navigasi antar halaman.</li>
    <li>Respons AI ditampilkan secara real-time dalam antarmuka yang responsif dan ramah pengguna.</li>
  </ul>
  <p>Eksperimen ini ditujukan sebagai tahap awal untuk memahami potensi dan batasan AI generatif dalam konteks aplikasi mobile.</p>
`,
    isDeployed : false,
    liveUrl: "",


  },
  {
    id: 3,
    image: catclassification , // dummy
    title: "Cat Breed Classification",
    label: "AI/ML Projects",
    description: "Klasifikasi jenis kucing dari citra menggunakan model CNN seperti VGG16 dan MobileNetV2.",
    githubUrl: "https://github.com/ditorizkyka",
    duration: "1 bulan",
    stack: ["TensorFlow", "VGG16", "MobileNetV2", "InceptionV3"],
    fullDescription: "Cat Breeds Classification adalah proyek yang sedang berlangsung untuk mengklasifikasikan ras kucing berdasarkan gambar. Proyek ini merupakan tugas akhir dari mata kuliah Computer Vision pada semester 6. Kami menggunakan dataset dari Roboflow yang dilengkapi dengan bounding box untuk mendeteksi dan mengidentifikasi ras-ras kucing.",
    implementation: `
    <p>Proses dimulai dengan <strong>preprocessing</strong> data seperti pengecekan null dan penanganan outlier.</p>
    <p>Fitur yang digunakan: <em>Sex, Length, Diameter, Height, Weight, Shucked Weight, Viscera Weight, Shell Weight</em>.</p>
    <ul style="margin-left: 1rem; list-style-type: disc;">
      <li>Data dibagi menjadi 80% training dan 20% testing.</li>
      <li>Scaling dilakukan menggunakan StandardScaler.</li>
      <li>Model kNN Regression diimplementasikan manual.</li>
      <li>Nilai <code>k = 3</code> dipilih berdasarkan evaluasi terbaik.</li>
    </ul>
    <p>Hasil evaluasi: MAE = 0.084, MSE = 0.042, RMSE = 0.207, R² = 0.9938.</p>
  `,
    isDeployed : false,
    liveUrl: "",

  },
  
  
  {
    id: 4,
    image: catDetection, // dummy
    title: "Cat Breed Detection with YOLOv11",
    label: "AI/ML Projects",
    description: "Deteksi real-time jenis kucing dengan YOLOv11 menggunakan kamera laptop.",
    githubUrl: "https://github.com/ditorizkyka",
    duration: "2 minggu",
    stack: ["YOLOv11-S", "PyTorch", "OpenCV"],
    fullDescription: "Melakukan deteksi ras kucing secara real-time menggunakan YOLOv11-s dengan input langsung dari kamera USB (perangkat laptop). Eksperimen ini melibatkan proses pengaturan model, pengambilan video stream, serta evaluasi akurasi dan kecepatan deteksi dalam kondisi dunia nyata.",
    implementation: `
  <p>Pada proyek ini, dilakukan eksperimen deteksi ras kucing menggunakan <strong>YOLOv11</strong>, <strong>SSD (VGG16)</strong>, dan <strong>RT-DETR</strong>.</p>
  <p>Dataset berisi 2380 gambar dari 12 ras kucing yang diperoleh dari Roboflow, dengan anotasi disesuaikan masing-masing model (YOLO format dan COCO-style).</p>
  <ul style="margin-left: 1rem; list-style-type: disc;">
    <li>Gambar di-resize menjadi 224x224 (YOLOv11), 300x300 (SSD), dan 512x512 (RT-DETR).</li>
    <li>Augmentasi dasar digunakan seperti flip horizontal dan scaling.</li>
    <li>YOLOv11 di-train menggunakan Ultralytics API, SSD dengan torchvision, dan RT-DETR dengan Hugging Face Transformers.</li>
    <li>Semua model dilatih selama 20 epoch dengan batch size bervariasi dan optimizer Adam/AdamW.</li>
  </ul>
  <p>Evaluasi dilakukan menggunakan <em>mean Average Precision</em> (<code>mAP@0.5</code> hingga <code>mAP@0.5:0.95</code>) dan <strong>loss validation</strong>.</p>
  <p>YOLOv11 menunjukkan hasil terbaik dengan mAP@0.5 = 0.943 dan mAP@0.5:0.95 = 0.761, menjadikannya pilihan utama untuk deteksi ras kucing dalam konteks kecepatan dan akurasi.</p>
`,
    isDeployed : false,
    liveUrl: "",

  },
  {
    id: 5,
    image: vehicleDetection, // dummy
    title: "Vehicle Detection on Aerial Images",
    label: "AI/ML Projects",
    description: "Deteksi kendaraan dari citra drone dengan YOLOv11 untuk monitoring lalu lintas.",
    githubUrl: "https://github.com/lal4lal/Vehicle-Aerial-Image-Detection",
    duration: "3 bulan",
    stack: ["YOLOv11n", "YOLOv11s", "Ultralytics"],
    fullDescription: "Vehicle Detection from Aerial Images adalah proyek yang sedang berlangsung untuk mendeteksi kendaraan menggunakan model deep learning ringan seperti YOLOv11n dan YOLOv11s. Proyek ini menggunakan citra dari drone dan dilatih dengan Aerial Vehicle Dataset menggunakan framework Ultralytics untuk keperluan pemantauan lalu lintas.",
    implementation: `
    <p>Implementasi dimulai dengan mengumpulkan dan menyiapkan <strong>Aerial Image Dataset for Vehicle Detection</strong> yang berisi 5985 gambar RGB dari 7 jenis kendaraan seperti sedan, bus, truck, dan trailer. Dataset awal dalam format Pascal VOC (XML) dikonversi ke format YOLO (TXT) menggunakan Python script, lalu dibagi ke dalam set pelatihan (70%), validasi (20%), dan pengujian (10%).</p>

    <p>Dua varian model lightweight YOLOv11 — <strong>YOLOv11n</strong> (nano) dan <strong>YOLOv11s</strong> (small) — dilatih secara terpisah menggunakan <strong>Ultralytics framework</strong> di Google Colab dengan GPU T4. Proses pelatihan berlangsung selama 30 epoch dengan batch size 8 dan resolusi gambar 640x640 piksel. Evaluasi dilakukan berdasarkan metrik <code>mAP@0.5</code>, <code>mAP@0.5:0.95</code>, <code>precision</code>, dan <code>recall</code>.</p>

    <ul style="margin-left: 1rem; list-style-type: disc;">
      <li>YOLOv11s menunjukkan hasil terbaik: mAP@0.5 = 98.3%, precision = 96.9%, recall = 96.3%.</li>
      <li>YOLOv11n juga cukup akurat dengan mAP@0.5 = 96.7%, precision = 95.8%, recall = 93.0%.</li>
      <li>Hasil visualisasi menunjukkan YOLOv11s lebih akurat dalam mendeteksi objek kecil dan tumpang tindih.</li>
    </ul>

    <p>Model kemudian dideploy dalam bentuk <strong>aplikasi web berbasis Streamlit</strong>, yang memungkinkan pengguna mengunggah citra aerial dan melihat deteksi kendaraan lengkap dengan bounding box dan confidence score.</p>

    <p>Pengembangan selanjutnya akan difokuskan pada pengujian real-time menggunakan video dari drone, peningkatan generalisasi model dengan menambah variasi data geografis, dan klasifikasi tingkat kemacetan berdasarkan jumlah kendaraan terdeteksi.</p>
  `,
  isDeployed : true,
  liveUrl: "https://vehicle-aerial-image-detection-project.streamlit.app/",
  
},
  {
    id: 6,
    image: potholeDetection, // dummy
    title: "Pothole Detection with SR & YOLOv9-T",
    label: "AI/ML Projects",
    description: "Deteksi lubang jalan dengan YOLOv9-T dan peningkatan citra melalui Stable Diffusion SR.",
    githubUrl: "https://github.com/ditorizkyka",
    duration: "2 bulan",
    stack: ["YOLOv9-T", "Stable Diffusion SR", "Computer Vision"],
    fullDescription: "Melakukan implementasi deteksi lubang jalan menggunakan YOLOv9-Tiny dengan peningkatan kualitas citra melalui Stable Diffusion Super-Resolution. Eksperimen ini membandingkan citra mentah dengan citra yang telah ditingkatkan untuk mengevaluasi akurasi deteksi pada citra jalan.",
    implementation: `
    <p>Proyek ini mengembangkan sistem deteksi lubang jalan pada citra beresolusi rendah menggunakan kombinasi <strong>YOLOv9-Tiny</strong> dan <strong>Stable Diffusion Super-Resolution (SR)</strong>.</p>
    
    <p>Dataset yang digunakan adalah <em>Multi-Weather Pothole Detection (MWPD)</em> v2, yang terdiri dari 3087 gambar, dibagi ke dalam 88% data latih, 8% validasi, dan 3% pengujian. Sebanyak 5% data latih ditingkatkan resolusinya menggunakan <strong>Stable Diffusion SR</strong> sebagai bentuk augmentasi.</p>
    
    <ul style="margin-left: 1rem; list-style-type: disc;">
      <li>Pipeline baseline melatih YOLOv9-Tiny menggunakan citra asli, sedangkan pipeline eksperimen melibatkan preprocessing SR pada sebagian data.</li>
      <li>Pelatihan dilakukan di Google Colab dengan Ultralytics YOLOv9 dan parameter default selama 50 epoch.</li>
      <li>Evaluasi dilakukan menggunakan metrik: <code>Precision</code>, <code>Recall</code>, <code>mAP@0.5</code>, dan <code>mAP@0.5:0.95</code>.</li>
    </ul>
    
    <p>Hasil eksperimen menunjukkan bahwa model dengan augmentasi SR memiliki precision lebih tinggi (0.802) dibanding baseline (0.795), dan peningkatan kecil pada mAP@0.5:0.95 dari 0.354 menjadi 0.356. Meskipun recall sedikit menurun, model dengan SR menunjukkan deteksi yang lebih akurat dan bounding box yang lebih presisi terutama dalam kondisi cahaya rendah.</p>

    <p>Visualisasi pada citra uji membuktikan bahwa penggunaan Stable Diffusion SR membantu model mendeteksi kontur lubang jalan secara lebih baik pada kondisi buram atau gelap, serta mengurangi kesalahan deteksi. Strategi ini terbukti efisien dan layak untuk sistem deteksi real-time di perangkat dengan sumber daya terbatas.</p>
  `,
    isDeployed : false,
    liveUrl: "",

  },
  {
    id: 7,
    image: pollusafe, // dummy
    title: "Pollusafe App",
    label: "Software Development",
    description: "Aplikasi pemantauan kualitas udara dengan fitur notifikasi AQI real-time dan integrasi Google Maps.",
    githubUrl: "https://github.com/ditorizkyka/Pollusafe-App",
    duration: "3 bulan",
    stack: ["Flutter", "Firebase", "Google Maps", "AQI API"],
    fullDescription: "Memberikan informasi AQI dan peringatan kualitas udara kepada pengguna.",
    implementation: "Menggunakan Flutter dengan Riverpod, GoRouter, dan HTTP GET/POST untuk API. Fitur map dan autentikasi Firebase.",
    isDeployed : false,
    liveUrl: "",

    
  },
  {
    id: 8,
    image: waveEdu, // dummy
    title: "Wave Education",
    label: "Software Development",
    description: "Platform pembelajaran pemrograman dengan quiz interaktif dan reward.",
    githubUrl: "https://github.com/ditorizkyka/Wave-Education",
    duration: "3 bulan",
    stack: ["Flutter", "Spring Boot", "MySQL"],
    fullDescription: "Aplikasi pembelajaran terstruktur untuk semua level dengan modul interaktif.",
    implementation: "Frontend Flutter, backend Spring Boot, dan database MySQL. Fitur progress tracking dan quiz.",
    isDeployed : false,
    liveUrl: "",

  },
  {
    id: 9,
    image: moneyMate, // dummy
    title: "MoneyMate App",
    label: "Software Development",
    description: "Aplikasi pencatatan pengeluaran harian dengan statistik pengeluaran dan fitur konversi mata uang.",
    githubUrl: "https://github.com/ditorizkyka/Money-Mate-ABP-Projects",
    duration: "1 bulan",
    stack: ["Flutter", "Firebase", "GETX"],
    fullDescription: "Tracking pengeluaran pengguna secara real-time dan visualisasi data keuangan.",
    implementation: "Menggunakan GETX untuk state management dan Firebase untuk autentikasi dan penyimpanan data.",
    isDeployed : false,
    liveUrl: "",

  },
  {
    id: 10,
    image: cardCCredit, // dummy
    title: "Credit Card Segmentation",
    label: "AI/ML Projects",
    description: "Segmentasi pengguna kartu kredit menggunakan K-Means untuk mendukung keputusan bisnis.",
    githubUrl: "https://github.com/ditorizkyka/Machine-Learning-Project",
    duration: "1 bulan",
    stack: ["Python", "K-Means", "Streamlit"],
    fullDescription: "Analisis pola penggunaan kartu kredit berdasarkan jumlah kartu, limit, dan frekuensi layanan.",
    implementation: "Implementasi clustering dengan visualisasi PCA, input user interaktif via Streamlit.",
    isDeployed : true,
    liveUrl: "https://credit-card-segmentation-project.streamlit.app/",
  },
    {
    id: 11,
    image: medpelvis, // dummy
    title: "MedPelvis Mobile",
    label: "Software Development",
    description: "Aplikasi edukatif tentang anatomi tubuh dan mekanisme persalinan melalui video dan visual interaktif.",
    githubUrl: "https://github.com/ditorizkyka/MedPelvis-Mobile",
    duration: "1 bulan",
    stack: ["Flutter", "Riverpod", "GoRouter", "YouTube API"],
    fullDescription: "Aplikasi pembelajaran interaktif yang membahas bagian pelvis, lengan, kaki, serta mekanisme persalinan menggunakan ilustrasi, deskripsi detail, dan video edukatif.",
    implementation: "Dibangun menggunakan Flutter dengan implementasi state management Riverpod dan navigasi menggunakan GoRouter. Menyediakan layout responsif dan video pembelajaran terintegrasi dengan YouTube.",
    isDeployed : false,
    liveUrl: "",

  }

];


export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  


  const truncateText = (text, maxLines = 2) => {
    const words = text.split(' ');
    const maxWords = maxLines * 15;
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  const getLabelColor = (label) => {
    return label === 'Software Development' 
      ? 'bg-blue-100 text-blue-800 border-blue-200'
      : 'bg-green-100 text-green-800 border-green-200';
  };

  const openDialog = (project) => {
    setSelectedProject(project);
  };

  const closeDialog = () => {
    setSelectedProject(null);
  };

  if (isMobile) {
  return (
    <section className="bg-black min-h-screen text-left" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-md mx-auto ">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Shapes className="w-7 h-7" />
            <h1 className="text-lg font-bold text-white">All projects details</h1>
          </div>
          <p className="text-[#999999] text-[12px] max-w-4xl leading-relaxed">
            Formulating comprehensive strategies to meet your design goals and exceed expectations.
          </p>
        </div>
        
        {/* Mobile Project Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0A0A0B] border border-[#1f1f1f] text-[#999999] rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => openDialog(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-28 object-cover rounded-t-lg"
            />
            <div className="p-2">
              <h3 className="text-white text-sm font-semibold mb-1 truncate">{project.title}</h3>
              <p className="text-[10px] text-[#999999] line-clamp-2 mb-3">{truncateText(project.description)}</p>
              <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-[#1f1f1f] text-[#CCCCCC] hover:bg-gray-800 text-xs font-medium rounded-lg transition-colors duration-200 group/btn"
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

      </div>

      {/* Dialog tetap sama */} 
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 p-2 flex items-center justify-center">
          <div className="bg-[#0A0A0B] max-w-sm w-full rounded-lg overflow-auto max-h-[90vh]">
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-3 md:hidden">
                  <div className="bg-[#0A0A0B] border border-[#1f1f1f] rounded-xl w-full max-h-[90vh] overflow-y-auto">
                    {/* Header */}
                    <div className="relative">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-40 object-cover rounded-t-xl"
                      />
                      <button
                        onClick={closeDialog}
                        className="absolute top-3 right-3 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1.5 rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </button>

                      {/* Label */}
                      <div className="absolute top-3 left-3">
                        <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full border backdrop-blur-sm bg-opacity-90 ${getLabelColor(selectedProject.label)}`}>
                          {selectedProject.label}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h2 className="text-xl font-semibold text-white mb-3">
                        {selectedProject.title}
                      </h2>

                      <div className="flex flex-wrap gap-3 text-sm text-gray-300 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>Durasi: {selectedProject.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Code className="w-4 h-4" />
                          <span>Tech Stack</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedProject.stack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 bg-[#1f1f1f] text-blue-400 text-xs rounded-full border border-blue-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mb-4">
                        <h3 className="text-white text-sm font-medium mb-1">Deskripsi</h3>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          {selectedProject.fullDescription}
                        </p>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-white text-sm font-medium mb-1">Implementasi</h3>
                       <div
                          className="text-gray-300 text-xs leading-relaxed space-y-2"
                          dangerouslySetInnerHTML={{ __html: selectedProject.implementation }}
                        />
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-2">

                        {/* GitHub Button */}
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg"
                        >
                          <svg className="w-5 h-5 text-[#CCCCCC] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          View on GitHub
                        </a>

                        {/* Live Deployment Button */}
                        {selectedProject.isDeployed && selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg"
                          >
                            <Radio className='w-5 h-5'></Radio>
                            View Deployed App
                          </a>
                        )}

                        {/* Close Button */}
                        <button
                          onClick={closeDialog}
                          className="px-4 py-2 bg-[#1f1f1f] hover:bg-gray-800 text-gray-300 text-sm font-medium rounded-lg"
                        >
                          Close
                        </button>

                      </div>

                    </div>
                  </div>
                </div>
              )}

          </div>
        </div>
      )}
        

<div className="flex gap-4 w-full">
  {/* GitHub Button */}
  <a
    href="https://github.com/ditorizkyka"
    target="_blank"
    rel="noopener noreferrer"
    className="w-1/2"
  >
    <button className="w-full flex items-center justify-center space-x-2 bg-[#141415] hover:bg-[#1f1f20] px-3 py-3 rounded-lg transition-colors group">
      <svg className="w-4 h-4 text-[#CCCCCC] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
      <ScrambleText
        text="ALL PROJECTS"
        className="text-[12px] text-[#CCCCCC] group-hover:text-[#FFFFFF] transition-colors"
      />
    </button>
  </a>

  {/* Google Drive Button */}
  <a
    href="https://drive.google.com/file/d/1rxH1fs-9ii1ltH8OgwQL3mqYI2GU2_2y/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="w-1/2"
  >
    <button className="w-full flex items-center justify-center space-x-2 bg-[#141415] hover:bg-[#1f1f20] px-3 py-3 rounded-lg transition-colors group">
      <Link className="w-4 h-4 text-[#CCCCCC] group-hover:text-white transition-colors" />
      <ScrambleText
        text="DRIVE FILES"
        className="text-[12px] text-[#CCCCCC] group-hover:text-[#FFFFFF] transition-colors"
      />
    </button>
  </a>
</div>

    </section>
  );
 } else {
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
                {project.isDeployed && project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 ml-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Radio className='w-4 h-4 text-white' />
                    Visit App
                  </a>
                )}
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
              <svg className="w-4 h-4 text-[#CCCCCC] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
              <ScrambleText
            
                text="GITHUB PROJECTS"
                className="text-md text-[#CCCCCC] group-hover:text-[#FFFFFF] transition-colors"
              />
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
              <Link className="w-4 h-4 text-[#CCCCCC] group-hover:text-white transition-colors" />
              <ScrambleText
                text="DRIVE FILES"
                className="text-md text-[#CCCCCC] group-hover:text-[#FFFFFF] transition-colors"
              />
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
                <div
                    className="text-gray-300 text-sm leading-relaxed space-y-2"
                    dangerouslySetInnerHTML={{ __html: selectedProject.implementation }}
                  />

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                {/* Main Buttons */}
                <div className="flex gap-4">
                  {/* GitHub Button */}
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 w-1/3 justify-center"
                  >
                    <svg className="w-5 h-5 text-[#CCCCCC] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>

                  {/* Demo Button (conditionally rendered in center) */}
                  {selectedProject.isDeployed && selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200 w-1/3 justify-center"
                    >
                    <Radio className='w-5 h-5 text-white' />
                      Visit Demo App
                    </a>
                  )}

                  {/* Close Button */}
                  <button
                    onClick={closeDialog}
                    className="px-6 py-3 bg-[#1f1f1f] hover:bg-gray-800 text-gray-300 font-medium rounded-lg transition-colors duration-200 w-1/3"
                  >
                    Close
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


  
}