import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail, Zap } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { COURSES } from '../../data/constants'
import './Navbar.css'

const COURSE_CATEGORIES = [
  { label: 'AI & Full Stack', icon: '🤖', items: ['AI + Python Fullstack Development', 'AI + Python Web Development', 'Java + AI Web Development'] },
  { label: 'Data & Analytics', icon: '📊', items: ['AI + Data Analyst', 'AI + Data Science'] },
  { label: 'Design & Marketing', icon: '🎨', items: ['UI/UX Design Professional'] },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const { user, logout, isAuthenticated } = useAuth()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setCoursesOpen(false)
  }, [location])

  return (
    <>
      {/* Top Bar */}
      <div className="topbar hide-mobile">
        <div className="container">
          <div className="topbar-inner">
            <div className="topbar-left">
              <a href="tel:+919344626768" className="topbar-link">
                <Phone size={13} /> +91 93446 26768
              </a>
              <a href="tel:+919994915435" className="topbar-link">
                <Phone size={13} /> +91 99949 15435
              </a>
              <a href="mailto:contact@synovers.com" className="topbar-link">
                <Mail size={13} /> contact@synovers.com
              </a>
            </div>
            <div className="topbar-right">
              <span className="topbar-badge">🔥 New Batch Starting — AI + Python Fullstack</span>
              <Link to="/contact" className="topbar-link">Register Now →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Logo */}
            <Link to="/" className="navbar-logo brand-chip">
              <img src="/logo.png" alt="Synovers Logo" className="navbar-logo-img" />
              <div className="logo-text">
                <span className="logo-name">Synovers</span>
                <span className="logo-sub">Technologies</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="navbar-links hide-mobile">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
              
              {/* Courses Dropdown */}
              <div
                className="nav-dropdown-trigger"
                onMouseEnter={() => setCoursesOpen(true)}
                onMouseLeave={() => setCoursesOpen(false)}
              >
                <span className={`nav-link ${location.pathname.includes('/courses') ? 'active' : ''}`}>
                  Courses <ChevronDown size={14} className={`dropdown-arrow ${coursesOpen ? 'open' : ''}`} />
                </span>
                {coursesOpen && (
                  <div className="mega-menu">
                    <div className="mega-menu-inner">
                      {COURSE_CATEGORIES.map(cat => (
                        <div key={cat.label} className="mega-menu-col">
                          <div className="mega-col-header">
                            <span>{cat.icon}</span> {cat.label}
                          </div>
                          {cat.items.map(item => {
                            const slug = item.toLowerCase().replace(/\s+/g, '-').replace(/\+/g, 'plus').replace(/[^a-z0-9-]/g, '')
                            return (
                              <Link key={item} to={`/courses/${slug}`} className="mega-menu-item">
                                {item}
                              </Link>
                            )
                          })}
                        </div>
                      ))}
                      <div className="mega-menu-cta">
                        <Link to="/courses" className="btn btn-primary btn-sm">View All Courses</Link>
                        <p className="mega-cta-sub">12 courses · 7,500+ students</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
              <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}>Products</Link>
              <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
              <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}>Portfolio</Link>
              <Link to="/special-offers" className={`nav-link ${location.pathname === '/special-offers' ? 'active' : ''}`}>Offers</Link>
              <Link to="/hire-talent" className={`nav-link ${location.pathname === '/hire-talent' ? 'active' : ''}`}>Hire Talent</Link>
              <Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}>Blog</Link>
              <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
            </div>

            {/* Actions */}
            <div className="navbar-actions hide-mobile">
              {isAuthenticated && (
                <div className="nav-user">
                  <div className="nav-avatar">{user?.name?.[0] || 'U'}</div>
                  <div className="nav-user-menu">
                    <Link to={user?.role === 'admin' ? '/admin' : '/app'}>My Dashboard</Link>
                    <button onClick={logout}>Logout</button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Toggle */}
            <div className="mobile-controls show-mobile-only">
              <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <div className="container">
              <div className="mobile-menu-inner">
                <Link to="/" className="mobile-nav-link">Home</Link>
                <div className="mobile-section-title">Courses</div>
                {COURSES.slice(0, 6).map(c => (
                  <Link key={c.id} to={`/courses/${c.slug}`} className="mobile-nav-link mobile-course-link">
                    {c.title}
                  </Link>
                ))}
                <Link to="/courses" className="mobile-nav-link">All Courses →</Link>
                <div className="mobile-divider" />
                <Link to="/about" className="mobile-nav-link">About</Link>
                <Link to="/products" className="mobile-nav-link">Products</Link>
                <Link to="/services" className="mobile-nav-link">Services</Link>
                <Link to="/portfolio" className="mobile-nav-link">Portfolio</Link>
                <Link to="/special-offers" className="mobile-nav-link">Special Offers</Link>
                <Link to="/hire-talent" className="mobile-nav-link">Hire Talent</Link>
                <Link to="/blog" className="mobile-nav-link">Blog</Link>
                <Link to="/contact" className="mobile-nav-link">Contact</Link>

              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
