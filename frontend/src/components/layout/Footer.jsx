import { Link } from 'react-router-dom';
import { Stethoscope, MapPin, Phone, Mail, Share2, MessageCircle, Camera, Link2 } from 'lucide-react';

function Footer() {
  return (
    <footer className="site-footer pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="footer-logo-badge">
                <Stethoscope size={18} color="#fff" />
              </span>
              <span className="fw-bold fs-5">MediCare+</span>
            </div>
            <p className="footer-text-muted">
              Connecting patients with trusted doctors. Book appointments online, anytime, anywhere.
            </p>
            <div className="d-flex gap-2 mt-3">
              {[Share2, MessageCircle, Camera, Link2].map((Icon, i) => (
                <a key={i} href="#" className="footer-social-icon">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/doctors" className="footer-link">Find Doctors</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="fw-semibold mb-3">For Patients</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/login" className="footer-link">Login</Link></li>
              <li><Link to="/register" className="footer-link">Register</Link></li>
              <li><Link to="/patient-dashboard" className="footer-link">My Dashboard</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="fw-semibold mb-3">Get In Touch</h6>
            <ul className="list-unstyled d-flex flex-column gap-3 footer-contact-list">
              <li className="d-flex align-items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Health Street, Wellness City, IN 110001</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <span>support@medicareplus.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center">
          <span className="footer-copyright">
            2026 MediCare Plus. All rights reserved.
          </span>
          <span className="footer-copyright">
            Built with care, for better healthcare access.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;