import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, Clock, User, Phone, Mail, CheckCircle, ArrowLeft } from 'lucide-react';
import { doctors } from '../data/doctors';

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
];

function getNext7Days() {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    days.push(d);
  }
  return days;
}

function BookAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((d) => d.id === parseInt(id));

  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [step, setStep] = useState(1); // 1: select slot, 2: patient form, 3: confirmation
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', reason: '' });

  const days = getNext7Days();

  if (!doctor) {
    return (
      <div className="container py-5 text-center">
        <h3>Doctor not found</h3>
        <Link to="/doctors" className="btn btn-primary-custom mt-3">Back to Doctors</Link>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="section-padding" style={{ background: 'var(--color-bg)', minHeight: '75vh' }}>
      <div className="container">
        <button onClick={() => navigate(-1)} className="btn btn-outline-custom btn-sm mb-4 d-inline-flex align-items-center gap-2">
          <ArrowLeft size={16} /> Back
        </button>

        <div className="row g-4">
          {/* Doctor Summary Sidebar */}
          <div className="col-lg-4">
            <div className="surface-card p-4" style={{ position: 'sticky', top: 90 }}>
              <div className="d-flex align-items-center gap-3 mb-3">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="rounded-circle"
                  style={{ width: 64, height: 64, objectFit: 'cover' }}
                />
                <div>
                  <h6 className="fw-bold mb-0">{doctor.name}</h6>
                  <span style={{ fontSize: '13px', color: 'var(--color-primary)', fontWeight: 600 }}>
                    {doctor.specialty}
                  </span>
                </div>
              </div>
              <hr style={{ borderColor: 'var(--color-border-light)' }} />
              <div className="d-flex justify-content-between mb-2" style={{ fontSize: '14px' }}>
                <span className="text-muted-custom">Consultation Fee</span>
                <span className="fw-semibold">₹{doctor.fee}</span>
              </div>
              {selectedSlot && (
                <>
                  <div className="d-flex justify-content-between mb-2" style={{ fontSize: '14px' }}>
                    <span className="text-muted-custom">Date</span>
                    <span className="fw-semibold">{days[selectedDate].toDateString()}</span>
                  </div>
                  <div className="d-flex justify-content-between" style={{ fontSize: '14px' }}>
                    <span className="text-muted-custom">Time</span>
                    <span className="fw-semibold">{selectedSlot}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-8">
            {step === 1 && (
              <div className="surface-card p-4">
                <h5 className="mb-3 d-flex align-items-center gap-2"><Calendar size={20} /> Select Date</h5>
                <div className="d-flex gap-2 overflow-auto pb-2 mb-4">
                  {days.map((d, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedDate(i)}
                      className={`date-pill ${selectedDate === i ? 'active' : ''}`}
                    >
                      <span style={{ fontSize: '11px' }}>{d.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                      <span style={{ fontSize: '18px', fontWeight: 700 }}>{d.getDate()}</span>
                    </button>
                  ))}
                </div>

                <h5 className="mb-3 d-flex align-items-center gap-2"><Clock size={20} /> Select Time Slot</h5>
                <div className="row g-2 mb-4">
                  {timeSlots.map((slot) => (
                    <div key={slot} className="col-4 col-md-3">
                      <button
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`slot-btn ${selectedSlot === slot ? 'active' : ''}`}
                      >
                        {slot}
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  className="btn btn-primary-custom btn-glow w-100 py-2"
                  disabled={!selectedSlot}
                  onClick={() => setStep(2)}
                >
                  Continue
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="surface-card p-4">
                <h5 className="mb-4 d-flex align-items-center gap-2"><User size={20} /> Patient Details</h5>
                <form onSubmit={handleConfirm}>
                  <div className="mb-3">
                    <label className="form-label fw-medium" style={{ fontSize: '14px' }}>Full Name</label>
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0">
                        <User size={16} color="var(--color-text-muted)" />
                      </span>
                      <input
                        type="text"
                        name="name"
                        className="form-control border-start-0"
                        placeholder="Patient's full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium" style={{ fontSize: '14px' }}>Phone</label>
                      <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                          <Phone size={16} color="var(--color-text-muted)" />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          className="form-control border-start-0"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium" style={{ fontSize: '14px' }}>Email</label>
                      <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                          <Mail size={16} color="var(--color-text-muted)" />
                        </span>
                        <input
                          type="email"
                          name="email"
                          className="form-control border-start-0"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-medium" style={{ fontSize: '14px' }}>Reason for Visit</label>
                    <textarea
                      name="reason"
                      className="form-control"
                      rows="3"
                      placeholder="Briefly describe your symptoms or reason for visit"
                      value={formData.reason}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="d-flex gap-2">
                    <button type="button" className="btn btn-outline-custom flex-grow-1" onClick={() => setStep(1)}>
                      Back
                    </button>
                    <button type="submit" className="btn btn-primary-custom btn-glow flex-grow-1">
                      Confirm Appointment
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === 3 && (
              <div className="surface-card p-5 text-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{ width: 72, height: 72, background: 'var(--color-success-bg)' }}
                >
                  <CheckCircle size={36} color="var(--color-success)" />
                </div>
                <h4 className="mb-2">Appointment Confirmed!</h4>
                <p className="text-muted-custom mb-4">
                  Your appointment with <strong>{doctor.name}</strong> is booked for{' '}
                  <strong>{days[selectedDate].toDateString()}</strong> at <strong>{selectedSlot}</strong>.
                </p>
                <div className="d-flex gap-2 justify-content-center">
                  <Link to="/patient-dashboard" className="btn btn-primary-custom btn-glow">
                    Go to Dashboard
                  </Link>
                  <Link to="/doctors" className="btn btn-outline-custom">
                    Book Another
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;