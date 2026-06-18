import { motion } from 'motion/react';

const techLogos = [
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'AWS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Redis', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
  { name: 'Tailwind CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
];

export default function Technologies() {
  return (
    <section className="h-[140px] bg-white/[0.02] border-y border-white/5 flex flex-col justify-center py-6 px-10 z-10 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full flex flex-col">
        <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">Powered by Modern Technology Stack</div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
          <div className="flex-1 w-full overflow-hidden flex items-center relative">
            <div className="animate-marquee gap-12 pr-12">
              {techLogos.map((tech, i) => (
                <div key={`first-${tech.name}-${i}`} className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <img src={tech.url} alt={tech.name} width="32" height="32" className="w-8 h-8 object-contain" />
                  <span className="font-semibold text-lg text-gray-300">{tech.name}</span>
                </div>
              ))}
              {/* Duplicating the list to create the seamless infinite scroll effect */}
              {techLogos.map((tech, i) => (
                <div key={`second-${tech.name}-${i}`} className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <img src={tech.url} alt={tech.name} width="32" height="32" className="w-8 h-8 object-contain" />
                  <span className="font-semibold text-lg text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
