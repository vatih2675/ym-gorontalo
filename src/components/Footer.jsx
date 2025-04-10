
const Footer = () => {
  const website = window.location.host;
  
  return (
    <section className="px-24 py-10 flex justify-center items-center gap-10 text-purple-300 bg-gradient-to-l from-purple-900 to-purple-600 shadow-md cursor-default">
      <div className="w-1/3 flex flex-col justify-center items-start">
        <a href="/" className="flex flex-col justify-center items-start mb-4">
          <h1 className="text-2xl font-bold text-white uppercase">RUSLAN SAMUEL</h1>
          <h2 className="text-white">P3H Yayasan Matahari Gorontalo</h2>
        </a>
        <div className="flex flex-col justify-center items-start gap-1 text-xs">
          <span className="cursor-pointer flex gap-1 justify-start items-start text-white hover:underline" onClick={() => window.open('https://maps.google.com')}><i className="bi-geo-alt"></i>Jln. Membramo, Kel. Bulotadaa Timur, Kec. Sipatana, Kota Gorontalo, Gorontalo 96121</span>
          <span className="cursor-pointer flex gap-1 justify-start items-start text-white hover:underline" onClick={() => window.open('https://wa.me/62895708460123')}><i className="bi-whatsapp"></i>0895708460123</span>
          <span className="flex gap-1 justify-start items-start text-white"><i className="bi-envelope-at"></i>ruslansamuel11@gmail.com</span>
          <span className="cursor-pointer flex gap-1 justify-start items-start text-white hover:underline" onClick={() => window.open(website)}><i className="bi-browser-chrome"></i>{website}</span>
        </div>
      </div>
      <div className="w-1/3 flex justify-center items-center gap-6">
        <img src="/Logo Halal Indonesia Putih.png" alt="Halal Indonesia" className="h-28" />
        <img src="/Logo BPJPH.png" alt="BPJPH" className="h-28" />
        <img src="/Logo Yayasan Matahari Gorontalo.png" alt="LP3H YM Gorontalo" className="h-28" />
      </div>
      <div className="w-1/3 h-full flex justify-center items-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.615658873962!2d123.06270437310216!3d0.577495363575422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32792db0769ecb1d%3A0xa1e212e89e0da104!2sMakaleka%20Shop!5e0!3m2!1sid!2sid!4v1744288768342!5m2!1sid!2sid" className="w-full rounded-xl h-50" loading="lazy"></iframe>
      </div>
    </section>
  )
}

export default Footer
