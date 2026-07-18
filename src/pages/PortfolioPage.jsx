import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import './PortfolioPage.css'

const PORTFOLIO_ITEMS = [
  { name: 'JVELZ', link: 'http://jvelz.com/', description: 'Website and digital presence project' },
  { name: 'Hidden Paws', link: 'http://hiddenpaws.in/', description: 'Website and digital presence project' },
  { name: 'VIVINS', link: 'http://vivins.in/', description: 'Website and digital presence project' },
  { name: 'Shine Plastics', link: 'http://www.shineplastics.in/', description: 'Website and digital presence project' },
  { name: 'Addons Computers', link: 'http://addonscomputers.com/', description: 'Website and digital presence project' },
  { name: 'Stitchwell', link: 'http://stitchwell.co.in/', description: 'Website and digital presence project' },
  { name: 'Kansulo Foods', link: 'http://kansulofoods.com/', description: 'Website and digital presence project' },
  { name: 'Splash Scripts', link: 'http://splashscripts.in/', description: 'Website and digital presence project' },
  { name: 'Atithi Enterprises', link: 'http://www.atithienterprises.com/', description: 'Website and digital presence project' },
  { name: 'LNR Groups', link: 'http://lnrgroups.in/', description: 'Website and digital presence project' },
  { name: '3Q Technologies', link: 'http://www.3qtechnologies.in/', description: 'Website and digital presence project' },
  { name: 'Imagica Apps', link: 'http://imagicaapps.com/', description: 'Website and digital presence project' },
  { name: 'Soloto', link: 'http://www.soltosafs.com/', description: 'Website and digital presence project' },
  { name: 'Hotel Srichakra', link: 'http://hotelsrichackra.com/', description: 'Website and digital presence project' },
  { name: 'Pseudoscripts', link: 'http://pseudoscripts.in/', description: 'Website and digital presence project' },
  { name: 'Zuu Zuu Holidays', link: 'http://zuuzuuholidays.com/', description: 'Website and digital presence project' },
  { name: 'Indus Security Automation', link: 'http://indusautomation.org/', description: 'Website and digital presence project' },
  { name: 'Anbu Guru Internationals', link: 'http://anbuguru.com/', description: 'Website and digital presence project' },
  { name: 'Cavity Engineering Solution', description: 'Website and digital presence project' },
  { name: 'MJ Tech Zone', description: 'Website and digital presence project' },
  { name: 'Pasumai Angadi', description: 'Website and digital presence project' },
  { name: 'Resbay Exports', link: 'http://www.resbayexports.com/', description: 'Website and digital presence project' },
  { name: 'Yellow Pages Info', link: 'http://yellowpagesinfo.in/', description: 'Website and digital presence project' },
  { name: 'Venturis', description: 'Website and digital presence project' },
  { name: 'SS Data Tech', link: 'http://ssdatatech.com/', description: 'Website and digital presence project' },
  { name: 'Pavintra HR Services', description: 'Website and digital presence project' },
  { name: 'Anush Exports', link: 'http://anushexports.com/', description: 'Website and digital presence project' },
  { name: 'Arch Interior', link: 'http://www.archinterior.net/', description: 'Website and digital presence project' },
  { name: 'Germ Plus', description: 'Website and digital presence project' },
  { name: 'Way To Win Financial Services', description: 'Website and digital presence project' },
  { name: 'Nice Communications', description: 'Website and digital presence project' },
  { name: 'Cursor Systems', description: 'Website and digital presence project' },
  { name: 'Tech Mindz', description: 'Website and digital presence project' },
  { name: 'Kumaar Industries', description: 'Website and digital presence project' },
]

export default function PortfolioPage() {
  return (
    <div className="page-shell portfolio-page">
      <Navbar />

      <section className="page-hero">
        <div className="page-hero-mesh" />
        <div className="container">
          <div className="page-hero-inner">
            <div className="page-hero-content">
              <span className="section-label">📁 Portfolio</span>
              <h1 className="page-title">A portfolio shaped by <span className="text-gradient">clarity, execution, and real impact</span></h1>
              <p className="page-description">
                We’ve helped businesses and educators present their ideas beautifully while creating digital experiences that are practical and scalable.
              </p>
              <div className="page-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">Discuss Your Project <ArrowRight size={18} /></Link>
                <Link to="/products" className="btn btn-ghost btn-lg">View Products</Link>
              </div>
            </div>
            <div className="page-hero-card card">
              <h3>Selected work highlights</h3>
              <p>Our portfolio spans education, commerce, SaaS, and service-led businesses with a strong focus on usability and growth.</p>
              <div className="pill-row">
                <span>Clean UI</span>
                <span>Conversion-focused</span>
                <span>Scalable builds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '32px' }}>
            <span className="section-label">Client Work</span>
            <h2 className="section-title">Selected projects from our <span className="text-gradient">portfolio</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              These are the businesses and brands we have supported with website and digital presence solutions.
            </p>
          </div>

          <div className="portfolio-client-list">
            {PORTFOLIO_ITEMS.map((item) => (
              <article key={item.name} className="portfolio-client-card card">
                <div className="portfolio-client-top">
                  <h3>{item.name}</h3>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                      Visit <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="portfolio-link muted">Client</span>
                  )}
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <div className="container">
          <div className="cta-panel card">
            <h2>Ready to build your next standout digital experience?</h2>
            <p>Let’s create a polished, conversion-ready product that reflects your brand and supports your next growth milestone.</p>
            <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
