# Imagens do Site

Esta pasta foi criada para armazenar todas as imagens e assets visuais (incluindo o logo) do projeto.

Como usar estas imagens nos seus componentes React:
```tsx
// Você pode referenciar diretamente a partir da raiz (pois está na pasta public)
<img src="/imgs/seu-logo.png" alt="Logo HESO" />

// Ou como background no Tailwind CSS:
<div className="bg-[url('/imgs/seu-banner.jpg')] bg-cover"></div>
```

**Dica:** Você pode usar o gerenciador de arquivos aqui ao lado para fazer o upload das suas imagens reais para dentro desta pasta `/public/imgs/`.
