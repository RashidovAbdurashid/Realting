import React from "react";
import { ToastContainer, toast } from "react-toastify"; // React-toastify import qilindi
import "react-toastify/dist/ReactToastify.css"; // Toast stillari import qilindi
import "./Contact.css";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();

    // Alert o'rniga chiroyli toast xabarnomasi
    toast.success("Xabaringiz muvaffaqiyatli yuborildi! ✨", {
      position: "top-right",
      autoClose: 4000, // 4 soniyadan keyin o'zi yopiladi
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark", // Saytning premium/qorong'i dizayniga moslash uchun
    });

    // Xabar yuborilgach, input ichidagi yozuvlarni tozalab tashlash (UX uchun yaxshi amaliyot)
    e.target.reset();
  }

  return (
    <div className="page-container contact-page">
      <h2 className="section-title">
        Biz bilan <span>Bog'laning</span>
      </h2>
      <p className="section-subtitle">
        Savollaringiz bo'lsa, xabar qoldiring yoki to'g'ridan-to'g'ri aloqaga
        chiqing.
      </p>

      <div className="contact-grid">
        {/* Chap tomon: Aloqa ma'lumotlari */}
        <div className="contact-info glass-panel">
          <div>
            <h3>Aloqa Ma'lumotlari</h3>
            <p className="info-desc">
              Kompaniyamiz sizga yuqori darajada xizmat ko'rsatishga doimo
              tayyor.
            </p>
          </div>

          <div className="info-links">
            {/* Telefon */}
            <div className="info-item">
              <div className="icon-box">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h4>Telefon raqam</h4>
                <a href="tel:+998712000000">+998 (71) 200-00-00</a>
              </div>
            </div>

            {/* Email */}
            <div className="info-item">
              <div className="icon-box">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h4>Elektron Pochta</h4>
                <a href="mailto:info@primeestate.uz">info@primeestate.uz</a>
              </div>
            </div>

            {/* Manzil */}
            <div className="info-item">
              <div className="icon-box">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4>Asosiy Ofis</h4>
                <p>Toshkent sh., Amir Temur ko'chasi, 108-uy</p>
              </div>
            </div>
          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div className="social-media">
            <h4>Bizni kuzating:</h4>
            <div className="social-icons">
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                Telegram
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* O'ng tomon: Forma */}
        <form className="contact-form glass-panel" onSubmit={handleSubmit}>
          <h3>Xabar qoldirish</h3>

          <div className="form-group">
            <label>To'liq Ismingiz</label>
            <input type="text" placeholder="Ismingizni kiriting" required />
          </div>

          <div className="form-group">
            <label>Elektron pochta manzilingiz</label>
            <input type="email" placeholder="example@domain.com" required />
          </div>

          <div className="form-group">
            <label>Xabaringiz matni</label>
            <textarea
              rows="4"
              placeholder="Ushbu yerga yozishingizni yozing..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Yuborish
          </button>
        </form>
      </div>

      {/* Toast xabarnomalari chiqishi uchun konteyner (Shart!) */}
      <ToastContainer />
    </div>
  );
}
