// src/DetailVolunteer.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetailVolunteer.css'; // Import styling untuk halaman detail

// --- MOCK DATA (Data yang sama dari VolunteerTerealisasi.jsx) ---
// CATATAN: Dalam proyek nyata, data ini biasanya diambil dari API atau konteks global.
// Kita perlu mengimpor ulang asset agar bisa digunakan di sini
import ImageVolunteer8 from './assets/volunteer8.jpeg';
import ImageVolunteer9 from './assets/volunteer9.jpg';
import ImageVolunteer10 from './assets/volunteer10.webp';

const kegiatanSelesai = [
    { 
        id: 1, 
        judul: "Aksi Bersih Pantai Serang: Menjaga Laut Kita",
        lokasi: "Pantai Serang, Blitar",
        tanggal: "12 Feb 2024",
        image: ImageVolunteer8, 
        deskripsiSingkat: "Berhasil mengumpulkan 500kg sampah plastik dan mengedukasi masyarakat lokal.",
        deskripsiLengkap: "Kegiatan ini melibatkan 50 sukarelawan yang bekerja selama 8 jam di sepanjang 2 km garis pantai. Selain pembersihan, kami mengadakan sesi edukasi singkat untuk wisatawan dan pedagang lokal mengenai pentingnya mengurangi penggunaan plastik sekali pakai. Total sampah yang terkumpul adalah 500 kg, yang kemudian dipilah untuk didaur ulang.",
        dokumentasi: [
            { caption: "Sukarelawan beraksi", img: ImageVolunteer8 },
            // Tambahkan gambar dokumentasi lain jika ada (gunakan ImageVolunteer8/9/10 sebagai contoh)
        ],
    },
    { 
        id: 2, 
        judul: "Edukasi Tani Mandiri di Desa Sukamaju",
        lokasi: "Desa Sukamaju, Malang",
        tanggal: "05 Mar 2024",
        image: ImageVolunteer9,
        deskripsiSingkat: "Meningkatkan pengetahuan petani tentang teknik irigasi hemat air dan pupuk organik.",
        deskripsiLengkap: "Program ini bertujuan meningkatkan ketahanan pangan lokal. Kami memberikan pelatihan intensif mengenai teknik pertanian organik dan pembangunan sistem irigasi tetes yang hemat air. Dampaknya, hasil panen beberapa komoditas meningkat 15% pada bulan berikutnya.",
        dokumentasi: [{ caption: "Sesi Pelatihan Tani", img: ImageVolunteer9 }],
    },
    { 
        id: 3, 
        judul: "Program Bedah Rumah Lansia Kurang Mampu",
        lokasi: "Kampung Cipedak, Jakarta",
        tanggal: "21 Apr 2024",
        image: ImageVolunteer10,
        deskripsiSingkat: "Sukarelawan merenovasi total dua rumah lansia agar layak huni dan aman.",
        deskripsiLengkap: "Dana terkumpul dari donasi masyarakat digunakan untuk merenovasi dua rumah yang sudah tidak layak huni. Fokus utama adalah penggantian atap bocor, perbaikan lantai, dan pembangunan kamar mandi yang higienis. Ini adalah salah satu program sosial terbesar kami tahun ini.",
        dokumentasi: [{ caption: "Proses Renovasi", img: ImageVolunteer10 }],
    },
];

function DetailVolunteer() {
    // 1. Ambil ID dari URL
    const { id } = useParams();
    
    // 2. Cari data kegiatan yang sesuai
    // Pastikan ID diubah menjadi integer/angka karena useParams mengembalikannya sebagai string
    const kegiatan = kegiatanSelesai.find(k => k.id === parseInt(id));

    // Jika kegiatan tidak ditemukan
    if (!kegiatan) {
        return (
            <div className="detail-container error-page">
                <h2>Kegiatan Tidak Ditemukan 😔</h2>
                <p>ID kegiatan: {id} tidak valid.</p>
                <Link to="/volunteer-terealisasi" className="back-button">Kembali ke Daftar</Link>
            </div>
        );
    }

    // 3. Render Detail Kegiatan
    return (
        <div className="detail-page-container">
            <Link to="/volunteer-terealisasi" className="back-link">
                ← Kembali ke Daftar Kegiatan
            </Link>

            <header className="detail-header">
                <h1>{kegiatan.judul}</h1>
                <div className="detail-meta">
                    <span>📅 {kegiatan.tanggal}</span>
                    <span>📍 {kegiatan.lokasi}</span>
                </div>
            </header>

            <section className="detail-content">
                <div className="main-image-wrapper">
                    <img src={kegiatan.image} alt={kegiatan.judul} className="detail-main-image"/>
                </div>

                <div className="text-section">
                    <h2>Deskripsi Program</h2>
                    <p className="description-text">{kegiatan.deskripsiLengkap}</p>
                </div>
                
                <div className="dokumentasi-section">
                    <h2>Dokumentasi & Galeri</h2>
                    <div className="dokumentasi-grid">
                        {kegiatan.dokumentasi.map((doc, index) => (
                            <div key={index} className="dokumentasi-item">
                                <img src={doc.img} alt={doc.caption} className="dokumentasi-image"/>
                                <p>{doc.caption}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DetailVolunteer;