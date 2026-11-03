import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Stethoscope } from 'lucide-react';

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [role, setRole] = useState('patient');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === 'patient') navigate('/patient-dashboard');
    else if (role === 'doctor') navigate('/doctor-dashboard');
    else navigate('/admin-dashboard');
  };

  return (
    <div className="section-padding" style={{ background: 'var(--color-bg)', minHeight: '80vh', paddingTop: '40px' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="surface-card p-4 p-md-5 fade-in-up">
              <div className="text-center mb-3">
                <span
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2"
                  style={{ width: 48, height: 48, background: 'var(--gradient-primary)' }}
                >
                  <Stethoscope size={22} color="#fff" />
                </span>
                <h3 className="mb-1">Welcome Back</h3>
                <p className="text-muted-custom mb-0">Login to manage your appointments</p>
              </div>

              {/* Role Selector */}
              <div className="role-selector mb-3">
                {['patient', 'doctor', 'admin'].map((r) => (
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
                <div className="mb-3">
                  <label className="form-label fw-medium" style={{ fontSize: '14px' }}>Email Address</label>
                  <div className="input-group" style={{ border: '2px solid #666', borderRadius: '10px', overflow: 'hidden' }}>
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

                <div className="mb-3">
                  <label className="form-label fw-medium" style={{ fontSize: '14px' }}>Password</label>
                  <div className="input-group" style={{ border: '2px solid #666', borderRadius: '10px', overflow: 'hidden' }}>
                    <span className="input-group-text bg-white border-0">
                      <Lock size={16} color="var(--color-text-muted)" />
                    </span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className="form-control border-0"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <span
                      className="input-group-text bg-white border-0"
                      style={{ cursor: 'pointer' }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </span>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="remember" />
                    <label className="form-check-label" htmlFor="remember" style={{ fontSize: '13px' }}>
                      Remember me
                    </label>
                  </div>
                  <a href="#" style={{ fontSize: '13px' }}>Forgot password?</a>
                </div>

                <button type="submit" className="btn btn-primary-custom btn-glow w-100 py-2">
                  Login
                </button>
              </form>

              <p className="text-center mt-3 mb-0" style={{ fontSize: '14px' }}>
                Don't have an account? <Link to="/register" className="fw-semibold">Register here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;