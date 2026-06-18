import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function AiqfomeCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Apenas simula o processamento por 1.5s para uma experiência premium
    const timer = setTimeout(() => {
      const code = searchParams.get('code');
      const error = searchParams.get('error');

      if (code && !error) {
        // Sucesso
        navigate('/integracoes/aiqfome/sucesso', { replace: true });
      } else {
        // Erro
        navigate('/integracoes/aiqfome/erro', { replace: true });
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [searchParams, navigate]);

  return (
    <div className="bg-heso-black min-h-screen text-white font-sans flex items-center justify-center noise">
      <SEO 
        title="Processando Autorização | HESO PDV" 
        description="Processando credenciais de redirecionamento do aiqfome."
        path="/api/integrations/aiqfome/callback"
        noindex={true}
      />
      
      <div className="text-center flex flex-col items-center">
        {/* Spinner */}
        <Loader2 className="animate-spin text-heso-purple mb-6" size={48} />
        
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-heso-violet animate-pulse mb-3">
          Processando Autenticação OAuth
        </span>
        <h2 className="font-display font-semibold text-lg text-white">
          Sincronizando com o aiqfome...
        </h2>
        <p className="text-xs text-gray-500 max-w-xs mt-2 leading-relaxed">
          Verificando códigos de redirecionamento e estabelecendo canal seguro. Não feche esta janela.
        </p>
      </div>
    </div>
  );
}
