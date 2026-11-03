import { Link, useNavigate } from 'react-router-dom';
import {
  Search, Clock, ArrowRight, Star, Heart, ShieldCheck,
  MapPin, Brain, Bone, Baby, Eye, Sparkles, ChevronRight, Users
} from 'lucide-react';
import { doctors } from '../data/doctors';
import './Home.css';

const specialtyIcons = [
  { name: 'Cardiologist', icon: Heart, color: '#EF4444', bg: '#FEE2E2' },
  { name: 'Neurologist', icon: Brain, color: '#8B5CF6', bg: '#EDE9FE' },
  { name: 'Orthopedic', icon: Bone, color: '#F59E0B', bg: '#FEF3C7' },
  { name: 'Pediatrician', icon: Baby, color: '#22C55E', bg: '#DCFCE7' },
  { name: 'Ophthalmologist', icon: Eye, color: '#2563EB', bg: '#EFF6FF' },
  { name: 'Dermatologist', icon: Sparkles, color: '#EC4899', bg: '#FCE7F3' },
];

function Home() {
  const navigate = useNavigate();
  const topDoctors = doctors.slice(0, 3);

  return (
    <div className="home-page">
      {/* ================= HERO ================= */}
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <span className="hero-eyebrow">
                <Sparkles size={14} /> India's #1 Doctor Booking Platform
              </span>
              <h1 className="hero-heading">
                Book Trusted Doctors <span className="highlight">Within Minutes</span>
              </h1>
              <p className="hero-subheading">
                Search doctors, hospitals, and specialties near you — compare ratings, fees, and availability, then book an appointment instantly.
              </p>

              <div className="hero-btn-group">
                <button onClick={() => navigate('/doctors')} className="hero-btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                  Book Appointment <ArrowRight size={16} />
                </button>
                
              </div>

              <div className="hero-trust-row">
                <div className="hero-avatars">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" />
                </div>
                <span className="hero-trust-text">
                  <strong>50,000+</strong> patients trust MediCare+
                </span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="hero-visual-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80"
                    alt="Doctor"
                    className="hero-visual-img"
                  />
                  <div className="hero-float-card hero-float-1">
                    <span className="icon-badge" style={{ background: '#DCFCE7' }}>
                      <Clock size={16} color="#22C55E" />
                    </span>
                    <div>
                      <div className="hero-float-title">Available Today</div>
                      <div className="hero-float-sub">Book in 2 minutes</div>
                    </div>
                  </div>
                  <div className="hero-float-card hero-float-2">
                    <span className="icon-badge" style={{ background: '#FEF3C7' }}>
                      <Star size={16} color="#F59E0B" fill="#F59E0B" />
                    </span>
                    <div>
                      <div className="hero-float-title">4.9 Rating</div>
                      <div className="hero-float-sub">12,000+ reviews</div>
                    </div>
                  </div>
                  <div className="hero-float-card hero-float-3">
                    <span className="icon-badge" style={{ background: '#EFF6FF' }}>
                      <ShieldCheck size={16} color="#2563EB" />
                    </span>
                    <div>
                      <div className="hero-float-title">500+ Doctors</div>
                      <div className="hero-float-sub">Verified profiles</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RATING / REVIEWS BAR ================= */}
      <section className="rating-bar-section">
        <div className="container">
          <div className="rating-bar">
            <div className="rating-bar-item">
              <span className="rating-bar-icon-wrap" style={{ background: '#FEF3C7' }}>
                <Star size={20} color="#F59E0B" fill="#F59E0B" />
              </span>
              <div className="rating-bar-text">
                <div className="rating-bar-value">4.9<span>/5</span></div>
                <div className="rating-bar-label">Average Rating</div>
              </div>
            </div>
            <div className="rating-bar-divider"></div>
            <div className="rating-bar-item">
              <span className="rating-bar-icon-wrap" style={{ background: '#EFF6FF' }}>
                <Users size={20} color="#2563EB" />
              </span>
              <div className="rating-bar-text">
                <div className="rating-bar-value">12,000+</div>
                <div className="rating-bar-label">Patient Reviews</div>
              </div>
            </div>
            <div className="rating-bar-divider"></div>
            <div className="rating-bar-item">
              <span className="rating-bar-icon-wrap" style={{ background: '#DCFCE7' }}>
                <ShieldCheck size={20} color="#22C55E" />
              </span>
              <div className="rating-bar-text">
                <div className="rating-bar-value">98%</div>
                <div className="rating-bar-label">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPECIALTIES ================= */}
      <section className="section-compact">
        <div className="container">
          <div className="text-center mb-4">
            <span className="section-eyebrow">Browse By Specialty</span>
            <h2 className="section-title">Find the Right Specialist</h2>
          </div>
          <div className="row g-3">
            {specialtyIcons.map((spec, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-2">
                <button
                  onClick={() => navigate(`/doctors?specialty=${encodeURIComponent(spec.name)}`)}
                  className="specialty-card d-block text-decoration-none"
                  style={{ border: 'none', cursor: 'pointer', width: '100%', background: '#fff' }}
                >
                  <div className="specialty-icon-wrap" style={{ background: spec.bg }}>
                    <spec.icon size={24} color={spec.color} />
                  </div>
                  <span className="specialty-name">{spec.name}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= POPULAR DOCTORS ================= */}
      <section className="section-compact" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4 flex-wrap gap-3">
            <div>
              <span className="section-eyebrow">Top Rated</span>
              <h2 className="section-title mb-0">Popular Doctors</h2>
            </div>
            <button onClick={() => navigate('/doctors')} className="hero-btn-outline" style={{ border: 'none', cursor: 'pointer' }}>
              View All <ChevronRight size={16} />
            </button>
          </div>
          <div className="row g-4">
            {topDoctors.map((doc) => (
              <div key={doc.id} className="col-md-6 col-lg-4">
                <div className="premium-doctor-card">
                  <div className="premium-doctor-img-wrap">
                    <img src={doc.image} alt={doc.name} className="premium-doctor-img" />
                    <span className="doctor-verified-badge">
                      <ShieldCheck size={12} /> Verified
                    </span>
                    <button className="doctor-fav-btn">
                      <Heart size={15} color="#EF4444" />
                    </button>
                  </div>
                  <div className="p-3">
                    <h6 className="fw-bold mb-1">{doc.name}</h6>
                    <p className="mb-2" style={{ color: '#2563EB', fontSize: '13px', fontWeight: 600 }}>
                      {doc.specialty}
                    </p>
                    <div className="d-flex align-items-center gap-3 mb-3" style={{ fontSize: '12px', color: '#64748B' }}>
                      <span className="d-flex align-items-center gap-1">
                        <Star size={13} fill="#F59E0B" color="#F59E0B" /> {doc.rating}
                      </span>
                      <span>{doc.experience} yrs exp</span>
                      <span className="d-flex align-items-center gap-1">
                        <MapPin size={13} /> {doc.location}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pt-2" style={{ borderTop: '1px solid #F1F5F9' }}>
                      <span className="fw-bold" style={{ color: '#0F172A' }}>
                        ₹{doc.fee} <span style={{ fontSize: '11px', fontWeight: 400, color: '#94A3B8' }}>/ visit</span>
                      </span>
                      <button onClick={() => navigate(`/doctors/${doc.id}`)} className="hero-btn-primary" style={{ padding: '8px 16px', fontSize: '13px', border: 'none', cursor: 'pointer' }}>
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-compact">
        <div className="container">
          <div className="home-cta-banner">
            <h2 className="mb-2">Ready to book your appointment?</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)' }}>
              Join thousands of patients who trust MediCare+ for their healthcare needs.
            </p>
            <button onClick={() => navigate('/register')} className="btn btn-light fw-semibold mt-2 px-4 py-2" style={{ border: 'none', cursor: 'pointer' }}>
              Get Started <ArrowRight size={16} className="ms-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;