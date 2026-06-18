import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '../dist');
const pdvDir = path.join(distDir, 'pdv');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'pdv') { // Evita loop recursivo
        copyDir(srcPath, destPath);
      }
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  // Cria pasta dist/pdv se não existir
  if (!fs.existsSync(pdvDir)) {
    fs.mkdirSync(pdvDir, { recursive: true });
  }

  // Copia os arquivos raiz do dist
  const filesToCopy = ['index.html', 'robots.txt', 'sitemap.xml', '.htaccess'];
  for (const file of filesToCopy) {
    const src = path.join(distDir, file);
    const dest = path.join(pdvDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
    }
  }

  // Copia as pastas assets e imgs para dentro de dist/pdv
  copyDir(path.join(distDir, 'assets'), path.join(pdvDir, 'assets'));
  copyDir(path.join(distDir, 'imgs'), path.join(pdvDir, 'imgs'));

  console.log('✨ [build] Sucesso: Arquivos compilados duplicados para dist/pdv/ de forma automática.');
} catch (error) {
  console.error('❌ [build] Erro ao duplicar os arquivos para dist/pdv:', error);
}
