import { Link } from 'react-router-dom';
import { Star, MapPin, Briefcase } from 'lucide-react';
import AvailabilityPulse from './AvailabilityPulse';

function DoctorCard({ doctor }) {
  return (
    <div className="surface-card hover-lift p-3 h-100 d-flex flex-column">
      <div className="d-flex gap-3">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="rounded-circle"
          style={{ width: 72, height: 72, objectFit: 'cover' }}
        />
        <div className="flex-grow-1">
          <h6 className="fw-bold mb-1">{doctor.name}</h6>
          <p className="mb-1" style={{ color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
            {doctor.specialty}
          </p>
          <div className="d-flex align-items-center gap-1" style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
            <Star size={14} fill="#F59E0B" color="#F59E0B" />
            <span>{doctor.rating} ({doctor.reviews} reviews)</span>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3" style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
        <span className="d-flex align-items-center gap-1">
          <Briefcase size={14} /> {doctor.experience} yrs exp
        </span>
        <span className="d-flex align-items-center gap-1">
          <MapPin size={14} /> {doctor.location}
        </span>
      </div>

      <div className="mt-2">
        <AvailabilityPulse available={doctor.available} />
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3 pt-3" style={{ borderTop: '1px solid var(--color-border-light)' }}>
        <span className="fw-bold">₹{doctor.fee} <span style={{ fontSize: '12px', fontWeight: 400, color: 'var(--color-text-muted)' }}>/ visit</span></span>
        <Link to={`/doctors/${doctor.id}`} className="btn btn-primary-custom btn-glow btn-sm">
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default DoctorCard;