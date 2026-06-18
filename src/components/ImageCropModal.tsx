import { useState, useCallback } from 'react';
import Cropper, { type Area } from 'react-easy-crop';
import { motion } from 'motion/react';
import { X, Check, ZoomIn, RotateCcw, Crop } from 'lucide-react';

interface ImageCropModalProps {
  src: string;
  onSave: (croppedDataUrl: string) => void;
  onCancel: () => void;
}

const ASPECT = 16 / 9;
const MAX_WIDTH = 1280;

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Falha ao carregar a imagem.'));
    img.src = src;
  });
}

async function getCroppedImage(src: string, cropPixels: Area): Promise<string> {
  const image = await loadImage(src);
  const scale = Math.min(1, MAX_WIDTH / cropPixels.width);

  const canvas = document.createElement('canvas');
  canvas.width = Math.round(cropPixels.width * scale);
  canvas.height = Math.round(cropPixels.height * scale);

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas não suportado neste navegador.');

  ctx.drawImage(
    image,
    cropPixels.x,
    cropPixels.y,
    cropPixels.width,
    cropPixels.height,
    0,
    0,
    canvas.width,
    canvas.height
  );

  return canvas.toDataURL('image/webp', 0.85);
}

export default function ImageCropModal({ src, onSave, onCancel }: ImageCropModalProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [cropPixels, setCropPixels] = useState<Area | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const onCropComplete = useCallback((_area: Area, areaPixels: Area) => {
    setCropPixels(areaPixels);
  }, []);

  const handleSave = async () => {
    if (!cropPixels) return;
    setSaving(true);
    setError('');
    try {
      const result = await getCroppedImage(src, cropPixels);
      onSave(result);
    } catch {
      setError('Não foi possível processar esta imagem. Se for uma URL externa, o servidor dela pode bloquear edição — baixe o arquivo e anexe-o diretamente.');
      setSaving(false);
    }
  };

  const handleReset = () => {
    setCrop({ x: 0, y: 0 });
    setZoom(1);
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onCancel} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-3xl bg-[#0a0a0c] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-[#6D28D9]/10"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Crop className="w-5 h-5 text-[#6D28D9]" />
            Ajustar imagem
          </h3>
          <button
            onClick={onCancel}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-white/25 text-white/70 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar editor"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Área de corte */}
        <div className="relative h-[55vh] min-h-[320px] bg-black">
          <Cropper
            image={src}
            crop={crop}
            zoom={zoom}
            aspect={ASPECT}
            minZoom={1}
            maxZoom={4}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            showGrid
          />
        </div>

        {/* Controles */}
        <div className="px-6 py-5 border-t border-white/10 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <ZoomIn className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              type="range"
              min={1}
              max={4}
              step={0.01}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="flex-1 h-1.5 rounded-full appearance-none bg-white/10 accent-[#6D28D9] cursor-pointer"
              aria-label="Zoom da imagem"
            />
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/25 text-xs text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Resetar
            </button>
          </div>

          <p className="text-[11px] text-gray-500">
            Arraste para reposicionar e use o controle de zoom para enquadrar. O corte final usa proporção 16:9.
          </p>

          {error && (
            <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">{error}</p>
          )}

          <div className="flex justify-end gap-3">
            <button
              onClick={onCancel}
              className="px-6 py-3 bg-white/5 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-semibold rounded-xl transition-colors cursor-pointer text-sm"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              disabled={saving || !cropPixels}
              className="px-6 py-3 bg-[#6D28D9] hover:bg-[#5B21B6] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#6D28D9]/20 cursor-pointer text-sm flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              {saving ? 'Processando...' : 'Aplicar corte'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
