import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="page-container about-page">
      {/* 1. YIRIK HEADER */}
      <div className="about-hero-header">
        <h1 className="section-title">
          Biz Haqimizda: <span>Mukammallik Tarixi</span>
        </h1>
        <p className="section-subtitle">
          Ko'chmas mulk olamidagi eng baland cho'qqilar va unutilmas xizmat
          sifati.
        </p>
      </div>

      {/* 2. TA'RIF VA RASMLI BLOK */}
      <section className="about-story-grid">
        <div className="story-text-side">
          <h2>
            Biz Shunchaki Uy Sotmaymiz, Biz <span>Yangi Turmush Tarzini</span>{" "}
            Yaratamiz
          </h2>
          <p className="lead-p">
            2014-yildan buyon kompaniyamiz O'zbekiston va Markaziy Osiyo
            bozorida eng yuqori toifadagi lyuks obyektlarni taqdim etib
            kelmoqda.
          </p>
          <p>
            Biz mijozlarimizning vaqti, xavfsizligi hamda maxfiyligini barcha
            narsadan ustun qo'yamiz. Biz taqdim etadigan har bir villa va
            xonadon chuqur tahliliy ko'rikdan o'tkaziladi va faqat mukammal deb
            topilganlarigina katalogimizga qo'shiladi.
          </p>

          <div className="mini-badges-row">
            <div className="mini-badge">🎖️ Milliy Brend</div>
            <div className="mini-badge">⚡ Tezkor Rasmiylashtirish</div>
            <div className="mini-badge">🔒 100% Legal Kafolat</div>
          </div>
        </div>
        <div className="story-image-side">
          <div className="image-border-glow">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
              alt="Luxury Architecture"
            />
          </div>
        </div>
      </section>

      {/* 3. KOMPANIYA QADRIYATLARI GRIDI */}
      <section className="about-values-section">
        <h2 className="sub-section-title">
          Bizning Oliy <span>Qadriyatlarimiz</span>
        </h2>

        <div className="values-grid">
          <div className="value-card">
            <span className="value-num">01</span>
            <h3>Halollik va Shaffoflik</h3>
            <p>
              Hech qanday yashirin to'lovlar yoki kutilmagan komissiyalar yo'q.
              Shartnomalar xalqaro huquq standartlariga to'liq mos keladi.
            </p>
          </div>

          <div className="value-card">
            <span className="value-num">02</span>
            <h3>Individual Yondashuv</h3>
            <p>
              Har bir xaridorga shaxsiy broker biriktiriladi. U sizning barcha
              injoqliklaringiz va istaklaringizni inobatga oladi.
            </p>
          </div>

          <div className="value-card">
            <span className="value-num">03</span>
            <h3>Eksklyuzivlik</h3>
            <p>
              Bizdagi obyektlarning 80% qismi ochiq bozorda sotilmaydi
              (Off-market). Ular faqat bizning yopiq klubimiz a'zolariga taqdim
              etiladi.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PRESTIJLI HAMKORLAR */}
      <section className="about-partners">
        <h3>Bizga Ishongan Global Brendlar</h3>
        <div className="partners-flex">
          <span className="partner-logo">Toshkent City</span>
          <span className="partner-logo">Murad Buildings</span>
          <span className="partner-logo">Golden House</span>
          <span className="partner-logo">First Development Group</span>
        </div>
      </section>
    </div>
  );
}
