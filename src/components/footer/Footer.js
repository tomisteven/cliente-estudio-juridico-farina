import React from "react";
import "./Footer.css";
import logoNegro from "../../assets/logonegro.png";

const Footer = () => {
    return (
        <footer className="footer-modern">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Section 1: Brand & About */}
                    <div className="footer-section brand-section">
                        <img src={logoNegro} alt="Estudio Fariña Balbi" className="footer-logo" />
                        <p className="footer-description">
                            Dr. Julian Farina Balbi. Jurista penalista especializado en delitos sexuales y falsas denuncias. Excelencia legal y compromiso ético.
                        </p>
                    </div>

                    {/* Section 2: Specialty Links */}
                    <div className="footer-section">
                        <h4 className="footer-title">Especialidades</h4>
                        <ul className="footer-list">
                            <li><a href="#servicios">Delitos Sexuales</a></li>
                            <li><a href="#servicios">Falsas Denuncias</a></li>
                            <li><a href="#servicios">Derecho Penal</a></li>
                            <li><a href="#servicios">Urgencias 24hs</a></li>
                        </ul>
                    </div>

                    {/* Section 3: Navigation */}
                    <div className="footer-section">
                        <h4 className="footer-title">Navegación</h4>
                        <ul className="footer-list">
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#acercade">Presentación</a></li>
                            <li><a href="#estudio">El Estudio</a></li>
                            <li><a href="#">Reseñas</a></li>
                        </ul>
                    </div>

                    {/* Section 4: Contact */}
                    <div className="footer-section contact-section">
                        <h4 className="footer-title">Contacto</h4>
                        <div className="contact-item">
                            <i className="fa fa-map-marker"></i>
                            <span>Plaza Paso 159, Piso 5 B, La Plata</span>
                        </div>
                        <div className="contact-item">
                            <i className="fa fa-map-marker"></i>
                            <span>Av. Callao 569, Piso 3, CABA</span>
                        </div>
                        <div className="contact-item">
                            <i className="fa fa-phone"></i>
                            <a href="tel:+5492215619155">+54 9 221 561-9155</a>
                        </div>
                        <div className="contact-item">
                            <i className="fa fa-envelope"></i>
                            <a href="mailto:drfarinabalbi@gmail.com">drfarinabalbi@gmail.com</a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} Estudio Jurídico Fariña Balbi. Todos los derechos reservados.</p>
                    <div className="footer-social">
                        <a href="#" className="social-icon"><i className="fa fa-facebook"></i></a>
                        <a href="https://x.com/drfarinabalbi" className="social-icon"><i className="fa fa-twitter"></i></a>
                        <a href="https://www.instagram.com/abogado.penalista.farina.balbi/" className="social-icon"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
