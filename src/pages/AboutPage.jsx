import { Link } from 'react-router-dom'
import { ChevronRight, Target, Eye, Heart, Award, Users, Clock, Globe, Zap, CheckCircle } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { MENTORS, STATS, HIRING_PARTNERS } from '../data/constants'
import './AboutPage.css'

const TIMELINE = [
  { year: '2015', title: 'Founded in Coimbatore', desc: 'Synovers Technologies started with 3 instructors and a vision to bridge the IT skills gap in India.' },
  { year: '2020', title: '2,000+ Students Milestone', desc: 'Crossed 1,000 students trained and established partnerships with 50+ hiring companies.' },
  { year: '2022', title: 'AI-Powered Curriculum', desc: 'Introduced India\'s first AI-curated tech curriculum, keeping content always current with industry trends.' },
  { year: '2024', title: '150+ Placements', desc: 'Achieved 150+ successful placements, becoming coimbatore\'s most trusted tech training institute.' },
  { year: '2026', title: '7,500+ Students & Growing', desc: 'Today, Synovers trains 7,500+ students with 97% placement rate and 5+ hiring partners nationwide.' },
]

const VALUES = [
  { icon: <Target size={24} />, title: 'Outcome-First', desc: 'Every course is built backwards from job requirements. We teach only what employers actually hire for.' },
  { icon: <Eye size={24} />, title: 'Radical Transparency', desc: 'No hidden fees, no fake placement numbers. Our results are real and verifiable.' },
  { icon: <Heart size={24} />, title: 'Student Success', desc: 'We measure our success by your success. Your placement is our placement.' },
  { icon: <Zap size={24} />, title: 'Always Current', desc: 'Our AI-powered curriculum is updated in real time with the latest industry trends and tools.' },
]

export default function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-mesh" />
        <div className="container">
          <div className="about-hero-inner">
            <div className="about-hero-content">
              <span className="section-label">🏢 About Synovers</span>
              <h1 className="about-hero-title">
                Transforming Careers,<br />
                <span className="text-gradient">One Student at a Time</span>
              </h1>
              <p className="about-hero-desc">
                Synovers Technologies is coimbatore's premier tech training institute — founded on the belief that
                anyone with the right guidance can build an exceptional IT career, regardless of their background.
              </p>
              <div className="about-hero-actions">
                <Link to="/courses" className="btn btn-primary btn-lg">Explore Courses <ChevronRight size={18} /></Link>
                <Link to="/contact" className="btn btn-ghost btn-lg">Talk to Us</Link>
              </div>
            </div>
            <div className="about-hero-visual">
              <div className="about-stats-grid">
                {STATS.map((s, i) => (
                  <div key={i} className="about-stat-card card">
                    <span className="about-stat-icon">{s.icon}</span>
                    <span className="about-stat-value text-gradient">{s.value}</span>
                    <span className="about-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card card">
              <div className="mv-icon" style={{ background: 'rgba(108,61,235,0.12)', color: 'var(--color-primary)' }}>
                <Target size={28} />
              </div>
              <h2>Our Mission</h2>
              <p>
                To democratize world-class tech education in India — making career transformation accessible to
                every student, whether they're fresh graduates, career-switchers, or working professionals.
              </p>
            </div>
            <div className="mv-card card">
              <div className="mv-icon" style={{ background: 'rgba(0,217,176,0.12)', color: 'var(--color-secondary)' }}>
                <Eye size={28} />
              </div>
              <h2>Our Vision</h2>
              <p>
                To become India's most trusted outcomes-driven training platform — where every student
                who enrolls leaves with not just knowledge, but a job they're proud of.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--color-surface)', paddingTop: 0 }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <span className="section-label">Our Core Values</span>
            <h2 className="section-title">What Drives <span className="text-gradient">Everything We Do</span></h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={i} className="value-card card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <span className="section-label">Our Story</span>
            <h2 className="section-title">A Journey of <span className="text-gradient">Impact & Growth</span></h2>
          </div>
          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content card">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <span className="section-label">The Team</span>
            <h2 className="section-title">Meet Our <span className="text-gradient">Expert Mentors</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Industry practitioners with real-world experience mentoring the next generation of tech professionals.
            </p>
          </div>
          <div className="mentors-grid">
            {MENTORS.map(m => (
              <div key={m.id} className="mentor-card card">
                <div className="mentor-avatar">
                  {m.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="mentor-name">{m.name}</h3>
                <p className="mentor-title">{m.title}</p>
                <div className="mentor-meta">
                  <span><Clock size={12} /> {m.exp} exp</span>
                  <span>⭐ {m.rating}</span>
                </div>
                <span className="mentor-specialty">{m.specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <span className="section-label">Placement Network</span>
            <h2 className="section-title">5+ <span className="text-gradient">Hiring Partners</span></h2>
          </div>
          <div className="hiring-grid">
            {HIRING_PARTNERS.map(p => (
              <div key={p} className="hiring-logo-card card">
                <Globe size={16} style={{ color: 'var(--color-text-muted)' }} />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-inner">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join 7,500+ students who trusted Synovers with their career transformation.</p>
            <div className="about-cta-btns">
              <Link to="/courses" className="btn btn-primary btn-lg">Explore Courses</Link>
              <Link to="/contact" className="btn btn-ghost btn-lg">Schedule Counselling</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
