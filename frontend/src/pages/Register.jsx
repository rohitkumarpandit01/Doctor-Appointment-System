import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, Stethoscope } from 'lucide-react';

function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState('patient');
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', password: '', confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const boxStyle = { border: '2px solid #666', borderRadius: '10px', overflow: 'hidden' };

  return (
    <div className="section-padding" style={{ background: 'var(--color-bg)', minHeight: '80vh' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="surface-card p-4 p-md-5 fade-in-up">
              <div className="text-center mb-4">
                <span
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{ width: 56, height: 56, background: 'var(--gradient-primary)' }}
                >
                  <Stethoscope size={26} color="#fff" />
                </span>
                <h3 className="mb-1">Create Your Account</h3>
                <p className="text-muted-custom">Join MediCare+ to book appointments easily</p>
              </div>

              <div className="role-selector mb-4">
                {['patient', 'doctor'].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={role === r ? 'active' : ''}
                  >
                    {r}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-12">
                    <label className="form-label fw-medium" style={{ fontSize: '14px' }}>Full Name</label>
                    <div className="input-group" style={boxStyle}>
                      <span className="input-group-text bg-white border-0">
                        <User size={16} color="var(--color-text-muted)" />
                      </span>
                      <input
                        type="text"
                        name="name"
                        className="form-control border-0"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-medium" style={{ fontSize: '14px' }}>Email</label>
                    <div className="input-group" style={boxStyle}>
                      <span className="input-group-text bg-white border-0">
                        <Mail size={16} color="var(--color-text-muted)" />
                      </span>
                      <input
                        type="email"
                        name="email"
                        className="form-control border-0"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-medium" style={{ fontSize: '14px' }}>Phone</label>
                    <div className="input-group" style={boxStyle}>
                      <span className="input-group-text bg-white border-0">
                        <Phone size={16} color="var(--color-text-muted)" />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control border-0"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-medium" style={{ fontSize: '14px' }}>Password</label>
                    <div className="input-group" style={boxStyle}>
                      <span className="input-group-text bg-white border-0">
                        <Lock size={16} color="var(--color-text-muted)" />
                      </span>
                      <input
                        type="password"
                        name="password"
                        className="form-control border-0"
                        placeholder="Create password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-medium" style={{ fontSize: '14px' }}>Confirm Password</label>
                    <div className="input-group" style={boxStyle}>
                      <span className="input-group-text bg-white border-0">
                        <Lock size={16} color="var(--color-text-muted)" />
                      </span>
                      <input
                        type="password"
                        name="confirmPassword"
                        className="form-control border-0"
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-check mb-4">
                  <input className="form-check-input" type="checkbox" id="terms" required />
                  <label className="form-check-label" htmlFor="terms" style={{ fontSize: '13px' }}>
                    I agree to the Terms of Service and Privacy Policy
                  </label>
                </div>

                <button type="submit" className="btn btn-primary-custom btn-glow w-100 py-2">
                  Create Account
                </button>
              </form>

              <p className="text-center mt-4 mb-0" style={{ fontSize: '14px' }}>
                Already have an account? <Link to="/login" className="fw-semibold">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;