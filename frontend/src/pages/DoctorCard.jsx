import { Link } from 'react-router-dom';
import { Star, MapPin, Briefcase } from 'lucide-react';
import AvailabilityPulse from './AvailabilityPulse';

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card hover-lift h-100 d-flex flex-column">
      <div className="doctor-card-img-wrap">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="doctor-card-img"
        />
        <span className={`doctor-card-status ${doctor.available ? 'online' : 'offline'}`}></span>
      </div>

      <div className="p-3 d-flex flex-column flex-grow-1">
        <h6 className="fw-bold mb-1">{doctor.name}</h6>
        <p className="mb-2" style={{ color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
          {doctor.specialty}
        </p>
        <div className="d-flex align-items-center gap-1 mb-2" style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
          <Star size={14} fill="#F59E0B" color="#F59E0B" />
          <span>{doctor.rating} ({doctor.reviews} reviews)</span>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-2" style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
          <span className="d-flex align-items-center gap-1">
            <Briefcase size={14} /> {doctor.experience} yrs exp
          </span>
          <span className="d-flex align-items-center gap-1">
            <MapPin size={14} /> {doctor.location}
          </span>
        </div>

        <AvailabilityPulse available={doctor.available} />

        <div className="d-flex justify-content-between align-items-center mt-3 pt-3 mt-auto" style={{ borderTop: '1px solid var(--color-border-light)' }}>
          <span className="fw-bold">₹{doctor.fee} <span style={{ fontSize: '12px', fontWeight: 400, color: 'var(--color-text-muted)' }}>/ visit</span></span>
          <Link to={`/doctors/${doctor.id}`} className="btn btn-primary-custom btn-glow btn-sm">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;