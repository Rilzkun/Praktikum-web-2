const countries = [
    {
        name: "Prancis",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Prancis terkenal dengan Menara Eiffel dan budaya kulinernya.",
        longDesc: "Prancis adalah negara di Eropa Barat dengan ibu kota Paris. Negara ini dikenal sebagai pusat mode, seni, dan gastronomi. Prancis juga memiliki sistem kereta cepat TGV yang terkenal dan merupakan produsen wine terbesar di dunia. Bahasa resmi: Prancis, Mata uang: Euro, Populasi: 67 juta jiwa."
    },
    {
        name: "Brazil", 
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Brazil adalah negara terbesar di Amerika Selatan.",
        longDesc: "Brazil adalah negara terbesar di Amerika Selatan dan memiliki garis pantai terpanjang kelima di dunia. Negara ini terkenal dengan festival Karnaval, sepak bola, dan musik samba. Brazil juga merupakan rumah bagi Sungai Amazon, sungai terbesar di dunia berdasarkan volume air. Bahasa resmi: Portugis, Ibu kota: Brasília, Populasi: 214 juta jiwa."
    },
    {
        name: "Indonesia",
        image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=600&q=80", 
        shortDesc: "Indonesia adalah negara kepulauan terbesar di dunia.",
        longDesc: "Indonesia adalah negara kepulauan terbesar di dunia yang terletak di Asia Tenggara. Negara ini memiliki keanekaragaman hayati yang sangat tinggi dan merupakan rumah bagi banyak spesies endemik. Indonesia juga dikenal dengan budaya yang beragam, mulai dari tari tradisional, musik, hingga kuliner khas setiap daerah. Bahasa resmi: Indonesia, Ibu kota: Jakarta, Populasi: 273 juta jiwa."
    },
    {
        name: "Jepang",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Jepang dikenal sebagai Negeri Matahari Terbit.",
        longDesc: "Jepang adalah negara kepulauan di Asia Timur yang terdiri dari 6.852 pulau. Negara ini dikenal dengan teknologi maju, sistem transportasi yang efisien, dan budaya yang kaya. Jepang juga memiliki gunung Fuji yang ikonik dan merupakan salah satu negara dengan harapan hidup tertinggi di dunia. Bahasa resmi: Jepang, Ibu kota: Tokyo, Populasi: 125 juta jiwa."
    },
    {
        name: "Mesir",
        image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Mesir terkenal dengan piramida dan peradaban kuno.",
        longDesc: "Mesir terletak di Afrika Utara dan dikenal dengan peradaban kuno yang maju. Piramida Giza dan Sphinx adalah monumen ikonik yang dibangun lebih dari 4.500 tahun yang lalu. Sungai Nil, sungai terpanjang di dunia, mengalir melalui Mesir dan menjadi sumber kehidupan utama. Bahasa resmi: Arab, Ibu kota: Kairo, Populasi: 104 juta jiwa."
    },
    {
        name: "Australia",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Australia adalah negara benua dengan kanguru dan koala.",
        longDesc: "Australia adalah negara benua yang terletak di belahan bumi selatan. Negara ini dikenal dengan satwa liar yang unik seperti kanguru, koala, dan wombat. Great Barrier Reef di Australia adalah sistem terumbu karang terbesar di dunia dan dapat dilihat dari luar angkasa. Bahasa resmi: Inggris, Ibu kota: Canberra, Populasi: 25 juta jiwa."
    },
    // NEGARA BARU
    {
        name: "Italia",
        image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Italia terkenal dengan sejarah Romawi kuno dan kuliner pasta.",
        longDesc: "Italia adalah negara di Eropa Selatan yang berbentuk semenanjung. Negara ini memiliki warisan budaya yang kaya dari Kekaisaran Romawi dan Renaissance. Italia juga dikenal dengan masakan mediteranianya seperti pasta, pizza, dan gelato. Bahasa resmi: Italia, Ibu kota: Roma, Populasi: 59 juta jiwa."
    },
    {
        name: "India",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80",
        shortDesc: "India adalah negara dengan populasi terbesar kedua di dunia.",
        longDesc: "India adalah negara di Asia Selatan dengan keanekaragaman budaya dan agama yang sangat besar. Negara ini dikenal dengan Taj Mahal, sistem kasta, dan festival warna Holi. India juga merupakan produsen film terbesar di dunia (Bollywood). Bahasa resmi: Hindi & Inggris, Ibu kota: New Delhi, Populasi: 1.4 miliar jiwa."
    },
    {
        name: "Amerika Serikat",
        image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=600&q=80",
        shortDesc: "AS adalah negara adidaya dengan pengaruh global yang besar.",
        longDesc: "Amerika Serikat adalah negara federal yang terdiri dari 50 negara bagian. Negara ini dikenal sebagai pusat teknologi, hiburan, dan bisnis global. AS memiliki landmark ikonik seperti Patung Liberty, Gedung Putih, dan Grand Canyon. Bahasa resmi: Inggris, Ibu kota: Washington D.C., Populasi: 331 juta jiwa."
    },
    {
        name: "Turki",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Turki adalah negara transkontinental antara Eropa dan Asia.",
        longDesc: "Turki terletak di dua benua, Eropa dan Asia, dipisahkan oleh Selat Bosphorus. Negara ini memiliki warisan dari Kekaisaran Ottoman dan Bizantium. Istanbul adalah kota terbesar yang menjadi pusat budaya dan ekonomi. Bahasa resmi: Turki, Ibu kota: Ankara, Populasi: 84 juta jiwa."
    },
    {
        name: "Thailand",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Thailand dikenal sebagai Negeri Gajah Putih dengan pantai eksotis.",
        longDesc: "Thailand adalah negara di Asia Tenggara yang dikenal dengan budaya Buddha, masakan pedas, dan pantai yang indah. Bangkok adalah ibu kota yang ramai dengan kuil-kuil megah. Thailand juga terkenal dengan industri pariwisata dan pijat tradisional. Bahasa resmi: Thai, Ibu kota: Bangkok, Populasi: 69 juta jiwa."
    },
    {
        name: "Spanyol",
        image: "https://images.unsplash.com/photo-1543785734-4b6e564642f8?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Spanyol terkenal dengan flamenco, bullfight, dan arsitektur Gaudi.",
        longDesc: "Spanyol adalah negara di Eropa Barat Daya dengan budaya yang hidup dan penuh semangat. Negara ini dikenal dengan tarian flamenco, sepak bola, dan arsitektur unik Antoni Gaudi. Spanyol juga memiliki pantai-pantai yang indah di Costa del Sol. Bahasa resmi: Spanyol, Ibu kota: Madrid, Populasi: 47 juta jiwa."
    },
    {
        name: "Kanada",
        image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Kanada adalah negara terbesar kedua di dunia dengan alam yang indah.",
        longDesc: "Kanada adalah negara terbesar kedua di dunia yang membentang dari Samudra Atlantik ke Pasifik. Negara ini dikenal dengan pemandangan alamnya yang spektakuler, termasuk Pegunungan Rocky dan Danau Great Lakes. Kanada adalah negara multikultural dengan dua bahasa resmi. Bahasa resmi: Inggris & Prancis, Ibu kota: Ottawa, Populasi: 38 juta jiwa."
    },
    {
        name: "Jerman",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Jerman adalah pusat ekonomi Eropa dengan sejarah yang kaya.",
        longDesc: "Jerman adalah negara di Eropa Tengah yang dikenal dengan sejarah, filsafat, dan inovasi teknologinya. Negara ini adalah ekonomi terbesar di Eropa dan rumah bagi banyak perusahaan otomotif terkenal seperti Mercedes-Benz, BMW, dan Volkswagen. Bahasa resmi: Jerman, Ibu kota: Berlin, Populasi: 83 juta jiwa."
    },
    {
        name: "Afrika Selatan",
        image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Afrika Selatan dikenal sebagai 'Rainbow Nation' dengan keanekaragaman.",
        longDesc: "Afrika Selatan adalah negara di ujung selatan Afrika yang dikenal dengan keanekaragaman budaya dan alamnya. Negara ini memiliki tiga ibu kota: Pretoria (eksekutif), Cape Town (legislatif), dan Bloemfontein (yudikatif). Afrika Selatan juga terkenal dengan safari dan Taman Nasional Kruger. Bahasa resmi: 11 bahasa, Ibu kota: Multiple, Populasi: 60 juta jiwa."
    }
];

