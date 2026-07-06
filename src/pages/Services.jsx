import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

export default function Services() {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(null);
  
  const services = [
    {
      id: 1,
      // Toza SVG Imorat ikonkasi
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="purple-icon"
        >
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"></path>
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
          <path d="M10 6h4"></path>
          <path d="M10 10h4"></path>
          <path d="M10 14h4"></path>
          <path d="M10 18h4"></path>
        </svg>
      ),
      title: "Mulk Sotib Olish",
      shortDesc:
        "Sizning talablaringizga mos keladigan eng yaxshi obyektlarni topish va xarid jarayonini to'liq nazorat qilish.",
      fullDesc:
        "Bizning ekspertlarimiz bozorning eng yopiq va eksklyuziv obyektlariga kirish huquqiga ega. Sizning byudjetingiz, didingiz va yashash tarzingizga to'liq mos keladigan uyni topamiz. Barcha huquqiy hujjatlarni tekshirish va oldi-sotdi jarayonini xavfsiz o'tkazishni o'z zimmamizga olamiz.",
      price: "$500 dan boshlab",
      features: [
        "Bozor tahlili",
        "Obyektlarni saralash",
        "Huquqiy kafolat",
        "Narxni muzokara qilish",
      ],
    },
    {
      id: 2,
      // Toza SVG Grafik/O'sish ikonkasi
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="purple-icon"
        >
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      ),
      title: "Investitsiya Maslahati",
      shortDesc:
        "Daromad keltiruvchi tijorat va yashash joylariga sarmoya kiritish bo'yicha ekspert maslahatlari.",
      fullDesc:
        "Ko'chmas mulk bozorida to'g'ri investitsiya qisqa vaqt ichida yuqori daromad keltirishi mumkin. Biz sizga xavf-xatarlari past, ammo potensiali yuqori bo'lgan obyektlarni taklif etamiz va ROI (Investitsiya qaytimi) hisobotlarini taqdim etamiz.",
      price: "$1,000 / maslahat",
      features: [
        "ROI hisoblash",
        "Bozor prognozi",
        "Tijorat mulklari tahlili",
        "Soliq maslahatlari",
      ],
    },
    {
      id: 3,
      // Toza SVG Kalit ikonkasi
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="purple-icon"
        >
          <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3M15.5 7.5 14 6h-1.5"></path>
        </svg>
      ),
      title: "Mulkni Boshqarish",
      shortDesc:
        "Ijaraga berilgan mulklaringizni xavfsiz va samarali boshqarish xizmatlari.",
      fullDesc:
        "Sizning vaqtingizni tejang. Biz sizning mulkingizni ijaraga berish, ishonchli ijarachilarni topish, oylik to'lovlarni nazorat qilish va texnik xizmat ko'rsatish ishlarini to'liq o'z zimmamizga olamiz. Mulkingiz doimo xavfsiz qo'llarda bo'ladi.",
      price: "Ijara daromadidan 10%",
      features: [
        "Ijarachilarni topish",
        "Shartnoma nazorati",
        "Texnik xizmat",
        "Oylik hisobotlar",
      ],
    },
  ];

  function openModal(service) {
    setActiveService(service);
  }

  function closeModal() {
    setActiveService(null);
  }

  return (
    <div className="page-container services-page">
      <h2 className="section-title">
        Bizning <span>Xizmatlar</span>
      </h2>
      <p className="section-subtitle">
        Batafsil ma'lumot olish uchun kartalar ustiga bosing.
      </p>

      <div className="services-grid">
        {services.map(function (service) {
          return (
            <div
              className="service-card glass-panel"
              key={service.id}
              onClick={function () {
                openModal(service);
              }}
            >
              <div className="icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>
              <button className="read-more-btn">
                Batafsil ko'rish
                {/* O'ngga ko'rsatkich SVG */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginLeft: "6px" }}
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          );
        })}
      </div>

      {/* Modal (Popup) */}
      {activeService !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content glass-panel"
            onClick={function (e) {
              e.stopPropagation();
            }}
          >
            <button className="close-btn" onClick={closeModal}>
              {/* Yopish (X) SVG */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="modal-header">
              <div className="icon-wrapper">{activeService.icon}</div>
              <h2>{activeService.title}</h2>
            </div>

            <p className="modal-desc">{activeService.fullDesc}</p>

            <div className="modal-features">
              <h4>Xizmat afzalliklari:</h4>
              <ul>
                {activeService.features.map(function (feature, index) {
                  return (
                    <li key={index} className="modal-feature-item">
                      {/* Tasdiqlash (Check) SVG */}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="purple-icon"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="modal-footer">
              <span className="modal-price">{activeService.price}</span>
              <button
                className="order-btn"
                onClick={() => navigate("/consultation")}
              >
                Buyurtma berish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
