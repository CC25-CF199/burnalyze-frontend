import React from 'react';
import {
  LocalHospital,
  Sick,
  Medication,
  Healing,
  ReportProblem,
  Shield,
  QuestionMark,
} from '@mui/icons-material';

const EdukasiLukaBakar = () => {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: 'Metropolis, Arial, Helvetica, sans-serif' }}
    >
      <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8 text-gray-800">
        <div className="text-center mb-6 sm:mb-8">
          <h1
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-gray-800"
            style={{ fontWeight: 'bold' }}
          >
            Edukasi Luka Bakar
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 px-2">
            Kenali gejala, penyebab, dan penanganan luka bakar secara tepat.
          </p>
        </div>

        {/* Pengertian */}
        <section className="flex flex-col items-center bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl shadow-md mb-4 sm:mb-5 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h2
            className="font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 flex items-center gap-2"
            style={{ color: '#01cee1', fontWeight: '600' }}
          >
            <LocalHospital />
            <span className="leading-tight">Pengertian Luka Bakar</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
            Luka bakar adalah kerusakan jaringan kulit yang disebabkan oleh
            paparan panas, bahan kimia, listrik, radiasi, atau sinar matahari.
            Luka ini umum terjadi dan bisa menimbulkan infeksi serius jika tidak
            ditangani dengan tepat.
          </p>
        </section>

        {/* Penyebab */}
        <section className="flex flex-col bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl shadow-md mb-4 sm:mb-5 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h2
            className="font-semibold self-center text-sm sm:text-base md:text-lg mb-3 sm:mb-4 flex items-center gap-2"
            style={{ color: '#01cee1', fontWeight: '600' }}
          >
            <span className="leading-tight">Penyebab Luka Bakar</span>
          </h2>
          <div className="space-y-2 sm:space-y-3">
            {[
              'Cairan panas (air, minyak)',
              'Api langsung (dari bensin, LPG, dsb.)',
              'Listrik (termasuk petir)',
              'Zat kimia (asam, basa, kosmetik)',
              'Radiasi (sinar matahari, radioterapi)',
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg"
                style={{ backgroundColor: '#f0fdff' }}
              >
                <div
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: '#01cee1' }}
                ></div>
                <span className="text-xs sm:text-sm md:text-base text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Gejala */}
        <section className="mb-4 sm:mb-5">
          <h2
            className="font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 flex items-center gap-2"
            style={{ color: '#01cee1', fontWeight: '600' }}
          >
            <Sick />
            <span className="leading-tight">
              Gejala Berdasarkan Derajat Luka Bakar
            </span>
          </h2>
          <div className="space-y-2 sm:space-y-3">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 sm:p-4 rounded-lg border border-yellow-200 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  1
                </div>
                <strong
                  className="text-xs sm:text-sm md:text-base font-semibold"
                  style={{ color: '#01cee1' }}
                >
                  Derajat 1:
                </strong>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed pl-7 sm:pl-8">
                Kemerahan dan nyeri pada lapisan luar kulit (epidermis).
              </p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 sm:p-4 rounded-lg border border-orange-200 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  2
                </div>
                <strong
                  className="text-xs sm:text-sm md:text-base font-semibold"
                  style={{ color: '#01cee1' }}
                >
                  Derajat 2:
                </strong>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed pl-7 sm:pl-8">
                Lepuh, nyeri hebat, kulit merah/putih, melibatkan epidermis dan
                dermis.
              </p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-gray-50 p-3 sm:p-4 rounded-lg border border-red-200 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  3
                </div>
                <strong
                  className="text-xs sm:text-sm md:text-base font-semibold"
                  style={{ color: '#01cee1' }}
                >
                  Derajat 3:
                </strong>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed pl-7 sm:pl-8">
                Kulit hitam/coklat/putih, mati rasa karena kerusakan saraf,
                mencapai lapisan lemak di bawah kulit.
              </p>
            </div>
          </div>
        </section>

        {/* Diagnosis */}
        <section className="flex flex-col items-center bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl shadow-md mb-4 sm:mb-5 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h2
            className="font-semibold self-center text-sm sm:text-base md:text-lg mb-2 sm:mb-3 flex items-center gap-2"
            style={{ color: '#01cee1', fontWeight: '600' }}
          >
            <span className="leading-tight">Diagnosis</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
            Dokter menentukan derajat luka melalui pemeriksaan fisik, dan bisa
            disertai tes tambahan seperti X-ray atau tes laboratorium bila
            diperlukan.
          </p>
        </section>

        {/* Pengobatan */}
        <section className="mb-4 sm:mb-5">
          <h2
            className="font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 flex items-center gap-2"
            style={{ color: '#01cee1', fontWeight: '600' }}
          >
            <Medication />
            <span className="leading-tight">Pengobatan Luka Bakar</span>
          </h2>
          <div className="space-y-2 sm:space-y-3">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-3 sm:p-4 rounded-lg border border-green-200 hover:shadow-md transition-shadow duration-300">
              <strong
                className="text-xs sm:text-sm md:text-base font-semibold block mb-1"
                style={{ color: '#01cee1' }}
              >
                Derajat 1:
              </strong>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                Kompres air dingin, gel lidah buaya, obat nyeri.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 sm:p-4 rounded-lg border border-blue-200 hover:shadow-md transition-shadow duration-300">
              <strong
                className="text-xs sm:text-sm md:text-base font-semibold block mb-1"
                style={{ color: '#01cee1' }}
              >
                Derajat 2:
              </strong>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                Obat topikal seperti krim antibiotik perak sulfadiazin, rawat
                luka dengan hati-hati.
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-red-50 p-3 sm:p-4 rounded-lg border border-purple-200 hover:shadow-md transition-shadow duration-300">
              <strong
                className="text-xs sm:text-sm md:text-base font-semibold block mb-1"
                style={{ color: '#01cee1' }}
              >
                Derajat 3:
              </strong>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                Perlu perawatan intensif, seperti cangkok kulit, infus cairan,
                dan pengawasan medis.
              </p>
            </div>
          </div>
        </section>

        {/* Komplikasi */}
        <section className="bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl shadow-md mb-4 sm:mb-5 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h2
            className="font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 flex items-center gap-2"
            style={{ color: '#01cee1', fontWeight: '600' }}
          >
            <ReportProblem />
            <span className="leading-tight">
              Komplikasi yang Mungkin Terjadi
            </span>
          </h2>
          <div className="space-y-2 sm:space-y-3">
            {[
              'Infeksi (termasuk sepsis)',
              'Kehilangan cairan (hipovolemia)',
              'Hipotermia',
              'Gangguan pernapasan',
              'Jaringan parut (keloid), kontraktur (kekakuan sendi)',
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-red-50 rounded-lg"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-xs sm:text-sm md:text-base text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Pencegahan */}
        <section className="bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl shadow-md mb-4 sm:mb-5 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h2
            className="font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 flex items-center gap-2"
            style={{ color: '#01cee1', fontWeight: '600' }}
          >
            <Shield />
            <span className="leading-tight">Pencegahan Luka Bakar</span>
          </h2>
          <div className="space-y-2 sm:space-y-3">
            {[
              'Gunakan tabir surya.',
              'Jauhkan anak dari benda panas dan bahan kimia.',
              'Jangan tinggalkan kompor menyala tanpa pengawasan.',
              'Gunakan alat pengaman seperti detektor api dan alat pemadam kebakaran.',
              'Tutup colokan listrik yang terjangkau anak.',
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-green-50 rounded-lg"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-xs sm:text-sm md:text-base text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Kapan ke dokter */}
        <section
          className="p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl shadow-md text-white"
          style={{
            background: 'linear-gradient(135deg, #01cee1 0%, #0099cc 100%)',
          }}
        >
          <h2
            className="font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 flex items-center gap-2"
            style={{ fontWeight: '600' }}
          >
            <QuestionMark />
            <span className="leading-tight">Kapan Harus ke Dokter?</span>
          </h2>
          <div className="bg-white/15 backdrop-blur-sm p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              Segera cari bantuan medis jika luka terlihat dalam atau menghitam,
              menyebabkan mati rasa atau nyeri hebat, serta menutupi area tubuh
              luas.
            </p>
          </div>
          <div className="text-xs sm:text-sm text-white/80">
            <span className="block sm:inline">Sumber: </span>
            <a
              href="https://www.alodokter.com/luka-bakar"
              className="underline hover:text-white transition-colors mr-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              alodokter.com/luka-bakar
            </a>
            <span className="hidden sm:inline">, </span>
            <a
              href="https://www.halodoc.com/kesehatan/luka-bakar"
              className="underline hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              halodoc.com/kesehatan/luka-bakar
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EdukasiLukaBakar;
