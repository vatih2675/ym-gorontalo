import React from 'react'
import BannerInner from '../components/BannerInner'

const Informasi = () => {
  return (
    <>
      <section class="p-24 text-gray-700">
        <h1 class="font-bold text-2xl text-center text-purple-800 mb-3">DOKUMEN PELAKU USAHA</h1>
        <div class="w-9/12 mx-auto">
          <table class="w-full">
            <thead>
              <tr>
                <th class="border border-gray-300 bg-purple-800 text-white" width="45%">DOKUMEN</th>
                <th class="border border-gray-300 bg-purple-800 text-white">KETERANGAN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 p-2">Surat Permohonan Sertifikat Halal</td>
                <td class="border border-gray-300 p-2">Tersedia di SiHalal (terbentuk otomatis oleh sistem)</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">NIB (wajib / dibuat dulu jika tidak ada) <span class="text-red-500">*</span></td>
                <td class="border border-gray-300 p-2">Diisi di SiHalal (akan diintegrasi dengan OSS BKPM)</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">
                  <p class="font-bold">Penyelia Halal</p>
                  <p>- Penetapan</p>
                  <p>- KTP <span class="text-red-500">*</span></p>
                  <p>- DRH</p>
                </td>
                <td class="border border-gray-300 p-2">
                  <p>&nbsp;</p>
                  <p>Tersedia di SiHalal (terbentuk otomatis oleh sistem)</p>
                  <p>Diunggah di SiHalal</p>
                  <p>Diisi di Sihalal</p>
                </td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Nama Produk <span class="text-red-500">*</span></td>
                <td class="border border-gray-300 p-2">Diisi di SiHalal (dengan foto produk)</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Daftar Bahan Produk <span class="text-red-500">*</span></td>
                <td class="border border-gray-300 p-2">Diisi di SiHalal</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Proses Produk Halal <span class="text-red-500">*</span></td>
                <td class="border border-gray-300 p-2">Diisi di SiHalal (deskripsi proses pembuatan produk halal)</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Izin Edar / SLHS (jika ada)</td>
                <td class="border border-gray-300 p-2">Diunggah di SiHalal</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">SJPH</td>
                <td class="border border-gray-300 p-2">Tersedia di SiHalal (terbentuk otomatis oleh sistem)</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Akad / Ikrar Pernyataan Kehalalan Produk (digunakan dalam proses produk halal)</td>
                <td class="border border-gray-300 p-2">Tersedia di SiHalal (terbentuk otomatis oleh sistem)</td>
              </tr>
            </tbody>
          </table>
          <span class="italic text-xs"><span class="text-red-500">*</span> Disediakan dari Pelaku Usaha (PU)</span>
        </div>
      </section>
      <section class="p-24 text-purple-300 bg-gradient-to-r from-purple-900 to-purple-600 shadow-md">
        <h1 class="font-bold text-2xl text-center text-white mb-3">BIAYA PENGAJUAN</h1>
        <p class="text-center mx-auto w-6/12">Biaya pengajuan sertifikasi halal secara <span class="italic">"Self Declare"</span> oleh Pelaku Usaha (PU) di Provinsi Gorontalo berbeda-beda tiap wilayah Kabupaten/Kota</p>
        <div class="w-7/12 mx-auto">
          <div class="flex justify-center items-center gap-3 my-10">
            <span class="text-sm">Mulai dari</span>
            <span class="font-bold text-3xl px-3 py-1 bg-white rounded-r-full rounded-l-full text-purple-600">Rp. 305.000</span>
            <span class="text-sm">sampai dengan</span>
            <span class="font-bold text-3xl px-3 py-1 bg-white rounded-r-full rounded-l-full text-purple-600">Rp. 505.000</span>
          </div>
          <span class="italic text-xs text-center block">Tarif dihitung tiap pengajuan.</span>
          <span class="italic text-xs text-center block">Satu pengajuan maksimal 10 produk.</span>
          <span class="italic text-xs text-center block">Tarif sudah termasuk administrasi dan biaya lainnya.</span>
        </div>
      </section>
      <BannerInner />
    </>
  )
}

export default Informasi
