import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Zap, ArrowRight } from 'lucide-react'
import { COURSES } from '../../data/constants'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  const courseLinks = COURSES.slice(0, 6)

  return (
    <footer className="footer">
      {/* CTA Band */}
      <div className="footer-cta-band">
        <div className="container">
          <div className="footer-cta-inner">
            <div className="footer-cta-text">
              <h3>🚀 Ready to Launch Your Tech Career?</h3>
              <p>Get a FREE career counseling session with our expert mentors. No commitment required.</p>
            </div>
            <div className="footer-cta-actions">
              <Link to="/contact" className="btn btn-primary">Book Free Session <ArrowRight size={16} /></Link>
              <a href="tel:+919344626768" className="btn btn-ghost">
                <Phone size={16} /> +91 93446 26768
              </a>
              <a href="tel:+919994915435" className="btn btn-ghost">
                <Phone size={16} /> +91 99949 15435
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo footer-brand-chip">
                <img src="/logo.png" alt="Synovers Logo" className="footer-logo-img" />
                <div>
                  <span className="footer-logo-name">Synovers</span>
                  <span className="footer-logo-sub">Technologies</span>
                </div>
              </Link>
              <p className="footer-tagline">
                Ignite Your Potential. Launch Your Career.<br />
                India's #1 outcome-driven tech skills platform.
              </p>
              <div className="footer-socials">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                      </svg>
                    ),
                    href: '#',
                    label: 'Twitter',
                    brandClass: 'twitter'
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect width="4" height="12" x="2" y="9"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    ),
                    href: 'https://www.linkedin.com/company/synovers/',
                    label: 'LinkedIn',
                    brandClass: 'linkedin'
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
                        <path d="m10 15 5-3-5-3z"/>
                      </svg>
                    ),
                    href: 'https://youtube.com/@synoverstechnologies?si=LGqzuLTW4U3bbGr3',
                    label: 'YouTube',
                    brandClass: 'youtube'
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                    ),
                    href: 'https://www.instagram.com/synovers_?igsh=MXM0NGV0YjNiajliMA==',
                    label: 'Instagram',
                    brandClass: 'instagram'
                  },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={`social-btn ${s.brandClass}`} aria-label={s.label}>{s.icon}</a>
                ))}
              </div>
              <div className="footer-badges">
                <span className="footer-badge">⭐ 4.9/5 Rating</span>
                <span className="footer-badge">🏆 Best Institute 2026</span>
              </div>
            </div>

            {/* Popular Courses */}
            <div className="footer-col">
              <h4 className="footer-col-title">Popular Courses</h4>
              <ul className="footer-links">
                {courseLinks.map(c => (
                  <li key={c.id}>
                    <Link to={`/courses/${c.slug}`} className="footer-link">{c.title}</Link>
                  </li>
                ))}
                <li><Link to="/courses" className="footer-link footer-link-cta">View All Courses →</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="footer-col">
              <h4 className="footer-col-title">Company</h4>
              <ul className="footer-links">
                {[
                  ['About Us', '/about'],
                  ['Products', '/products'],
                  ['Services', '/services'],
                  ['Portfolio', '/portfolio'],
                  ['Special Offers', '/special-offers'],
                  ['Success Stories', '/success-stories'],
                  ['Hire Talent', '/hire-talent'],
                  ['Blog', '/blog'],
                  ['Contact Us', '/contact'],
                ].map(([label, path]) => (
                  <li key={label}><Link to={path} className="footer-link">{label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-col-title">Get In Touch</h4>
              <div className="footer-contact-items">
                <a href="tel:+919344626768" className="footer-contact-item">
                  <Phone size={15} /> +91 93446 26768
                </a>
                <a href="tel:+919994915435" className="footer-contact-item">
                  <Phone size={15} /> +91 99949 15435
                </a>
                <a href="mailto:contact@synovers.com" className="footer-contact-item">
                  <Mail size={15} /> contact@synovers.com
                </a>
                <div className="footer-contact-item">
                  <MapPin size={15} />
                  <span>Coimbatore · Offline</span>
                </div>
              </div>
              <div className="footer-hours">
                <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
                <p>Sunday: 10:00 AM – 4:00 PM</p>
              </div>
              <a href="https://wa.me/919344626768" className="btn btn-secondary btn-sm footer-whatsapp">
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">© {year} Synovers Technologies. All Rights Reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy-policy" className="footer-legal-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-legal-link">Terms of Service</Link>
              <Link to="/refund-policy" className="footer-legal-link">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
