import React from 'react';
import { ArrowRight, PenTool } from 'lucide-react';
import github from '../../assets/stacks/github.svg';
import firebase from '../../assets/stacks/firebase.svg';
import mysql from '../../assets/stacks/mysql.svg';
import tailwind from '../../assets/stacks/tailwindcss.svg';
import reactjs from '../../assets/stacks/reactjs.svg';
import hface from '../../assets/stacks/hface.svg'; // Adjust the path as necessary
import python from '../../assets/stacks/python.svg'; // Adjust the path as necessary
import tensorflow from '../../assets/stacks/tensorflow.svg'; // Adjust the path as necessary
import colab from '../../assets/stacks/colab.svg'; // Adjust the path as necessary
import flutter from '../../assets/stacks/flutter.svg'; // Adjust the path as necessary
import kotlin from '../../assets/stacks/kotlin.svg'; // Adjust the path as necessary
import pytorch from '../../assets/stacks/pytorch.svg'; // Adjust the path as necessary
import yolo from '../../assets/stacks/yolo.png'; // Adjust the path as necessary
 // Adjust the path as necessary

const MyStacks = () => {
  

const stacks = [
  {
    name: 'GitHub',
    category: 'Version Control',
    url: 'https://github.com/',
    icon: (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
        <img src={github} alt="GitHub" className="w-8 h-8" />
      </div>
    )
  },
  {
    name: 'Firebase',
    category: 'Backend-as-a-Service',
    url: 'https://firebase.google.com/',
    icon: (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
        <img src={firebase} alt="Firebase" className="w-8 h-8" />
      </div>
    )
  },
  {
    name: 'MySQL',
    category: 'Database',
    url: 'https://dev.mysql.com/doc/',
    icon: (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
        <img src={mysql} alt="MySQL" className="w-8 h-8" />
      </div>
    )
  },
  {
    name: 'Tailwind CSS',
    category: 'CSS Framework',
    url: 'https://tailwindcss.com/docs',
    icon: (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
        <img src={tailwind} alt="Tailwind CSS" className="w-8 h-8" />
      </div>
    )
  },
  {
    name: 'ReactJS',
    category: 'Frontend Framework',
    url: 'https://react.dev/',
    icon: (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
        <img src={reactjs} alt="ReactJS" className="w-8 h-8" />
      </div>
    )
  },
  {
    name: 'HuggingFace',
    category: 'AI Platform',
    url: 'https://huggingface.co/docs',
    icon: (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
        <img src={hface} alt="HuggingFace" className="w-8 h-8" />
      </div>
    )
  },
  {
    name: 'Python',
    category: 'Programming Language',
    url: 'https://docs.python.org/3/',
    icon: (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
        <img src={python} alt="Python" className="w-8 h-8" />
      </div>
    )
  },
  {
    name: 'TensorFlow',
    category: 'Machine Learning Library',
    url: 'https://www.tensorflow.org/api_docs',
    icon: (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
        <img src={tensorflow} alt="TensorFlow" className="w-8 h-8" />
      </div>
    )
  },
  {
    name: 'Google Colab',
    category: 'Notebook Environment',
    url: 'https://colab.research.google.com/',
    icon: (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
        <img src={colab} alt="Google Colab" className="w-8 h-8" />
      </div>
    )
  },
  {
    name: 'Flutter',
    category: 'Mobile SDK',
    url: 'https://docs.flutter.dev/',
    icon: (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
        <img src={flutter} alt="Flutter" className="w-8 h-8" />
      </div>
    )
  },
  {
    name: 'Kotlin',
    category: 'Programming Language',
    url: 'https://kotlinlang.org/docs/home.html',
    icon: (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
        <img src={kotlin} alt="Kotlin" className="w-8 h-8" />
      </div>
    )
  },
  {
    name: 'PyTorch',
    category: 'Machine Learning Library',
    url: 'https://pytorch.org/docs/',
    icon: (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
        <img src={pytorch} alt="PyTorch" className="w-8 h-8" />
      </div>
    )
  },
  {
    name: 'YOLO',
    category: 'Object Detection Model',
    url: 'https://github.com/AlexeyAB/darknet',
    icon: (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
        <img src={yolo} alt="YOLO" className="w-8 h-8 object-contain" />
      </div>
    )
  }
];



  return (
    <div className="pb-20 bg-black text-white text-left" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-6xl mx-auto">
        
        <div>
            <div className="flex items-center space-x-3 mb-4">
            <PenTool className="w-7 h-7" />
            <h2
                className="text-3xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
                My Stacks
            </h2>
            </div>

            {/* Geser paragraf sejajar ke ikon */}
            <div className="">
            <p 
                className="text-[#999999] mb-12 leading-relaxed text-xl text-left"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
                Tools and technologies I master to build powerful, scalable, and intelligent digital solutions.
            </p>
            </div>
      </div>

        {/* Stacks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stacks.map((stack, index) => (
            <a
  href={stack.url}
  target="_blank"
  rel="noopener noreferrer"
  key={stack.name}
  className="group relative bg-[#0A0A0B] backdrop-blur-sm border border-[#1f1f1f] rounded-2xl px-3 py-4 hover:bg-[#0A0A0B]/50 hover:border-[#1f1f1f] transition-all duration-300 cursor-pointer overflow-hidden block"
  style={{
    fontFamily: "'Space Grotesk', sans-serif",
    animationDelay: `${index * 100}ms`,
  }}
>
  {/* Hover gradient effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>

  <div className="relative flex items-center justify-between">
    <div className="flex items-center gap-6">
      <div className="transform group-hover:scale-110 transition-transform duration-300">
        {stack.icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
          {stack.name}
        </h3>
        <p className="text-[#999999] text-sm group-hover:text-gray-300 transition-colors">
          {stack.category}
        </p>
      </div>
    </div>
    <div className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300">
      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
    </div>
  </div>

  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-500"></div>
</a>

          ))}
        </div>

        {/* Floating particles background effect */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyStacks;