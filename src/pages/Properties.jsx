import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaSearch,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa"; // Kerakli ikonkalarni import qilamiz
import "react-toastify/dist/ReactToastify.css";
import "./Properties.css";

export default function Properties() {
  const navigate = useNavigate();
  const [selectedProperty, setSelectedProperty] = useState(null);

  // --- FILTRLAR UCHUN HOLATLAR (STATE) ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");

  // --- MULTI-KARTALAR RO'YXATI (12 TA PRESTIJLI OBYEKT) ---
  const properties = [
    {
      id: 1,
      type: "Villa",
      priceNum: 2450000,
      price: "$2,450,000",
      title: "Black Diamond Villa",
      location: "Toshkent, Mirzo Ulug'bek",
      beds: 5,
      baths: 4,
      area: "850 kv.m",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
      description:
        "Smart Home (Aqlli uy) tizimi, shaxsiy issiq basseyn, fitnes zal va 24/7 video nazorat tizimi bilan jihozlangan premium villa.",
      features: ["Hovuz va Jakuzi", "3 ta garaj", "Smart Home"],
    },
    {
      id: 2,
      type: "Penthouse",
      priceNum: 1850000,
      price: "$1,850,000",
      title: "Skyline Penthouse",
      location: "Toshkent City",
      beds: 3,
      baths: 3,
      area: "420 kv.m",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
      description:
        "Toshkent City markazidagi osmono'par binoning eng yuqori qavatida joylashgan lyuks penthouse. Panoramali oynalarga ega.",
      features: ["Panoramali manzara", "Katta terrasa", "Maxsus lift"],
    },
    {
      id: 3,
      type: "Hovli",
      priceNum: 4200000,
      price: "$4,200,000",
      title: "Royal Estate Hovli",
      location: "Toshkent, Yakkasaroy",
      beds: 7,
      baths: 6,
      area: "1200 kv.m",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
      description:
        "Klassik va zamonaviy arxitektura uyg'unligida qurilgan hashamatli hovli. Kinoteatr xonasi va sauna mavjud.",
      features: ["Qishki/Yozgi hovuz", "Sauna", "Shaxsiy kinoteatr"],
    },
    {
      id: 4,
      type: "Loft",
      priceNum: 890000,
      price: "$890,000",
      title: "Urban Loft",
      location: "Toshkent, Yunusobod",
      beds: 2,
      baths: 2,
      area: "180 kv.m",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
      description:
        "Minimalizm va Cyberpunk uslubini xush ko'ruvchilar uchun ideal tanlov. Shiftlari baland va neon yoritgichli.",
      features: ["Baland shiftlar", "Neon yoritish", "Metroga yaqin"],
    },
    {
      id: 5,
      type: "Hovli",
      priceNum: 5500000,
      price: "$5,500,000",
      title: "Presidential Mansion",
      location: "Qibray, Toshkent vil.",
      beds: 8,
      baths: 7,
      area: "2000 kv.m",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      description:
        "Eksklyuziv qarorgoh. Keng maydon, ulkan bog', sun'iy sharshara va tennis kortiga ega bo'lgan eng qimmatli obyekt.",
      features: ["Tennis korti", "Sun'iy sharshara", "Helipad"],
    },
    {
      id: 6,
      type: "Villa",
      priceNum: 1200000,
      price: "$1,200,000",
      title: "Chorvoq Lake Resort",
      location: "Bo'stonliq, Chorvoq",
      beds: 4,
      baths: 3,
      area: "600 kv.m",
      image:
        "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?auto=format&fit=crop&q=80",
      description:
        "Tog' yonbag'rida, Chorvoq suv omboriga qaragan ajoyib dacha. Toza havo, sokinlik va betakror tabiat manzarasi.",
      features: ["Ko'l manzarasi", "Isitiladigan hovuz", "Barbekyu zona"],
    },
    {
      id: 7,
      type: "Apartment",
      priceNum: 450000,
      price: "$450,000",
      title: "Golden Horizon Flat",
      location: "Toshkent, Chilonzor",
      beds: 3,
      baths: 2,
      area: "140 kv.m",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80",
      description:
        "Premium toifadagi turar-joy majmuasida joylashgan zamonaviy va shinam oilaviy xonadon.",
      features: ["24/7 Muhofaza", "Bolalar maydonchasi", "Mebel bilan"],
    },
    {
      id: 8,
      type: "Penthouse",
      priceNum: 2900000,
      price: "$2,900,000",
      title: "Infinity Sky Penthouse",
      location: "Toshkent, Mirobod",
      beds: 4,
      baths: 4,
      area: "510 kv.m",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80",
      description:
        "Mirobod markazidagi eng hashamatli osmono'par majmuada joylashgan terrasalik va jakuzilik penthouse.",
      features: ["Jakuzi", "Ochiq osmon ostida terrasa", "Smart Lock"],
    },
    {
      id: 9,
      type: "Villa",
      priceNum: 3100000,
      price: "$3,100,000",
      title: "White Marble Villa",
      location: "Toshkent, Shayxontohur",
      beds: 6,
      baths: 5,
      area: "920 kv.m",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80",
      description:
        "Oq mramor va shishadan ishlangan futuristik villa. Shaxsiy sharshara va ulkan yozgi hovuzga ega.",
      features: ["Oq mramor dizayn", "Yozgi oshxona", "Yashil landshaft"],
    },
    {
      id: 10,
      type: "Loft",
      priceNum: 650000,
      price: "$650,000",
      title: "Cyberpunk Studio Loft",
      location: "Toshkent, Yakkasaroy",
      beds: 1,
      baths: 2,
      area: "120 kv.m",
      image:
        "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80",
      description:
        "Baland derazalar va qora interyerli eng zamonaviy texnika bilan jihozlangan yuqori texnologiyali loft.",
      features: ["High-Tech jihozlar", "Kino proyektor", "Karnay tizimi"],
    },
    {
      id: 11,
      type: "Hovli",
      priceNum: 4800000,
      price: "$4,800,000",
      title: "Eco Green Mansion",
      location: "Zangiota, Toshkent vil.",
      beds: 9,
      baths: 8,
      area: "2200 kv.m",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80",
      description:
        "Atrof-muhit bilan to'liq uyg'unlikda qurilgan, quyosh panellari bilan ta'minlangan ulkan yashil ekologik hovli.",
      features: ["Quyosh panellari", "Meva bog'i", "Katta fin saunasi"],
    },
    {
      id: 12,
      type: "Apartment",
      priceNum: 720000,
      price: "$720,000",
      title: "Sapphire Sky Apartment",
      location: "Toshkent, Yashnobod",
      beds: 3,
      baths: 2,
      area: "200 kv.m",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
      description:
        "Premium darajadagi zamonaviy dizayn. Keng xonalar va markaziy parkka qaragan ajoyib manzarali derazalar.",
      features: ["Park manzarasi", "Yer osti avtoturargoh", "Yangi ta'mir"],
    },
  ];

  // --- FILTRLASH LOGIKASI ---
  const filteredProperties = properties.filter(function (item) {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = selectedType === "All" || item.type === selectedType;

    let matchesPrice = true;
    if (selectedPriceRange === "under1M")
      matchesPrice = item.priceNum < 1000000;
    else if (selectedPriceRange === "1Mto3M")
      matchesPrice = item.priceNum >= 1000000 && item.priceNum <= 3000000;
    else if (selectedPriceRange === "over3M")
      matchesPrice = item.priceNum > 3000000;

    return matchesSearch && matchesType && matchesPrice;
  });

  function handlePurchase(title) {
    setSelectedProperty(null);
    toast.success(`Sotuv bo'limiga yo'naltirilmoqdasiz...`, {
      position: "bottom-right",
      autoClose: 2000,
      theme: "dark",
      icon: <FaPaperPlane color="#00df9a" />, // Toast ichidagi emoji ikonka bilan almashtirildi
    });
    setTimeout(function () {
      navigate("/contact");
    }, 2000);
  }

  return (
    <div className="page-container properties-page">
      <h2 className="section-title">
        Eksklyuziv <span>Obyektlar</span>
      </h2>
      <p className="section-subtitle">
        Mukammal uyni topish uchun aqlli filtrlardan foydalaning.
      </p>

      {/* --- INTELLEKTUAL FILTRLAR PANELI --- */}
      <div className="filter-panel glass-panel">
        <div className="filter-group search-box">
          <label>Qidiruv</label>
          <div
            className="search-input-wrapper"
            style={{ position: "relative" }}
          >
            <input
              type="text"
              placeholder="Nomi yoki joylashuvini yozing..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingLeft: "30px" }}
            />
            <FaSearch
              className="search-icon"
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#888",
              }}
            />
          </div>
        </div>

        <div className="filter-group">
          <label>Uy Turi</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="All">Barchasi ({properties.length})</option>
            <option value="Villa">Villa</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Hovli">Hovli/Mansion</option>
            <option value="Loft">Loft</option>
            <option value="Apartment">Apartment</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Narx Diapazoni</label>
          <select
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
          >
            <option value="All">Barcha Narxlar</option>
            <option value="under1M">$1,000,000 gacha</option>
            <option value="1Mto3M">$1,000,000 - $3,000,000</option>
            <option value="over3M">$3,000,000 dan yuqori</option>
          </select>
        </div>
      </div>

      {/* --- OBYEKTLAR RO'YXATI GRIDI --- */}
      {filteredProperties.length > 0 ? (
        <div className="properties-grid">
          {filteredProperties.map(function (item) {
            return (
              <div
                className="property-card glass-panel"
                key={item.id}
                onClick={() => setSelectedProperty(item)}
              >
                <div className="card-img-container">
                  <img src={item.image} alt={item.title} />
                  <span className="status-badge">{item.type}</span>
                </div>
                <div className="card-body">
                  <h3 className="prop-price">{item.price}</h3>
                  <h4 className="prop-title">{item.title}</h4>
                  <p className="prop-location">
                    <FaMapMarkerAlt className="icon-margin" /> {item.location}
                  </p>
                  <div className="prop-features-grid">
                    <div className="feature-item">
                      <FaBed className="icon-margin" />{" "}
                      <span>{item.beds} xona</span>
                    </div>
                    <div className="feature-item">
                      <FaBath className="icon-margin" />{" "}
                      <span>{item.baths} hammom</span>
                    </div>
                    <div className="feature-item">
                      <FaRulerCombined className="icon-margin" />{" "}
                      <span>{item.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          className="no-results glass-panel"
          style={{ textAlign: "center", padding: "40px" }}
        >
          <FaSearch size={40} style={{ color: "#888", marginBottom: "15px" }} />
          <h3>Obyekt topilmadi</h3>
          <p>
            Kiritilgan parametrlarga mos keladigan e'lonlar mavjud emas.
            Filtrlarni o'zgartirib ko'ring.
          </p>
        </div>
      )}

      {/* --- IXCHAM LUXURY MODAL OYNA --- */}
      {selectedProperty !== null && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProperty(null)}
        >
          <div
            className="luxury-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProperty(null)}
            >
              ✕
            </button>

            <div className="modal-hero-image">
              <img src={selectedProperty.image} alt={selectedProperty.title} />
              <div className="modal-price-badge">{selectedProperty.price}</div>
            </div>

            <div className="modal-details-body">
              <h2>{selectedProperty.title}</h2>
              <p className="modal-location-text">
                <FaMapMarkerAlt className="icon-margin" />{" "}
                {selectedProperty.location}
              </p>

              <div className="modal-specs-row">
                <div className="spec-tag">
                  <FaBed className="icon-margin" /> {selectedProperty.beds} xona
                </div>
                <div className="spec-tag">
                  <FaBath className="icon-margin" /> {selectedProperty.baths}{" "}
                  hammom
                </div>
                <div className="spec-tag">
                  <FaRulerCombined className="icon-margin" />{" "}
                  {selectedProperty.area}
                </div>
              </div>

              <p className="modal-description-text">
                {selectedProperty.description}
              </p>

              <div className="modal-amenities-section">
                <h3>Premium Qulayliklar:</h3>
                <div className="amenities-container">
                  {selectedProperty.features.map((feature, idx) => (
                    <span key={idx} className="amenity-item-tag">
                      <FaCheckCircle
                        className="icon-margin-small"
                        style={{ color: "#00df9a" }}
                      />{" "}
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <button
                className="modal-submit-buy-btn"
                onClick={() => handlePurchase(selectedProperty.title)}
              >
                Sotib Olishni Rasmiylashtirish →
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}
