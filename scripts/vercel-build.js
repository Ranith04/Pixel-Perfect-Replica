import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const vercelOutput = path.join(root, '.vercel', 'output');

console.log('Restructuring build for Vercel Output API...');

if (!fs.existsSync(dist)) {
  console.error('dist folder not found! Build failed.');
  process.exit(1);
}

// 1. Clean previous vercel output
if (fs.existsSync(vercelOutput)) {
  fs.rmSync(vercelOutput, { recursive: true, force: true });
}

// 2. Create Vercel API directories
const staticDir = path.join(vercelOutput, 'static');
const functionsDir = path.join(vercelOutput, 'functions');
const serverFuncDir = path.join(functionsDir, '__server.func');

fs.mkdirSync(staticDir, { recursive: true });
fs.mkdirSync(serverFuncDir, { recursive: true });

// 3. Move config.json -> .vercel/output/config.json
if (fs.existsSync(path.join(dist, 'config.json'))) {
  fs.copyFileSync(path.join(dist, 'config.json'), path.join(vercelOutput, 'config.json'));
}

// 4. Move dist/client/* -> .vercel/output/static/
const clientDir = path.join(dist, 'client');
if (fs.existsSync(clientDir)) {
  fs.cpSync(clientDir, staticDir, { recursive: true });
}

// 5. Move dist/server/* -> .vercel/output/functions/__server.func/
const serverDir = path.join(dist, 'server');
if (fs.existsSync(serverDir)) {
  fs.cpSync(serverDir, serverFuncDir, { recursive: true });
}

console.log('Vercel Output API restructuring complete.');
