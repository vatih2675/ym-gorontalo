import Regulasi from "../pages/bpjph/Regulasi"
import P3h from "../pages/bpjph/P3h"
import Syariat from "../pages/bpjph/Syariat"
import Bahan from "../pages/bpjph/Bahan"
import Pph from "../pages/bpjph/Pph"
import Verifikasi from "../pages/bpjph/Verifikasi"
import Digitalisasi from "../pages/bpjph/Digitalisasi"

export const dataMenu = [
    {
        to: '/',
        title: 'Beranda',
        icon: 'bi-house',
    },
    {
        to: 'informasi',
        title: 'Informasi',
        icon: 'bi-info-circle',
    },
    {
        to: 'bpjph',
        title: 'BPJPH',
        icon: 'bi-buildings',
    },
    {
        to: 'profil',
        title: 'Profil',
        icon: 'bi-person',
    },
    {
        to: 'formulir',
        title: 'Formulir',
        icon: 'bi-file-earmark-break',
    },
]

export const dataBpjph = [
    {
        title: "Kebijakan dan Regulasi Jaminan Produk Halal",
        link: "regulasi",
        page: <Regulasi />,
        youtube: "https://www.youtube.com/embed/8gsHrsDcYag?si=ndNA9GiwKVVbeH6u",
    },
    {
        title: "Pendampingan dan Pendamping PPH",
        link: "p3h",
        page: <P3h />,
        youtube: "https://www.youtube.com/embed/WIj3_DN0XxM?si=FCEYAVrxWIqBHl8e",
    },
    {
        title: "Ketentuan Syariat Islam terkait Jaminan Produk Halal",
        link: "syariat",
        page: <Syariat />,
        youtube: "https://www.youtube.com/embed/MKvMM_hCCgs?si=8TfnlNSA8aiKbbP5",
    },
    {
        title: "Pengetahuan Bahan & Praktik Pengisian Daftar Bahan",
        link: "bahan",
        page: <Bahan />,
        youtube: "https://www.youtube.com/embed/TwHw-bmb2bE?si=bMeniI-T3X0qzZAj",
    },
    {
        title: "Proses Produk Halal (PPH)",
        link: "pph",
        page: <Pph />,
        youtube: "https://www.youtube.com/embed/NxVAlC8lRes?si=A4uOTaqw9y0_NvZu",
    },
    {
        title: "Verifikasi dan Validasi & Praktek Pengisian Manual SJPH",
        link: "verifikasi",
        page: <Verifikasi />,
        youtube: "https://www.youtube.com/embed/8t0ZA7Z6VLY?si=befQQAz7AlEmO1U-",
    },
    {
        title: "Digitalisasi dan Registrasi SIHALAL",
        link: "digitalisasi",
        page: <Digitalisasi />,
        youtube: "https://www.youtube.com/embed/BSyJeTU7X6Q?si=F9NVivGDJO7UNhcx",
    },
]

