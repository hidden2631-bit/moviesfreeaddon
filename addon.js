const { addonBuilder } = require('stremio-addon-sdk');

// 📋 ข้อมูล Add-on
const builder = new addonBuilder({
  id: 'my.local.movies.addon',
  version: '1.0.0',
  name: '🎬 My Local Collection',
  description: 'สำหรับใช้ส่วนตัวเท่านั้น',
  resources: ['catalog', 'meta', 'stream'],
  types: ['movie'],
  catalogs: [{
    id: 'local',
    type: 'movie',
    name: 'หนังที่ฉันชอบ',
    extra: [{ name: 'search', isRequired: false }]
  }]
});

// 📂 รายการหนัง (ตัวอย่างแบบคงที่)
builder.defineCatalogHandler(async () => {
  return {
    metas: [
      { id: 'local:001', type: 'movie', name: 'ตัวอย่างหนัง', poster: 'https://...' }
    ]
  };
});

// ℹ️ ข้อมูลรายละเอียดหนัง
builder.defineMetaHandler(async (args) => {
  return { meta: { id: args.id, type: 'movie', name: '...' } };
});

// ▶️ ลิงก์สตรีม
builder.defineStreamHandler(async (args) => {
  return { streams: [
    { title: 'ดูตรงนี้', url: 'https://moviedofree.com/' }
  ] };
});

module.exports = builder;
