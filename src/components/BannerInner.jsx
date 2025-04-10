import React from 'react'

const BannerInner = () => {
  return (
    <section className="p-24 flex flex-col justify-center items-center text-gray-700 cursor-default">
        <span className="text-xl font-black text-purple-600">Bagi Pelaku Usaha Mikro dan Kecil</span>
        <span className="text-3xl font-medium text-purple-800">Penahapan Kewajiban Bersertifikat Halal</span>
        <span className="mb-4">Untuk produk makanan, minuman, hasil sembelihan dan jasa penyembelihan</span>
        <span className="text-xs px-2 py-1 rounded-r-full rounded-l-full bg-purple-600 text-white">Mulai Tanggal</span>
        <span className="text-lg font-bold text-purple-800 mb-3">17 Oktober 2019</span>
        <span className="text-xs px-2 py-1 rounded-r-full rounded-l-full bg-purple-600 text-white">Sampai Tanggal</span>
        <span className="text-lg font-bold text-purple-800 mb-4">17 Oktober 2026</span>
        <span className="text-xs italic">(Sumber : Pasal 160 PP No. 42 Tahun 2024 tentang Penyelenggaraan Bidang Jaminan Produk Halal)</span>
      </section>
  )
}

export default BannerInner
