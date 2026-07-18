import { Link } from 'react-router-dom'
import { ChevronRight, Briefcase, Users, Globe, Search, CheckCircle, Building } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { HIRING_PARTNERS } from '../data/constants'
import './HireTalentPage.css'

const SKILL_SETS = [
  { icon: '🤖', title: 'AI & ML Engineers', skills: ['Python', 'TensorFlow', 'LangChain', 'OpenAI API', 'NLP', 'Computer Vision'] },
  { icon: '💻', title: 'Full Stack Developers', skills: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'TypeScript', 'Redux'] },
  { icon: '📊', title: 'Data Scientists', skills: ['Python', 'Pandas', 'Scikit-learn', 'Tableau', 'Power BI', 'SQL'] },
  { icon: '🛡', title: 'DevOps & Security', skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'SOC'] },
  { icon: '🎨', title: 'UI/UX Designers', skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems'] },
  { icon: '📈', title: 'Digital Marketers', skills: ['SEO', 'Google Ads', 'Meta Ads', 'Analytics', 'Content Strategy'] },
]

const PROCESS = [
  { step: '01', title: 'Post Requirement', desc: 'Share your hiring requirements, tech stack, and timeline through our simple form.' },
  { step: '02', title: 'Talent Matching', desc: 'We match your requirements with pre-screened candidates from our trained talent pool.' },
  { step: '03', title: 'Interview & Shortlist', desc: 'Conduct interviews with our curated list of candidates. We handle scheduling.' },
  { step: '04', title: 'Hire & Onboard', desc: 'Select your preferred candidate and we facilitate a smooth onboarding process.' },
]

const BENEFITS = [
  'Industry-trained & job-ready talent',
  'Pre-screened & verified candidates',
  'Zero placement fee (for hiring partners)',
  'Technical screening handled by us',
  'Background verification included',
  '90-day replacement guarantee',
]

export default function HireTalentPage() {
  return (
    <div className="hire-page">
      <Navbar />

      {/* Hero */}
      <section className="hire-hero">
        <div className="hire-hero-mesh" />
        <div className="container">
          <div className="hire-hero-inner">
            <div className="hire-hero-content">
              <span className="section-label">🏢 Hire From Synovers</span>
              <h1 className="hire-hero-title">
                Hire Pre-Trained<br />
                <span className="text-gradient">Tech Talent</span> for Free
              </h1>
              <p className="hire-hero-desc">
                Access our pool of 150+ placement-ready graduates. Zero recruitment fee.
                Pre-screened, industry-trained, and ready to contribute from day one.
              </p>
              <div className="hire-hero-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">Post a Job Requirement <ChevronRight size={18} /></Link>
                <Link to="/contact" className="btn btn-ghost btn-lg">Talk to Placement Team</Link>
              </div>
              <div className="hire-trust-stats">
                <div className="hire-trust-item">
                  <span className="hire-trust-value">5+</span>
                  <span className="hire-trust-label">Hiring Partners</span>
                </div>
                <div className="hire-trust-divider" />
                <div className="hire-trust-item">
                  <span className="hire-trust-value">150+</span>
                  <span className="hire-trust-label">Placements Made</span>
                </div>
                <div className="hire-trust-divider" />
                <div className="hire-trust-item">
                  <span className="hire-trust-value">₹0</span>
                  <span className="hire-trust-label">Recruitment Fee</span>
                </div>
              </div>
            </div>
            <div className="hire-hero-visual card">
              <div className="hire-visual-header">
                <Search size={18} style={{ color: 'var(--color-primary)' }} />
                <span>Find Talent</span>
              </div>
              <div className="hire-visual-tags">
                {['React', 'Python', 'Node.js', 'AI/ML', 'Data Science', 'DevOps', 'UI/UX', 'SEO', 'AWS'].map(t => (
                  <span key={t} className="hire-skill-pill">{t}</span>
                ))}
              </div>
              <div className="hire-visual-cta">
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  🔍 Search Candidates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Sets */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <span className="section-label">Talent Categories</span>
            <h2 className="section-title">Hire Across <span className="text-gradient">All Tech Domains</span></h2>
          </div>
          <div className="hire-skills-grid">
            {SKILL_SETS.map((s, i) => (
              <div key={i} className="hire-skill-card card">
                <div className="hire-skill-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <div className="hire-skill-tags">
                  {s.skills.map(skill => (
                    <span key={skill} className="course-tag">{skill}</span>
                  ))}
                </div>
                <Link to="/contact" className="btn btn-outline btn-sm hire-card-btn">
                  Hire {s.title.split(' ')[0]} <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Simple <span className="text-gradient">Hiring Process</span></h2>
          </div>
          <div className="hire-process">
            {PROCESS.map((p, i) => (
              <div key={i} className="hire-process-step">
                <div className="hire-step-num">{p.step}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                {i < PROCESS.length - 1 && <div className="hire-step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="hire-benefits-grid">
            <div className="hire-benefits-content">
              <span className="section-label">Why Partner With Us</span>
              <h2 className="section-title">What Makes <span className="text-gradient">Synovers Talent</span> Different?</h2>
              <div className="hire-benefits-list">
                {BENEFITS.map(b => (
                  <div key={b} className="hire-benefit-item">
                    <CheckCircle size={20} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary btn-lg hire-benefits-cta">
                Become a Hiring Partner <ChevronRight size={18} />
              </Link>
            </div>
            <div className="hire-partners-showcase">
              <h3 className="hire-partners-title">Trusted by 5+ Companies</h3>
              <div className="hiring-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                {HIRING_PARTNERS.slice(0, 9).map(p => (
                  <div key={p} className="hiring-logo-card card">
                    <Building size={14} style={{ color: 'var(--color-text-muted)' }} />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hire-cta">
        <div className="container">
          <div className="hire-cta-inner">
            <div className="hire-cta-icon"><Briefcase size={48} /></div>
            <h2>Ready to Hire Top IT Talent?</h2>
            <p>Post your requirements today and receive shortlisted candidates within 48 hours — completely free.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Post Job Requirement</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
