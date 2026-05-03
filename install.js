const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting npm install...');
try {
  const output = execSync('npm install', { encoding: 'utf-8', stdio: 'inherit' });
  console.log('npm install completed successfully!');
} catch (error) {
  console.error('npm install failed:', error);
}
