# 🎬 Stremio Local Movie Add-on

Add-on สำหรับสตรีมหนังส่วนตัวบน Stremio รองรับการรันทั้งบนเครื่องตัวเอง (Local) และขึ้น Cloud ผ่าน Vercel (Serverless)

## 📁 โครงสร้างโปรเจกต์
```
├── api/
│   └── index.js       # Entry point สำหรับ Vercel Serverless Function
├── addon.js           # กำหนด Manifest และ Handlers (Catalog, Meta, Stream)
├── server.js          # Express Server (ใช้รันทั้งในเครื่อง และส่งต่อให้ Vercel)
├── vercel.json        # ตั้งค่า Routing สำหรับ Vercel
├── package.json
└── .gitignore
```

---

## 💻 วิธีรันในเครื่อง (Local Development)
```bash
npm start
```
เปิดทดสอบที่: `http://localhost:7000/manifest.json`

---

## 🚀 วิธีนำขึ้น GitHub และ Deploy บน Vercel

### ขั้นตอนที่ 1: นำโค้ดขึ้น GitHub
1. สร้าง New Repository บน [GitHub](https://github.com/new)
2. รันคำสั่งในโฟลเดอร์นี้:
   ```bash
   git init
   git add .
   git commit -m "feat: initial stremio addon with vercel support"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
   git push -u origin main
   ```

### ขั้นตอนที่ 2: Deploy บน Vercel
1. เข้าไปที่ [Vercel](https://vercel.com/) และล็อกอินด้วยบัญชี GitHub
2. กด **Add New...** -> **Project**
3. เลือก Repository ที่เพิ่ง Push ขึ้นไป แล้วกด **Import**
4. ในส่วน **Build and Output Settings** ให้ปล่อยเป็นค่าเริ่มต้น (Framework Preset: Other)
5. กดปุ่ม **Deploy**

### ขั้นตอนที่ 3: นำไปติดตั้งใน Stremio
เมื่อ Deploy เสร็จ Vercel จะให้ Domain URL มา เช่น `https://my-stremio-addon.vercel.app`
- URL สำหรับติดตั้ง: `https://<YOUR-PROJECT>.vercel.app/manifest.json`
- หรือเปิด `https://<YOUR-PROJECT>.vercel.app/` บนเบราว์เซอร์แล้วกดปุ่ม **Install Add-on**
