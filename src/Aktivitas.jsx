// src/Aktivitas.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
// Asumsi Anda sudah membuat file Aktivitas.css dan DetailAktivitas.css
// import './Aktivitas.css'; 

import ImageVolunteer3 from './assets/volunteer3.jpg'; 
import ImageVolunteer2 from './assets/volunteer2.jpg'; 
import ImageVolunteer4 from './assets/volunteer4.jpg';
import ImageVolunteer5 from './assets/volunteer5.jpg';
import ImageVolunteer6 from './assets/volunteer6.jpg';
import ImageVolunteer7 from './assets/volunteer7.jpg';

// --- 1. DATA CONTOH EVENTS (WAJIB: DITAMBAH 'export') ---
export const activitiesData = [
    { 
        id: 1, 
        image: ImageVolunteer3, 
        title: 'Aksi Bersih Pantai Seribu', 
        category: 'Lingkungan', 
        location: 'Pulau Tidung, Jakarta', 
        time: 'Sabtu, 14.00 - Selesai', 
        description: 'Aksi pembersihan pantai untuk mengurangi sampah plastik dan edukasi bahaya sampah laut. Relawan akan dibekali peralatan lengkap dan transportasi laut.', 
        price: 'Gratis',
        priceType: 'Gratis', 
        locIcon: '📍', 
        timeIcon: '⏱️' 
    },
    { 
        id: 2, 
        image: ImageVolunteer2,
        title: 'Rumah Belajar Starban', 
        category: 'Pendidikan', 
        location: 'Panti Asuhan Senja', 
        time: 'Minggu, 09.00 - 11.00', 
        description: 'Membantu anak-anak dalam mengerjakan tugas sekolah dan meningkatkan motivasi belajar. Dana pendaftaran akan dialokasikan untuk pembelian buku dan alat tulis.', 
        price: 'Rp 50.000',
        priceType: 'Berbayar', 
        locIcon: '📍', 
        timeIcon: '🗓️' 
    },
    { 
        id: 3, 
        image: ImageVolunteer4, 
        title: 'Sehari Bersama Oma&Opa', 
        category: 'Sosial', 
        location: 'Panti Jompo Griya Kasih', 
        time: 'Jumat, 07.30 - 11.00', 
        description: 'Menemani dan menghibur penghuni panti jompo untuk meningkatkan kesehatan mental mereka. Dibutuhkan relawan dengan kemampuan komunikasi yang baik.', 
        price: 'Gratis',
        priceType: 'Gratis',
        locIcon: '📍', 
        timeIcon: '⏱️' 
    },
    { 
        id: 4, 
        image: ImageVolunteer5, 
        title: 'Satu Pohon, Seribu Harapan', 
        category: 'Lingkungan', 
        location: 'Kabupaten Dairi, Sumatera Utara', 
        time: 'Minggu, 09.00 - 13.00', 
        description: 'Reboisasi yang mengajak relawan menanam pohon untuk memulihkan lingkungan. Kegiatan ini fokus pada daerah yang rawan longsor.', 
        price: 'Gratis',
        priceType: 'Gratis',
        locIcon: '📍', 
        timeIcon: '⏱️' 
    },
    { 
        id: 5, 
        image: ImageVolunteer6, 
        title: 'Aksi Kesehatan Masyarakat', 
        category: 'Kesehatan', 
        location: 'Tanjung Mulia, Medan', 
        time: 'Sabtu, 08.00 - 11.00', 
        description: 'Mendampingi masyarakat dalam pengecekan kesehatan agar terciptanya lingkungan yang lebih sehat dan peduli. Dibutuhkan tenaga medis dan non-medis.', 
        price: 'Gratis',
        priceType: 'Gratis',
        locIcon: '📍', 
        timeIcon: '⏱️' 
    },
    { 
        id: 6, 
        image: ImageVolunteer7, 
        title: 'Pangan Untuk Semua', 
        category: 'Sosial', 
        location: 'Kelurahan Teladan Barat, Medan', 
        time: 'Senin, 14.00 - 16.30', 
        description: 'Mengumpulkan donasi makanan dan menyalurkannya kepada masyarakat yang membutuhkan. Fokus pada keluarga prasejahtera di area pinggiran kota.', 
        price: 'Gratis',
        priceType: 'Gratis',
        locIcon: '📍', 
        timeIcon: '⏱️' 
    },
];

