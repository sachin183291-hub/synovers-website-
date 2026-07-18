import { Link } from 'react-router-dom'
import { ArrowRight, Rocket, ShieldCheck, Sparkles, BarChart3 } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { PRODUCTS } from '../data/constants'
import './ProductsPage.css'

export default function ProductsPage() {
  return (
    <div className="page-shell products-page">
      <Navbar />

      <section className="page-hero">
        <div className="page-hero-mesh" />
        <div className="container">
          <div className="page-hero-inner">
            <div className="page-hero-content">
              <span className="section-label">⚙️ Our Products</span>
              <h1 className="page-title">
                Smart software products for <span className="text-gradient">modern business growth</span>
              </h1>
              <p className="page-description">
                From ERP systems to custom digital platforms, we build reliable products that help teams work faster,
                scale smarter, and serve customers better.
              </p>
              <div className="page-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">Discuss a Product <ArrowRight size={18} /></Link>
                <Link to="/services" className="btn btn-ghost btn-lg">Explore Services</Link>
              </div>
            </div>
            <div className="page-hero-card card">
              <div className="hero-card-icon"><Rocket size={28} /></div>
              <h3>Business-first product thinking</h3>
              <p>Every product is designed around measurable outcomes like efficiency, automation, and revenue impact.</p>
              <ul>
                <li><ShieldCheck size={16} /> Secure and scalable architecture</li>
                <li><Sparkles size={16} /> AI-ready workflows and dashboards</li>
                <li><BarChart3 size={16} /> Insight-driven reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid cards-grid">
            {PRODUCTS.map((item) => (
              <article key={item.title} className="info-card card">
                <div className="info-card-top">
                  <span className="info-badge">{item.badge}</span>
                  <span className="info-icon">{item.icon}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className="feature-list">
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <div className="container">
          <div className="cta-panel card">
            <h2>Need a custom product for your business?</h2>
            <p>We can design and deliver a tailored solution for operations, reporting, customer engagement, or internal automation.</p>
            <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
