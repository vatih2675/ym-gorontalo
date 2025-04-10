import React from 'react'
import BannerInner from '../components/BannerInner'

const Beranda = () => {
  return (
    <>
      <section className="p-24 flex justify-center items-center gap-10 text-gray-700 cursor-default">
        <img src="/Kantor BPJPH.png"  alt="Kantor BPJPH" className="w-1/2 rounded-xl shadow-md" />
        <div className="flex flex-col justify-start items-start w-1/2" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500">
          <h1 className="font-bold text-4xl text-purple-800 mb-3">KEBIJAKAN HALAL</h1>
          <p className="text-justify">Kami berkomitmen dan bertanggung jawab untuk menghasilkan produk halal secara konsisten dan berkesinambungan dengan melakukan tindakan :</p>
          <ol className="list-decimal ms-5 text-justify">
            <li className="ps-1">Mematuhi peraturan perundangan terkait jaminan produk halal;</li>
            <li className="ps-1">Menggunakan bahan halal dan melaksanakan proses produk halal (PPH) sesuai dengan ketentuan yang berlaku;</li>
            <li className="ps-1">Menyiapkan sumber daya manusia yang mendukung pelaksanaan PPH diperusahaan; serta,</li>
            <li className="ps-1">Mensosialisasikan dan mengkomunikasikan kebijakan halal pada seluruh pihak terkait untuk memastikan semua personil menjaga integritas halal di unit usaha.</li>
          </ol>
        </div>
      </section>
      <section className="p-24 flex justify-center items-center gap-10 text-purple-300 bg-gradient-to-r from-purple-900 to-purple-600 shadow-md cursor-default">
        <div className="flex flex-col justify-start items-start w-1/2" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500">
          <h1 className="font-bold text-4xl text-white mb-3">PRODUK WAJIB SERTIFIKAT HALAL</h1>
          <p className="text-justify">Berdasarkan Undang-Undang Nomor 33 Tahun 2014 beserta turunannya, ada tiga kelompok produk yang harus sudah bersertifikat halal, yaitu :</p>
          <ol className="list-decimal ms-5 text-justify">
            <li className="ps-1">Produk makanan dan minuman</li>
            <li className="ps-1">Bahan baku, bahan tambahan pangan, bahan penolong produk (makanan dan minuman)</li>
            <li className="ps-1">Produk hasil sembelihan (jasa penyembelihan)</li>
          </ol>
          <p className="text-justify mt-3">Untuk produk yang belum bersertifikat halal dan sudah beredar di masyarakat, akan ada sanksi berupa :</p>
          <ol className="list-disc ms-5 text-justify">
            <li className="ps-1">Peringatan tertulis</li>
            <li className="ps-1">Denda administratif</li>
            <li className="ps-1">Penarikan produk dari peredaran</li>
          </ol>
        </div>
        <img src="/Produk Halal.jpg"  alt="Produk Halal" className="w-1/2 rounded-xl shadow-md" />
      </section>
      <BannerInner />
    </>
  )
}

export default Beranda