// --- 2. KOMPONEN ACTIVITY CARD (Dengan Pemotongan Deskripsi) ---
const ActivityCard = ({ title, category, location, time, description, price, priceType, locIcon, timeIcon, image, id }) => {
    const priceTagClass = priceType === 'Berbayar' ? 'price-tag-paid' : 'price-tag-gratis';
    
    // Fungsi untuk memotong deskripsi dan menambahkan "..."
    const trimDescription = (text, maxLength) => {
        if (text.length > maxLength) {
            let trimmedText = text.substring(0, maxLength);
            // Menemukan spasi terakhir untuk menghindari pemotongan kata di tengah
            trimmedText = trimmedText.substring(0, Math.min(trimmedText.length, trimmedText.lastIndexOf(" ")));
            return trimmedText + "...";
        }
        return text;
    };
    
    // Terapkan pemotongan, maksimal 80 karakter
    const shortDescription = trimDescription(description, 80);

    return (
        <div className="activity-card">
            <div className="card-image-wrapper">
                <img className="card-image" src={image} alt={title} />
                {price && <div className={priceTagClass}>{price}</div>} 
            </div>
            
            <div className="card-content">
                <h3 className="activity-title">{title}</h3>
                {/* Kelas kategori yang digunakan untuk warna di CSS */}
                <div className={`category-button category-${category.toLowerCase()}`}>
                    {category}
                </div>
                
                <div className="activity-description">
                    <p>{shortDescription}</p> {/* Menggunakan deskripsi yang sudah dipotong */}
                </div>
                
                <div className="activity-meta-row">
                    <div className="meta-item">
                        <span className="meta-icon">{locIcon}</span> 
                        <span className="meta-text">{location}</span>
                    </div>
                </div>
                <div className="activity-meta-row"> 
                    <div className="meta-item">
                        <span className="meta-icon">{timeIcon}</span> 
                        <span className="meta-text">{time}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


function Aktivitas() {
    const location = useLocation(); 

    // Fungsi untuk menentukan kelas aktif pada navigasi (Dibiarkan, meskipun Navbar dihapus)
    const getLinkClass = (path) => {
        // Menggunakan startsWith untuk memastikan link tetap aktif di halaman detail (/aktivitas/1)
        return location.pathname.startsWith(path) ? 'active-link' : '';
    };

    return (
        <div className="aktivitas-page">
            
            {/* --- SEARCH BAR SECTION --- */}
            <section className="search-filter-section">
                <div className="search-text-group"> 
                    <h2 className="search-headline">Jelajahi Peluang Volunteer</h2>
                    <p className="search-subtext">Temukan Peran yang sesuai dengan minat anda</p> 
                    <p className="search-subtext-2">Mari buat dampak positif!</p>
                </div>
                
                <div className="search-bar-group"> 
                    <div className="search-bar-wrapper">
                        <div className="search-icon">🔍</div> 
                        <input 
                            type="text" 
                            className="search-input" 
                            placeholder="Cari aktivitas, lokasi, atau kategori..." 
                        />
                    </div>
                    <button className="search-button">
                        Cari
                    </button>
                </div>
            </section>

            {/* --- ACTIVITIES GRID SECTION --- */}
            <section className="activities-grid-section">
                <h2 className="grid-title">Daftar Semua Aktivitas</h2>
                
                <div className="activities-grid">
                    {activitiesData.map(activity => (
                        // ✅ Membungkus ActivityCard dengan Link
                        <Link to={`/aktivitas/${activity.id}`} className="activity-card-link" key={activity.id}>
                            <ActivityCard 
                                image={activity.image}
                                title={activity.title}
                                category={activity.category}
                                location={activity.location}
                                time={activity.time}
                                description={activity.description}
                                price={activity.price}
                                priceType={activity.priceType}
                                locIcon={activity.locIcon}
                                timeIcon={activity.timeIcon}
                                id={activity.id} // Melewatkan ID juga, meskipun tidak wajib di ActivityCard
                            />
                        </Link>
                    ))}
                </div>
            </section>
            
            {/* --- FOOTER SECTION --- */}
            <section className="footer-section">
                <div className="footer-content">
                    <h1 className="logo-text" style={{fontSize: '24px', margin: 0}}>SatuAksi</h1> 
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} SatuAksi. Hak Cipta Dilindungi.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Aktivitas;