// Buat modal
const modal = document.createElement('div');
modal.style.cssText = `
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;
modal.innerHTML = `
    <div style="
        background: white;
        padding: 2rem;
        border-radius: 10px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    ">
        <button onclick="closeModal()" style="
            position: absolute;
            top: 10px;
            right: 15px;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
        ">✕</button>
        <div id="modalContent"></div>
    </div>
`;
document.body.appendChild(modal);

document.addEventListener('DOMContentLoaded', function() {
    showCountries();
});

function showCountries() {
    const container = document.getElementById('container-kartu');
    
    let html = '';
    countries.forEach(country => {
        html += `
            <article class="kartu">
                <img src="${country.image}" alt="${country.name}" class="gambar-negara">
                <div class="isi-kartu">
                    <h3>${country.name}</h3>
                    <p>${country.shortDesc}</p>
                    <button class="tombol" onclick="showDetail('${country.name}')">Lihat Detail</button>
                </div>
            </article>
        `;
    });
    
    container.innerHTML = html;
}

function showDetail(countryName) {
    const country = countries.find(c => c.name === countryName);
    
    if (country) {
        const modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = `
            <h2 style="color: #2c3e50; margin-bottom: 1rem; text-align: center;">${country.name}</h2>
            <p style="line-height: 1.6; color: #555;">${country.longDesc}</p>
        `;
        modal.style.display = 'flex';
    }
}

function closeModal() {
    modal.style.display = 'none';
}

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});