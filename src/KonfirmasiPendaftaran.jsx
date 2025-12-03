// src/KonfirmasiPendaftaran.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DaftarRelawan.css'; // Menggunakan CSS yang sama

const KonfirmasiPendaftaran = () => {
    const { activityId } = useParams();
    
    return (
        <div className="daftar-relawan-page" style={{textAlign: 'center', paddingTop: '100px'}}>
            <h1 style={{color: '#0A192F'}}>🎉 Pendaftaran Berhasil! 🎉</h1>
            <p style={{fontSize: '18px', color: '#333'}}>
                Selamat! Anda telah mencapai Langkah 3: Konfirmasi dan Persetujuan.
                <br />
                ID Aktivitas yang Anda daftarkan: **{activityId}**
            </p>
            
            <div className="group-57" style={{marginTop: '40px'}}>
                <Link to="/aktivitas" style={{textDecoration: 'none'}}>
                    <button className="group-81 next-step-button" style={{padding: '15px 30px', backgroundColor: '#64FFDA', color: '#0A192F', border: 'none'}}>
                        KEMBALI KE AKTIVITAS
                    </button>
                </Link>
            </div>
            
            {/* Stepper simulasi untuk Langkah 3 */}
            <section className="stepper-section" style={{maxWidth: '600px', margin: '50px auto'}}>
                <div className="group-58 stepper-item completed-step">
                    <div className="rectangle-48 checkmark">✅</div>
                    <div className="langkah-1-informasi-pribadi2">Langkah 1</div>
                </div>
                <div className="group-61 stepper-item completed-step">
                    <div className="rectangle-483 checkmark">✅</div>
                    <div className="langkah-2-keahlian-minat">Langkah 2</div>
                </div>
                <div className="group-62 stepper-item active-step">
                    <div className="rectangle-482">3</div>
                    <div className="langkah-3-konfirmasi-persetujuan">Langkah 3</div>
                </div>
            </section>
        </div>
    );
};

export default KonfirmasiPendaftaran;