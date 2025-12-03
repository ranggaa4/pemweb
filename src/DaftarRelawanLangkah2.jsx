// src/DaftarRelawanLangkah2.jsx (FINAL VERSI DENGAN CARD BOX DIVISI DAN KOMITMEN)

import React, { useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
// ASUMSI: File ini ada dan berisi data program/aktivitas
import { activitiesData } from './Aktivitas.jsx'; 
// ASUMSI: File ini berisi styling yang saya berikan sebelumnya
import './DaftarRelawan.css'; 

// --- DAFTAR PILIHAN UNTUK FORM ---
const KeahlianList = ['Desain Grafis', 'Public Speaking', 'Photography', 'Lainnya'];
const KomitmenList = ['4-8 jam/minggu', 'Fleksibel', '1-2 jam/minggu', '1-3 jam/minggu'];
const DivisiList = [
    { value: 'PR', label: 'Public Relation' },
    { value: 'Partnership', label: 'Partnership & Sponshorship' },
    { value: 'SMM', label: 'Social Media Management' },
    { value: 'HRD', label: 'Human Resource Division' },
    { value: 'TT', label: 'Team Teaching' }
];

const DaftarRelawanLangkah2 = () => {
    const { activityId } = useParams();
    const navigate = useNavigate();
    // Tambahkan useLocation agar getLinkClass bisa digunakan
    const location = useLocation();
    
    // Cari data aktivitas
    // Catatan: Jika ini adalah aplikasi nyata, Anda harus memastikan activitiesData sudah dimuat
    const activity = activitiesData.find(act => act.id === parseInt(activityId));
    const programTitle = activity ? activity.title.toUpperCase() : "PROGRAM TIDAK DITEMUKAN";

    const [formData, setFormData] = useState({
        keahlian: [], 
        komitmen: '', 
        portofolio: null, 
        divisi: '', 
        motivasi: '', 
    });
    
    // Fungsi untuk navigasi ke Langkah 3
    const handleLanjut = (e) => {
        e.preventDefault();
        // TODO: Lakukan validasi form di sini sebelum navigasi
        navigate(`/konfirmasi/${activityId}`); 
    };

    // Fungsi untuk navigasi kembali ke Langkah 1
    const handleKembali = () => {
        navigate(`/daftar/${activityId}`); 
    };
    
    // Helper untuk styling link navigasi (jika digunakan)
    const getLinkClass = (path) => {
        // location.pathname hanya tersedia di browser/React Router
        return location.pathname.startsWith(path) ? 'active-link' : '';
    };

    // Fungsi handle perubahan input (untuk form control yang sebenarnya)
    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                keahlian: checked 
                    ? [...prev.keahlian, value]
                    : prev.keahlian.filter(k => k !== value)
            }));
        } else if (type === 'file') {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    return (
        <div className="frame-9 daftar-relawan-page">
            
            {/* --- HEADER / NAVIGASI (frame-56) TELAH DIHAPUS --- */}
            {/* <header className="frame-56">
                <h1 className="logo-text">SatuAksi</h1> 
                <nav className="nav-links">
                    <Link to="/tentang" className={`tentang ${getLinkClass('/tentang')}`}>Tentang</Link>
                    <Link to="/" className={`beranda ${getLinkClass('/')}`}>Beranda</Link>
                    <Link to="/aktivitas" className={`aktivitas ${getLinkClass('/aktivitas')}`}>Aktivitas</Link>
                    <Link to="/kontak" className={`kontak ${getLinkClass('/kontak')}`}>Kontak</Link>
                </nav>
                <div className="login-button">Login</div>
            </header> */}
            
            {/* --- JUDUL HALAMAN (group-160) --- */}
            <section className="group-74 header-section">
                <h2 className="daftar-jadi-relawan-kami">Daftar Jadi Relawan Kami</h2>
                <p className="isi-formulir-dibawah-untuk-memulai-perjalanan-anda-sebagai-bagian-dari-keluarga-relawan-kami">
                    Isi formulir dibawah untuk memulai perjalanan anda
                    <br />
                    sebagai bagian dari keluarga relawan kami.
                </p>
            </section>

            {/* --- STEPPER / PROGRESS BAR --- */}
            <section className="stepper-section">
                <div className="group-58 stepper-item completed-step">
                    <div className="rectangle-48 checkmark">✅</div>
                    <div className="langkah-1-informasi-pribadi">Langkah 1: Informasi Pribadi</div>
                </div>
                <div className="group-61 stepper-item active-step">
                    <div className="rectangle-483">2</div>
                    <div className="langkah-2-keahlian-minat2">Langkah 2: Keahlian & Minat</div>
                </div>
                <div className="group-62 stepper-item">
                    <div className="rectangle-482">3</div>
                    <div className="langkah-3-konfirmasi-persetujuan">Langkah 3: Konfirmasi & Persetujuan</div>
                </div>
            </section>
            
            {/* --- FORMULIR UTAMA --- */}
            <form onSubmit={handleLanjut} className="group-84 form-container">
                <div className="group-166 form-box">
                    
                    {/* Program yang Didaftarkan (Info Card) */}
                    <div className="group-76 registration-info-card card-shadow"> 
                        <div className="group-161">
                            <p className="anda-sedang-mendaftar-untuk-program">
                                Anda Sedang Mendaftar Untuk Program:
                            </p>
                            <h3 className="rumah-belajar-starban">{programTitle}</h3>
                        </div>
                    </div>

                    {/* Langkah 2: Keahlian & Minat */}
                    <div className="group-164 form-step-2">
                        <h4 className="langkah-2-keahlian-minat">Langkah 2: Keahlian & Minat</h4>
                        
                        {/* KONTEN UTAMA: Grid 2 Kolom */}
                        <div className="step-2-content-grid">
                            
                            {/* KOLOM KIRI: Grid 2x2 (Keahlian, Komitmen, Divisi) */}
                            <div className="column-left column-grid-2x2">
                                
                                {/* 1. Keahlian Utama (Card Box - Full Width di baris 1) */}
                                <div className="input-group keahlian-group card-shadow full-grid-width">
                                    <label className="keahlian-utama-yang-dimiliki">Keahlian Utama yang Dimiliki*</label>
                                    <div className="checkbox-options selection-group grid-options">
                                        {KeahlianList.map(skill => (
                                            <label key={skill} className="selection-box checkbox-item">
                                                <input type="checkbox" name="keahlian" value={skill} onChange={handleChange} checked={formData.keahlian.includes(skill)}/>
                                                <span className="option-label">{skill}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* 2. Komitmen Waktu (Card Box - Kiri Bawah) */}
                                <div className="input-group commitment-group card-shadow">
                                    <label className="kestablian-waktu-komitmen">Komitmen Waktu*</label>
                                    <div className="radio-options selection-group">
                                        {KomitmenList.map(time => (
                                            <label key={time} className="selection-box radio-item">
                                                <input type="radio" name="komitmen" value={time} onChange={handleChange} checked={formData.komitmen === time}/>
                                                <span className="option-label">{time}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* 3. Divisi yang Diminati (Card Box - Kanan Bawah) */}
                                <div className="input-group divisi-group card-shadow">
                                    <label htmlFor="divisi" className="divisi-yang-diminati">Divisi yang Diminati*</label>
                                    <div className="radio-options selection-group">
                                        {DivisiList.map(div => (
                                            <label key={div.value} className="selection-box radio-item">
                                                <input type="radio" name="divisi" value={div.value} onChange={handleChange} checked={formData.divisi === div.value}/>
                                                <span className="option-label">{div.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            {/* KOLOM KANAN: Motivasi & Portofolio */}
                            <div className="column-right">
                                
                                {/* 4. Motivasi Bergabung (Textarea) */}
                                <div className="input-group motivation-group card-shadow">
                                    <label htmlFor="motivasi" className="motivasi-bergabung">Motivasi Bergabung*</label>
                                    <textarea 
                                        id="motivasi" 
                                        name="motivasi"
                                        placeholder="Jelaskan motivasi Anda bergabung..." 
                                        className="textarea-full-height"
                                        rows="10"
                                        onChange={handleChange}
                                        value={formData.motivasi}
                                    ></textarea>
                                </div>
                                
                                {/* 5. Portofolio / CV (File Upload) */}
                                <div className="input-group file-upload-group card-shadow">
                                    <label htmlFor="portofolio" className="portofolio-cv-wajib">Portofolio / CV (Wajib)*</label>
                                    <input 
                                        id="portofolio" 
                                        name="portofolio"
                                        type="file" 
                                        accept=".pdf,.doc,.docx" 
                                        onChange={handleChange}
                                    />
                                    {formData.portofolio && (
                                        <p className="file-name-display">File Terpilih: {formData.portofolio.name}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Pembungkus Tombol Navigasi */}
                    <div className="button-group-wrapper"> 
                        
                        {/* Tombol Kembali */}
                        <div className="group-57 back-step-button-wrapper">
                            <button type="button" onClick={handleKembali} className="group-81 back-step-button">
                                <div className="kembali-ke-langkah-sebelumnya">
                                    KEMBALI KE LANGKAH SEBELUMNYA
                                </div>
                            </button>
                        </div>
                        
                        {/* Tombol Lanjut */}
                        <div className="group-57 next-step-button-wrapper">
                            <button type="submit" className="group-81 next-step-button">
                                <div className="lanjut-ke-langkah-berikutnya">
                                    LANJUT KE LANGKAH BERIKUTNYA
                                </div>
                            </button>
                        </div>
                    </div>
                    
                </div>
            </form>
        </div>
    );
};

export default DaftarRelawanLangkah2;