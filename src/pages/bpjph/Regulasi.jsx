const Regulasi = () => {
  return (
    <>
      <section className="w-full h-full text-white p-10 bg-gradient-to-r from-purple-900 to-purple-600 flex justify-center items-center gap-10 shadow-md">
        <div className="w-full h-full flex flex-col justify-between items-start">
            <div className="w-full flex justify-between items-center mb-5">
                <div className="flex flex-col justify-center items-start">
                    <h1 className="font-bold text-purple-400 text-5xl">Kewajiban</h1>
                    <h1 className="font-bold text-purple-400 text-5xl">Sertifikasi</h1>
                    <h1 className="font-bold text-purple-400 text-5xl">Halal</h1>
                </div>
                <span className="w-48 h-48 p-6 rounded-full border-4 border-double border-white flex justify-center items-center text-center text-xs text-white bg-purple-600 shadow-lg">Untuk Pelaku Usaha Mikro dan Kecil , kewajiban bersertifikat halal sebagaimana dimaksud dalam Pasal 4 didasarkan atas pernyataan pelaku usaha Mikro dan Kecil.</span>
            </div>
            <p className="font-medium text-purple-300">Produk yang masuk , beredar , dan diperdagangkan di wilayah Indonesia wajib bersertifikat halal</p>
            <span className="block text-xs text-light mb-5">Undang-undang Nomor 33 Tahun 2014 Pasal 4</span>
            <p className="font-medium text-purple-300">Mandatori :</p>
            <p className="">Per 17 Oktober 2024, semua produk makanan dan minuman yang beredar dan diperdagangkan di seluruh wilayah Indonesia wajib bersertifikat halal</p>
        </div>
        <div className="w-full rounded-3xl p-10 shadow-lg bg-white/80">
            <h1 className="font-bold text-purple-600 text-xl mb-3">PRODUK</h1>
            <div className="flex justify-between items-start gap-5 text-purple-950">
                <div className="w-full">
                    <h1 className="font-bold text-purple-600 text-lx">Barang</h1>
                    <ol className="list-disc ms-5">
                        <li>Makanan</li>
                        <li>Minuman</li>
                        <li>Obat</li>
                        <li>Kosmetik</li>
                        <li>Produk kimiawi</li>
                        <li>Produk rekayasa genetika</li>
                        <li>Barang gunaan yang dipakai, digunakan, dan dimanfaatkan</li>
                    </ol>
                </div>
                <div className="w-full">
                    <h1 className="font-bold text-purple-600 text-lx">Jasa</h1>
                    <ol className="list-disc ms-5">
                        <li>Penyembelihan</li>
                        <li>Pengolahan</li>
                        <li>Penyimpanan</li>
                        <li>Pengemasan</li>
                        <li>Pendistribusian</li>
                        <li>Penjualan</li>
                        <li>Penyajian</li>
                    </ol>
                </div>
            </div>
        </div>
      </section>
      <section className="w-full h-full p-10 shadow-md">
          <h1 className="text-center font-bold text-5xl mb-10 text-purple-700">Penahapan Kewajiban Bersertifikat Halal</h1>
          <table className="w-10/12 mx-auto text-purple-900">
              <thead>
                  <tr>
                      <th className="border border-gray-300 bg-purple-700 text-white px-3 py-1 text-start" width="15%">KATEGORI</th>
                      <th className="border border-gray-300 bg-purple-700 text-white px-3 py-1 text-start">KETERANGAN</th>
                      <th className="border border-gray-300 bg-purple-700 text-white px-3 py-1" width="30%">TANGGAL</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="border border-gray-300 px-3 py-2" rowSpan="3">Obat</td>
                      <td className="border border-gray-300 px-3 py-2">Obat tradisional , obat kuasi , suplemen kesehatan</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">17 Oktober 2021 s/d 17 Oktober 2026</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 px-3 py-2">Obat bebas dan obat bebas terbatas</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">17 Oktober 2021 s/d 17 Oktober 2029</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 px-3 py-2">Obat keras dikecualikan psikotropika</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">17 Oktober 2021 s/d 17 Oktober 2034</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 px-3 py-2" colSpan="2">Kosmetik</td>
                      <td className="border border-gray-300 px-3 py-2 text-center" rowSpan="4">17 Oktober 2021 s/d 17 Oktober 2026</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 px-3 py-2" colSpan="2">Produk Kimiawi</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 px-3 py-2" colSpan="2">Produk Biologi</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 px-3 py-2" colSpan="2">Produk Rekayasa Genetika</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 px-3 py-2" rowSpan="5">Barang Gunaan</td>
                      <td className="border border-gray-300 px-3 py-2">Barang gunaan yang dipakai kategori sandang,penutup kepala , aksesoris</td>
                      <td className="border border-gray-300 px-3 py-2 text-center" rowSpan="3">17 Oktober 2021 s/d 17 Oktober 2026</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 px-3 py-2">Barang gunaan yang digunakan kategori perbekalan Kesehatan rumah tangga , peralatan rumah tangga , perlengkapan peribadatan bagi umat Islam, alat tulis , perlengkapan kantor</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 px-3 py-2">Barang gunaan yang dimanfaatkan kategori alat Kesehatan risiko kelas A</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 px-3 py-2">Barang gunaan yang dimanfaatkan kategori alat Kesehatan risiko kelas B</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">17 Oktober 2021 s/d 17 Oktober 2029</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 px-3 py-2">Barang gunaan yang dimanfaatkan kategori alat Kesehatan risiko kelas C</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">17 Oktober 2021 s/d 17 Oktober 2034</td>
                  </tr>
                  <tr>
                      <td className="px-1 text-end text-xs italic text-gray-400" colSpan="3">* Peraturan Pemerintah Nomor 39 Tahun 2021 Pasal 141</td>
                  </tr>
              </tbody>
          </table>
      </section>
      <section className="w-full h-full text-white p-10 bg-gradient-to-l from-purple-900 to-purple-600 shadow-md">
          <h1 className="text-center font-bold text-5xl mb-10 text-purple-300">Regulasi Jaminan Produk Halal</h1>
          <div className="w-10/12 mx-auto flex flex-col justify-center items-center gap-5">
              <span className="block w-full p-5 text-center text-xl rounded-3xl bg-white/30 shadow-md">Pemerintah menyusun kebijakan terkait jaminan produk halal sebagai upaya mendorong pengembangan industri halal untuk pasar domestik dan meningkatkan ekspor produk halal Indonesia dalam pasar global</span>
              <span className="block w-full p-5 text-center text-xl rounded-3xl bg-white/30 shadow-md">BPJPH dalam mendukung pelaksanaan jaminan produk halal bagi produk UMK, mendorong penyesuaian regulasi JPH yang mengatur kemudahan sertifikasi halal bagi usaha mikro dan kecil. Kemudahan sertifikasi halal bagi pelaku usaha mikro dan kecil yang memenuhi standar halal yang ditetapkan oleh BPJPH</span>
          </div>
      </section>
      <section className="w-full h-full flex justify-center items-start gap-10 p-10 shadow-md">
          <div className="w-5/12">
              <span className="w-44 h-44 mx-auto p-6 rounded-full flex justify-center items-center text-center bg-purple-500 shadow-md mb-10 text-white">UU No. 33 Tahun 2014 tentang Jaminan Produk Halal</span>
              <div className="w-full flex flex-col justify-center items-center gap-5 text-purple-900">
                  <span className="text-center">Kemudahan Pelaku Usaha Mikro dan Kecil dalam pemenuhan kewajiban bersertifikat halal melalui pernyataan pelaku usaha mikro dan kecil</span>
                  <span className="text-center">Penghapusan kewenangan MUI pelaksanaan sertifikasi Auditor Halal dan akreditasi LPH</span>
                  <span className="text-center">Pemberian kemudahan Penyelia Halal bagi pelaku usaha Mikro dan Kecil</span>
              </div>
          </div>
          <div className="w-5/12">
              <span className="w-44 h-44 mx-auto p-6 rounded-full flex justify-center items-center text-center text-purple-900 bg-purple-300 shadow-md mb-10">UU No. 11 Tahun 2020 tentang Cipta Kerja</span>
              <div className="w-full flex flex-col justify-center items-center gap-5 text-purple-900">
                  <span className="text-center">Pengaturan kepastian waktu dalam layanan sertifikasi halal di BPJPH, LPH, dan MUI</span>
                  <span className="text-center">Pemberian kemudahan bagi pelaku usaha dalam perpanjangan sertifikat halal</span>
                  <span className="text-center">Pemberian kemudahan pembiayaan sertifikasi halal bagi Pelaku Usaha Mikro dan Kecil</span>
                  <span className="text-center">Perluasan peran serta masyarakat dalam penyelenggaraan jaminan produk halal</span>
              </div>
          </div>
      </section>
      <section className="w-full h-full text-white p-10 bg-gradient-to-r from-purple-900 to-purple-600 shadow-md">
          <div className="flex justify-center items-center mb-10">
              <span className="w-44 h-44 p-6 rounded-full flex justify-center items-center text-center bg-purple-300 shadow-md text-purple-900">UU No. 11 Tahun 2020 tentang Cipta Kerja</span>
              <span className="w-44 h-44 text-center text-9xl font-black text-white">=</span>
              <span className="w-44 h-44 p-6 rounded-full flex justify-center items-center text-center bg-purple-500 shadow-md text-white">Perpu 2 Tahun 2022 tentang Cipta Kerja</span>
          </div>
          <div className="w-10/12 mx-auto flex flex-col justify-center items-center gap-5">
              <div className="w-full p-5 rounded-3xl bg-white/30 shadow-md">
                  <h1 className="text-purple-200 font-bold text-xl text-center mb-5">SERTIFIKAT HALAL REGULER</h1>
                  <ol className="list-decimal ms-5">
                      <li>Penetapan kehalalan Produk dilakukan oleh MUI, MUI Provinsi, MUI Kabupaten /Kota, atau Majelis Permusyawaratan.</li>
                      <li>Dalam hal batas waktu p enetapan kehalalan Produk dilakukan oleh MUI, MUI Provinsi, MUI Kabupaten /Kota, atau Majelis Permusyawaratan Ulama Aceh terlampaui, penetapan kehalalan Produk dilakukan oleh Komite Fatwa Produk Halal , berdasarkan ketentuan Fatwa Halal.</li>
                      <li>Penetapan kehalalan Produk oleh Komite Fatwa Produk Halal dilakukan paling lama 2 (dua) hari kerja.</li>
                  </ol>
              </div>
              <div className="w-full p-5 rounded-3xl bg-white/30 shadow-md">
                  <h1 className="text-purple-200 font-bold text-xl text-center mb-5">SERTIFIKAT HALAL DENGAN PERNYATAAN HALAL</h1>
                  <ol className="list-decimal ms-5">
                      <li>Dalam permohonan sertifikasi halal dilakukan oleh Pelaku Usaha mikro dan kecil melalui pernyataan halal, penetapan kehalalan Produk dilakukan oleh Komite Fatwa Produk Halal berdasarkan ketentuan Fatwa Halal.</li>
                      <li>Penetapan kehalalan Produk oleh Komite Fatwa Produk Halal dilakukan paling lama I (satu) hari kerja sejak diterimanya hasil pendampingan PPH.</li>
                  </ol>
              </div>
              <div className="w-full p-5 rounded-3xl bg-white/30 shadow-md">
                  <h1 className="text-purple-200 font-bold text-xl text-center mb-5">KOMITE FATWA PRODUK HALAL</h1>
                  <ol className="list-decimal ms-5">
                      <li>Komite Fatwa Produk Halal dibentuk dan bertanggung jawab kepada Menteri.</li>
                      <li>Komite Fatwa Produk Halal terdiri atas unsur :</li>
                      <ol className="list-disc ms-5">
                          <li>Ulama ; dan</li>
                          <li>Akademisi</li>
                      </ol>
                  </ol>
              </div>
              <div className="w-full p-5 rounded-3xl bg-white/30 shadow-md">
                  <h1 className="text-purple-200 font-bold text-xl text-center mb-5">MASA BERLAKU DAN PERPANJANGAN SERTIFIKAT HALAL</h1>
                  <ol className="list-decimal ms-5">
                      <li>Sertifikat halal terus belaku sepanjang tidak ada perubahan komposisi bahan tanpa proses perpanjangan.</li>
                      <li>Dalam hal pemeriksaan terdapat perubahan komposisi bahan wajib dilakukan pembaharuan sertifikat halal.</li>
                  </ol>
              </div>
              <div className="w-full p-5 rounded-3xl bg-white/30 shadow-md">
                  <h1 className="text-purple-200 font-bold text-xl text-center mb-5">LAYANAN PENYELENGGARAAN JPH BERBASIS SISTEM ELEKTRONIK</h1>
                  <ol className="list-decimal ms-5">
                      <li>Layanan penyelenggaraan JPH wajib menggunakan sistem elektronik terintegrasi.</li>
                      <li>Sistem elektronik terintegrasi menghubungkan proses layanan sertifikasi halal yang dilakukan oleh :</li>
                      <ol className="list-disc ms-5">
                          <li>BPJPH;</li>
                          <li>LPH;</li>
                          <li>MUI, MUI Provinsi MUI Kabupaten Kota, dan Majelis Permusyawaratan Ulama Aceh;</li>
                          <li>Komite Fatwa Produk Halal; dan</li>
                          <li>Pendamping PPH.</li>
                      </ol>
                      <li>Sistem elektronik terintegrasi dikelola oleh BPJPH.</li>
                  </ol>
              </div>
          </div>
      </section>
      <section className="w-full h-full p-10 shadow-md">
          <h1 className="text-center text-purple-900 font-bold text-4xl mb-10">STAKEHOLDER UTAMA DALAM SERTIFIKASI HALAL DI INDONESIA</h1>
          <div className="flex justify-center items-center gap-10">
              <div className="w-2/12 text-xs flex flex-col justify-center items-center gap-5">
                  <div className="w-full rounded-xl p-2 shadow-md bg-purple-200">
                      <div className="flex flex-col justify-center items-center gap-1 mb-2 text-center">
                          <i className="bi-cash-coin text-purple-900 text-6xl"></i>
                          <h1 className="text-purple-900 font-bold text-sm">TARIF LAYANAN<br />JAMINAN PRODUK HALAL</h1>
                      </div>
                      <div className="flex flex-col justify-center items-center text-center gap-2 text-purple-800">
                          <span className="block">PMK No. 129 Tahun 2020</span>
                          <span className="block">PMK No. 57 Tahun 2019</span>
                          <span className="block">KEPKA BPJPH No. 141 Tahun 2021</span>
                      </div>
                  </div>
                  <div className="w-full rounded-xl p-2 shadow-md bg-purple-100 text-purple-800">
                      <p>Kementerian dan / atau lembaga terkait antara lain kementerian dan / atau lembaga yang menyelenggarakan urusan pemerintahan di bidang :</p>
                      <ol className="list-decimal ms-3">
                          <li className="ps-1">Perindustrian;</li>
                          <li className="ps-1">Kesehatan;</li>
                          <li className="ps-1">Pertanian;</li>
                          <li className="ps-1">Standardisasi dan akreditasi;</li>
                          <li className="ps-1">Koperasi dan usaha mikro, kecil dan menengah; serta,</li>
                          <li className="ps-1">Pengawasan obat dan makanan.</li>
                      </ol>
                  </div>
              </div>
              <div className="w-6/12">
                  <div className="flex justify-center items-center gap-10 w-full mb-5">
                      <div className="flex justify-center items-center gap-1">
                          <img src="/Logo MUI.png" alt="MUI" className="w-12" />
                          <h1 className="font-black text-4xl">MUI</h1>
                      </div>
                      <div className="flex justify-center items-center gap-1">
                          <img src="/Logo BPJPH.png" alt="BPJPH" className="w-12" />
                          <h1 className="font-black text-4xl">BPJPH</h1>
                      </div>
                  </div>
                  <div className="flex flex-col justify-center items-center w-full gap-5">
                      <div className="flex justify-center items-start w-full">
                          <div className="w-1/2 border-r-4 border-gray-400 flex flex-col justify-center items-end p-3 gap-10">
                              <div className="w-fit rounded-l-full rounded-r-full border border-purple-500 text-center px-3 py-1">
                                  <h1 className="underline text-purple-800 font-bold">REGULER</h1>
                                  <p className="text-sm text-purple-600">Berbayar</p>
                              </div>
                              <div className="flex justify-center items-center text-purple-800 gap-3">
                                  <h1 className="text-end">LEMBAGA PEMERIKSA<br />HALAL</h1>
                                  <i className="bi-buildings text-5xl"></i>
                              </div>
                              <div className="flex justify-center items-center text-purple-800 gap-3">
                                  <h1 className="text-end">AUDITOR<br />HALAL</h1>
                                  <i className="bi-person-check text-5xl"></i>
                              </div>
                          </div>
                          <div className="w-1/2 flex flex-col justify-center items-start p-3 gap-10">
                              <div className="w-fit rounded-l-full rounded-r-full border border-purple-500 text-center px-3 py-1">
                                  <h1 className="underline text-purple-800 font-bold">SELF DECLARE</h1>
                                  <p className="text-sm text-purple-600">Dibayar</p>
                              </div>
                              <div className="flex justify-center items-center text-purple-800 gap-3">
                                  <i className="bi-building text-5xl"></i>
                                  <h1 className="w-full">LEMBAGAPENDAMPING<br />PPH</h1>
                              </div>
                              <div className="flex justify-center items-center text-purple-800 gap-3">
                                  <i className="bi-person-check-fill text-5xl"></i>
                                  <h1 className="">PENDAMPING<br />PPH</h1>
                              </div>
                          </div>
                      </div>
                      <div className="w-full flex justify-center items-center text-purple-800 gap-3">
                          <i className="bi-person-video3 text-5xl"></i>
                          <h1 className="">PENYELIA<br />HALAL</h1>
                      </div>
                      <div className="w-full flex justify-center items-center text-purple-800 gap-3">
                          <h1 className="">PELAKU<br />USAHA</h1>
                          <i className="bi-person-arms-up text-5xl"></i>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="w-full h-full text-white p-10 bg-gradient-to-l from-purple-900 to-purple-600 shadow-md">
          <h1 className="text-center text-purple-300 font-bold text-4xl mb-5">ALUR SERTIFIKASI HALAL MELALUI <span className="italic">"SELF DECLARE"</span></h1>
          <div className="w-6/12 mx-auto p-5 bg-purple-100/50 rounded-3xl shadow-md">
              <img src="/Alur Sertifikasi Halal Self Declare.png" className="img-fluid" alt="Alur Sertifikasi Halal Self Declare" />
          </div>
      </section>
      <section className="w-full h-full text-white p-10 shadow-md">
          <h1 className="text-center text-purple-900 font-bold text-4xl mb-10">KETENTUAN SERTIFIKASI BAGI UMK</h1>
          <div className="w-7/12 mx-auto flex flex-col justify-center items-center gap-5 text-purple-800">
              <span className="block w-full p-5 text-center text-xl rounded-3xl bg-purple-200 shadow-md">Produk yang dihasilkan oleh Pelaku Usaha mikro dan kecil wajib bersertifikat halal</span>
              <span className="block w-full p-5 text-center text-xl rounded-3xl bg-purple-200 shadow-md">Kewajiban bersertifikat halal didasarkan atas Pernyataan Pelaku Usaha mikro dan kecil</span>
              <span className="block w-full p-5 text-center text-xl rounded-3xl bg-purple-200 shadow-md">Pernyataan Pelaku Usaha mikro dan kecil dilakukan berdasarkan standar halal yang ditetapkan oleh BPJPH</span>
              <span className="block w-full p-5 text-xl rounded-3xl bg-purple-200 shadow-md">
                  <p>Standar halal paling sedikit terdiri atas :</p>
                  <ol className="list-decimal ms-5">
                      <li>adanya Pernyataan Pelaku Usaha yang berupa akad ikrar yang berisi :</li>
                      <ol className="list-disc ms-5">
                          <li>kehalalan Produk dan Bahan yang digunakan; dan,</li>
                          <li>PPH.</li>
                      </ol>
                      <li>adanya Pendampingan PPH.</li>
                  </ol>
              </span>
          </div>
      </section>
      <section className="w-full h-full text-white p-10 bg-gradient-to-r from-purple-900 to-purple-600 shadow-md">
          <div className="flex justify-center items-start gap-10">
              <div className="w-1/3 bg-purple-500 rounded-xl p-5 shadow-md">
                  <h1 className="text-center text-xl font-bold underline mb-2 text-purple-200">Pendampingan PPH</h1>
                  <p className="text-center text-sm">Pendampingan PPH dilakukan oleh organisasi kemasyarakatan Islam atau lembaga keagamaan Islam yang berbadan hukum dan / atau perguruan tinggi.</p>
              </div>
              <div className="w-1/3 bg-purple-500 rounded-xl p-5 shadow-md">
                  <h1 className="text-center text-xl font-bold underline mb-2 text-purple-200">Pendamping PPH</h1>
                  <ol className="list-decimal ms-5 text-sm">
                      <li className="ps-1">Dalam melakukan Pendampingan PPH, organisasi kemasyarakatan Islam atau lembaga keagamaan Islam yang berbadan hukum dan / atau perguruan tinggi menunjuk pendamping PPH.</li>
                      <li className="ps-1">Pendamping PPH harus memenuhi persyaratan :</li>
                      <ol className="list-disc ms-5">
                          <li>Warga Negara Indonesia;</li>
                          <li>Beragama Islam;</li>
                          <li>Memiliki wawasan luas dan memahami syariat mengenai kehalalan Produk; dan,</li>
                          <li>Memiliki sertifikat pelatihan pendamping PPH.</li>
                      </ol>
                  </ol>
              </div>
              <div className="w-1/3 bg-purple-500 rounded-xl p-5 shadow-md">
                  <h1 className="text-center text-xl font-bold underline mb-2 text-purple-200">Pelatihan Pendamping PPH</h1>
                  <ol className="list-decimal ms-5 text-sm">
                      <li className="ps-1">Pelatihan pendamping PPH dilaksanakan oleh :</li>
                      <ol className="list-disc ms-5">
                          <li>BPJPH;</li>
                          <li>organisasi kemasyarakatan Islam atau lembaga keagamaan Islam yang berbadan hukum dan atau perguruan tinggi; atau,</li>
                          <li>instansi pemerintah atau badan usaha.</li>
                      </ol>
                      <li className="ps-1">Dilaksanakan sesuai dengan standar kurikulum materi dan tenaga pengajar yang ditetapkan oleh Kepala Badan.</li>
                      <li className="ps-1">Sertifikat tanda lulus pelatihan pendamping PPH diterbitkan oleh lembaga yang menyelenggarakan sejak dinyatakan lulus pelatihan pendamping PPH.</li>
                  </ol>
              </div>
          </div>
      </section>
      <section className="w-full h-full p-10 text-purple-900 shadow-md">
          <h1 className="text-center text-purple-800 font-bold text-5xl">DASAR HUKUM</h1>
          <p className="text-center mb-5 text-sm italic">Amanat UU No. 33 Tahun 2014 Perpu No. 2 Tahun 2022</p>
          <div className="w-full flex justify-center items-center mb-10">
              <span className="w-44 h-44 p-6 rounded-full text-white flex justify-center items-center text-center bg-purple-500 shadow-md">UU No. 33 Tahun 2014 tentang Jaminan Produk Halal</span>
              <span className="w-44 h-44 flex justify-center items-center text-center text-8xl font-black bi-plus-lg"></span>
              <span className="w-44 h-44 p-6 rounded-full text-white flex justify-center items-center text-center bg-purple-400 shadow-md">Perpu No. 2 Tahun 2022 tentang Cipta Kerja</span>
              <span className="w-44 h-44 text-center text-9xl font-bold">=</span>
              <span className="w-44 h-44 p-5 text-purple-950 rounded-full flex justify-center items-center text-center bg-purple-300 shadow-md text-xs">Peraturan Pemerintah, Peraturan Menteri Agama, Keputusan Menteri Agama, Peraturan Badan, Keputusan kepala Badan</span>
          </div>
          <div className="flex justify-center items-start gap-10 mb-10">
              <ol className="w-fit list-decimal mx-auto">
                  <li>PP Nomor 39 Tahun 2021</li>
                  <li>Perpres 6 Tahun 2023</li>
                  <li>PMK Nomor 57 / PMK Nomor 05 Tahun 2019</li>
                  <li>PMA Nomor 20 Tahun 2021</li>
                  <li>PMA Nomor 8 Tahun 2021</li>
                  <li>PMA Nomor 12 Tahun 2021</li>
                  <li>PMA Nomor 2 Tahun 2022</li>
                  <li>PMA Nomor 13 Tahun 2022</li>
                  <li>KMK Nomor 3 / KMK Nomor 05 Tahun 2019</li>
                  <li>KMA Nomor 1103 Tahun 2019</li>
                  <li>KMA Nomor 748 Tahun 2021</li>
                  <li>KMA Nomor 1360 Tahun 2021</li>
              </ol>
              <ol className="w-fit list-decimal mx-auto">
                  <li>Keputusan Kepala BPJPH Nomor 57 Tahun 2021</li>
                  <li>Peraturan BPJPH Nomor 1 Tahun 2021</li>
                  <li>Keputusan Kepala BPJPH Nomor 135 Tahun 2021</li>
                  <li>Keputusan Kepala BPJPH Nomor 141 Tahun 2021</li>
                  <li>Keputusan Kepala BPJPH Nomor 33 Tahun 2022</li>
                  <li>Keputusan Kepala BPJPH Nomor 40 Tahun 2022</li>
                  <li>Keputusan Kepala BPJPH Nomor 57 Tahun 2022</li>
                  <li>Keputusan Kepala BPJPH Nomor 58 Tahun 2022</li>
                  <li>Keputusan Kepala BPJPH Nomor 61 Tahun 2022</li>
                  <li>Keputusan Kepala BPJPH Nomor 88 Tahun 2022</li>
              </ol>
          </div>
          <div className="w-full flex justify-center items-start gap-10">
              <div className="w-5/12 mx-auto text-center">
                  <div className="my-3">
                      <h1 className="font-bold text-purple-800">PP NOMOR 39 TAHUN 2021</h1>
                      <p className="text-sm">(Penyelenggaraan Bidang Jaminan Produk Halal)</p>
                  </div>
                  <div className="my-3">
                      <h1 className="font-bold text-purple-800">PMA NOMOR 20 TAHUN 2021</h1>
                      <p className="text-sm">(Sertifikasi Halal bagi Pelaku UMK)</p>
                  </div>
                  <div className="my-3">
                      <h1 className="font-bold text-purple-800">KMA NOMOR 748 TAHUN 2021</h1>
                      <p className="text-sm">(Jenis Produk yang Wajib Bersertifikat Halal)</p>
                  </div>
                  <div className="my-3">
                      <h1 className="font-bold text-purple-800">KMA NOMOR 1360 TAHUN 2021</h1>
                      <p className="text-sm">(Bahan yang Dikecualikan dari Kewajiban Bersertifikat Halal)</p>
                  </div>
              </div>
              <div className="w-5/12 mx-auto text-center">
                  <div className="my-3">
                      <h1 className="font-bold text-purple-800">Peraturan BPJPH NOMOR 1 TAHUN 2021</h1>
                      <p className="text-sm">(Tata Cara Pembayaran Tarif Layanan Badan Layanan Umum Badan Penyelenggara Jaminan Produk Halal)</p>
                  </div>
                  <div className="my-3">
                      <h1 className="font-bold text-purple-800">Keputusan Kepala BPJPH NOMOR 57 TAHUN 2021</h1>
                      <p className="text-sm">(Kriteria SJPH)</p>
                  </div>
                  <div className="my-3">
                      <h1 className="font-bold text-purple-800">Keputusan Kepala BPJPH NOMOR 141 TAHUN 2021</h1>
                      <p className="text-sm">(Penetapan Tarif Layanan Badan Layanan Umum Badan Penyelenggara Jaminan Produk Halal)</p>
                  </div>
                  <div className="my-3">
                      <h1 className="font-bold text-purple-800">Keputusan Kepala BPJPH NOMOR 57 TAHUN 2022</h1>
                      <p className="text-sm">(Manual SJPH untuk sertifikasi halal dengan pernyataan pelaku usaha)</p>
                  </div>
              </div>
          </div>
      </section>
      <section className="w-full h-full text-white p-10 bg-gradient-to-l from-purple-900 to-purple-600 shadow-md">
          <h1 className="text-center text-purple-300 font-bold text-4xl mb-5">DASAR HUKUM</h1>
          <div className="w-8/12 mx-auto flex flex-col justify-center items-center gap-5">
              <div className="w-full bg-purple-300 rounded-xl shadow-md overflow-hidden">
                  <h1 className="text-purple-800 font-black text-xl p-5 shadow text-center">PERPU No. 2 Tahun 2023 tentang Cipta Kerja</h1>
                  <div className="p-5 text-purple-700">
                      <h6 className="font-bold text-lg">Pasal 48 angka 20</h6>
                      <ol className="list-decimal ms-5">
                          <li className="ps-1">Untuk Pelaku Usaha Mikro dan Kecil, kewajiban bersertifikat halal didasarkan atas pernyataan halal pelaku usaha Mikro dan Kecil.</li>
                          <li className="ps-1">Dalam hal permohonan Sertifikasi Halal diajukan oleh Pelaku Usaha Mikro dan Kecil, tidak dikenai biaya.</li>
                      </ol>
                  </div>
              </div>
              <div className="w-full bg-purple-300 rounded-xl shadow-md overflow-hidden">
                  <h1 className="text-purple-800 font-black text-xl p-5 shadow text-center">PP No. 39 Tahun 2021</h1>
                  <div className="p-5 text-purple-700">
                    <h6 className="font-bold text-lg">Pasal 79</h6>
                    <ol className="list-decimal ms-5">
                        <li className="ps-1">Kewajiban bersertifikat halal bagi Pelaku Usaha mikro dan kecil didasarkan atas pernyataan Pelaku Usaha.</li>
                        <li className="ps-1">Kriteria :</li>
                        <ol className="list-disc ms-5">
                            <li>Produk tidak berisiko atau menggunakan Bahan yang sudah dipastikan kehalalannya; dan,</li>
                            <li>proses produksi yang dipastikan kehalalannya dan sederhana.</li>
                        </ol>
                    </ol>
                    <h6 className="font-bold text-lg mt-3">Pasal 81</h6>
                    <p>Dalam hal permohonan Sertifikat Halal diajukan oleh Pelaku Usaha mikro dan kecil tidak dikenai biaya dengan mempertimbangkan kemampuan keuangan negara</p>
                    <h6 className="font-bold text-lg mt-3">Pasal 86</h6>
                    <p>Pembiayaan dapat dilakukan juga dengan :</p>
                    <ol className="list-disc ms-5">
                        <li className="ps-1">anggaran pendapatan dan belanja daerah;</li>
                        <li className="ps-1">pembiayaan alternatif untuk usaha mikro dan kecil;</li>
                        <li className="ps-1">pembiayaan dari dana kemitraan;</li>
                        <li className="ps-1">bantuan hibah pemerintah atau lembaga lain;</li>
                        <li className="ps-1">dana bergulir ; atau,</li>
                        <li className="ps-1">sumber lain yang sah dan tidak mengikat.</li>
                    </ol>
                </div>
            </div>
            <div className="w-full bg-purple-300 rounded-xl shadow-md overflow-hidden">
                <h1 className="text-purple-800 font-black text-xl p-5 shadow text-center">PMA No. 20 Tahun 2021</h1>
                <div className="p-5 text-purple-700">
                    <h6 className="font-bold text-lg">Pasal 1</h6>
                    <p>Kegiatan sertifikasi halal oleh Pelaku Usaha mikro dan kecil dalam memenuhi persyaratan pernyataan kehalalan Produk dilakukan melalui pendampingan PPH.</p>
                    <h6 className="font-bold text-lg mt-3">Pasal 5</h6>
                    <p>Pendampingan PPH dilakukan oleh organisasi kemasyarakatan Islam atau lembaga keagamaan Islam yang berbadan hukum dan atau perguruan tinggi.</p>
                </div>
            </div>
            <div className="w-full bg-purple-300 rounded-xl shadow-md overflow-hidden">
                <h1 className="text-purple-800 font-black text-xl p-5 shadow text-center">PP No. 39 Tahun 2021</h1>
                <div className="p-5 text-purple-700">
                    <h6 className="font-bold text-lg">Pasal 80</h6>
                    <p>Pendampingan PPH dilakukan oleh organisasi kemasyarakatan Islam atau lembaga keagamaan Islam yang berbadan hukum dan atau perguruan tinggi.</p>
                </div>
            </div>
            <div className="w-full bg-purple-300 rounded-xl shadow-md overflow-hidden">
                <h1 className="text-purple-800 font-black text-xl p-5 shadow text-center">Peraturan BPJPH No. 1 Tahun 2022</h1>
                <div className="p-5 text-purple-700">
                    <h6 className="font-bold text-lg">Penetapan Tarif fasilitasi Sertifikasi Halal dengan Pernyataan Pelaku Usaha</h6>
                    <p>Tarif Sertifikasi Halal dengan Pernyataan Pelaku Usaha ditetapkan sebesar <span className="font-bold">Rp. 230.000</span> dengan komponen :</p>
                    <ol className="list-disc ms-5">
                        <li className="ps-1">Rp. 25.000 untuk pendaftaran;</li>
                        <li className="ps-1">Rp. 25.000 untuk pendampingan PPH;</li>
                        <li className="ps-1">Rp. 150.000 untuk insentif Pendamping PPH; dan,</li>
                        <li className="ps-1">Rp. 30.000 untuk penetapan kehalalan Produk oleh MUI.</li>
                    </ol>
                </div>
            </div>
            <div className="w-full bg-purple-300 rounded-xl shadow-md overflow-hidden">
                <h1 className="text-purple-800 font-black text-xl p-5 shadow text-center">KEPKA BPJPH No. 57 Tahun 2022</h1>
                <div className="p-5 text-purple-700">
                    <p className="text-center">MANUAL SISTEM JAMINAN PRODUK HALAL (SJPH) UNTUK SERTIFIKASI HALAL DENGAN PERNYATAAN PELAKU USAHA</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Regulasi
