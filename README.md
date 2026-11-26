# Asahi Mandiri (kerangka kosong)

## Menjalankan (perlu Node.js 20.9 atau lebih baru)
    npm install
    npm run dev        -> buka http://localhost:3000

## Yang sering diubah
- Menu     : src/lib/menu.ts (halaman baru: buat src/app/nama/page.tsx)
- Warna    : src/app/globals.css (warna aplikasi juga ada di layout.tsx dan manifest.ts)
- Beranda  : src/app/page.tsx
- Isi      : cari "TODO"
- Ikon     : public/icons/

## Firebase (belum dipakai oleh halaman mana pun)
Salin .env.example menjadi .env.local, isi dari Firebase Console.
Nilai NEXT_PUBLIC_ terlihat oleh pengunjung, jadi jangan taruh rahasia di sana.

## Terbitkan
Perintah deploy MENGGANTI web di proyek tujuan. Uji dulu di proyek Firebase terpisah
atau preview channel:
    npm run build
    firebase hosting:channel:deploy uji --project ID_PROYEK
Preview channel bisa diakses lewat URL-nya dan memakai layanan proyek yang sama.
Untuk Google Login di URL preview, domainnya mungkin perlu ditambahkan di Authentication.
Jika sudah siap: firebase deploy --only hosting --project ID_PROYEK

## PWA
Service worker hanya aktif di hasil build. Halaman baru yang boleh dibuka offline
ditambahkan ke PUBLIC_PAGES di public/sw.js. Jangan masukkan konten Premium.
