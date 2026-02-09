const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'profile-3d-contrib', 'debug-layout-v2.svg');
const content = fs.readFileSync(filePath, 'utf8');

const checks = [
    'font-size: 64px',
    'font-size: 48px',
    'translate(140, -28)'
];

checks.forEach(check => {
    if (content.includes(check)) {
        console.log(`[PASS] Found "${check}"`);
    } else {
        console.error(`[FAIL] Did not find "${check}"`);
        process.exit(1);
    }
});
console.log('All checks passed.');
