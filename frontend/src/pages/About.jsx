import { Link } from 'react-router-dom';
import {
  Heart, Target, Clock, ArrowRight, CalendarCheck, ShieldCheck,
  BadgeCheck, Wallet, Compass, Search, Stethoscope, FileText, Eye,
  ClipboardList, HeartHandshake, MousePointerClick, MonitorSmartphone,
  CalendarDays, ClipboardCheck, Globe, TrendingUp
} from 'lucide-react';
import './About.css';

const team = [
  { name: "Dr. Anshi Sharma", role: "Chief Medical Officer", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Dr. Rohan Verma", role: "Founder & CEO", image: "https://randomuser.me/api/portraits/men/13.jpg" },
  { name: "Dr. Vikram Singh", role: "Head of Neurology", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTycnoOr-5OdlrKCgm9gX77apTvylRPMclWALUbaXyjjQ&s=10" },
  { name: "Dr. Priya Iyer", role: "Head of Patient Care", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwSqJ55-F06ng-HSHmoBsIcQ98Uw1eyKQxhhEftLTjg&s=10" },
];

const problems = [
  { problem: "Confusing doctor search", solution: "Verified doctor profiles" },
  { problem: "Long waiting times", solution: "Instant online booking" },
  { problem: "Unclear availability & pricing", solution: "Real-time slots & upfront fees" },
];

const whyCards = [
  {
    icon: Search,
    title: "Simple Doctor Discovery",
    desc: "Explore available doctor profiles and find information that helps you make an informed choice.",
  },
  {
    icon: CalendarCheck,
    title: "Convenient Appointment Booking",
    desc: "Make the appointment booking process easier through a simple and user-friendly interface.",
  },
  {
    icon: ClipboardList,
    title: "Clear Doctor Information",
    desc: "View relevant doctor details and profile information in one convenient place.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Friendly Experience",
    desc: "Enjoy a clean and easy-to-use platform designed around the needs of patients.",
  },
  {
    icon: MousePointerClick,
    title: "Easy Navigation",
    desc: "Navigate between important sections and access the platform's features with ease.",
  },
  {
    icon: MonitorSmartphone,
    title: "Convenient Digital Access",
    desc: "Access the platform through a responsive interface designed for desktop, tablet and mobile devices.",
  },
];

const howSteps = [
  {
    icon: Search,
    title: "Browse Doctors",
    desc: "Explore the available doctors and discover profiles based on your healthcare needs.",
  },
  {
    icon: ClipboardList,
    title: "View Doctor Profile",
    desc: "Open a doctor's profile to see the information available and learn more before making your choice.",
  },
  {
    icon: CalendarDays,
    title: "Choose Appointment",
    desc: "Continue to the booking page and choose your appointment details.",
  },
  {
    icon: CalendarCheck,
    title: "Book Appointment",
    desc: "Submit your appointment request through the booking form.",
  },
];

const patientCards = [
  {
    icon: HeartHandshake,
    title: "Simple User Experience",
    desc: "A clean and easy-to-navigate interface helps patients explore doctor information and appointment features without unnecessary complexity.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear & Helpful Information",
    desc: "We aim to present relevant doctor and appointment information in a clear and organised way, helping patients understand their available options.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Data Handling",
    desc: "We recognise the importance of personal account information and aim to handle user data responsibly through the practices implemented in our application.",
  },
];

const coreValues = [
  {
    icon: Heart,
    title: "Empathy",
    desc: "We believe in understanding patients' needs and designing experiences with care and consideration.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    desc: "We aim to make doctor discovery and appointment information easier to access through a simple digital platform.",
  },
  {
    icon: Eye,
    title: "Clarity",
    desc: "We value clear information, straightforward navigation and an experience that is easy to understand.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "We aim to build a consistent and dependable platform that patients can use with confidence.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    desc: "We believe in learning, improving and refining the platform to create a better user experience over time.",
  },
];

const journey = [
  { year: "2023", title: "The Idea", desc: "A simple goal: make doctor discovery easier." },
  { year: "2024", title: "Platform Built", desc: "Core booking experience designed and launched." },
  { year: "2025", title: "Growing Reach", desc: "More doctors and specialties added." },
  { year: "2026", title: "What's Next", desc: "Smarter, broader access to healthcare." },
];

const heroHighlights = [
  { icon: Search, label: "Easy Doctor Discovery", bg: '#EFF6FF', color: '#2563EB' },
  { icon: CalendarCheck, label: "Convenient Appointment Booking", bg: '#DCFCE7', color: '#16A34A' },
  { icon: Heart, label: "Patient-Friendly Experience", bg: '#FCE7F3', color: '#DB2777' },
];

const whoFeatures = [
  { icon: Search, title: "Discover doctors easily", desc: "Find the right doctor by specialty.", bg: '#EFF6FF', color: '#2563EB' },
  { icon: FileText, title: "Explore doctor profiles", desc: "See experience, fees and details.", bg: '#E0F2FE', color: '#0284C7' },
  { icon: CalendarCheck, title: "Simplify appointment booking", desc: "Book your visit in a few clicks.", bg: '#DCFCE7', color: '#16A34A' },
];

function About() {
  return (
    <div className="about-page">
      {/* ================= HERO ================= */}
      <section className="about-hero" aria-labelledby="about-hero-title">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left: content */}
            <div className="col-lg-6">
              <span className="about-hero-badge fade-up">About MediCare+</span>

              <h1 id="about-hero-title" className="about-hero-heading fade-up fade-up-1">
                Healthcare, made <span className="accent">simpler</span> and more{' '}
                <span className="accent">accessible.</span>
              </h1>

              <p className="about-hero-sub fade-up fade-up-1">
                MediCare+ helps patients discover doctors, explore their profiles, and book appointments through a simple and convenient digital healthcare experience.
              </p>

              <div className="about-hero-actions fade-up fade-up-2">
                <Link to="/doctors" className="about-hero-btn-primary">
                  Find a Doctor
                  <ArrowRight size={18} />
                </Link>
              </div>

              <ul className="about-hero-highlights fade-up fade-up-2">
                {heroHighlights.map((item, i) => (
                  <li key={i} className="about-hero-highlight">
                    <span className="about-hero-highlight-icon" style={{ background: item.bg }}>
                      <item.icon size={16} color={item.color} />
                    </span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: healthcare visual */}
            <div className="col-lg-6">
              <div className="about-hero-visual fade-up fade-up-1" aria-hidden="true">
                <div className="about-hero-visual-bg" />

                <div className="about-hero-mock">
                  <div className="about-hero-mock-head">
                    <span className="about-hero-mock-avatar">
                      <Stethoscope size={20} color="#fff" />
                    </span>
                    <div className="about-hero-mock-lines">
                      <span className="line line-lg" />
                      <span className="line line-sm" />
                    </div>
                  </div>

                  <div className="about-hero-mock-search">
                    <Search size={16} color="#2563EB" />
                    <span>Search doctors &amp; specialties</span>
                  </div>

                  <div className="about-hero-mock-label">Choose a time slot</div>
                  <div className="about-hero-mock-slots">
                    <span className="slot">10:00 AM</span>
                    <span className="slot slot-active">11:30 AM</span>
                    <span className="slot">02:00 PM</span>
                  </div>

                  <div className="about-hero-mock-cta">
                    <CalendarCheck size={16} />
                    Book appointment
                  </div>
                </div>

                <div className="about-hero-chip about-hero-chip-1">
                  <span className="chip-icon" style={{ background: '#DCFCE7' }}>
                    <CalendarCheck size={16} color="#16A34A" />
                  </span>
                  Appointment booked
                </div>

                <div className="about-hero-chip about-hero-chip-2">
                  <span className="chip-icon" style={{ background: '#FCE7F3' }}>
                    <Heart size={16} color="#DB2777" />
                  </span>
                  Patient-friendly
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="who-section" aria-labelledby="who-title">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left: brand story */}
            <div className="col-lg-6">
              <div className="who-content">
                <span className="who-label">Who We Are</span>
                <h2 id="who-title" className="who-heading">
                  Healthcare access should feel <span className="who-accent">simple.</span>
                </h2>

                <p className="who-text">
                  MediCare+ is designed to make the journey of finding and connecting with doctors{' '}
                  <strong className="who-highlight">simpler</strong>. We bring doctor discovery, profile
                  exploration and appointment booking together in{' '}
                  <strong className="who-highlight">one convenient digital experience</strong>.
                </p>

                <div className="who-problem">
                  <span className="who-problem-title">The problem we aim to solve</span>
                  <p>
                    Finding the right doctor and managing appointments can feel confusing and
                    time-consuming. MediCare+ simplifies this journey with a{' '}
                    <strong className="who-highlight">clear, user-friendly platform</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: visual feature panel */}
            <div className="col-lg-6">
              <div className="who-panel">
                <div className="who-panel-art" aria-hidden="true">
                  <span className="who-art-ring who-art-ring-1" />
                  <span className="who-art-ring who-art-ring-2" />
                  <span className="who-art-core">
                    <Stethoscope size={34} color="#fff" />
                  </span>
                  <span className="who-art-badge who-art-badge-1">
                    <Heart size={16} color="#DB2777" />
                  </span>
                  <span className="who-art-badge who-art-badge-2">
                    <CalendarCheck size={16} color="#16A34A" />
                  </span>
                  <span className="who-art-badge who-art-badge-3">
                    <Search size={16} color="#2563EB" />
                  </span>
                </div>

                <h3 className="who-panel-title">Care, without the complexity.</h3>

                <ul className="who-feature-list">
                  {whoFeatures.map((f, i) => (
                    <li key={i} className="who-feature">
                      <span className="who-feature-icon" style={{ background: f.bg }}>
                        <f.icon size={20} color={f.color} />
                      </span>
                      <span className="who-feature-body">
                        <span className="who-feature-title">{f.title}</span>
                        <span className="who-feature-desc">{f.desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM WE SOLVE ================= */}
      <section className="problem-section">
        <div className="container">
          <div className="text-center mb-4">
            <span className="about-section-label">The Problem We Solve</span>
            <h2 className="about-section-heading">Healthcare shouldn't be complicated</h2>
          </div>
          <div style={{ maxWidth: 620, margin: '0 auto' }}>
            {problems.map((p, i) => (
              <div key={i} className="problem-row">
                <span className="problem-side">{p.problem}</span>
                <ArrowRight size={18} className="problem-arrow" />
                <span className="solution-side">{p.solution}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="mission-section" aria-labelledby="mv-title">
        <div className="container">
          <div className="mv-header">
            <span className="mv-label">Our Purpose</span>
            <h2 id="mv-title" className="mv-heading">
              Driven by a <span className="mv-heading-accent">better healthcare</span> experience.
            </h2>
            <p className="mv-subtext">
              Our purpose and vision guide the experience we want to create for patients.
            </p>
          </div>

          <div className="row g-4">
            {/* Mission */}
            <div className="col-md-6">
              <article className="mv-card mv-card-mission">
                <span className="mv-deco mv-deco-1" aria-hidden="true" />
                <span className="mv-deco mv-deco-2" aria-hidden="true" />
                <Target className="mv-watermark" size={150} strokeWidth={1.2} aria-hidden="true" />

                <span className="mv-icon">
                  <Target size={30} color="#fff" />
                </span>
                <span className="mv-card-label">Our Mission</span>
                <h3 className="mv-card-title">Making healthcare access simpler.</h3>
                <p className="mv-card-text">
                  Our mission is to make{' '}
                  <strong className="mv-highlight">doctor discovery and appointment booking</strong>{' '}
                  easier through a simple, convenient and{' '}
                  <strong className="mv-highlight">patient-friendly</strong> digital platform.
                </p>
              </article>
            </div>

            {/* Vision */}
            <div className="col-md-6">
              <article className="mv-card mv-card-vision">
                <span className="mv-deco mv-deco-1" aria-hidden="true" />
                <span className="mv-deco mv-deco-2" aria-hidden="true" />
                <Eye className="mv-watermark" size={150} strokeWidth={1.2} aria-hidden="true" />

                <span className="mv-icon">
                  <Eye size={30} color="#fff" />
                </span>
                <span className="mv-card-label">Our Vision</span>
                <h3 className="mv-card-title">A more accessible healthcare future.</h3>
                <p className="mv-card-text">
                  Our vision is to contribute towards a more{' '}
                  <strong className="mv-highlight">accessible and patient-friendly</strong> digital
                  healthcare experience, where finding and connecting with doctors feels simpler.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE MEDICARE+ ================= */}
      <section className="why-section" aria-labelledby="why-title">
        <div className="container">
          <div className="why-header">
            <span className="why-label">Why MediCare+</span>
            <h2 id="why-title" className="why-heading">
              Why choose <span className="why-heading-accent">MediCare+?</span>
            </h2>
            <p className="why-subtext">
              Designed to make your doctor discovery and appointment booking journey simpler,
              clearer and more convenient.
            </p>
          </div>

          <div className="row g-4">
            {whyCards.map((card, i) => (
              <div key={card.title} className="col-md-6 col-lg-4">
                <article className="why-card">
                  <span className="why-card-number" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="why-icon" aria-hidden="true">
                    <card.icon size={26} strokeWidth={1.9} />
                  </span>
                  <h3 className="why-card-title">{card.title}</h3>
                  <p className="why-card-desc">{card.desc}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="hiw-section" aria-labelledby="hiw-title">
        <div className="container">
          <div className="hiw-header">
            <span className="hiw-label">How It Works</span>
            <h2 id="hiw-title" className="hiw-heading">
              Your healthcare journey, <span className="hiw-heading-accent">made simple.</span>
            </h2>
            <p className="hiw-subtext">
              Getting started with MediCare+ is designed to be simple. Follow these steps to
              explore doctors and book an appointment.
            </p>
          </div>

          <ol className="hiw-steps">
            {howSteps.map((step, i) => (
              <li key={step.title} className="hiw-step">
                <span className="hiw-circle" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="hiw-card">
                  <span className="hiw-icon" aria-hidden="true">
                    <step.icon size={22} strokeWidth={1.9} />
                  </span>
                  <span className="hiw-step-label">Step {String(i + 1).padStart(2, '0')}</span>
                  <h3 className="hiw-card-title">{step.title}</h3>
                  <p className="hiw-card-desc">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= PATIENT FIRST ================= */}
      <section className="pf-section" aria-labelledby="pf-title">
        <div className="container">
          <div className="pf-header">
            <span className="pf-label">Patient First</span>
            <h2 id="pf-title" className="pf-heading">
              Designed around the <span className="pf-heading-accent">patient experience.</span>
            </h2>
            <p className="pf-subtext">
              At MediCare+, we believe that accessing healthcare information should feel clear,
              simple and convenient. We aim to create a digital experience that puts patients at
              the centre.
            </p>
          </div>

          <div className="row g-4">
            {patientCards.map((card) => (
              <div key={card.title} className="col-md-6 col-lg-4">
                <article className="pf-card">
                  <span className="pf-icon" aria-hidden="true">
                    <card.icon size={26} strokeWidth={1.9} />
                  </span>
                  <h3 className="pf-card-title">{card.title}</h3>
                  <p className="pf-card-desc">{card.desc}</p>
                </article>
              </div>
            ))}
          </div>

          <aside className="pf-panel" aria-label="Our commitment">
            <span className="pf-panel-deco pf-panel-deco-1" aria-hidden="true" />
            <span className="pf-panel-deco pf-panel-deco-2" aria-hidden="true" />

            <div className="pf-panel-art" aria-hidden="true">
              <span className="pf-panel-ring" />
              <span className="pf-panel-core">
                <Heart size={30} color="#fff" />
              </span>
            </div>

            <div className="pf-panel-body">
              <h3 className="pf-panel-title">Your experience matters.</h3>
              <p className="pf-panel-text">
                Every part of MediCare+ is being designed with simplicity, clarity and patient
                convenience in mind.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="cv-section" aria-labelledby="cv-title">
        <div className="container">
          <div className="cv-header">
            <span className="cv-label">What Guides Us</span>
            <h2 id="cv-title" className="cv-heading">
              The values behind <span className="cv-heading-accent">MediCare+.</span>
            </h2>
            <p className="cv-subtext">
              Our core values guide the way we think about healthcare access and the experience we
              want to create for every patient.
            </p>
          </div>

          <ul className="cv-grid">
            {coreValues.map((value, i) => (
              <li key={value.title} className="cv-card">
                <div className="cv-card-top">
                  <span className="cv-icon" aria-hidden="true">
                    <value.icon size={26} strokeWidth={1.9} />
                  </span>
                  <span className="cv-number" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="cv-card-title">{value.title}</h3>
                <p className="cv-card-desc">{value.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= OUR JOURNEY ================= */}
      <section className="journey-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="about-section-label">Our Journey</span>
            <h2 className="about-section-heading">How MediCare+ evolved</h2>
          </div>
          <div className="journey-track">
            {journey.map((j, i) => (
              <div key={i} className="journey-step">
                <div className="journey-dot">{j.year}</div>
                <div className="journey-title">{j.title}</div>
                <div className="journey-desc">{j.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="team-section">
        <div className="container">
          <div className="text-center mb-4">
            <span className="about-section-label">Meet The Team</span>
            <h2 className="about-section-heading">The people behind MediCare+</h2>
          </div>
          <div className="row g-4">
            {team.map((member, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="about-team-card">
                  <div className="about-team-avatar-wrap">
                    <img src={member.image} alt={member.name} className="about-team-avatar" />
                  </div>
                  <div className="about-team-name">{member.name}</div>
                  <div className="about-team-role">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA (redesigned) ================= */}
      <section className="fcta-section" aria-labelledby="fcta-title">
        <div className="container">
          <div className="fcta-banner">
            <span className="fcta-glow fcta-glow-1" aria-hidden="true" />
            <span className="fcta-glow fcta-glow-2" aria-hidden="true" />
            <span className="fcta-ring" aria-hidden="true" />
            <Stethoscope className="fcta-watermark" size={190} strokeWidth={1.1} aria-hidden="true" />

            <div className="fcta-content">
              <span className="fcta-icon" aria-hidden="true">
                <Heart size={24} color="#fff" />
              </span>
              <h2 id="fcta-title" className="fcta-title">
                Your next step towards <span className="fcta-title-accent">simpler healthcare</span>{' '}
                starts here.
              </h2>
              <p className="fcta-text">
                Explore doctor profiles and take the next step towards a more convenient
                appointment booking experience with MediCare+.
              </p>
            </div>

            <div className="fcta-action">
              <Link to="/doctors" className="fcta-btn">
                Find a Doctor
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;