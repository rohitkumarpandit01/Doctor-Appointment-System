import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Share2, MessageCircle, Camera, Link2 } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="section-padding" style={{ background: '#F5F9FF' }}>
        <div className="container text-center">
          <span className="text-eyebrow">Get In Touch</span>
          <h1 className="mt-2 mb-3">We'd Love to Hear From You</h1>
          <p className="text-muted-custom mx-auto" style={{ maxWidth: 560, fontSize: '18px' }}>
            Have a question, feedback, or need help? Reach out and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="surface-card p-4 p-md-5">
                <h4 className="mb-4">Send us a Message</h4>

                {submitted && (
                  <div className="alert-success-box mb-4">
                    ✓ Your message has been sent successfully! We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium" style={{ fontSize: '14px' }}>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium" style={{ fontSize: '14px' }}>Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-medium" style={{ fontSize: '14px' }}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-medium" style={{ fontSize: '14px' }}>Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary-custom btn-glow d-flex align-items-center gap-2">
                    <Send size={16} /> Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-5">
              <div className="surface-card p-4 mb-3">
                <h5 className="mb-4">Contact Information</h5>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex gap-3">
                    <div className="contact-icon-badge">
                      <MapPin size={18} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h6 className="mb-1" style={{ fontSize: '14px' }}>Our Location</h6>
                      <p className="text-muted-custom mb-0" style={{ fontSize: '13px' }}>
                        123 Health Street, Wellness City, IN 110001
                      </p>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <div className="contact-icon-badge">
                      <Phone size={18} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h6 className="mb-1" style={{ fontSize: '14px' }}>Phone Number</h6>
                      <p className="text-muted-custom mb-0" style={{ fontSize: '13px' }}>+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <div className="contact-icon-badge">
                      <Mail size={18} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h6 className="mb-1" style={{ fontSize: '14px' }}>Email Address</h6>
                      <p className="text-muted-custom mb-0" style={{ fontSize: '13px' }}>support@medicareplus.com</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <div className="contact-icon-badge">
                      <Clock size={18} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h6 className="mb-1" style={{ fontSize: '14px' }}>Working Hours</h6>
                      <p className="text-muted-custom mb-0" style={{ fontSize: '13px' }}>Mon - Sat: 9:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>

                <hr className="my-4" style={{ borderColor: 'var(--color-border-light)' }} />

                <h6 className="mb-3" style={{ fontSize: '14px' }}>Follow Us</h6>
                <div className="d-flex gap-2">
                  {[Share2, MessageCircle, Camera, Link2].map((Icon, i) => (
                    <a key={i} href="#" className="contact-social-icon">
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="map-placeholder">
                <MapPin size={32} color="var(--color-primary)" />
                <span>Map Location Preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;