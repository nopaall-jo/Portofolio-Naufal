# Portofolio Naufal Rafif — Pure CSS & Vanilla JS (Swiss Minimalist UI)

Website Personal Developer Portfolio resmi **Naufal Rafif** — *Software Engineer & System Analyst (Fresh Graduate S1 Teknik Informatika Universitas Indraprasta PGRI)*.

Website ini dibangun menggunakan **HTML5 Semantik**, **CSS3 Murni (Pure CSS)**, dan **Vanilla JavaScript** tanpa dependensi framework (tanpa React, Vue, Next.js, Tailwind, atau build tools), sehingga sangat ringan, cepat, dan 100% siap di-deploy langsung ke **GitHub Pages** atau platform static hosting lainnya.

---

## 🎨 Karakteristik Desain & Estetika Visual

- **Swiss Typography & Editorial Brutalist:** Tipografi tebal berskala besar (*Plus Jakarta Sans* & *Inter*) dengan letter-spacing rapat dan penataan modular.
- **Monochrome Minimalist:** Dominasi palet hitam-putih (`#FFFFFF` background, `#000000` text, `#606060` secondary, `#111111` thin border) yang profesional dan berkarakter kuat.
- **Welcome Loading Screen:** Intro screen interaktif elegan saat pertama kali halaman dimuat, menampilkan wordmark `NAUFAL RAFIF`, headline `WELCOME.`, progress bar horizontal, dan persentase numerik 0% – 100% sebelum bertransisi mulus ke Hero Section.
- **Floating Pill Badges:** Lencana keahlian melayang dengan sedikit rotasi sudut editorial (`SOFTWARE ENGINEERING`, `SYSTEM ANALYST`, dll.).
- **4-Part Information Bar:** Bar horizontal responsif yang menampilkan status ketersediaan kerja, domisili, tanggal lokal dinamis, dan navigasi scroll down.
- **Modular About Me Cards:** Grid modular berisi *Introduction Card*, *Profile Photo Card*, *Education Card*, *Tech Stack Card*, dan *My Focus Card* (kartu kontras hitam pekat).

---

## 📁 Struktur File & Direktori

```text
Portofolio-Naufal/
├── index.html                 # Dokumen HTML5 semantik utama
├── css/
│   └── style.css              # Pure CSS3: variabel design tokens, komponen, grid/flexbox & media queries
├── js/
│   └── script.js              # Vanilla JS: welcome loading screen, tanggal dinamis, modal popup & copy email
├── assets/
│   ├── nopal.png              # Foto profil resmi Naufal Rafif
│   ├── wsvisual.jpg           # Screenshot proyek WSVisualJKT
│   ├── expert_system.jpg      # Screenshot proyek Sistem Pakar & SPK AHP
│   └── super_cellular.jpg     # Screenshot proyek Super Cellular POS
├── motow.mp4                  # Video demo aplikasi sistem pakar desktop Java
└── README.md                  # Dokumentasi proyek & panduan deployment
```

---

## 🚀 Cara Menjalankan Secara Lokal

### Cara 1: Langsung Buka File (Paling Mudah)
1. Buka folder `D:\Portofolio-Naufal` di File Explorer.
2. **Klik dua kali file `index.html`**. Website langsung terbuka di browser apa pun tanpa memerlukan instalasi server atau software tambahan.

### Cara 2: Melalui Server Lokal (Python)
Buka terminal PowerShell pada folder proyek:
```bash
python -m http.server 8000
```
Lalu buka browser Anda di: `http://localhost:8000`

---

## 🌐 Panduan Deploy ke GitHub Pages

Karena proyek ini menggunakan HTML, CSS, dan JavaScript statis murni dengan relative path (`./`):
1. Inisialisasi Git dan push folder ini ke repository GitHub Anda:
   ```bash
   git init
   git add .
   git commit -m "feat: Pure CSS & Vanilla JS Swiss Minimalist Portfolio"
   git branch -M main
   git remote add origin https://github.com/nopaall-jo/Portofolio-Naufal.git
   git push -u origin main
   ```
2. Buka repository di GitHub &rarr; pilih tab **Settings** &rarr; **Pages**.
3. Pada bagian **Build and deployment**, pilih source **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu klik **Save**.
4. Website portfolio Anda akan langsung online dalam 1-2 menit.

---

## 👤 Informasi Pengembang

- **Nama:** Naufal Rafif
- **Pendidikan:** S1 Teknik Informatika — Universitas Indraprasta PGRI (2022–2026)
- **Email:** naufal.rafif.2004@gmail.com
- **LinkedIn:** [linkedin.com/in/naufalrafif2480](https://linkedin.com/in/naufalrafif2480)
- **GitHub:** [github.com/nopaall-jo](https://github.com/nopaall-jo)
- **WhatsApp:** [+62 896-5365-7834](https://wa.me/6289653657834)
- **Domisili:** Bojonggede, Bogor, Jawa Barat, Indonesia
