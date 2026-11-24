const express = require('express');
const { getRouter } = require('stremio-addon-sdk');
const landingTemplate = require('stremio-addon-sdk/src/landingTemplate');
const builder = require('./addon');

const app = express();
const addonInterface = builder.getInterface();

// เชื่อมต่อ Stremio Addon Router (CORS และ Endpoints: /manifest.json, /catalog, /meta, /stream)
app.use(getRouter(addonInterface));

// หน้า Landing Page สำหรับกด Install ผ่านเบราว์เซอร์
const landingHTML = landingTemplate(addonInterface.manifest);
app.get('/', (_, res) => {
  res.setHeader('content-type', 'text/html');
  res.end(landingHTML);
});

// Export สำหรับ Vercel Serverless Function
module.exports = app;

// รัน Local Server เมื่อสั่งรันผ่านคำสั่ง node server.js
if (require.main === module) {
  const port = process.env.PORT || 7000;
  app.listen(port, () => {
    console.log(`✅ Addon พร้อมทำงานที่ http://localhost:${port}/manifest.json`);
  });
}
