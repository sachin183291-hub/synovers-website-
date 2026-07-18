import { Link } from 'react-router-dom'
import { ArrowRight, Gift, Sparkles, CheckCircle } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import './SpecialOfferPage.css'

export default function SpecialOfferPage() {
  return (
    <div className="page-shell special-offer-page">
      <Navbar />

      <section className="page-hero">
        <div className="page-hero-mesh" />
        <div className="container">
          <div className="page-hero-inner">
            <div className="page-hero-content">
              <span className="section-label">🎁 Special Offers</span>
              <h1 className="page-title">Limited-time offers for students and businesses ready to <span className="text-gradient">move faster</span></h1>
              <p className="page-description">
                We regularly create exclusive offers to make advanced learning and strategic digital services more accessible.
              </p>
              <div className="page-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">Claim an Offer <ArrowRight size={18} /></Link>
                <Link to="/courses" className="btn btn-ghost btn-lg">Explore Courses</Link>
              </div>
            </div>
            <div className="page-hero-card card">
              <div className="offer-badge"><Gift size={18} /> Limited Time</div>
              <h3>Free counseling + career roadmap</h3>
              <p>Book a consultation and receive a tailored roadmap for your course, portfolio, or digital growth plan.</p>
              <ul>
                <li><CheckCircle size={16} /> Free strategy call</li>
                <li><CheckCircle size={16} /> Priority support</li>
                <li><CheckCircle size={16} /> Bonus resources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="offer-grid">
            <article className="offer-card card">
              <div className="offer-icon"><Sparkles size={20} /></div>
              <h3>Student Launch Pack</h3>
              <p>Get career guidance, demo class access, and a personalized learning roadmap for selected programs.</p>
            </article>
            <article className="offer-card card">
              <div className="offer-icon"><Sparkles size={20} /></div>
              <h3>Business Growth Bundle</h3>
              <p>Combine branding, website setup, and launch support with priority delivery for new projects.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <div className="container">
          <div className="cta-panel card">
            <h2>Contact us before the offer window closes</h2>
            <p>Our current offers are updated regularly, so the best time to reach out is before your preferred batch or project slot fills up.</p>
            <Link to="/contact" className="btn btn-primary">Reserve Your Spot</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
