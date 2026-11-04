# Portofolio Rizka Annisa

React + TypeScript + Vite + Tailwind CSS, mengikuti template Figma "Portfolio Design (Community)".

## Menjalankan
```
npm install
npm run assets     # unduh gambar contoh dari Figma ke public/images (opsional)
npm run dev        # buka http://localhost:5173
npm run build      # build produksi ke dist/
```
Butuh Node.js 20.19 atau lebih baru.

## Yang perlu Anda isi
- `public/images/profile.jpg`: foto profil (tanpa file ini, tampil inisial "RA").
- `public/resume/CV-Rizka-Annisa.pdf`: CV untuk tombol Unduh CV.
- `public/images/work-*.png`: ganti dengan tangkapan layar proyek Anda (nama file bebas, sesuaikan di `src/data/portfolio.ts`).
- Semua teks ada di `src/data/portfolio.ts`. Hapus `phone` di sana jika tidak ingin menampilkan nomor telepon.

## Deploy ke GitHub Pages
Router memakai `HashRouter` sehingga aman di GitHub Pages tanpa konfigurasi tambahan.
Untuk repositori `KarizYa.github.io`, unggah isi `dist/` (atau pakai GitHub Actions untuk Vite).
Untuk repositori dengan nama lain, tambahkan `base: "/nama-repo/"` di `vite.config.ts`.