export const dataBahan = [
  {
    produk: "Makanan",
    jenisProduk: [
      {
        nama: "Susu dan Analognya",
        catatan: "",
        rincian: [
          {
            namaBahan: "1.1. Makanan pencuci mulut berbahan dasar susu",
            contoh: "Es krim susu, es krim, es susu",
          },
        ],
        kbli: ["10531 Industri pengolahan es krim"],
      },
      {
        nama: "Lemak, minyak, dan emulsi minyak",
        catatan: "",
        rincian: [
          {
            namaBahan: "2.1 Minyak (edible)",
            contoh: "Minyak kemiri, minyak kelapa mentah",
          },
        ],
        kbli: [
          "10411 Industri minyak mentah dan lemak nabati",
          "10422 Industri minyak mentah kelapa",
          "10423 Industri minyak goreng kelapa",
        ],
      },
      {
        nama: "Es untuk dimakan (edible ice) termasuk sherbet dan sorbet",
        catatan: "",
        rincian: [
          {
            namaBahan: "3.1 Es untuk dimakan (edible ice)",
            contoh:
              "Es batu untuk dijual (dikonsumsi publik), es mambo, es stik, es buah, es puter, es lilin, es kue, sorbet, sherbet, es serut, es campur, es berperisa, es mengandung susu, es rasa susu",
          },
        ],
        kbli: [
          "10531 Industri pengolahan es krim",
          "10532 Industri pengolahan es sejenisnya yang dapat dimakan",
        ],
      },
      {
        nama: "Buah dan sayur dengan pengolahan dan penambahan bahan tambahan pangan",
        catatan: "",
        rincian: [
          {
            namaBahan: "4.1 Buah olahan",
            contoh:
              "Asinan buah, rujak buah, manisan buah, cincau hijau olahan, cincau hitam, keripik buah, dodol buah, wajit buah",
          },
          {
            namaBahan:
              "4.2 Sayur, rumput laut, kacang dan biji-bijian segar yang dilakukan pengolahan dan diberikan bahan tambahan pangan",
            contoh:
              "Kuaci, emping melinjo, selai kacang, pasta tomat, kimchi, keripik bayam, keripik jamur, getuk singkong",
          },
        ],
        kbli: [
          "10298 Industri pengolahan rumput laut",
          "10311 Industri pengasinan buah-buahan dan sayuran",
          "10312 Industri pelumatan buah-buahan dan sayuran",
          "10330 Industri pengolahan sari buah dan sayuran",
          "10399 Industri pengolahan dan pengawetan lainnya buah-buahan dan sayuran bukan kacang-kacangan",
          "10733 Industri manisan buah-buahan dan sayuran kering",
          "10794 Industri kerupuk, keripik, peyek dan sejenisnya",
        ],
      },
      {
        nama: "Kembang gula/permen dan cokelat",
        catatan: "",
        rincian: [
          {
            namaBahan:
              "5.1 Produk kakao dan cokelat termasuk produk pengganti cokelat",
            contoh: "Bubuk minuman cokelat, praline, cokelat isi",
          },
          {
            namaBahan:
              "5.2 Kembang gula/permen meliputi kembang gula keras dan lunak/permen keras dan lunak, nougats, dan lain-lain",
            contoh: "Gula kapas, gulali, permen enting-enting",
          },
          {
            namaBahan: "5.3 Gula dekorasi",
            contoh:
              "Saus / topping / olesan cokelat, Saus / topping / olesan manis",
          },
        ],
        kbli: [
          "10731 Industri kakao",
          "10732 Industri makanan dari cokelat dan kembang gula dari cokelat",
          "10734 Industri kembang gula",
          "10739 Industri kembang gula lainnya",
        ],
      },
      {
        nama: "Serealia dan produk serealia yang merupakan produk turunan dari biji serealia, akar dan umbi, kacang-kacangan dan empulur dengan pengolahan dan penambahan bahan tambahan pangan",
        catatan: "",
        rincian: [
          {
            namaBahan: "6.1 Biji-bijian olahan",
            contoh: "Emping beras, gaplek",
          },
          {
            namaBahan:
              "6.2 Tepung dan pati dengan penambahan bahan tambahan pangan",
            contoh:
              "Tepung beras dengan penambahan BTP, tepung beras. Ketan dengan penambahan BTP, tepung kacang hijau dengan penambahan BTP, tapioka",
          },
          {
            namaBahan: "6.3 Serealia untuk sarapan, termasuk rolled oats",
            contoh: "Bulgur, nasi jagung",
          },
          {
            namaBahan:
              "6.4 Pasta dan mie serta produk sejenisnya (misalnya rice paper, vermiseli beras / bihun, pasta kedelai dan mi kedelai)",
            contoh:
              "Mie basah mentah, kulit pangsit / risol / lumpia / siomay / dimsum, produk mie sayur, kerupuk mentah",
          },
          {
            namaBahan:
              "6.5 Makanan pencuci mulut berbasis serealia dan pati (misalnya tepung puding nasi, tepung puding tapioka)",
            contoh: "Sagu / pati mutiara",
          },
          {
            namaBahan:
              "6.6 Tepung untuk adonan (misalnya untuk melapisi permukaan ikan atau daging ayam)",
            contoh: "Tepung pelapis, tepung bumbu, tepung bakwan",
          },
          {
            namaBahan: "6.7 Produk-produk kedelai",
            contoh: "Tahu, tauco, tempe",
          },
        ],
        kbli: [
          "10391 Industri tempe kedelai",
          "10392 Industri tahu kedelai",
          "10611 Industri penggilingan gandum dan serelia lainnya",
          "10612 Industri penggilingan aneka kacang (termasuk leguminous)",
          "10613 Industri penggilingan aneka umbi dan sayuran (termasuk rhizoma)",
          "10614 Industri tepung campuran dan adonan tepung",
          "10615 Industri makanan sereal",
          "10621 Industri pati ubi kayu",
          "10622 Industri berbagai macam pati palma",
          "10629 Industri pati dan produk pati lainnya",
          "10633 Industri tepung beras dan tepung jagung",
          "10740 Industri makaroni, mie dan produk sejenisnya",
          "10793 Industri makanan dari kedelai dan kacang-kacangan lainnya bukan kecap, tempe dan tahu",
          "10794 Industri kerupuk, keripik, peyek dan sejenisnya",
        ],
      },
      {
        nama: "Produk bakeri",
        catatan: "",
        rincian: [
          {
            namaBahan: "7.1 Roti dan produk bakeri tawar",
            contoh: "",
          },
          {
            namaBahan: "7.2 Produk bakeri istimewa (manis, asin, gurih)",
            contoh: "",
          },
          {
            namaBahan:
              "7.3 Kue basah/semi basah berbahan dasar beras dan lainnya",
            contoh: "",
          },
          {
            namaBahan: "7.4 Kue kering",
            contoh: "",
          },
          {
            namaBahan: "7.5 Puding siap santap",
            contoh: "",
          },
        ],
        kbli: [
          "10710 Industri produk roti dan kue",
          "10779 Industri produk masak lainnya",
          "10792 Industri kue basah",
          "10796 Industri dodol",
        ],
      },
      {
        nama: "Ikan dan produk perikanan, termasuk moluska, krustase, dan ekinodermata dengan pengolahan dan penambahan bahan tambahan pangan",
        catatan: "",
        rincian: [
          {
            namaBahan:
              "8.1 Moluska, krustase, dan ekinodermata, yang telah mengalami pengolahan",
            contoh:
              "Kerupuk ikan, sambal goreng ikan, pempek ikan, terasi ikan, abon ikan, siomay ikan",
          },
          {
            namaBahan:
              "8.2 Ikan dan produk perikanan termasuk moluska, krustase dan ekinodermata yang semi awet",
            contoh: "Otak-otak ikan",
          },
        ],
        kbli: [
          "10211 Industri penggaraman / pengeringan ikan",
          "10212 Industri pengasapan / pemanggangan ikan",
          "10213 Industri pembekuan ikan",
          "10214 Industri pemindangan ikan",
          "10215 Industri peragian / fermentasi ikan",
          "10216 Industri berbasis daging lumatan dan surimi",
          "10217 Industri pendinginan / pengesan ikan",
          "10291 Industri penggaraman / pengeringan biota air lainnya",
          "10292 Industri pengasapan / pemanggangan biota air lainnya",
          "10295 Industri peragian / fermentasi biota air lainnya",
          "10750 Industri makanan dan masakan olahan",
          "10779 Industri produk masak lainnya",
          "10794 Industri kerupuk, keripik, peyek dan sejenisnya",
        ],
      },
      {
        nama: "Telur olahan dan produk-produk telur hasil olahan",
        catatan: "",
        rincian: [
          {
            namaBahan: "9.1 Produk telur olahan",
            contoh: "Rendang telur, telur pindang",
          },
          {
            namaBahan:
              "9.2 Telur yang diawetkan, termasuk produk tradisional telur yang diawetkan, termasuk dengan cara dibasakan, diasinkan dan dikalengkan",
            contoh: "Telur asin, telur hitam, martabak telur",
          },
        ],
        kbli: [
          "10792 Industri kue basah",
          "10799 Industri produk makanan lainnya",
        ],
      },
      {
        nama: "Gula dan pemanis termasuk madu",
        catatan: "",
        rincian: [
          {
            namaBahan: "10.1 Gula palma",
            contoh: "Gula kelapa, gula aren",
          },
          {
            namaBahan:
              "10.2 Gula dan sirup lainnya (missal xilosa, sirup, maple, gula hias)",
            contoh: "Sirup buah, sirup teh, sirup kopi",
          },
          {
            namaBahan: "10.3 Madu",
            contoh: "Madu cair",
          },
        ],
        kbli: [
          "10722 Industri gula merah",
          "10723 Industri sirop",
          "10729 Industri pengolahan gula lainnya bukan dirop",
        ],
      },
      {
        nama: "Garam, rempah, sup, saus, salad, serta produk protein",
        catatan: "",
        rincian: [
          {
            namaBahan: "11.1 Garam dengan bahan tambahan pangan",
            contoh: "Garam campuran, garam berbumbu",
          },
          {
            namaBahan: "11.2 Bumbu",
            contoh: "Bumbu rasa ikan, bumbu rasa udang, rempah bubuk",
          },
          {
            namaBahan: "11.3 Saus dan produk sejenis",
            contoh: "Sambal, saus cabe, kaldu jamur",
          },
        ],
        kbli: [
          "10215 Industri peragian/ fermentasi ikan",
          "10772 Industri bumbu masak dan penyedap masakan",
          "10774 Industri pengolahan garam",
        ],
      },
      {
        nama: "Makanan ringan siap santap",
        catatan: "",
        rincian: [
          {
            namaBahan:
              "12.1 Makanan olahan berbahan dasar kentang, umbi, serealia, tepung atau pati",
            contoh: "Kerupuk beras, rengginang, rempeyek",
          },
          {
            namaBahan:
              "12.2 Olahan kacang, termasuk kacang terlapisi  dan campuran kacang dengan buah kering",
            contoh: "Kacang goreng, kacaang telur, kacang goyang, jipang",
          },
          {
            namaBahan: "12.3 Makanan ringan berbasis ikan",
            contoh: "Rempeyek ikan, sumpia udang",
          },
        ],
        kbli: [
          "10710 Industri produk roti dan kue",
          "10793 Industri makanan dari kedele dan kacang-kacangan lainnya bukan kecap, tempe dan tahu",
          "10794 Industri kerupuk, keripik, peyek dan sejenisnya",
        ],
      },
      {
        nama: "Pangan siap saji",
        catatan:
          "Pangan siap saji terdiri dari campuran produk pangan dalam kondisi terkemas yang apabila dilakukan pemanasan hanya untuk tujuan menghangatkan. Pangan siap saji ini memiliki umur simpan masa simpan 7 (tujuh) hari atau lebih pada kondisi sesuai dengan petunjuk penyimpanan sebagaimana ketentuan perundang-undangan.",
        rincian: [
          {
            namaBahan: "13.1 Pangan siap saji berbasis nasi",
            contoh: "",
          },
          {
            namaBahan: "13.2 Pangan siap saji berbasis mie/bihun",
            contoh: "",
          },
          {
            namaBahan: "13.3 Pangan siap saji berbasis kentang",
            contoh: "",
          },
          {
            namaBahan: "13.4 Pangan siap saji berbasis pasta",
            contoh: "",
          },
          {
            namaBahan: "13.5 Pangan siap saji berbasis umbi",
            contoh: "",
          },
          {
            namaBahan: "13.6 Pangan siap saji berbasis roti",
            contoh: "",
          },
          {
            namaBahan: "13.7 Pangan siap saji berbasis kuah",
            contoh: "",
          },
          {
            namaBahan: "13.8 Pangan siap saji berbasis sayuran",
            contoh: "",
          },
          {
            namaBahan: "13.9 Pangan siap saji lainnya",
            contoh: "",
          },
        ],
        kbli: ["10750 Industri makanan dan masakan olahan"],
      },
    ],
  },
  {
    produk: "Minuman",
    jenisProduk: [
      {
        nama: "Minuman dengan pengolahan",
        catatan: "",
        rincian: [
          {
            namaBahan: "1.1 Sari buah dan sari sayuran",
            contoh: "Sari buah, sari sayuran, sari sayur dan sari buah",
          },
          {
            namaBahan: "1.2 Konsentrat sari buah dan sari sayur",
            contoh: "Konsentrat sari buah, konsentrat sari sayur",
          },
          {
            namaBahan:
              "1.3 Minuman berbasis air, berperisa, dan particulated drinks",
            contoh: "Minuman jeli, minuman sari buah",
          },
          {
            namaBahan:
              "1.4 Kopi, kopi substitusi, teh, seduhan herbal, dan minuman biji- bijian dan sereal panas, kecuali cokelat",
            contoh:
              "Minuman serbuk kopi, kopi bubuk, minuman sari kacang hijau.",
          },
          {
            namaBahan: "1.5 Minuman berbasis susu",
            contoh: "Minuman susu, minuman susu berperisa",
          },
          {
            namaBahan: "1.6 Minuman tradisional",
            contoh: "Bandrek, bajigur, wedang jahe",
          },
        ],
        kbli: [
          "11040 Industri minuman ringan",
          "11090 Industri minuman lainnya",
        ],
      },
    ],
  },
  {
    produk: "Obat",
    jenisProduk: [
      {
        nama: "Obat Tradisional",
        catatan: "",
        rincian: [
          {
            namaBahan: "1.1 Jamu",
            contoh: "",
          },
          {
            namaBahan: "1.2 Ekstrak bahan alam",
            contoh: "",
          },
        ],
        kbli: ["21022 Industri produk obat tradisional untuk manusia"],
      },
    ],
  },
];