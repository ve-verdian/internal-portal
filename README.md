# Internal Service Portal
Portal layanan internal ini dirancang untuk memudahkan staf IT, dokter, dan staf operasional dalam mengakses berbagai layanan internal rumah sakit seperti File Sharing, Sistem Informasi Rumah Sakit, Monitoring, dan infrastruktur IT tanpa perlu menghafal alamat IP/port masing-masing layanan.

## 🚀 Fitur Utama
- **Centralized Access**: Akses seluruh sistem IT RS dalam satu dashboard.
- **Categorized Services**: Layanan dikelompokkan (File Sharing, IT Service, Hospital Systems, Monitoring, Admin).
- **Responsive Design**: Tampilan optimal di desktop, tablet, maupun smartphone (mendukung tim medis saat *round*).
- **Corporate Branding**: Tema visual yang disesuaikan dengan identitas Brawijaya Hospital (Purple & Pink).
- **Fast & Lightweight**: Dibangun dengan Next.js dan Tailwind CSS untuk performa maksimal.

## 🛠️ Tech Stack
- **Framework**: [Next.js 14+](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) & [GitHub Pages](https://pages.github.com/)

## 📦 Setup Lokal
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) di komputer Anda.

1. **Clone repository ini**:
   ```bash
   git clone [https://github.com/ve-verdian/internal-portal.git](https://github.com/ve-verdian/internal-portal.git)
   cd internal-portal

2. Install dependencies:
   npm install

3. Jalankan development server:
   npm run dev
   Buka http://localhost:3000 di browser Anda

## 📝 Cara Menambahkan Service Baru
Untuk menambah atau mengubah daftar layanan, silakan edit file app/page.js. Cari bagian servicesData dan tambahkan objek baru sesuai kategori yang diinginkan:

{ 
  name: "Nama Service", 
  desc: "Deskripsi singkat", 
  url: "http://ip-address:port", 
  icon: "emoji/ikon" 
},

## 🚀 Deployment
Project ini dikonfigurasi untuk dua environment:
Vercel: Deployment otomatis setiap kali ada git push ke branch main.
GitHub Pages: Build otomatis via GitHub Actions yang dikonfigurasi di .github/workflows/deploy.yml.

## 🛡️ Keamanan
Portal ini hanya direkomendasikan untuk akses via VPN atau Jaringan Internal.
Hindari mengekspos domain ini ke publik (Internet) tanpa pengamanan tambahan (seperti Auth/SSO).

Dikembangkan oleh IT Department.
