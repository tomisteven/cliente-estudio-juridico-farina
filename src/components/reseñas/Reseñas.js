import React, { useState } from "react";
import "./Reseñas.css";
import reseñasData from "./completo_reseñas.json";

function ReviewerAvatar({ src, name }) {
  const [imageError, setImageError] = React.useState(false);

  // Determinar si es una imagen genérica o no tiene
  const hasNoImage = !src || src.includes("default-user") || imageError;

  const initials = React.useMemo(() => {
    if (!name) return "";
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return parts[0][0].toUpperCase();
  }, [name]);

  const avatarColor = React.useMemo(() => {
    const AVATAR_COLORS = [
      "#d97706", // amber
      "#2563eb", // blue
      "#059669", // emerald
      "#7c3aed", // violet
      "#db2777", // pink
      "#dc2626", // red
      "#0891b2", // cyan
      "#4f46e5", // indigo
      "#16a34a", // green
      "#ea580c"  // orange
    ];
    if (!name) return "#b59d83";
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % AVATAR_COLORS.length;
    return AVATAR_COLORS[index];
  }, [name]);

  if (hasNoImage) {
    return (
      <div 
        className="reviewer-avatar-placeholder" 
        style={{ backgroundColor: avatarColor }}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      className="reviewer-photo"
      onError={() => setImageError(true)}
    />
  );
}

export default function Reseñas() {
  const [currentPage, setCurrentPage] = useState(0);

  // Número de reseñas por página (responsive)
  const getReviewsPerPage = () => {
    if (window.innerWidth < 768) return 2; // Móvil: 1 columna x 2 filas
    if (window.innerWidth < 1024) return 4; // Tablet: 2 columnas x 2 filas
    return 8; // Desktop: 4 columnas x 2 filas
  };

  const [reviewsPerPage, setReviewsPerPage] = useState(getReviewsPerPage());

  React.useEffect(() => {
    const handleResize = () => {
      setReviewsPerPage(getReviewsPerPage());
      setCurrentPage(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(reseñasData.length / reviewsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  const getCurrentPageReviews = () => {
    const startIndex = currentPage * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    return reseñasData.slice(startIndex, endIndex);
  };

  const renderStars = (rating) => {
    const stars = [];
    const ratingNum = parseInt(rating);

    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < ratingNum ? "star filled" : "star"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="google-reviews-container" id="reseñas">
      <div className="reviews-header">
        <h2>Reseñas de Nuestros Clientes</h2>
        <div className="reviews-rating">
          <span className="rating-number">5</span>
          <div className="stars-display">
            {renderStars(5)}
          </div>
          <span className="reviews-count">({reseñasData.length} reseñas)</span>
        </div>
        <button
          className="button-agregar-reseña"
        ><a target="blank" href="https://g.page/r/CSNnClhe57tEEAE/review">Agregar Reseña en Google</a></button>
      </div>

      <div className="reviews-carousel">
        <button
          className="carousel-btn prev"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          ‹
        </button>

        <div className="reviews-grid">
          {getCurrentPageReviews().map((reseña, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <ReviewerAvatar
                  src={reseña["Foto de Perfil del Reseñador"]}
                  name={reseña["Nombre del Reseñador"]}
                />
                <div className="reviewer-info">
                  <h3 className="reviewer-name">{reseña["Nombre del Reseñador"]}</h3>
                  <div className="review-meta">
                    <div className="review-stars">
                      {renderStars(reseña["Calificación (Max 5)"])}
                    </div>
                    <span className="review-date">{reseña["Fecha de la Reseña"]}</span>
                  </div>
                </div>
              </div>

              {reseña["Texto de la Reseña"] && (
                <p className="review-text">{reseña["Texto de la Reseña"]}</p>
              )}



              {parseInt(reseña["Me Gusta"]) > 0 && (
                <div className="review-helpful">
                  <span className="helpful-icon">👍</span>
                  <span className="helpful-count">{reseña["Me Gusta"]}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          className="carousel-btn next"
          onClick={handleNext}
          disabled={currentPage >= totalPages - 1}
        >
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${currentPage === index ? 'active' : ''}`}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </div>
    </div>
  );
}
