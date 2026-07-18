import { Link } from 'react-router-dom'
import { Home, ArrowLeft, AlertCircle } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <Navbar />

      <section className="not-found-section">
        {/* Animated Orbs */}
        <div className="not-found-bg">
          <div className="not-found-orb not-found-orb-1" />
          <div className="not-found-orb not-found-orb-2" />
        </div>

        <div className="container">
          <div className="not-found-content card-glass">
            <div className="not-found-icon-wrap">
              <AlertCircle size={64} className="not-found-icon" />
            </div>
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-subtitle">Lost in Tech Space?</h2>
            <p className="not-found-text">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
            </p>
            <div className="not-found-actions">
              <Link to="/" className="btn btn-primary btn-lg">
                <Home size={18} /> Back to Home
              </Link>
              <button onClick={() => window.history.back()} className="btn btn-outline btn-lg">
                <ArrowLeft size={18} /> Go Back
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
