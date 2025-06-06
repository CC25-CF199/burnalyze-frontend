import React from 'react';
import logo from '../assets/burnalyze_logo.png';

const EdukasiLukaBakar = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3 sm:py-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-2 sm:px-4">
          {/* Hamburger menu kiri */}
          <button className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Logo di tengah */}
          <img src={logo} alt="BurnAlyze Logo" className="h-8 sm:h-10" />
          {/* Spacer kanan */}
          <div className="w-6 sm:w-7" />
        </div>
      </div>

      {/* Judul */}
      <div className="text-center mt-6 px-4">
        <h1 className="text-2xl font-semibold text-gray-800">Edukasi Luka Bakar</h1>
        <p className="text-sm text-gray-600 mt-1">
          Kenali gejala, penyebab, dan penanganan luka bakar secara tepat.
        </p>
      </div>

      {/* Konten */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-4xl mx-auto space-y-6">
        {/* Pengertian */}
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <h2 className="text-[#00ADB5] font-semibold flex items-center gap-2">📘 Pengertian Luka Bakar</h2>
          <p className="text-sm text-gray-700 mt-2">
            Luka bakar adalah kerusakan jaringan kulit akibat panas, bahan kimia, listrik, radiasi, atau sinar matahari.
            Luka ini umum terjadi dan bisa menimbulkan infeksi serius jika tidak ditangani dengan tepat.
          </p>
        </div>

        {/* Penyebab */}
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <h2 className="text-[#00ADB5] font-semibold mb-2">🔥 Penyebab Luka Bakar</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Cairan panas (air, minyak)</li>
            <li>Api langsung (bensin, LPG)</li>
            <li>Listrik (termasuk petir)</li>
            <li>Zat kimia (asam, basa)</li>
            <li>Radiasi (sinar matahari, radioterapi)</li>
          </ul>
        </div>

        {/* Grid: Gejala & Pengobatan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Gejala */}
          <div>
            <h2 className="text-[#00ADB5] font-semibold mb-2">🩺 Gejala Berdasarkan Derajat Luka Bakar</h2>
            <div className="space-y-3">
              <div className="bg-[#E0F7FA] rounded-xl p-3">
                <p className="text-sm text-gray-700">
                  <strong>Derajat 1:</strong> Kemerahan dan nyeri di permukaan kulit.
                </p>
              </div>
              <div className="bg-[#E0F7FA] rounded-xl p-3">
                <p className="text-sm text-gray-700">
                  <strong>Derajat 2:</strong> Lepuh, nyeri hebat, kulit kemerahan/putih.
                </p>
              </div>
              <div className="bg-[#E0F7FA] rounded-xl p-3">
                <p className="text-sm text-gray-700">
                  <strong>Derajat 3:</strong> Kulit hitam/putih, mati rasa, kerusakan jaringan dalam.
                </p>
              </div>
            </div>
          </div>

          {/* Pengobatan */}
          <div>
            <h2 className="text-[#00ADB5] font-semibold mb-2">🩹 Pengobatan Luka Bakar</h2>
            <div className="space-y-3">
              <div className="bg-[#E0F7FA] rounded-xl p-3">
                <p className="text-sm text-gray-700">
                  <strong>Derajat 1:</strong> Kompres air dingin, lidah buaya, obat nyeri.
                </p>
              </div>
              <div className="bg-[#E0F7FA] rounded-xl p-3">
                <p className="text-sm text-gray-700">
                  <strong>Derajat 2:</strong> Krim antibiotik, rawat luka dengan hati-hati.
                </p>
              </div>
              <div className="bg-[#E0F7FA] rounded-xl p-3">
                <p className="text-sm text-gray-700">
                  <strong>Derajat 3:</strong> Cangkok kulit, infus cairan, perawatan intensif.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Diagnosis */}
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <h2 className="text-[#00ADB5] font-semibold mb-2">📋 Diagnosis</h2>
          <p className="text-sm text-gray-700">
            Dokter memeriksa luka secara visual dan mungkin melakukan X-ray atau tes darah untuk melihat tingkat keparahan luka.
          </p>
        </div>

        {/* Komplikasi */}
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <h2 className="text-[#00ADB5] font-semibold mb-2">⚠️ Komplikasi yang Mungkin Terjadi</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Infeksi (termasuk sepsis)</li>
            <li>Kehilangan cairan (dehidrasi/hipovolemia)</li>
            <li>Hipotermia</li>
            <li>Cedera pernapasan</li>
            <li>Keloid dan kontraktur</li>
          </ul>
        </div>

        {/* Pencegahan */}
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <h2 className="text-[#00ADB5] font-semibold mb-2">✅ Pencegahan Luka Bakar</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Gunakan tabir surya saat beraktivitas di luar</li>
            <li>Jauhkan anak dari api dan benda panas</li>
            <li>Gunakan sarung tangan saat menangani bahan kimia</li>
            <li>Pasang alat deteksi asap & pemadam kebakaran</li>
          </ul>
        </div>

        {/* Kapan ke dokter */}
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <h2 className="text-[#00ADB5] font-semibold mb-2">⏰ Kapan Harus ke Dokter?</h2>
          <p className="text-sm text-gray-700">
            Jika luka memburuk, berbau, bernanah, menyebabkan demam tinggi, atau mencakup area luas dan bagian vital.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Sumber:{' '}
            <a href="https://www.alodokter.com/luka-bakar" className="text-[#00ADB5] underline">alodokter</a>,{' '}
            <a href="https://www.halodoc.com/kesehatan/luka-bakar" className="text-[#00ADB5] underline">halodoc</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EdukasiLukaBakar;
