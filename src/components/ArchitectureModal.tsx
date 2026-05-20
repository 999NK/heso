import { motion, AnimatePresence } from 'motion/react';
import { X, Server, Database, Cloud, Code, Layers, Activity } from 'lucide-react';

export default function ArchitectureModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-[#050505] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
              <div>
                <h3 className="text-xl font-bold text-white">Arquitetura do Ecossistema HESO</h3>
                <p className="text-sm text-gray-400 mt-1">Topologia de alto nível da infraestrutura</p>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content - Architecture Diagram */}
            <div className="p-8 overflow-y-auto w-full flex-1 relative bg-grid-white">
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 to-[#050505] pointer-events-none" />
                
                {/* Visual Architecture */}
                <div className="flex flex-col items-center gap-0 relative z-10 py-10">
                   
                   {/* Frontend Layer */}
                   <div className="w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative z-10 shadow-lg">
                     <div className="absolute -top-3 left-8 px-4 py-1 bg-[#121212] border border-white/10 rounded-full text-[10px] uppercase font-bold text-gray-400 tracking-widest">
                       Presentation Layer
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                       <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                         <div className="w-12 h-12 rounded-lg bg-black/50 border border-white/5 flex items-center justify-center text-blue-400"><Code className="w-5 h-5" /></div>
                         <span className="text-sm font-semibold text-gray-200">Web App</span>
                         <span className="text-[10px] text-gray-500 uppercase">React / Next.js</span>
                       </div>
                       <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                         <div className="w-12 h-12 rounded-lg bg-black/50 border border-white/5 flex items-center justify-center text-green-400"><Layers className="w-5 h-5" /></div>
                         <span className="text-sm font-semibold text-gray-200">Mobile App</span>
                         <span className="text-[10px] text-gray-500 uppercase">React Native</span>
                       </div>
                       <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                         <div className="w-12 h-12 rounded-lg bg-black/50 border border-white/5 flex items-center justify-center text-purple-400"><Server className="w-5 h-5" /></div>
                         <span className="text-sm font-semibold text-gray-200">Desktop App</span>
                         <span className="text-[10px] text-gray-500 uppercase">Electron</span>
                       </div>
                     </div>
                   </div>

                   {/* Connection */}
                   <div className="h-16 w-0.5 bg-gradient-to-b from-white/20 to-[#6D28D9]/50 relative z-0">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#121212] border border-[#6D28D9] flex items-center justify-center shadow-[0_0_15px_rgba(109,40,217,0.4)]">
                       <div className="w-2 h-2 rounded-full bg-[#6D28D9] animate-pulse" />
                     </div>
                   </div>

                   {/* API / Backend Layer */}
                   <div className="w-full max-w-3xl bg-[#6D28D9]/5 border border-[#6D28D9]/30 rounded-2xl p-8 relative z-10 shadow-[0_0_40px_rgba(109,40,217,0.15)] backdrop-blur-sm">
                     <div className="absolute -top-3 left-8 px-4 py-1 bg-[#121212] border border-[#6D28D9]/30 rounded-full text-[10px] uppercase font-bold text-[#6D28D9] tracking-widest shadow-[0_0_10px_rgba(109,40,217,0.2)]">
                       Application Layer (HESO Core)
                     </div>
                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        {['Auth & Identity', 'Business Logic', 'Real-time Sync', 'API Gateway'].map((svc, idx) => (
                           <div key={idx} className="bg-black/60 border border-[#6D28D9]/20 rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3 hover:border-[#6D28D9]/50 transition-colors">
                             <Activity className="w-5 h-5 text-[#6D28D9]" />
                             <span className="text-xs font-bold text-gray-200">{svc}</span>
                           </div>
                        ))}
                     </div>
                   </div>

                   {/* Connection */}
                   <div className="h-16 w-0.5 bg-gradient-to-b from-[#6D28D9]/50 to-white/20 relative z-0">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#121212] border border-white/20 flex items-center justify-center">
                       <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
                     </div>
                   </div>

                   {/* Data Layer */}
                   <div className="w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative z-10 shadow-lg">
                     <div className="absolute -top-3 left-8 px-4 py-1 bg-[#121212] border border-white/10 rounded-full text-[10px] uppercase font-bold text-gray-400 tracking-widest">
                       Data & Storage Layer
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                       <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                         <div className="w-12 h-12 rounded-lg bg-black/50 border border-white/5 flex items-center justify-center text-blue-500"><Database className="w-5 h-5" /></div>
                         <span className="text-sm font-semibold text-gray-200">PostgreSQL</span>
                         <span className="text-[10px] text-gray-500 uppercase">Primary DB</span>
                       </div>
                       <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                         <div className="w-12 h-12 rounded-lg bg-black/50 border border-white/5 flex items-center justify-center text-red-400"><Database className="w-5 h-5" /></div>
                         <span className="text-sm font-semibold text-gray-200">Redis Cache</span>
                         <span className="text-[10px] text-gray-500 uppercase">Speed & Pub/Sub</span>
                       </div>
                       <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                         <div className="w-12 h-12 rounded-lg bg-black/50 border border-white/5 flex items-center justify-center text-yellow-500"><Cloud className="w-5 h-5" /></div>
                         <span className="text-sm font-semibold text-gray-200">S3 Storage</span>
                         <span className="text-[10px] text-gray-500 uppercase">Object Storage</span>
                       </div>
                     </div>
                   </div>

                </div>
            </div>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
