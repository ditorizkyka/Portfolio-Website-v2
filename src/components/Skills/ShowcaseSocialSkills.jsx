import React, { useEffect, useState } from 'react';
import { Github, X, Calendar, UsersRound , Link} from 'lucide-react';
import gdgoc1 from '../../assets/skills-image/gdgoc.jpg';
import dclub1 from '../../assets/skills-image/digistar.jpg';
import syi from '../../assets/skills-image/syilc.png';
import kontent from '../../assets/skills-image/kontent2.jpg';

import ScrambleText from "../widget/buttonAnimation"; // Adjust the path as necessary
import {
    Dumbbell,
    Rocket,
    PenTool,
    ExternalLink,
    ArrowRight
} from "lucide-react";
// Di akhir file SocialSkills.js

const socialExp = [
  {
    id: 1,
    image: gdgoc1, // logo GDGoC
    title: "Google Developer Groups on Campus (GDGOC)",
    label: "Organization",
    role: "Project Manager GDGoC Telkom University",
    duration: "Sept 2024 – Sekarang",
    stack: ["Leadership", "Project Management", "Flutter Bootcamp"],
    fullDescription:
      "Led the GDSC team in The Hackfest 2023 to develop Bantuln app and coordinated mobile development bootcamp sessions using Flutter.",
  },
  {
    id: 2,
    image: kontent, // logo HIMA IF
    title: "Komunitas Tentor HIMA IF",
    label: "Mentoring",
    role: "Data Structures Tutor",
    duration: "Sept 2024 – Jan 2025",
    stack: ["Teaching", "Data Structures", "Technical Mentoring"],
    fullDescription:
      "Taught Data Structures including Linked Lists, Queue, Stack, and Multi-Level Linked List to Informatics students, increasing their coding confidence and academic results.",
  },
  {
    id: 3,
    image: dclub1, // logo Digistar Club
    title: "Digistar Club Telkom University",
    label: "Organization",
    role: "General Vice Lead Community",
    duration: "Sept 2024 – Sekarang",
    stack: ["Event Planning", "Community Engagement", "Data Science"],
    fullDescription:
      "Organized 'Digitalks: From Zero to Data Hero', supported team coordination, and enhanced engagement across divisions with effective leadership and planning.",
  },
  {
    id: 4,
    image: syi, // logo Start-Up Youth ID
    title: "Start-Up Youth Indonesia",
    label: "Organization",
    role: "General Vice Secretary",
    duration: "July 2021 – Dec 2021",
    stack: ["Documentation", "Team Coordination", "Communication"],
    fullDescription:
      "Managed documents and correspondence, supported communication processes, and improved internal coordination through newsletters and structured document systems.",
  },
];

// social.fullDescription

