import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '..', 'dist');

const routes = [
  'solutions',
  'about',
  'contact',
  'privacy-policy',
  'terms-of-service',
  'refund-policy',
  'delivery-policy'
];

const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('[postbuild] dist/index.html not found!');
  process.exit(1);
}

const indexContent = fs.readFileSync(indexPath, 'utf-8');

// 1. Create static directory index.html and .html files for each route
routes.forEach((route) => {
  const routeDir = path.join(distDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.writeFileSync(path.join(routeDir, 'index.html'), indexContent);
  fs.writeFileSync(path.join(distDir, `${route}.html`), indexContent);
  console.log(`[postbuild] Generated static entry for /${route}`);
});

// 2. Generate 404.html fallback (used by Render, GitHub Pages, etc.)
fs.writeFileSync(path.join(distDir, '404.html'), indexContent);
console.log('[postbuild] Generated dist/404.html');

// 3. Ensure _redirects is present in dist
const redirectsPath = path.join(distDir, '_redirects');
fs.writeFileSync(redirectsPath, '/* /index.html 200\n');
console.log('[postbuild] Generated dist/_redirects');

console.log('[postbuild] Static route pre-generation complete.');
