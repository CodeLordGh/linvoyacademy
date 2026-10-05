import fs from 'fs';
import path from 'path';

const configPath = path.resolve('.vercel/output/functions/_render.func/.vc-config.json');

try {
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  
  if (config.runtime === 'nodejs18.x') {
    config.runtime = 'nodejs22.x';
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    console.log('✅ Patched runtime: nodejs18.x → nodejs22.x');
  } else {
    console.log(`ℹ️ Runtime already set to: ${config.runtime}`);
  }
} catch (err) {
  console.error('❌ Failed to patch runtime:', err.message);
  process.exit(1);
}