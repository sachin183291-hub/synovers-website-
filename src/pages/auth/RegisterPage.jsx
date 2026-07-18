import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Zap, Mail, Lock, User, Phone, ChevronRight } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import toast from 'react-hot-toast'
import './AuthPages.css'

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '', agree: false })
  const [showPwd, setShowPwd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(p => ({ ...p, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleStep1 = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone) { toast.error('Please fill all fields'); return }
    setStep(2)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (form.password !== form.confirm) { toast.error('Passwords do not match'); return }
    if (!form.agree) { toast.error('Please accept the terms'); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    const user = { name: form.name, email: form.email, role: 'student' }
    login(user)
    toast.success(`Welcome to Synovers, ${user.name}! 🎉`)
    navigate('/app')
  }

  return (
    <div className="auth-page">
      <div className="auth-mesh" />

      <Link to="/" className="auth-logo">
        <img src="/logo.png" alt="Synovers Logo" className="auth-logo-img" />
        <div className="logo-text">
          <span className="logo-name">Synovers</span>
          <span className="logo-sub">Technologies</span>
        </div>
      </Link>

      <div className="auth-container">
        <div className="auth-card card">
          {/* Steps */}
          <div className="auth-steps">
            <div className={`auth-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'done' : ''}`}>
              <div className="step-circle">1</div>
              <span>Your Info</span>
            </div>
            <div className="step-line" />
            <div className={`auth-step ${step >= 2 ? 'active' : ''}`}>
              <div className="step-circle">2</div>
              <span>Password</span>
            </div>
          </div>

          <div className="auth-header">
            <h1 className="auth-title">{step === 1 ? 'Create Account' : 'Set Password'}</h1>
            <p className="auth-subtitle">
              {step === 1 ? 'Join 7,500+ students — it\'s free!' : 'Secure your account with a strong password'}
            </p>
          </div>

          {step === 1 ? (
            <form className="auth-form" onSubmit={handleStep1}>
              <div className="input-group">
                <label className="input-label">Full Name</label>
                <div className="input-wrapper">
                  <User size={16} className="input-icon" />
                  <input type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="John Doe" className="input-field input-with-icon" required />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Email Address</label>
                <div className="input-wrapper">
                  <Mail size={16} className="input-icon" />
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="you@example.com" className="input-field input-with-icon" required />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Phone Number</label>
                <div className="input-wrapper">
                  <Phone size={16} className="input-icon" />
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+91 99999 99999" className="input-field input-with-icon" required />
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-lg auth-submit">
                Continue <ChevronRight size={18} />
              </button>
            </form>
          ) : (
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label className="input-label">Password</label>
                <div className="input-wrapper">
                  <Lock size={16} className="input-icon" />
                  <input type={showPwd ? 'text' : 'password'} name="password" value={form.password}
                    onChange={handleChange} placeholder="Min 8 characters"
                    className="input-field input-with-icon input-with-toggle" required minLength={8} />
                  <button type="button" className="pwd-toggle" onClick={() => setShowPwd(!showPwd)}>
                    {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Confirm Password</label>
                <div className="input-wrapper">
                  <Lock size={16} className="input-icon" />
                  <input type={showPwd ? 'text' : 'password'} name="confirm" value={form.confirm}
                    onChange={handleChange} placeholder="Re-enter password"
                    className="input-field input-with-icon" required />
                </div>
              </div>
              <label className="auth-terms">
                <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
                I agree to the <Link to="#" className="auth-switch-link">Terms of Service</Link> and <Link to="#" className="auth-switch-link">Privacy Policy</Link>
              </label>
              <div className="auth-step2-btns">
                <button type="button" className="btn btn-outline" onClick={() => setStep(1)}>← Back</button>
                <button type="submit" className="btn btn-primary btn-lg auth-submit" disabled={loading}>
                  {loading ? <span className="auth-spinner" /> : <>Create Account <ChevronRight size={18} /></>}
                </button>
              </div>
            </form>
          )}

          <p className="auth-switch">
            Already have an account? <Link to="/login" className="auth-switch-link">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
