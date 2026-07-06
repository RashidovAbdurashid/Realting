import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Consultation.css";

export default function Consultation() {
  // Shaxsiy brokerlar ro'yxati
  const brokers = [
    {
      id: 1,
      name: "Aleksandr Volkov",
      role: "Premium Villalar Bo'yicha Ekspert",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Madina Axmedova",
      role: "Toshkent City Penthouse Brokeri",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    },
  ];

  // Forma holatlari (State)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    brokerId: "1",
    date: "",
    time: "10:00",
    notes: "",
  });

  // Inputlar o'zgarganda ishlaydigan funksiya
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(function (prev) {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  // Formani jo'natish funksiyasi
  function handleSubmit(e) {
    e.preventDefault();

    // Oddiy tekshiruv
    if (!formData.fullName || !formData.phone || !formData.date) {
      toast.error("⚠️ Iltimos, barcha muhim maydonlarni to'ldiring!", {
        position: "bottom-right",
        theme: "dark",
      });
      return;
    }

    const selectedBroker = brokers.find(function (b) {
      return b.id === Number(formData.brokerId);
    });

    // Muvaffaqiyatli xabar
    toast.success(
      `👑 Rahmat, ${formData.fullName}! ${formData.date} kuni soat ${formData.time}da ${selectedBroker.name} bilan VIP konsultatsiya muvaffaqiyatli band qilindi.`,
      {
        position: "bottom-right",
        autoClose: 5000,
        theme: "dark",
      },
    );

    // Formani tozalash
    setFormData({
      fullName: "",
      phone: "",
      brokerId: "1",
      date: "",
      time: "10:00",
      notes: "",
    });
  }

  return (
    <div className="page-container consultation-page">
      <div className="consultation-header">
        <span className="premium-badge">VIP Xizmat</span>
        <h1 className="section-title">
          Shaxsiy <span>Konsultatsiya</span>
        </h1>
        <p className="section-subtitle">
          Sizning vaqtingiz biz uchun qadriyat. Shaxsiy brokeringiz bilan
          uchrashuv vaqtini belgilang.
        </p>
      </div>

      <div className="consultation-split-grid">
        {/* CHAP TOMON: FORMALARI PANELI */}
        <div className="consultation-card-form glass-panel">
          <h2>
            Uchrashuvni <span>Band Qilish</span>
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="form-input-group">
              <label>F.I.Sh. *</label>
              <input
                type="text"
                name="fullName"
                placeholder="Ism va familiyangizni kiriting"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-input-group">
              <label>Telefon Raqamingiz *</label>
              <input
                type="tel"
                name="phone"
                placeholder="+998 (90) 123-4567"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-input-row">
              <div className="form-input-group">
                <label>Sana *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-input-group">
                <label>Qulay Vaqt *</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                >
                  <option value="10:00">10:00</option>
                  <option value="12:00">12:00</option>
                  <option value="14:00">14:00</option>
                  <option value="16:00">16:00</option>
                  <option value="18:00">18:00</option>
                </select>
              </div>
            </div>

            <div className="form-input-group">
              <label>Premium Brokerni Tanlang</label>
              <select
                name="brokerId"
                value={formData.brokerId}
                onChange={handleInputChange}
              >
                {brokers.map(function (broker) {
                  return (
                    <option key={broker.id} value={broker.id}>
                      {broker.name} ({broker.role})
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="form-input-group">
              <label>Qo'shimcha Istaklar (Ixtiyoriy)</label>
              <textarea
                name="notes"
                rows="3"
                placeholder="Obyekt turi yoki alohida talablaringiz bo'lsa yozib qoldiring..."
                value={formData.notes}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button type="submit" className="consultation-submit-btn">
              VIP Uchrashuvni Tasdiqlash →
            </button>
          </form>
        </div>

        {/* O'NG TOMON: BROKERLAR KO'RGAZMASI */}
        <div className="brokers-showcase-side">
          <div className="info-glow-card glass-panel">
            <h3>Nega shaxsiy uchrashuv?</h3>
            <p>
              Bizning yetakchi ekspertlarimiz sizga ochiq bozorda mavjud
              bo'lmagan maxfiy (off-market) obyektlar katalogini shaxsan taqdim
              etadi va investitsion tahlillarni amalga oshiradi.
            </p>
          </div>

          <h3 className="sidebar-title">Bizning Ekspertlar</h3>
          <div className="brokers-vertical-list">
            {brokers.map(function (broker) {
              return (
                <div
                  className="broker-mini-profile glass-panel"
                  key={broker.id}
                >
                  <img src={broker.image} alt={broker.name} />
                  <div className="broker-mini-details">
                    <h4>{broker.name}</h4>
                    <p>{broker.role}</p>
                    <span className="broker-status-dot">● Hozir faol</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
