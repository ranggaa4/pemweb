// src/VolunteerDetailProgram.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './VolunteerDetailProgram.css'; 

// --- IMPORT ASSETS (Pastikan path ke aset Anda benar) ---
import LogoImage from './assets/gemini-logo-removebg-preview-2.png'; 
import ImageVolunteer8 from './assets/volunteer8.jpeg';
import ImageVolunteer9 from './assets/volunteer9.jpg';
import ImageVolunteer10 from './assets/volunteer10.webp';

// --- DATA UTAMA (MOCK DATA) ---
const kegiatanLengkap = [
    { 
        id: 1, 
        judul: "Aksi Bersih Pantai Serang: Menjaga Laut Kita",
        tagline: "Konservasi Pesisir dan Edukasi Lingkungan",
        image: ImageVolunteer8, 
        deskripsi: "Program ini mengajak relawan untuk mendampingi anak-anak SD dalam proses belajar, mulai dari membaca, berhitung, hingga tugas sekolah. Melalui pendekatan yang menyenangkan dan interaktif, relawan membantu meningkatkan kepercayaan diri dan semangat belajar anak-anak agar mereka dapat meraih masa depan yang lebih cerah.",
        detailItems: [
            { label: "Jumlah Relawan", value: "35 Orang" },
            { label: "Tanggal Pelaksanan", value: "12 Januari 2025" },
            { label: "Lokasi", value: "Pantai Serang, Blitar" },
            { label: "Waktu Pelakasaan", value: "07.30 - 11.00" },
            { label: "Total Jam Pelaksanaan", value: "3 Jam 30 Menit" },
            { label: "Status Program", value: "Selesai" },
            { label: "Jumlah Penerima Manfaat", value: "Masyarakat Pesisir dan Wisatawan" },
        ]
    },
    { 
        id: 2, 
        judul: "Edukasi Tani Mandiri di Desa Sukamaju",
        tagline: "Meningkatkan Pengetahuan dan Kesejahteraan Petani",
        image: ImageVolunteer9, 
        deskripsi: "Program ini fokus pada transfer ilmu pengetahuan pertanian modern dan ramah lingkungan. Relawan mengajarkan teknik irigasi hemat air dan penggunaan pupuk organik, memastikan keberlanjutan hasil tani di masa depan.",
        detailItems: [
            { label: "Jumlah Relawan", value: "20 Orang" },
            { label: "Tanggal Pelaksanan", value: "05 Maret 2024" },
            { label: "Lokasi", value: "Desa Sukamaju, Malang" },
            { label: "Waktu Pelakasaan", value: "08.00 - 12.00" },
            { label: "Total Jam Pelaksanaan", value: "4 Jam 00 Menit" },
            { label: "Status Program", value: "Selesai" },
            { label: "Jumlah Penerima Manfaat", value: "45 Petani dan Anggota Keluarga" },
        ]
    },
    { 
        id: 3, 
        judul: "Program Bedah Rumah Lansia Kurang Mampu",
        tagline: "Rumah Layak Huni, Hidup Lebih Mandiri",
        image: ImageVolunteer10, 
        deskripsi: "Sukarelawan merenovasi total dua rumah lansia agar layak huni dan aman. Kegiatan mencakup penggantian atap, perbaikan lantai, dan pembangunan fasilitas sanitasi dasar untuk meningkatkan kualitas hidup penerima manfaat.",
        detailItems: [
            { label: "Jumlah Relawan", value: "50 Orang" },
            { label: "Tanggal Pelaksanan", value: "21 April 2024" },
            { label: "Lokasi", value: "Kampung Cipedak, Jakarta" },
            { label: "Waktu Pelakasaan", value: "08.00 - 17.00" },
            { label: "Total Jam Pelaksanaan", value: "9 Jam 00 Menit" },
            { label: "Status Program", value: "Selesai" },
            { label: "Jumlah Penerima Manfaat", value: "2 Keluarga Lansia" },
        ]
    },
];

const VolunteerDetailProgram = () => {
    const { id } = useParams();
    const kegiatan = kegiatanLengkap.find(k => k.id === parseInt(id));

    if (!kegiatan) {
        return (
            <div className="detail-page-wrapper error-page">
                <div className="content-area">
                    <h1 className="main-title">Kegiatan Tidak Ditemukan 😔</h1>
                    <p className="tagline">Silakan kembali ke daftar kegiatan.</p>
                    <div className="button-footer" style={{marginTop: '200px'}}>
                        <Link to="/volunteer-terealisasi" className="back-button">
                            Kembali ke Daftar
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="detail-page-wrapper">
            
            <header className="main-header">
                <div className="header-logo-wrapper">
                    <img src={LogoImage} alt="Logo" className="header-logo" />
                </div>
                <nav className="header-nav">
                    <Link to="/beranda" className="nav-item">Beranda</Link>
                    <Link to="/tentang" className="nav-item">Tentang</Link>
                    <Link to="/aktivitas" className="nav-item">Aktivitas</Link>
                    <Link to="/kontak" className="nav-item">Kontak</Link>
                    <Link to="/login" className="nav-item login">Login</Link>
                </nav>
            </header>

            <div className="content-area">
                
                <h1 className="main-title">Profil Volunteer</h1>
                <h2 className="tagline">{kegiatan.tagline}</h2>
                
                <section className="summary-section">
                    <img src={kegiatan.image} alt={kegiatan.judul} className="summary-image" />
                    <p className="description-text">
                        {kegiatan.deskripsi}
                    </p>
                </section>

                <section className="detail-list">
                    {kegiatan.detailItems.map((item, index) => (
                        <div key={index} className="detail-row">
                            <span className="detail-label">{item.label}:</span>
                            <span className="detail-value">{item.value}</span>
                        </div>
                    ))}
                </section>
                
                <div className="button-footer">
                    <Link to="/volunteer-terealisasi" className="back-button">
                        Kembali
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default VolunteerDetailProgram;