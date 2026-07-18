import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Search, Smartphone, Paintbrush, Globe2, ShieldCheck } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import './ServicesPage.css'

const SERVICES = [
  { icon: <Code2 size={22} />, title: 'Website Development', description: 'Responsive and performance-focused websites built for credibility, conversion, and growth.' },
  { icon: <Search size={22} />, title: 'SEO & Digital Marketing', description: 'Visibility strategy, keyword targeting, and campaigns that bring the right audience to your brand.' },
  { icon: <Smartphone size={22} />, title: 'Mobile App Development', description: 'Modern mobile experiences for startups, education, and service businesses with scalable architecture.' },
  { icon: <Paintbrush size={22} />, title: 'UI/UX & Branding', description: 'Clean, intuitive design systems that reflect a premium brand experience and improve retention.' },
  { icon: <Globe2 size={22} />, title: 'E-commerce Solutions', description: 'Storefronts and funnels designed to boost trust, manage products, and simplify purchasing.' },
  { icon: <ShieldCheck size={22} />, title: 'Support & Maintenance', description: 'Ongoing updates, security checks, and technical support to keep your platforms stable.' },
]

export default function ServicesPage() {
  return (
    <div className="page-shell services-page">
      <Navbar />

      <section className="page-hero">
        <div className="page-hero-mesh" />
        <div className="container">
          <div className="page-hero-inner">
            <div className="page-hero-content">
              <span className="section-label">🛠️ Our Services</span>
              <h1 className="page-title">Solutions that help your brand <span className="text-gradient">look better, work better, and grow faster</span></h1>
              <p className="page-description">
                We provide end-to-end digital services that cover strategy, design, development, launch, and long-term support.
              </p>
              <div className="page-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">Book a Consultation <ArrowRight size={18} /></Link>
                <Link to="/portfolio" className="btn btn-ghost btn-lg">View Portfolio</Link>
              </div>
            </div>
            <div className="page-hero-card card">
              <h3>What we deliver</h3>
              <p>From websites and apps to performance marketing and product support, every service is tailored around your goals.</p>
              <div className="pill-row">
                <span>Fast delivery</span>
                <span>Custom strategy</span>
                <span>Scalable systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid cards-grid">
            {SERVICES.map((service) => (
              <article key={service.title} className="info-card card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <div className="container">
          <div className="cta-panel card">
            <h2>Let’s build something impactful together</h2>
            <p>Whether you need a new website, a growth campaign, or a better customer experience, we can help you move quickly.</p>
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
