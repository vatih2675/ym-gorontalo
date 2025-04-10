const Banner = () => {
  return (
    <section className="px-24 py-4 flex justify-center items-center gap-10 text-purple-300 bg-gradient-to-l from-green-500 to-orange-500 shadow-md">
      <span onClick={() => window.open('https://wa.me/62895708460123')} className="text-white hover:underline cursor-pointer">Hubungi sekarang untuk pendampingan proses produk halal dan sertifikasi halal</span>
    </section>
  )
}

export default Banner
