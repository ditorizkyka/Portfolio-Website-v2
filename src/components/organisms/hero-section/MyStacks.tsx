import React from 'react';
import { Layers } from 'lucide-react';
import { TechStack } from '@/src/types/techStack';
import StackCard from '../../molecules/StackCard';


// const stacks: StackData[] = [
//   { name: 'Python', category: 'Programming Language', url: 'https://docs.python.org/3/', icon: "" },
//   { name: 'YOLO', category: 'Object Detection Model', url: 'https://github.com/AlexeyAB/darknet', icon: "" },
//   { name: 'ReactJS', category: 'Frontend Framework', url: 'https://react.dev/', icon: "" },
//   { name: 'Flutter', category: 'Mobile SDK', url: 'https://docs.flutter.dev/', icon: "" },
//   { name: 'Tailwind CSS', category: 'CSS Framework', url: 'https://tailwindcss.com/docs', icon: "" },
//   { name: 'GitHub', category: 'Version Control', url: 'https://github.com/', icon: "" },
//   { name: 'Firebase', category: 'BaaS', url: 'https://firebase.google.com/', icon: "" },
//   { name: 'MySQL', category: 'Database', url: 'https://dev.mysql.com/doc/', icon: "" },
//   { name: 'HuggingFace', category: 'AI Platform', url: 'https://huggingface.co/docs', icon: "" },
//   { name: 'TensorFlow', category: 'ML Library', url: 'https://www.tensorflow.org/', icon: "" },
//   { name: 'PyTorch', category: 'ML Library', url: 'https://pytorch.org/docs/', icon: "" },
//   { name: 'Google Colab', category: 'Notebook', url: 'https://colab.research.google.com/', icon: "" },
//   { name: 'Kotlin', category: 'Programming Language', url: 'https://kotlinlang.org/', icon: "" },
// ];

const MyStacks: React.FC<{ stacks: TechStack[] }> = ({ stacks }) => {
  console.log( 'TechStacks passed to MyStacks:', stacks );
  return (
    <section className=" bg-black text-white font-space-grotesk">
      <div className="max-w-6xl mx-auto ">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Layers className="w-7 h-7 text-white" />
            <h2 className="text-xl md:text-3xl font-bold">My Stack</h2>
          </div>
          <p className="text-[#999999] leading-relaxed text-xs md:text-xl text-left max-w-3xl">
            Tools and technologies I master to build powerful, scalable, and intelligent digital solutions.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {stacks.map((stack) => (
            <StackCard key={stack.name} stack={stack} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyStacks;