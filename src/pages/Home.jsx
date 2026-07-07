import React from "react";
import { useNavigate } from "react-router-dom";
// Ikonkalarni import qilamiz (Remix Icons to'plamidan)
import {
  RiShieldKeyholeLine,
  RiHomeWifiLine,
  RiBankLine,
} from "react-icons/ri";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page-container">
      {/* 1. ULKAN HERO SECTION */}
      <section className="grand-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-badge">Eksklyuziv Ko'chmas Mulk Agentligi</span>
          <h1>
            Maftunkor Hayot <br />
            <span>Siz Kutgan Mukammallik</span>
          </h1>
          <p>
            Toshkentning eng nufuzli hududlarida joylashgan premium villalar,
            futuristik loftlar va osmono'par penthouse-lar faqat siz uchun.
          </p>

          <div className="hero-btn-group">
            <button
              className="main-glow-btn"
              onClick={() => navigate("/properties")}
            >
              Katalogni Ko'rish
            </button>
            <button
              className="secondary-outline-btn"
              onClick={() => navigate("/contact")}
            >
              Konsultatsiya Olish
            </button>
          </div>
        </div>
      </section>

      {/* 2. ULKAN STATISTIKA BLOKI */}
      <section className="grand-stats glass-panel">
        <div className="stat-card">
          <h2>$2.5B+</h2>
          <p>Umumiy Savdolar</p>
        </div>
        <div className="stat-card-divider"></div>
        <div className="stat-card">
          <h2>450+</h2>
          <p>Lyuks Obyektlar</p>
        </div>
        <div className="stat-card-divider"></div>
        <div className="stat-card">
          <h2>99.8%</h2>
          <p>Mamnun Mijozlar</p>
        </div>
        <div className="stat-card-divider"></div>
        <div className="stat-card">
          <h2>12 Yil</h2>
          <p>Xalqaro Tajriba</p>
        </div>
      </section>

      {/* 3. PREMIUM XIZMATLAR KO'RGAZMASI */}
      <section className="home-why-us">
        <div className="container">
          <h2 className="big-title">
            Nega Aynan <span>Bizning Rezidensiyalar?</span>
          </h2>
          <p className="big-subtitle">
            Har bir detal yuqori did egalari uchun maxsus loyihalashtirilgan.
          </p>

          <div className="luxury-features-grid">
            {/* 1-xususiyat */}
            <div className="feature-glow-box">
              <div className="feat-icon">
                <RiShieldKeyholeLine size={42} color="#a855f7" />
              </div>
              <h3>Mutloq Maxfiylik</h3>
              <p>
                24/7 qattiq qo'riqlash tizimi, yopiq hududlar va shaxsiy
                xavfsizlik arxitekturasi.
              </p>
            </div>

            {/* 2-xususiyat */}
            <div className="feature-glow-box">
              <div className="feat-icon">
                <RiHomeWifiLine size={42} color="#a855f7" />
              </div>
              <h3>Smart Home 5.0</h3>
              <p>
                Uyingizdagi barcha jihozlar va iqlim nazoratini dunyoning
                istalgan nuqtasidan boshqaring.
              </p>
            </div>

            {/* 3-xususiyat */}
            <div className="feature-glow-box">
              <div className="feat-icon">
                <RiBankLine size={42} color="#a855f7" />
              </div>
              <h3>Eksklyuziv Arxitektura</h3>
              <p>
                Italiyalik va Buyuk Britaniyalik mashhur dizaynerlar tomonidan
                yaratilgan mualliflik interyerlari.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-cta-banner">
        <div className="cta-blur-circle"></div>
        <div className="cta-inner">
          <h2>Shaxsiy Imperiyangizni Qurish Vaqti Keldi</h2>
          <p>
            Sotuv bo'limimiz haftada 7 kun davomida sizga eng oliy darajada
            xizmat ko'rsatishga tayyor.
          </p>
          <button
            className="cta-action-btn"
            onClick={() => navigate("/contact")}
          >
            Sotuv Bo'limi Bilan Bog'lanish
          </button>
        </div>
      </section>
    </div>
  );
}
