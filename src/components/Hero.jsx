import React from 'react'

const Hero = () => {
  return (
    <section className='hero w-full p-24 flex justify-between items-center shadow-md cursor-default'>
      <div className="flex justify-start items-center gap-4">
        <img src="/Logo Halal Indonesia Putih.png" alt="Halal Indonesia" className='h-40' />
        <div className="flex flex-col justify-center items-start gap-2">
          <h1 className="text-6xl font-black text-white"><span className="text-purple-400">RUSLAN</span> SAMUEL</h1>
          <p className="text-white text-3xl"><span className="text-purple-400">Pendamping</span> Proses Produk Halal</p>
          <p className="text-white text-3xl"><span className="text-purple-400">No. Registrasi :</span> 2408000873</p>
        </div>
      </div>
      <div className="p-10 rounded-4xl bg-purple-300/70 flex flex-col justify-center items-start gap-4">
        <div className="flex justify-start items-center gap-2">
          <img src="/Logo BPJPH.png" alt="BPJPH" className='w-26' />
          <div className="flex flex-col justify-center items-start">
            <h1 className='font-black text-4xl text-purple-950'>BPJPH</h1>
            <p className='text-xs'>BADAN PENYELENGGARA<br />JAMINAN PRODUK HALAL<br />KEMENTRIAN AGAMA RI</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-2">
          <img src="/Logo Yayasan Matahari Gorontalo.png" alt="Yayasan Matahari Gorontalo" className='w-26' />
          <div className="flex flex-col justify-center items-start">
            <h1 className='font-black text-4xl text-purple-950'>LP3H</h1>
            <p className='text-xs'>YAYASAN MATAHARI<br />GORONTALO</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
