import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fonction pour optimiser les fichiers CSS
function optimizeCSS() {
  const cssPath = path.join(__dirname, '../src/index.css');
  if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, 'utf8');
    
    // Supprimer les commentaires inutiles
    css = css.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Supprimer les espaces multiples
    css = css.replace(/\s+/g, ' ');
    
    // Supprimer les espaces avant et après
    css = css.trim();
    
    fs.writeFileSync(cssPath, css);
    console.log('✅ CSS optimisé');
  }
}

// Fonction pour vérifier les imports inutiles
function checkUnusedImports() {
  const srcPath = path.join(__dirname, '../src');
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Vérifier les imports React inutiles
        if (content.includes('import React') && !content.includes('React.')) {
          console.log(`⚠️  Import React inutile détecté dans: ${filePath}`);
        }
      }
    });
  }
  
  scanDirectory(srcPath);
}

// Fonction pour optimiser les chunks
function optimizeChunks() {
  const distPath = path.join(__dirname, '../dist');
  
  if (fs.existsSync(distPath)) {
    const files = fs.readdirSync(distPath);
    
    files.forEach(file => {
      if (file.endsWith('.js') || file.endsWith('.css')) {
        const filePath = path.join(distPath, file);
        const stats = fs.statSync(filePath);
        
        if (stats.size > 100 * 1024) { // > 100KB
          console.log(`📦 Fichier volumineux: ${file} (${Math.round(stats.size / 1024)}KB)`);
        }
      }
    });
  }
}

// Exécuter les optimisations
console.log('🚀 Début des optimisations...');

try {
  optimizeCSS();
  checkUnusedImports();
  optimizeChunks();
  
  console.log('✅ Optimisations terminées');
} catch (error) {
  console.error('❌ Erreur lors des optimisations:', error);
} 