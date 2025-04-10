import React from 'react'

const Profil = () => {
  return (
    <>
      <section className="p-24 flex justify-center items-center text-gray-700 gap-20">
        <img src="/Logo Yayasan Matahari.png" alt="Yayasan Matahari" className="w-56" />
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-bold text-lg text-purple-800">Lembaga Pendamping Proses Produk Halal</h1>
          <h1 className="font-black text-4xl uppercase"><span className="text-green-600 me-2">Yayasan</span><span className="text-orange-600">Matahari</span></h1>
          <h2 className="text-purple-950">No. Registrasi : 2205000003</h2>
          <div className="flex justify-center items-center gap-2 my-5">
            <h2 className="px-2 bg-green-600 text-white uppercase font-bold rounded-r-full rounded-l-full">Pujo Basuki</h2>
            <h2 className="px-2 bg-orange-600 text-white uppercase font-bold rounded-r-full rounded-l-full">081360054669</h2>
          </div>
          <p className="text-center text-sm">JL. RAWA SAKTI TIMUR LR. VII, GP. JEULINGKE, BANDA ACEH SYIAH KUALA</p>
          <p className="text-center text-sm">KOTA BANDA ACEH, ACEH</p>
        </div>
      </section>
      <section className="px-24 py-12 flex justify-center items-center gap-10 text-purple-300 bg-gradient-to-r from-purple-900 to-purple-600 shadow-md">
        <img src="/Sertifikat P3H BPJPH.jpg"  alt="Sertifikat P3H BPJPH" className="w-1/3 rounded-xl overflow-hidden shadow-lg hover:scale-110 duration-300" onClick={() => window.open('/Sertifikat P3H BPJPH.jpg')} />
        <img src="/P1 2.png"  alt="Publikasi" className="w-1/3 rounded-xl shadow-lg" />
        <img src="/Sertifikat P3H Great Edu.jpg"  alt="Sertifikat P3H Great Edu" className="w-1/3 rounded-xl overflow-hidden shadow-lg hover:scale-110 duration-300" onClick={() => window.open('/Sertifikat P3H Great Edu.jpg')} />
      </section>
      <section className="px-24 py-12 flex justify-center items-center gap-10 text-gray-700">
        <img src="/WhatsApp Image 2024-10-29 at 22.24.24.png"  alt="Poster" className="w-1/4 rounded-xl shadow-lg hover:scale-110 duration-300" />
        <img src="/WhatsApp Image 2024-10-29 at 22.24.25.png"  alt="Poster" className="w-1/4 rounded-xl shadow-lg hover:scale-110 duration-300" />
        <img src="/WhatsApp Image 2024-10-29 at 22.24.26.png"  alt="Poster" className="w-1/4 rounded-xl shadow-lg hover:scale-110 duration-300" />
        <img src="/WhatsApp Image 2024-10-31 at 01.21.20.png"  alt="Poster" className="w-1/4 rounded-xl shadow-lg hover:scale-110 duration-300" />
      </section>
    </>
  )
}

export default Profil
