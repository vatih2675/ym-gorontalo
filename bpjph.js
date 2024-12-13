// BPJPH
const hal = location.pathname.split("/").splice(-1)[0];

const judulBpjph = document.querySelector("#judulBpjph");

const sectionBpjph = document.querySelectorAll(".sectionBpjph");
let contentBpjph = "";

const footerBpjph = document.querySelectorAll(".footerBpjph");
let contentFooterBpjph = "";

dataBpjph = [
    {
        judul: "Kebijakan dan Regulasi Jaminan Produk Halal",
        link: "regulasi.html",
        youtube: "https://www.youtube.com/embed/8gsHrsDcYag?si=ndNA9GiwKVVbeH6u",
    },
    {
        judul: "Pendampingan dan Pendamping PPH",
        link: "p3h.html",
        youtube: "https://www.youtube.com/embed/WIj3_DN0XxM?si=FCEYAVrxWIqBHl8e",
    },
    {
        judul: "Ketentuan Syariat Islam terkait JPH",
        link: "syariat.html",
        youtube: "https://www.youtube.com/embed/MKvMM_hCCgs?si=8TfnlNSA8aiKbbP5",
    },
    {
        judul: "Pengetahuan & Praktik Pengisian Bahan",
        link: "bahan.html",
        youtube: "https://www.youtube.com/embed/TwHw-bmb2bE?si=bMeniI-T3X0qzZAj",
    },
    {
        judul: "Proses Produk Halal (PPH)",
        link: "pph.html",
        youtube: "https://www.youtube.com/embed/NxVAlC8lRes?si=A4uOTaqw9y0_NvZu",
    },
    {
        judul: "Verifikasi dan Validasi & Praktek Pengisian Manual SJPH",
        link: "verifikasi.html",
        youtube: "https://www.youtube.com/embed/8t0ZA7Z6VLY?si=befQQAz7AlEmO1U-",
    },
    {
        judul: "Digitalisasi dan Registrasi SIHALAL",
        link: "digitalisasi.html",
        youtube: "https://www.youtube.com/embed/BSyJeTU7X6Q?si=F9NVivGDJO7UNhcx",
    },
];

dataBpjph.forEach((dbp, index, arr) => {
    contentBpjph += `<a href="bpjph/${dbp.link}" target="_blank" class="w-2/5 sm:w-1/5 h-fit sm:h-28 text-center p-1 sm:p-5 rounded-xl border border-purple-700 text-xs sm:text-base flex justify-center items-center cursor-pointer font-medium text-purple-800 hover:text-white hover:bg-purple-700 hover:shadow-md hover:scale-110 duration-300">${dbp.judul}</a>`;

    if(hal == dbp.link){
        judulBpjph.innerHTML = dbp.judul;
        document.title = `BPJPH | ${dbp.judul}`;
        // console.log(arr[index + 1]['judul'])
        // console.log(dataBpjph.length)

        if(index == 0){
            contentFooterBpjph += `<div class="w-2/12 hidden sm:block"></div>`;
        }else if(index > 0){
            contentFooterBpjph += `<a href="${arr[index - 1]['link']}" class="w-2/12 hidden sm:flex justify-start items-center gap-1 cursor-pointer hover:text-purple-700 text-gray-300 duration-300">
                                        <i class="bi-chevron-left text-4xl"></i>
                                        <span class="text-start text-sm">${arr[index - 1]['judul']}</span>
                                    </a>`;
        }

        contentFooterBpjph += `<iframe class="w-full sm:w-8/12 aspect-video mx-auto rounded-none sm:rounded-3xl shadow-xl" src="${dbp.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

        if(index + 1 == dataBpjph.length){
            contentFooterBpjph += `<div class="w-2/12 hidden sm:block"></div>`;
        }else if(index + 1 < dataBpjph.length){
            contentFooterBpjph += `<a href="${arr[index + 1]['link']}" class="w-2/12 hidden sm:flex justify-end items-center gap-1 cursor-pointer hover:text-purple-700 text-gray-300 duration-300">
                                            <span class="text-end text-sm">${arr[index + 1]['judul']}</span>
                                            <i class="bi-chevron-right text-4xl"></i>
                                    </a>`;
        }
    }
});

sectionBpjph.forEach(sbp => {
    sbp.innerHTML = contentBpjph;
});

footerBpjph.forEach((fbp) => {
    fbp.innerHTML = contentFooterBpjph;
});

// console.log(hal)
