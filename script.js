// MASTER DATA
const urlEnter = "%0D%0A";
const nama = "Ruslan D. Samuel";
const profesi = "P3H Yayasan Matahari Gorontalo";
const prof = "P3H YM Gorontalo";
const noreg = "2408000873";
const alamat = "Jln. Membramo, Kel. Bulotadaa Timur, Kec. Sipatana, Kota Gorontalo, Gorontalo 96121";
const alamatLink = "https://maps.app.goo.gl/jCRtg2Nt1whtHCet8";
const whatsapp = "0895708460123";
const whatsappLink = `https://api.whatsapp.com/send/?phone=%2B62895708460123&text=Assalamualaikum+Wr.+Wb.${urlEnter}${urlEnter}Saya+Pelaku+Usaha+UMKM.${urlEnter}Saya+ingin+mendapatkan+sertifikat+halal+dengan+metode+_"Self+Declare"_+untuk+produk+saya.${urlEnter}Apakah+Saya+bisa+minta+bantuan+Anda+untuk+*Pendampingan+Proses+Produk+Halal*?&type=phone_number&app_absent=0`;
const email = "ruslansamuel11@gmail.com";
const website = "vatih2675.github.io/ruslansamuel";
const maps = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.8078313404324!2d123.06419669165795!3d0.5774899395246288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32792db0769ecb1d%3A0xa1e212e89e0da104!2sMakaleka%20Shop!5e0!3m2!1sid!2sid!4v1732117916077!5m2!1sid!2sid";
const logoHalal = "Logo Halal Indonesia.png";
const logoHalalPutih = "Logo Halal Indonesia Putih.png";
const logoBpjph = "Logo BPJPH.png";
const logoLp3h = "Logo Yayasan Matahari Gorontalo.png";

// ELEMENT
let elNama = document.querySelectorAll('.elNama');
let elProfesi = document.querySelectorAll('.elProfesi');
let elNoreg = document.querySelectorAll('.elNoreg');
let elAlamat = document.querySelectorAll('.elAlamat');
let elWhatsapp = document.querySelectorAll('.elWhatsapp');
let elEmail = document.querySelectorAll('.elEmail');
let elWebsite = document.querySelectorAll('.elWebsite');
let elMaps = document.querySelectorAll('.elMaps');
let elLogoHalal = document.querySelectorAll('.elLogoHalal');
let elLogoHalalPutih = document.querySelectorAll('.elLogoHalalPutih');
let elLogoBpjph = document.querySelectorAll('.elLogoBpjph');
let elLogoLp3h = document.querySelectorAll('.elLogoLp3h');

document.title = prof + " | " + nama;

elNama.forEach(nm => {
    nm.innerHTML = nama;
});

elProfesi.forEach(pr => {
    pr.innerHTML = profesi;
});

elNoreg.forEach(nr => {
    nr.innerHTML = noreg;
});

elAlamat.forEach(al => {
    al.addEventListener('click', function(){
        window.open(alamatLink)
    });
    al.innerHTML = `
        <i class="bi-geo-alt"></i>
        <span class="text-white">${alamat}</span>
    `;
});

elWhatsapp.forEach(wa => {
    wa.addEventListener("click", function () {
      window.open(whatsappLink);
    });
    wa.innerHTML = `
        <i class="bi-whatsapp"></i>
        <span class="text-white">${whatsapp}</span>
    `;
});

elEmail.forEach(mail => {
    mail.addEventListener("click", function () {
      window.open(`mailto:${email}`);
    });
    mail.innerHTML = `
        <i class="bi-envelope-at"></i>
        <span class="text-white">${email}</span>
    `;
});

elWebsite.forEach(web => {
    web.addEventListener("click", function () {
      window.open(`https://${website}`);
    });
    web.innerHTML = `
        <i class="bi-browser-chrome"></i>
        <span class="text-white">${website}</span>
    `;
});

elMaps.forEach(mp => {
  mp.setAttribute('src', maps);
});

elLogoHalal.forEach(lh => {
  lh.setAttribute('src', `assets/${logoHalal}`);
});

elLogoHalalPutih.forEach(lhp => {
  lhp.setAttribute('src', `assets/${logoHalalPutih}`);
});

elLogoBpjph.forEach(lb => {
  lb.setAttribute('src', `assets/${logoBpjph}`);
});

elLogoLp3h.forEach(lp => {
  lp.setAttribute('src', `assets/${logoLp3h}`);
});

// MENU
const halaman = location.pathname;
const menu = [
  {
    judul: "Beranda",
    link: "index.html",
    icon: "house",
  },
  {
    judul: "Informasi",
    link: "informasi.html",
    icon: "info-circle",
  },
  {
    judul: "BPJPH",
    link: "bpjph.html",
    icon: "buildings",
  },
  {
    judul: "Profil",
    link: "profil.html",
    icon: "person",
  },
  {
    judul: "Formulir",
    link: "formulir.html",
    icon: "file-earmark-break",
  },
];

const elMenu = document.querySelector('#elMenu');
let contentMenu = '';
menu.forEach(mn => {
    contentMenu += `<a href="${mn.link}" class="sm:px-6 px-3 sm:py-4 py-2 ${halaman == '/ym-gorontalo/' + mn.link ? 'text-white bg-purple-800 font-bold shadow-md' : 'text-purple-800 hover:bg-purple-600 hover:text-white'} duration-300"><i class="bi-${halaman == '/ym-gorontalo/' + mn.link ? mn.icon + '-fill' : mn.icon}"></i><span class="sm:inline-block hidden ms-2">${mn.judul}</span></a>`;
});
elMenu.innerHTML = contentMenu;

// console.log(location.pathname)
