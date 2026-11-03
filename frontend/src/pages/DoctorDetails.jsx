import { useParams, useNavigate, Link } from 'react-router-dom';
import { Star, MapPin, Briefcase, Clock, ArrowLeft } from 'lucide-react';
import { doctors } from '../data/doctors';
import AvailabilityPulse from '../components/domain/AvailabilityPulse';

function DoctorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((d) => d.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="container py-5 text-center">
        <h3>Doctor not found</h3>
        <Link to="/doctors" className="btn btn-primary-custom mt-3">Back to Doctors</Link>
      </div>
    );
  }

  const reviews = [
    { name: "Aisha Khan", rating: 5, comment: "Very caring and explained everything clearly." },
    { name: "Rahul Verma", rating: 4, comment: "Good experience, slight wait time but worth it." },
  ];

  return (
    <div className="section-padding" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <button onClick={() => navigate(-1)} className="btn btn-outline-custom btn-sm mb-4 d-inline-flex align-items-center gap-2">
          <ArrowLeft size={16} /> Back
        </button>

        <div className="row g-4">
          {/* Left: Doctor Profile */}
          <div className="col-lg-8">
            <div className="surface-card p-4">
              <div className="d-flex flex-column flex-md-row gap-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="rounded-4"
                  style={{ width: 140, height: 140, objectFit: 'cover' }}
                />
                <div className="flex-grow-1">
                  <h3 className="mb-1">{doctor.name}</h3>
                  <p className="mb-2" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                    {doctor.specialty}
                  </p>
                  <div className="d-flex flex-wrap gap-3 mb-2" style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
                    <span className="d-flex align-items-center gap-1">
                      <Star size={16} fill="#F59E0B" color="#F59E0B" /> {doctor.rating} ({doctor.reviews} reviews)
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <Briefcase size={16} /> {doctor.experience} years experience
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <MapPin size={16} /> {doctor.location}
                    </span>
                  </div>
                  <AvailabilityPulse available={doctor.available} />
                </div>
              </div>

              <hr className="my-4" style={{ borderColor: 'var(--color-border-light)' }} />

              <h5 className="mb-2">About</h5>
              <p className="text-muted-custom">{doctor.about}</p>

              <hr className="my-4" style={{ borderColor: 'var(--color-border-light)' }} />

              <h5 className="mb-3">Qualifications</h5>
              <ul className="text-muted-custom">
                <li>MBBS, MD ({doctor.specialty})</li>
                <li>Registered Medical Practitioner</li>
                <li>Member, Indian Medical Association</li>
              </ul>

              <hr className="my-4" style={{ borderColor: 'var(--color-border-light)' }} />

              <h5 className="mb-3">Patient Reviews</h5>
              {reviews.map((rev, i) => (
                <div key={i} className="mb-3 pb-3" style={{ borderBottom: i < reviews.length - 1 ? '1px solid var(--color-border-light)' : 'none' }}>
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="fw-semibold" style={{ fontSize: '14px' }}>{rev.name}</span>
                    <span className="d-flex align-items-center gap-1" style={{ fontSize: '13px' }}>
                      <Star size={14} fill="#F59E0B" color="#F59E0B" /> {rev.rating}
                    </span>
                  </div>
                  <p className="mb-0 text-muted-custom" style={{ fontSize: '14px' }}>{rev.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Booking Card */}
          <div className="col-lg-4">
            <div className="surface-card p-4" style={{ position: 'sticky', top: 90 }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted-custom">Consultation Fee</span>
                <span className="fw-bold fs-5">₹{doctor.fee}</span>
              </div>
              <div className="d-flex align-items-center gap-2 mb-4" style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                <Clock size={16} /> Available slots today
              </div>
              <Link
                to={`/book-appointment/${doctor.id}`}
                className="btn btn-primary-custom btn-glow w-100 py-2"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;