export default function SocialSkills() {
  const [selectedSocial, setSelectedSocial] = useState(null);
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
    return label === 'Organization' 
      ? 'bg-blue-100 text-blue-800 border-blue-200'
      : 'bg-green-100 text-green-800 border-green-200';
  };

  const openDialog = (social) => {
    setSelectedSocial(social);
  };

  const closeDialog = () => {
    setSelectedSocial(null);
  };

  if (isMobile) {
  return (
    <section className="bg-black mb-15 text-left" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-md mx-auto ">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <UsersRound className="w-7 h-7" />
            <h1 className="text-lg font-bold text-white">Social Projects/Activities</h1>
          </div>
          <p className="text-[#999999] text-[12px] max-w-4xl leading-relaxed">
            Formulating comprehensive strategies to meet your design goals and exceed expectations.
          </p>
        </div>
        
        {/* Mobile Project Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
        {socialExp.map((social) => (
          <div
            key={social.id}
            className="bg-[#0A0A0B] border border-[#1f1f1f] text-[#999999] rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => openDialog(social)}
          >
            <img
              src={social.image}
              alt={social.title}
              className="w-full h-28 object-cover rounded-t-lg"
            />
            <div className="p-2">
              <h3 className="text-white text-sm font-semibold mb-1 truncate">{social.title}</h3>
                 <span className="inline-block bg-[#1f1f1f] text-[#999999] text-[10px] px-3 py-1 rounded-lg my-1 max-w-full truncate">
                    {social.role}
                </span>
                <p className="text-[10px] text-[#999999] line-clamp-2 mb-3">{truncateText(social.fullDescription)}</p>
            </div>
          </div>
        ))}
      </div>

      </div>

      {/* Dialog tetap sama */} 
      {selectedSocial && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 p-2 flex items-center justify-center">
          <div className="bg-[#0A0A0B] max-w-sm w-full rounded-lg overflow-auto max-h-[90vh]">
            {selectedSocial && (
                <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-3 md:hidden">
                  <div className="bg-[#0A0A0B] border border-[#1f1f1f] rounded-xl w-full max-h-[90vh] overflow-y-auto">
                    {/* Header */}
                    <div className="relative">
                      <img
                        src={selectedSocial.image}
                        alt={selectedSocial.title}
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
                        <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full border backdrop-blur-sm bg-opacity-90 ${getLabelColor(selectedSocial.label)}`}>
                          {selectedSocial.label}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h2 className="text-xl font-semibold text-white mb-3">
                        {selectedSocial.title}
                      </h2>

                      <div className="flex flex-wrap gap-3 text-sm text-gray-300 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>Durasi: {selectedSocial.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <UsersRound className="w-4 h-4" />
                          <span>Tech Stack</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedSocial.stack.map((tech, index) => (
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
                          {selectedSocial.fullDescription}
                        </p>
                      </div>

                      

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-2">
                        
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
    </section>
  );
 } else {
    return (
    
    <section className=" bg-black min-h-screen text-left mb-15" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-7xl mx-auto ">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <UsersRound className="w-7 h-7" />
            <h1 className="text-4xl font-bold text-white">Social Projects/Activities</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-4xl leading-relaxed">
            Formulating comprehensive strategies to meet your design goals and exceed expectations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-10">
          {socialExp.map((social) => (
            <div
              key={social.id}
              className="bg-[#0A0A0B] border border-[#1f1f1f] text-[#999999] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              onClick={() => openDialog(social)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={social.image}
                  alt={social.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                
                {/* Floating Label */}
                <div className="absolute top-3 right-3">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm bg-opacity-90 ${getLabelColor(social.label)}`}>
                    {social.label}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                {/* Project Title */}
                <h3 className="text-md font-bold text-white mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors duration-200">
                  {social.title}
                </h3>

                {/* Role */}
                <span className="inline-block bg-[#1f1f1f] text-[#999999] text-[12px] px-3 py-1 rounded-lg mb-2 max-w-full truncate">
                    {social.role}
                </span>


                {/* Project Description */}
                <p className="text-[#999999] text-xs leading-relaxed mb-3 line-clamp-2">
                  {truncateText(social.fullDescription)}
                </p>

                
              </div>
            </div>
          ))}
        </div>

       

        
      </div>

      {/* Dialog Modal */}
      {selectedSocial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#0A0A0B] border border-[#1f1f1f] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Dialog Header */}
            <div className="relative">
              <img
                src={selectedSocial.image}
                alt={selectedSocial.title}
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
                <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full border backdrop-blur-sm bg-opacity-90 ${getLabelColor(selectedSocial.label)}`}>
                  {selectedSocial.label}
                </span>
              </div>
            </div>

            {/* Dialog Content */}
            <div className="p-6">
              {/* Project Title */}
              <h2 className="text-2xl font-bold text-white mb-4">
                {selectedSocial.title}
              </h2>

              {/* Duration and Stack Info */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Durasi: {selectedSocial.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <UsersRound className="w-4 h-4" />
                  <span className="text-sm">Soft Skills Earned</span>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedSocial.stack.map((tech, index) => (
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
                  {selectedSocial.fullDescription}
                </p>
              </div>

              

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                {/* Main Buttons */}
                <div className="flex ">
                  
                 <button
                    onClick={closeDialog}
                    className="px-6 py-3 bg-[#1f1f1f] hover:bg-gray-800 text-gray-300 font-medium rounded-lg transition-colors duration-200 w-full"
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