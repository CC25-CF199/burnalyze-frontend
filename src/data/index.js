import detectionIcon from '../assets/icons/detection.png';
import historyIcon from '../assets/icons/history.png';
import educationIcon from '../assets/icons/education.png';
import fireIcon from '../assets/icons/FireIcon';
import shieldIcon from '../assets/icons/ShiledIcon';
import peopleIcon from '../assets/icons/PeopleIcon';
import RiwayatDeteksiIcon from '../assets/icons/RiwayatDeteksiIcon';
import PanduanPenangananIcon from '../assets/icons/PanduanPenangananIcon';
import PrivasiPenggunaIcon from '../assets/icons/PrivasiPenggunaIcon';

export const featureCards = [
  {
    icon: detectionIcon,
    title: 'Deteksi',
    link: '/detection',
  },
  {
    icon: historyIcon,
    title: 'Riwayat',
    link: 'detection/history',
  },
  {
    icon: educationIcon,
    title: 'Edukasi',
    link: '/education',
  },
];

export const factCards = [
  {
    text: '70% kasus luka bakar rumah tangga',
    desc: 'Terjadi akibat air panas, minyak goreng, atau api dapur.',
    icon: fireIcon,
  },
  {
    text: '80% kasus luka bakar ringan',
    desc: 'Sebagian besar kasus luka bakar di Indonesia bersifat ringan dan bisa ditangani dengan pertolongan pertama yang tepat.',
    icon: shieldIcon,
  },
  {
    text: 'Hanya 30% masyarakat Indonesia',
    desc: 'Yang mengetahui penanganan pertama pada luka bakar secara benar.',
    icon: peopleIcon,
  },
];

export const features = [
  {
    title: 'Deteksi Otomatis Luka',
    desc: 'Teknologi AI kami memindai luka secara instan untuk mengetahui tingkat keparahan luka bakar hanya dari gambar.',
    icon: RiwayatDeteksiIcon,
  },
  {
    title: 'Riwayat Deteksi',
    desc: 'Pantau perkembangan luka dari waktu ke waktu tanpa harus mengingat-ingat kapan terakhir diperiksa.',
    icon: RiwayatDeteksiIcon,
  },
  {
    title: 'Panduan Penanganan',
    desc: 'BurnAlyze memberi saran pertolongan pertama sesuai tingkat luka bakar, agar Anda mengambil langkah yang tepat.',
    icon: PanduanPenangananIcon,
  },
  {
    title: 'Privasi Pengguna',
    desc: 'BurnAlyze berkomitmen untuk menjaga kerahasiaan data Anda. Seluruh proses deteksi secara lokal, aman dan anonim.',
    icon: PrivasiPenggunaIcon,
  },
];

export const testimonials = [
  {
    title: 'Sangat membantu saat keadaan darurat!',
    desc: 'Web luar biasa! Saya panik saat adik saya terkena luka bakar, dan BurnAlyze bisa membantu mendeteksi tingkat lukanya hanya dari foto. Panduan pertolongannya jelas dan langsung bisa saya terapkan. Sangat direkomendasikan!',
    rating: 5,
    outOf: 5,
  },
  {
    title: 'Teknologi yang sangat bermanfaat',
    desc: 'Sebagai ibu rumah tangga, saya sangat terbantu. Anak-anak sering tidak sengaja terkena benda panas, dan BurnAlyze membantu saya menentukan apakah cukup ditangani di rumah atau perlu ke dokter.',
    rating: 5,
    outOf: 5,
  },
  {
    title: 'Cocok bagi mahasiswa kesehatan atau relawan',
    desc: 'Sebagai mahasiswa keperawatan, saya pakai ini untuk latihan dan belajar mengidentifikasi luka bakar. Membantu banget buat pengenalan awal sebelum praktik langsung.',
    rating: 5,
    outOf: 5,
  },
  {
    title: 'Mudah diakses, edukatif',
    desc: 'Saya suka karena bukan hanya deteksi luka, tapi juga ada edukasi lengkap tentang jenis luka dan pertolongan pertama. Cocok buat masyarakat umum.',
    rating: 4,
    outOf: 5,
  },
];

export const faq = [
  {
    question: 'Apa itu BurnAlyze?',
    answer:
      'BurnAlyze adalah platform digital berbasis kecerdasan buatan yang dirancang untuk membantu mendeteksi tingkat keparahan luka bakar secara cepat dan tepat. Melalui analisis visual, BurnAlyze memberikan estimasi derajat luka bakar dan panduan penanganan pertama yang sesuai, guna meminimalkan risiko lebih lanjut sebelum mendapatkan perawatan medis profesional.',
  },
  {
    question: 'Apakah BurnAlyze dapat digunakan secara gratis?',
    answer:
      'Benar. BurnAlyze sepenuhnya dapat digunakan secara gratis oleh siapa saja dan kapan saja. Kami percaya bahwa akses terhadap pertolongan pertama yang tepat pada luka bakar adalah hak semua orang.',
  },
  {
    question: 'Apakah BurnAlyze bisa membantu penanganan pertama luka bakar?',
    answer:
      'Benar! BurnAlyze berkomitmen untuk memberikan arahan penanganan pertama luka bakar yang cepat, berdasarkan hasil analisis luka. Arahan ini disusun dengan mengacu pada pedoman medis dasar dan bertujuan untuk mengurangi dampak cedera sebelum pertolongan medis lanjutan tersedia.',
  },
  {
    question:
      'Kegiatan seperti apa yang sering menyebabkan luka bakar sampai harus lebih diperhatikan?',
    answer:
      'Luka bakar dapat terjadi dalam berbagai aktivitas sehari-hari, seperti memasak di dapur, menyetrika atau menggunakan alat pemanas listrik, bermain petasan atau kembang api, terpapar sinar matahari berlebihan tanpa pelindung, serta bekerja di industri atau laboratorium yang melibatkan bahan panas atau kimia. Usahakan untuk berhati-hati selama melakukan kegiatan-kegiatan tersebut.',
  },
];
