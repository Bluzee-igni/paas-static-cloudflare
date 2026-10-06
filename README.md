# PaaS Static Deployment ke Cloudflare Workers

Proyek praktikum mandiri Mata Pelajaran **Platform as a Service (PaaS) – Semester 1 (Minggu 4, P1)**.  
Kode Modul: **S1-M04-P1**  
Praktikan: **Atha**  
Repository: [Bluzee-igni/paas-static-cloudflare](https://github.com/Bluzee-igni/paas-static-cloudflare)

---

## 1. Arsitektur & Konsep

Proyek ini memanfaatkan fitur **Cloudflare Workers (Static Assets)**. Berbeda dengan PaaS berbasis container/VM (seperti Railway atau Render), arsitektur ini menyajikan aset statis (HTML, CSS, JS, SVG) langsung dari edge network global Cloudflare tanpa memerlukan proses server atau port konvensional.

```
[VS Code / Local] ──(git push)──> [GitHub Repository] ──(CI/CD)──> [Cloudflare Workers Builds] ──> [*.workers.dev Live]
```

---

## 2. Struktur Direktori

```text
paas-static-cloudflare/
├── public/
│   ├── index.html       # Landing page utama dengan uji JavaScript
│   ├── about.html       # [Challenge] Halaman informasi proyek
│   ├── 404.html         # [Challenge] Halaman error 404 custom
│   ├── style.css        # [Challenge] Desain responsif modern (Mobile First)
│   ├── script.js        # Logika interaktivitas browser
│   └── favicon.svg      # [Challenge] Ikon situs kustom
├── wrangler.jsonc       # Konfigurasi Cloudflare Workers
└── README.md            # Dokumentasi & panduan deployment
```

---

## 3. Konfigurasi `wrangler.jsonc`

```jsonc
{
  "name": "paas-static-atha",
  "compatibility_date": "2026-09-29",
  "assets": {
    "directory": "./public"
  }
}
```

---

## 4. Panduan Deployment ke Cloudflare Workers

1. **Push ke GitHub**:
   ```bash
   git status
   git add .
   git commit -m "feat: prepare static site for Cloudflare"
   git push origin main
   ```

2. **Hubungkan di Cloudflare Dashboard**:
   - Masuk ke dashboard Cloudflare → menu **Workers & Pages**.
   - Klik **Create application** → pilih tab **Import a repository**.
   - Hubungkan akun GitHub dan pilih repo: `Bluzee-igni/paas-static-cloudflare`.
   - Tetapkan Production branch: `main`.
   - Deploy command: `npx wrangler deploy` (atau biarkan kosong jika otomatis mendeteksi assets).
   - Klik **Save and Deploy**.

3. **URL Live**:
   Website akan aktif pada domain:
   `https://paas-static-atha.<subdomain-anda>.workers.dev`

---

## 5. Uji CI/CD (Auto-Deploy)

Untuk memverifikasi integrasi Git otomatis:
1. Ubah teks di `public/index.html`.
2. Commit dan push:
   ```bash
   git add .
   git commit -m "docs: update homepage content"
   git push origin main
   ```
3. Pantau menu **Workers Builds** di dashboard: build baru akan otomatis berjalan dalam hitungan detik.

---

## 6. Challenge yang Diselesaikan

- [x] **Halaman `about.html`**: Halaman tambahan tentang spesifikasi proyek & praktikan.
- [x] **Favicon kustom (`favicon.svg`)**: Ikon SVG modern branding Cloudflare & PaaS.
- [x] **Desain Mobile-First & Responsif**: Media queries untuk perangkat smartphone dan desktop, mendukung light/dark mode.
- [x] **Halaman 404 Khusus (`404.html`)**: Penanganan graceful jika route tidak ditemukan di edge assets.

---

## 7. Checklist Bukti (Evidence) Tugas

- [ ] Link repository GitHub: `https://github.com/Bluzee-igni/paas-static-cloudflare`
- [ ] Screenshot struktur file proyek & isi `wrangler.jsonc`
- [ ] Screenshot status sukses di menu **Workers Builds**
- [ ] URL aktif `https://paas-static-atha.______.workers.dev`
- [ ] Screenshot website saat tombol "Cek JavaScript" diklik
- [ ] Screenshot riwayat auto-deploy pasca commit kedua
