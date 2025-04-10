import { dataBahan } from "../../constants/Data"

const Bahan = () => {
  return (
    <>
      <section className="w-full h-full ps-4 sm:ps-10 text-white bg-gradient-to-r from-purple-900 to-purple-600 flex justify-center items-center gap-10 shadow-md">
        <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col justify-center items-start">
                <h1 className="font-bold text-purple-400 text-xl sm:text-7xl">PRODUK & BAHAN</h1>
            </div>
            <div className="w-6/12">
                <img src="/Produk Halal.jpg" className="w-full" alt="Produk Halal" />
            </div>
        </div>
      </section>
      <section className="w-full h-full p-4 sm:p-10 shadow-md">
          <h1 className="text-center font-bold text-lg sm:text-4xl mb-3 sm:mb-5 text-purple-700">KERANGKA PRINSIP DASAR</h1>
          <div className="w-full sm:w-8/12 text-xs sm:text-base mx-auto">
              <img src="/kerangkaprinsipdasar.png" alt="Kerangka Prinsip Dasar" />
          </div>
      </section>
      <section className="w-full h-full text-white p-4 sm:p-10 bg-gradient-to-l from-purple-900 to-purple-600 shadow-md">
          <h1 className="text-purple-400 font-bold text-lg sm:text-5xl text-center mb-3">KRITERIA SJPH</h1>
          <div className="w-full sm:w-4/12 mx-auto text-purple-200 text-base sm:text-xl">
              <p className="text-center mb-2">Lima kerangka prinsip dasar (arkan al-halal)</p>
              <ol className="list-decimal ms-10">
                  <li className="ps-1">Komitmen dan tanggung jawab</li>
                  <li className="ps-1">Bahan</li>
                  <li className="ps-1">Proses Produk Halal</li>
                  <li className="ps-1">Produk</li>
                  <li className="ps-1">Pemantauan dan Evaluasi</li>
              </ol>
          </div>
      </section>
      <section className="w-full h-full p-4 sm:p-10 shadow-md">
          <h1 className="text-center font-bold text-lg sm:text-4xl mb-3 sm:mb-5 text-purple-700">KRITERIA PRODUK</h1>
          <div className="w-full text-xs sm:text-base mx-auto flex flex-col sm:flex-row justify-center items-start gap-4">
              <div className="w-full sm:w-6/12">
                  <div className="rounded-xl shadow-md overflow-hidden bg-purple-200 text-purple-600">
                      <h1 className="p-2 sm:p-4 text-center font-bold shadow-md">1. Nama Produk</h1>
                      <div className="p-2 sm:p-4">
                          <ol className="list-disc ms-5">
                              <li>Tidak menggunakan nama minuman beralkohol. <span className="italic">Contoh : rootbeer, es rasa rhum</span></li>
                              <li>Tidak menggunakan nama babi dan anjing serta turunannya. <span className="italic">Contoh : beef bacon dan hot dog</span></li>
                              <li>Tidak bertentangan dengan akidah Islam.</li>
                              <li>Tidak mengarah pada hal yang menimbulkan kekufuran/kemaksiatan.</li>
                              <li>Tidak menggunakan kata yang berkonotasi erotis, vulgar, porno <span className="italic">Contoh : keripik janda genit</span></li>
                          </ol>
                          <small className="text-sm mt-4 block italic text-justify">Kecuali nama produk yang telah dikenal luas dan tidak mengandung bahan haram dapat digunakan (bir pletok, bakso, bakmi, bakpia, bakpao)</small>
                      </div>
                  </div>
              </div>    
              <div className="w-full sm:w-6/12 flex flex-col justify-center items-center gap-4">
                  <div className="rounded-xl shadow-md overflow-hidden bg-purple-200 text-purple-600">
                      <h1 className="p-2 sm:p-4 text-center font-bold shadow-md">2. Bentuk Produk</h1>
                      <div className="p-2 sm:p-4">
                          <ol className="list-disc ms-5">
                              <li>Tidak menggunakan bentuk babi atau anjing.</li>
                              <li>Tidak menggunakan bentuk produk, kemasan atau label yang menggambarkan sifat erotis, vulgar, porno.</li>
                          </ol>
                      </div>
                  </div>
                  <div className="rounded-xl shadow-md overflow-hidden bg-purple-200 text-purple-600">
                      <h1 className="p-2 sm:p-4 text-center font-bold shadow-md">3. Pengemasan Produk</h1>
                      <div className="p-2 sm:p-4">
                          <ol className="list-disc ms-5">
                              <li>Wajib menggunakan bahan pengemas yang tidak terbuat atau mengandung bahan yang tidak halal.</li>
                              <li>Harus mendesain kemasan, tanda, simbol, logo, nama, dan gambar yang tidak menyesatkan dan/atau melanggar syariat Islam.</li>
                          </ol>
                      </div>
                  </div>
              </div>    
          </div>
      </section>
      <section className="w-full h-full text-white p-4 sm:p-10 bg-gradient-to-r from-purple-900 to-purple-600 shadow-md">
          <h1 className="text-purple-400 font-bold text-xl sm:text-4xl text-center">JENIS PRODUK <span className="italic">SELF DECLARE</span></h1>
          <p className="text-center text-purple-300 mb-3 italic text-xs sm:text-base">Berdasarkan Keputusan Kepala BPJPH Nomor 150 Tahun 2022</p>
          <div className="w-full text-xs sm:text-base mx-auto flex flex-col justify-center items-start gap-4" id="divJenisMakanan">
            {dataBahan.map((bhn, index) => (
              <div key={index} className="w-full rounded-xl shadow-md overflow-hidden bg-purple-200 text-purple-600">
                <h1 className="p-2 sm:p-4 text-center font-bold shadow-md uppercase">{bhn.produk}</h1>
                <div className="p-2 sm:p-4">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-purple-300">
                                <th className="p-1 sm:p-2 border border-purple-400 w-2/12">JENIS PRODUK</th>
                                <th className="p-1 sm:p-2 border border-purple-400 w-5/12">RINCIAN</th>
                                <th className="p-1 sm:p-2 border border-purple-400 w-5/12">KBLI</th>
                            </tr>
                        </thead>
                        <tbody>
              {bhn.jenisProduk.map((jp, index) => (
                <tr key={index}>
                  <td className="align-top p-1 sm:p-2 border border-purple-400">
                      <p>{jp.nama}</p>
                      <p className="mt-2">{jp.catatan}</p>
                  </td>
                  <td className="align-top p-1 sm:p-2 border border-purple-400">
                {jp.rincian.map((rcn, index) => (
                  <div key={index}>
                    <p className="font-bold">{rcn.namaBahan}</p>
                    <p className="italic mb-3">{rcn.contoh}</p>
                  </div>
                ))}
                </td>
                  <td className="align-top p-1 sm:p-2 border border-purple-400">
                      <ol className="list-disc ms-3 sm:ms-5">
                {jp.kbli.map((kb, index) => (
                  <li key={index}>{kb}</li>
                ))}
                </ol>
                    </td>
                </tr>
              ))}
              </tbody>
                        </table>
                    </div>
                </div>
            ))}
          </div>
      </section>
      <section className="w-full h-full p-4 sm:p-10 shadow-md">
          <h1 className="text-center font-bold text-2xl sm:text-4xl  text-purple-700">BAHAN</h1>
          <p className="text-center text-purple-600 mb-3 sm:mb-5 text-xs sm:text-base">Unsur yang digunakan untuk membuat atau menghasilkan produk yang dipersyaratkan dalam SJPH.</p>
          <div className="flex flex-col sm:flex-row justify-start items-start gap-4">
              <div className="w-6/12 rounded-xl shadow-md bg-purple-100 overflow-hidden p-3 sm:p-5 text-purple-600 sm:text-xl">
                  <ol className="list-decimal ms-5">
                      <li className="mb-0 sm:mb-2">Bahan Baku</li>
                      <li className="mb-0 sm:mb-2">Bahan Tambahan</li>
                      <li className="mb-0 sm:mb-2">Bahan Penolong</li>
                      <li className="mb-0 sm:mb-2">Kemasan Produk</li>
                      <li>Bahan Penolong Pencucian</li>
                  </ol>
              </div>
              <div className="w-6/12 rounded-xl shadow-md bg-purple-100 overflow-hidden p-3 sm:p-5 text-purple-600">
                  <p className="font-bold">Bahan Baku & Bahan Tambahan</p>
                  <p className="mb-3">Digunakan dalam pembuatan produk & menjadi bagian dari komposisi produk (ingredient).</p>
                  <p className="font-bold">Bahan Penolong</p>
                  <p className="">Digunakan untuk membantu proses produksi, tetapi tidak menjadi bagian dari komposisi.</p>
                  <p className="italic">Contoh: enzim, pelarut, air untuk mencuci peralatan, kuas untuk mengoles.</p>
              </div>
          </div>
      </section>
      <section className="w-full h-full text-white p-4 sm:p-10 bg-gradient-to-l from-purple-900 to-purple-600 shadow-md">
          <h1 className="text-purple-400 font-bold text-lg sm:text-4xl mb-3 sm:mb-5 text-center">KRITERIA BAHAN <span className="italic">SELF DECLARE</span></h1>
          <div className="w-full sm:w-7/12 mx-auto text-sm sm:text-base flex flex-col justify-center items-center gap-3 sm:gap-5">
              <div className="w-full rounded-xl sm:rounded-3xl p-3 sm:p-5 bg-purple-200 text-purple-700">
                  <p className="text-start">Bahan yang digunakan sudah dipastikan kehalalannya.</p>
                  <ol className="list-disc ms-5">
                      <li>Dibuktikan dengan sertifikat halal.</li>
                      <li>Termasuk dalam daftar bahan sesuai KMA Nomor 1360 Tahun 2021.</li>
                  </ol>
                  <p className="text-justify">Tidak menggunakan bahan berbahaya.</p>
                  <p className="text-purple-500 italic text-xs sm:text-sm mt-3 text-end">Keputusan Kepala BPJPH Nomor 150 Tahun 2022</p>
              </div>
          </div>
      </section>
      <section className="w-full h-full p-4 sm:p-10 shadow-md">
          <h1 className="text-center font-bold text-base sm:text-4xl mb-3 sm:mb-5 text-purple-700">KATEGORI BAHAN</h1>
          <div className="w-full sm:w-8/12 mx-auto text-sm sm:text-base flex flex-col justify-center items-center gap-3 sm:gap-5">
              <div className="w-full rounded-xl sm:rounded-3xl p-3 sm:p-5 bg-purple-200 text-purple-700">
                  <p className="font-bold text-sm sm:text-xl mb-2 sm:mb-3">Bahan Tidak Diragukan</p>
                  <p className="text-justify text-xs sm:text-base">Bahan yang tidak kritis dari aspek halal sehingga tidak harus dilengkapi dengan Sertifikat Halal. Kategori bahan tidak diragukan diatur dalam KMA Nomor 1360 tahun 2021.</p>
              </div>
              <div className="w-full rounded-xl sm:rounded-3xl p-3 sm:p-5 bg-purple-200 text-purple-700">
                  <p className="font-bold text-sm sm:text-xl mb-2 sm:mb-3">Bahan Diragukan</p>
                  <ol className="list-decimal text-xs sm:text-base ms-3 sm:ms-5">
                      <li>Berasal dari atau mengandung unsur hewan sembelihan dan turunannya.</li>
                      <li>Sulit ditelusuri kehalalannya.</li>
                      <li>Mengandung bahan kompleks, ditinjau dari sisi kekritisan bahan dan kerumitan proses pembuatannya.</li>
                      <li>Flavor dan fragrance.</li>
                  </ol>
                  <ol className="list-disc text-xs sm:text-base ms-3 sm:ms-5 mt-2 sm:mt-3">
                      <li>Dibuktikan dengan sertifikat halal.</li>
                      <li>Dijelaskan proses produk halal.</li>
                  </ol>
              </div>
          </div>
      </section>
      <section className="w-full h-full text-white p-4 sm:p-10 bg-gradient-to-r from-purple-900 to-purple-600 shadow-md">
          <h1 className="text-purple-400 font-bold text-base sm:text-4xl mb-3 sm:mb-5 text-center">HALAL HARAM DALAM MAQOLAH ULAMA</h1>
          <div className="w-full sm:w-7/12 mx-auto text-sm sm:text-base flex flex-col justify-center items-center gap-3 sm:gap-5">
              <div className="w-full rounded-xl sm:rounded-3xl p-3 sm:p-5 bg-purple-200 text-purple-700 text-justify">“Hukum asal sesuatu yang bermanfaat adalah halal, hukum asal sesuatu yang berbahaya adalah haram”.</div>
              <div className="w-full rounded-xl sm:rounded-3xl p-3 sm:p-5 bg-purple-200 text-purple-700 text-justify">“Jika perkara halal dan haram berkumpul, maka yang dimenangkan adalah yang haram”.</div>
              <div className="w-full rounded-xl sm:rounded-3xl p-3 sm:p-5 bg-purple-200 text-purple-700 text-justify">“Keadaan darurat membolehkan suatu yang terlarang”.</div>
          </div>
      </section>
      <section className="w-full h-full p-4 sm:p-10 shadow-md">
          <h1 className="text-center font-bold text-lg sm:text-4xl mb-3 sm:mb-5 text-purple-700">MAKANAN HALAL & THOYIB</h1>
          <div className="w-full sm:w-8/12 mx-auto text-sm sm:text-base flex flex-col justify-center items-center gap-3 sm:gap-5">
              <div className="w-full rounded-xl sm:rounded-3xl p-3 sm:p-5 bg-purple-200 text-purple-700 text-justify">Istilah “halal” berarti jenis makanan yang boleh dikonsumsi dan tidak diharamkan. Istilah “thoyib” berarti jenis makanan yang bisa dinikmati, memberi manfaat karena telah memenuhi standar kesehatan (gizi, protein, higienis, dll.), tidak madharat bagi kesehatan fisik dan psikis, serta diperoleh dengan cara halal.</div>
              <div className="w-full rounded-xl sm:rounded-3xl p-3 sm:p-5 bg-purple-200 text-purple-700">
                  <p className="text-justify">“Dan makanlah dari apa yang telah diberikan Allah kepadamu sebagai rezeki yang halal dan baik, dan bertakwalah kepada Allah yang kamu beriman kepada-Nya”.</p>
                  <p className="italic text-end text-xs">(QS. Al-Maidah : 88)</p>
              </div>
          </div>
      </section>
      <section className="w-full h-full text-white p-4 sm:p-10 bg-gradient-to-l from-purple-900 to-purple-600 shadow-md">
          <h1 className="text-purple-400 font-bold text-lg sm:text-3xl text-center mb-3">SEBAB KEHARAMAN MAKANAN</h1>
          <div className="w-full sm:w-6/12 mx-auto text-sm sm:text-base">
              <ol className="list-disc ms-4 sm:ms-10 text-purple-200 text-base sm:text-xl">
                  <li className="ps-1">An Najis, Al Mutanajis (najis, terkenanajis), seperti darah & makanan terkena najis;</li>
                  <li className="ps-1">Al Kadar, Al Khobats (kotor, jijik), seperti kecoa & belatung;</li>
                  <li className="ps-1">Al Dhoror (membahayakan), seperti racun & formalin;</li>
                  <li className="ps-1">Al Iskar (merusak fungsi akal), seperti khomr & narkoba;</li>
                  <li className="ps-1">Al Muftarisah (binatang buas), seperti serigala & elang; dan,</li>
                  <li className="ps-1">Al Barma’iah (binatang amfibi), seperti katak & sesilia.</li>
              </ol>
          </div>
      </section>
      <section className="w-full h-full p-4 sm:p-10 shadow-md">
          <h1 className="text-center font-bold text-lg sm:text-4xl mb-3 sm:mb-5 text-purple-700">NAJIS SUCI</h1>
          <div className="w-full sm:w-6/12 text-xs sm:text-base mx-auto">
              <ol className="list-disc text-purple-700 ms-6 sm:ms-14 text-base sm:text-xl">
                  <li className="mb-3">Najis adalah sesuatu yang kotor yang mencegah keabsahan ibadah.</li>
                  <li className="mb-3">Suci adalah keadaan tidak terkena najis dan atau tidak sedang berhadats kecil & besar.</li>
              </ol>
          </div>
      </section>
      <section className="w-full h-full text-white p-4 sm:p-10 bg-gradient-to-r from-purple-900 to-purple-600 shadow-md">
          <h1 className="text-purple-400 font-bold text-lg sm:text-3xl text-center mb-3">MACAM NAJIS</h1>
          <div className="w-full sm:w-6/12 mx-auto text-sm sm:text-base">
              <ol className="list-disc ms-3 sm:ms-9 text-purple-200 text-sm sm:text-xl text-justify">
                  <li className="ps-1">Najis Mukhoffafah (ringan), contoh : air kencing bayi laki-laki belum usia 2 tahun, cara mensucikan dengan menciprati air.</li>
                  <li className="ps-1">Najis Mutawashitoh (sedang), contoh : kotoran hewan, darah manusia, cara mensucikan dengan menyiramkan air hingga bau, warna dan rasa hilang.</li>
                  <li className="ps-1">Najis Mugholadzoh (berat), contoh : hal berasal dari anjing dan babi (air liur, kotoran, dll), cara mensucikan dengan menyiramkan air sebanyak 7 kali, salah satunya dicampur debu.</li>
              </ol>
          </div>
      </section>
      <section className="w-full h-full p-4 sm:p-10 shadow-md">
          <h1 className="text-center font-bold text-lg sm:text-4xl mb-3 sm:mb-5 text-purple-700">NAJIS MA'FU</h1>
          <div className="w-full sm:w-6/12 text-xs sm:text-base mx-auto">
              <ol className="list-none text-purple-700 text-base sm:text-xl text-justify">
                  <li className="mb-3">Selain tiga najis yang sudah disebutkan diatas, ada pula najis ma’fu (dimaafkan). Apabila terkena najis ma’fu, kita tidak perlu mensucikanya.</li>
                  <li className="">Contoh : bangkai binatang yang tidak mengeluarkan darah mengalir, keluar darah atau nanah dari kulit dengan jumlah yang sedikit, terkena asap dari pembakaran daging babi atau anjing.</li>
              </ol>
          </div>
      </section>
      <section className="w-full h-full text-white p-4 sm:p-10 bg-gradient-to-l from-purple-900 to-purple-600 shadow-md">
          <h1 className="text-purple-400 font-bold text-base sm:text-3xl text-center mb-3">RELASI NAJIS SUCI DENGAN HALAL HARAM</h1>
          <div className="w-full sm:w-6/12 mx-auto text-sm sm:text-base">
              <ol className="list-disc ms-3 sm:ms-6 text-purple-200 text-sm sm:text-xl text-justify">
                  <li className="ps-1">Sesuatu yang halal dikonsumsi bisa menjadi haram jika terkena najis (mutanajis), contoh : makanan atau minuman yang terkena kotoran hewan.</li>
                  <li className="ps-1">Sesuatu yang suci tidak otomatis halal dikonsumsi, contoh : narkoba, daun ganja, dll (suci tapi haram dikonsumsi)</li>
                  <li className="ps-1">Halal haram identik dengan konsumsi, suci najis identik dengan pemakaian, contoh : makanan halal / haram, pakaian suci / najis.</li>
              </ol>
          </div>
      </section>
      <section className="w-full h-full p-4 sm:p-10 shadow-md">
          <h1 className="text-center font-bold text-lg sm:text-4xl mb-3 sm:mb-5 text-purple-700">FATWA HUKUM FIKIH</h1>
          <div className="w-full sm:w-6/12 text-xs sm:text-base mx-auto">
              <ol className="list-none text-purple-700 text-base sm:text-xl text-justify">
                  <li className="mb-3 text-center">Ketetapan yang dikeluarkan oleh ulama, baik individu maupun kolektif.</li>
                  <li className="mb-3 text-center">Dimintakan oleh umat secara personal maupun komunal.</li>
                  <li className="mb-3 text-center">Penjelasan hukum fikih atas fenomena yang terjadi.</li>
              </ol>
          </div>
      </section>
      <section className="w-full h-full text-white p-4 sm:p-10 bg-gradient-to-r from-purple-900 to-purple-600 shadow-md">
          <h1 className="text-purple-400 font-bold text-base sm:text-3xl text-center mb-3">DALIL FATWA HUKUM FIKIH</h1>
          <div className="w-full sm:w-6/12 mx-auto text-sm sm:text-base">
              <ol className="list-none text-purple-200 text-sm sm:text-xl text-justify">
                  <li className="mb-3 text-center">Ayat Al-Qur’an sebagai rujukan utama.</li>
                  <li className="mb-3 text-center">Hadist Nabi SAW sebagai rujukan utama.</li>
                  <li className="mb-3 text-center">Ijma (Kesepakatan Ulama).</li>
                  <li className="mb-3 text-center">Qiyas (Proses Analog Hukum).</li>
                  <li className="mb-3 text-center">Beberapa dalil syar’i lainnya (Seperti Al Maslahah, AlMursalah, AlIstihsan, AlIstiqro, dll).</li>
              </ol>
          </div>
      </section>
      <section className="w-full h-full p-4 sm:p-10 shadow-md">
          <h1 className="text-center font-bold text-lg sm:text-4xl mb-3 sm:mb-5 text-purple-700">KOMISI FATWA MUI</h1>
          <div className="w-full sm:w-6/12 text-xs sm:text-base mx-auto">
              <ol className="list-none text-purple-700 text-base sm:text-xl text-justify">
                  <li className="mb-3">Komisi Fatwa (KF) berdiri bersamaan dengan berdirinya Majelis Ulama Indonesia (MUI) pada 17 Rajab 1395 Hijriah atau 26 Juli 1975.</li>
                  <li className="">Bersidang setiap minggu dan atau setiap ada permohonan mendesak dibidang keagamaan (sosbudpolkestek).</li>
              </ol>
          </div>
      </section>
      <section className="w-full h-full text-white p-4 sm:p-10 bg-gradient-to-l from-purple-900 to-purple-600 shadow-md">
          <h1 className="text-purple-400 font-bold text-xl sm:text-3xl text-center mb-3">FATWA<br />MAJELIS ULAMA INDONESIA</h1>
          <div className="w-full sm:w-6/12 mx-auto flex flex-col justify-center items-center gap-3">
              <div className="w-full text-center bg-purple-200 p-2 rounded-xl sm:rounded-r-full sm:rounded-l-full text-purple-700 text-sm sm:text-base">
                  <p>Nomor 11 Tahun 2009</p>
                  <h1 className="font-bold">Hukum Alkohol</h1>
              </div>
              <div className="w-full text-center bg-purple-200 p-2 rounded-xl sm:rounded-r-full sm:rounded-l-full text-purple-700 text-sm sm:text-base">
                  <p>Nomor 12 Tahun 2009</p>
                  <h1 className="font-bold">Standar Sertifikasi Penyembelihan Hewan</h1>
              </div>
              <div className="w-full text-center bg-purple-200 p-2 rounded-xl sm:rounded-r-full sm:rounded-l-full text-purple-700 text-sm sm:text-base">
                  <p>Nomor 01 Tahun 2010</p>
                  <h1 className="font-bold">Penggunaan Mikroba dan Produk Mikrobial dalam produk Pangan</h1>
              </div>
              <div className="w-full text-center bg-purple-200 p-2 rounded-xl sm:rounded-r-full sm:rounded-l-full text-purple-700 text-sm sm:text-base">
                  <p>Nomor 02 Tahun 2010</p>
                  <h1 className="font-bold">Air Daur Ulang</h1>
              </div>
              <div className="w-full text-center bg-purple-200 p-2 rounded-xl sm:rounded-r-full sm:rounded-l-full text-purple-700 text-sm sm:text-base">
                  <p>Nomor 07 Tahun 2010</p>
                  <h1 className="font-bold">Kopi Luwak</h1>
              </div>
              <div className="w-full text-center bg-purple-200 p-2 rounded-xl sm:rounded-r-full sm:rounded-l-full text-purple-700 text-sm sm:text-base">
                  <p>Nomor 10 Tahun 2011</p>
                  <h1 className="font-bold">Cara Pensucian Ekstrak Ragi <span className="italic">(Yeast Extract)</span> dari Sisa Pengolahan Bir <span className="italic">(Brewer Yeast)</span></h1>
              </div>
              <div className="w-full text-center bg-purple-200 p-2 rounded-xl sm:rounded-r-full sm:rounded-l-full text-purple-700 text-sm sm:text-base">
                  <p>Nomor 25 Tahun 2012</p>
                  <h1 className="font-bold">Hukum Mengonsumsi Bekicot</h1>
              </div>
          </div>
      </section>
    </>
  )
}

export default Bahan
