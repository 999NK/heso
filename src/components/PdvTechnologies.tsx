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
    <section className="relative bg-white/[0.02] border-y border-white/5 py-12 overflow-hidden">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-heso-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-heso-black to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-8">
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
          <span className="text-heso-violet">/</span> Powered by Modern Technology Stack
        </div>
      </div>

      <div className="w-full overflow-hidden flex items-center relative">
        <div className="animate-marquee gap-14 pr-14">
          {[...techLogos, ...techLogos].map((tech, i) => (
            <div key={`${tech.name}-${i}`} className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer shrink-0">
              <img src={tech.url} alt={tech.name} width="36" height="36" className="w-9 h-9 object-contain" />
              <span className="font-display font-bold uppercase text-xl text-gray-300 whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
