const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [144, 192, 512];
const inputFile = path.join(__dirname, '../public/logo.webp');
const outputDir = path.join(__dirname, '../public');

async function generateIcons() {
  for (const size of sizes) {
    await sharp(inputFile)
      .resize(size, size)
      .png()
      .toFile(path.join(outputDir, `pwa-${size}x${size}.png`));
    console.log(`Generated ${size}x${size} icon`);
  }
}

generateIcons().catch(console.error);
