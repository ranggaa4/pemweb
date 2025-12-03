// src/DetailAktivitas.jsx
import React from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { activitiesData } from './Aktivitas.jsx'; 
import './DetailAktivitas.css'; 
// Asumsi Anda juga mengimpor './App.css' atau base CSS lainnya di App.jsx
// untuk styling header .frame-56 dan .logo-text

const DetailAktivitas = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    // Tambahkan useLocation agar getLinkClass bisa digunakan
    const location = useLocation();

    const activity = activitiesData.find(act => act.id === parseInt(id));

    if (!activity) {
        return (
            <div className="detail-page-container not-found" style={{padding: '50px', textAlign: 'center'}}>
                <h1 style={{color: '#DC3545'}}>404 - Aktivitas Tidak Ditemukan</h1>
                <p>Maaf, detail aktivitas yang Anda cari tidak tersedia.</p>
                <button onClick={() => navigate('/aktivitas')} className="back-button" style={{marginTop: '20px', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#64FFDA', color: '#0A192F', border: 'none', borderRadius: '5px'}}>
                    &larr; Kembali ke Daftar Aktivitas
                </button>
            </div>
        );
    }
    
    const priceTagClass = activity.priceType === 'Berbayar' ? 'detail-price-paid' : 'detail-price-gratis';

    // Fungsi untuk mendapatkan kelas aktif pada navigasi
    const getLinkClass = (path) => {
        // Karena kita ada di DetailAktivitas, 'Aktivitas' harus tetap aktif
        return location.pathname.startsWith(path) ? 'active-link' : '';
    };


    return (
        <div className="detail-aktivitas-page">
            
            {/* --- HEADER (Seperti di Figma Anda) TELAH DIHAPUS --- */}
            {/* <header className="frame-56">
                <h1 className="logo-text">SatuAksi</h1> 
                <nav className="nav-links">
                    <Link to="/" className={`beranda ${getLinkClass('/')}`}>Beranda</Link> 
                    <Link to="/tentang" className={`tentang ${getLinkClass('/tentang')}`}>Tentang</Link> 
                    <Link to="/aktivitas" className={`aktivitas ${getLinkClass('/aktivitas')}`}>Aktivitas</Link>
                    <Link to="/kontak" className={`kontak ${getLinkClass('/kontak')}`}>Kontak</Link> 
                </nav>
                <div className="login-button">Login</div>
            </header>
            */}
            
            {/* --- DETAIL KONTEN UTAMA --- */}
            <section className="detail-content-section-figma"> {/* ✅ Class baru untuk layout Figma */}
                
                {/* Judul Utama & Kategori (atas) */}
                <div className="detail-header-figma">
                    <h1 className="detail-title-main-figma">{activity.title}</h1>
                    <span className={`detail-category-figma detail-category-${activity.category.toLowerCase()}`}>
                        {activity.category}
                    </span>
                </div>

                {/* Gambar Hero */}
                <div className="detail-image-wrapper-figma">
                    <img className="detail-image-figma" src={activity.image} alt={activity.title} />
                </div>

                {/* Konten Utama (Dua Kolom: Kiri Deskripsi, Kanan Detail Singkat) */}
                <div className="detail-body-wrapper-figma">
                    
                    {/* Kolom Kiri: Mengenai Program & Kualifikasi */}
                    <div className="detail-left-column-figma">
                        <div className="info-block">
                            <h2 className="info-block-title">1. Mengenai Program Ini</h2>
                            <p className="info-block-text">
                                {activity.description} Kegiatan ini merupakan inisiatif yang berfokus pada {activity.category.toLowerCase()} dan kepedulian terhadap kebutuhan sekitar. Melalui program ini, anggota dapat berkontribusi untuk menciptakan perubahan positif.
                            </p>
                        </div>

                        {/* Anda bisa menambahkan bagian "Tugas dan Tanggung Jawab" jika ada datanya di activitiesData */}
                        <div className="info-block">
                            <h2 className="info-block-title">2. Tugas dan Tanggung Jawab</h2>
                            <ul className="info-block-list">
                                <li>Berpartisipasi aktif dalam kegiatan pembersihan dan perawatan lingkungan.</li>
                                <li>Bekerja sama dalam pengumpulan dan pemilahan sampah sesuai jenisnya.</li>
                                <li>Mengedukasi masyarakat terkait tentang pentingnya menjaga kebersihan dan kelestarian lingkungan.</li>
                                <li>Mendokumentasikan proses kegiatan dan melaporkan temuan untuk memastikan kegiatan berjalan lancar dan terstruktur.</li>
                            </ul>
                        </div>

                        <div className="info-block">
                            <h2 className="info-block-title">3. Kualifikasi yang Dicari</h2>
                            <ul className="info-block-list">
                                <li>Memiliki kepedulian tinggi terhadap lingkungan dan kebersihan.</li>
                                <li>Mampu bekerja sama dalam tim dan berkomunikasi dengan baik.</li>
                                <li>Disiplin, bertanggung jawab, dan siap terlibat dalam kegiatan lapangan.</li>
                                <li>Memiliki usia minimal 17 tahun untuk semua relawan.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Kolom Kanan: Detail Singkat & Tombol Daftar */}
                    <div className="detail-right-column-figma">
                        <div className="detail-summary-card">
                            <h3>Detail Singkat & Pendaftaran</h3>
                            <div className="summary-item">
                                <span className="summary-icon">{activity.locIcon}</span>
                                <span className="summary-text">{activity.location}</span>
                            </div>
                            <div className="summary-item">
                                <span className="summary-icon">{activity.timeIcon}</span>
                                <span className="summary-text">{activity.time}</span>
                            </div>
                            <div className="summary-item">
                                <span className="summary-icon">💰</span>
                                <span className="summary-text">{activity.price}</span>
                            </div>
                            
                            <Link to={`/daftar/${activity.id}`} className="register-button-link">
                                <button className="register-button-figma">
                                    DAFTAR SEKARANG
                                </button>
                            </Link>
                            
                            <button onClick={() => navigate(-1)} className="back-link-figma">
                                &larr; Kembali
                            </button>
                        </div>
                    </div>

                </div>

            </section>
            
        </div>
    );
};

export default DetailAktivitas;