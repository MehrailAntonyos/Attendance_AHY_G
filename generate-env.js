const fs = require('fs');

// التأكد من إنشاء مجلد environments لو مش موجود
if (!fs.existsSync('./src/environments')) {
  fs.mkdirSync('./src/environments', { recursive: true });
}

// محتوى ملف الenvironment اللي هيتولد تلقائياً على Vercel (أو محلياً)
const envFileContent = `export const environment = {
  production: true,
  primeNgLicense: '${process.env.NG_APP_PRIMENG_LICENSE || ''}'
};
`;

// كتابة الملف
fs.writeFileSync('./src/environments/environment.ts', envFileContent);
console.log('Environment file generated successfully!');