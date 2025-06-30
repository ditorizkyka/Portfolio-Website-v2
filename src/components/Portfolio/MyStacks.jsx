import React, { useState, useEffect } from 'react';
import { ArrowRight, PenTool } from 'lucide-react';
import github from '../../assets/stacks/github.svg';
import firebase from '../../assets/stacks/firebase.svg';
import mysql from '../../assets/stacks/mysql.svg';
import tailwind from '../../assets/stacks/tailwindcss.svg';
import reactjs from '../../assets/stacks/reactjs.svg';
import hface from '../../assets/stacks/hface.svg';
import python from '../../assets/stacks/python.svg';
import tensorflow from '../../assets/stacks/tensorflow.svg';
import colab from '../../assets/stacks/colab.svg';
import flutter from '../../assets/stacks/flutter.svg';
import kotlin from '../../assets/stacks/kotlin.svg';
import pytorch from '../../assets/stacks/pytorch.svg';
import yolo from '../../assets/stacks/yolo.png';

const stacks = [
  { name: 'GitHub', category: 'Version Control', url: 'https://github.com/', icon: github },
  { name: 'Firebase', category: 'Backend-as-a-Service', url: 'https://firebase.google.com/', icon: firebase },
  { name: 'MySQL', category: 'Database', url: 'https://dev.mysql.com/doc/', icon: mysql },
  { name: 'Tailwind CSS', category: 'CSS Framework', url: 'https://tailwindcss.com/docs', icon: tailwind },
  { name: 'ReactJS', category: 'Frontend Framework', url: 'https://react.dev/', icon: reactjs },
  { name: 'HuggingFace', category: 'AI Platform', url: 'https://huggingface.co/docs', icon: hface },
  { name: 'Python', category: 'Programming Language', url: 'https://docs.python.org/3/', icon: python },
  { name: 'TensorFlow', category: 'Machine Learning Library', url: 'https://www.tensorflow.org/api_docs', icon: tensorflow },
  { name: 'Google Colab', category: 'Notebook Environment', url: 'https://colab.research.google.com/', icon: colab },
  { name: 'Flutter', category: 'Mobile SDK', url: 'https://docs.flutter.dev/', icon: flutter },
  { name: 'Kotlin', category: 'Programming Language', url: 'https://kotlinlang.org/docs/home.html', icon: kotlin },
  { name: 'PyTorch', category: 'Machine Learning Library', url: 'https://pytorch.org/docs/', icon: pytorch },
  { name: 'YOLO', category: 'Object Detection Model', url: 'https://github.com/AlexeyAB/darknet', icon: yolo }
];

const MyStacks = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // check on load
    window.addEventListener('resize', handleResize); // check on resize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- 🟩 Desktop Layout ---
  const renderDesktop = () => (
    <div className="grid grid-cols-3 gap-6 text-left">
      {stacks.map((stack) => (
        <a
          key={stack.name}
          href={stack.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-[#0A0A0B] border border-[#1f1f1f] rounded-2xl px-4 py-3 hover:bg-[#0A0A0B]/50 transition duration-300"
        >
          <div className="relative flex items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="w-15 h-15 rounded-xl bg-white flex items-center justify-center group-hover:scale-105 transition">
                <img src={stack.icon} alt={stack.name} className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h3 className="text-md font-semibold">{stack.name}</h3>
                <p className="text-[#999999] text-xs">{stack.category}</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#999999]  group-hover:text-white transition" />
          </div>
        </a>
      ))}
    </div>
  );

  // --- 🟦 Mobile Layout ---
  const renderMobile = () => (
    <div className="flex flex-col space-y-4 text-left">
  {stacks.map((stack) => (
    <a
      key={stack.name}
      href={stack.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#0A0A0B] border border-[#1f1f1f] rounded-xl p-3 flex items-center justify-between"
    >
      {/* Kiri: Icon dan Teks */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
          <img src={stack.icon} alt={stack.name} className="w-6 h-6 object-contain" />
        </div>
        <div>
          <h4 className="text-base font-semibold">{stack.name}</h4>
          <p className="text-[#999999] text-xs">{stack.category}</p>
        </div>
      </div>

      {/* Kanan: Arrow Icon */}
      <ArrowRight className="w-4 h-4 text-[#999999]  group-hover:text-white transition" />
    </a>
  ))}
</div>

  );

  return (
    <div className="mb-15 bg-black text-white " style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div>
        <div className="flex items-center space-x-3 mb-4">
          <PenTool className="w-7 h-7" />
          <h2 className="text-lg md:text-3xl font-bold">My Stack</h2>
        </div>
        <p className="text-[#999999] mb-8 md:mb-12 leading-relaxed text-[12px] md:text-xl text-left">
            Tools and technologies I master to build powerful, scalable, and intelligent digital solutions.
        </p>
      </div>
        

        {/* Conditional Layout */}
        {isMobile ? renderMobile() : renderDesktop()}
      </div>
    </div>
  );
};

export default MyStacks;
