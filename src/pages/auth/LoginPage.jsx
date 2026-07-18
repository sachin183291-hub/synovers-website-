import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Zap, Mail, Lock, ChevronRight } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import toast from 'react-hot-toast'
import './AuthPages.css'

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '', role: 'student' })
  const [showPwd, setShowPwd] = useState(false)
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.email || !form.password) { toast.error('Please fill all fields'); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    const user = { name: 'Demo User', email: form.email, role: form.role }
    login(user)
    toast.success(`Welcome back, ${user.name}!`)
    navigate(form.role === 'admin' ? '/admin' : '/app')
    setLoading(false)
  }

  return (
    <div className="auth-page">
      <div className="auth-mesh" />

      {/* Logo */}
      <Link to="/" className="auth-logo">
        <img src="/logo.png" alt="Synovers Logo" className="auth-logo-img" />
        <div className="logo-text">
          <span className="logo-name">Synovers</span>
          <span className="logo-sub">Technologies</span>
        </div>
      </Link>

      <div className="auth-container">
        <div className="auth-card card">
          <div className="auth-header">
            <h1 className="auth-title">Welcome Back</h1>
            <p className="auth-subtitle">Sign in to your Synovers account</p>
          </div>

          {/* Role Switcher */}
          <div className="role-switcher">
            {['student', 'admin'].map(r => (
              <button
                key={r}
                className={`role-btn ${form.role === r ? 'active' : ''}`}
                onClick={() => setForm(p => ({ ...p, role: r }))}
              >
                {r === 'student' ? '🎓 Student' : '⚡ Admin'}
              </button>
            ))}
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <div className="input-wrapper">
                <Mail size={16} className="input-icon" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="input-field input-with-icon"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Password</label>
              <div className="input-wrapper">
                <Lock size={16} className="input-icon" />
                <input
                  type={showPwd ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="input-field input-with-icon input-with-toggle"
                  required
                />
                <button type="button" className="pwd-toggle" onClick={() => setShowPwd(!showPwd)}>
                  {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="auth-row">
              <label className="auth-remember">
                <input type="checkbox" /> Remember me
              </label>
              <Link to="#" className="auth-forgot">Forgot password?</Link>
            </div>

            <button type="submit" className="btn btn-primary btn-lg auth-submit" disabled={loading}>
              {loading ? <span className="auth-spinner" /> : <>Sign In <ChevronRight size={18} /></>}
            </button>
          </form>

          <div className="auth-divider">
            <span>or continue with</span>
          </div>

          <div className="auth-social">
            <button className="social-btn">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width={18} />
              Google
            </button>
            <button className="social-btn">
              📱 OTP Login
            </button>
          </div>

          <p className="auth-switch">
            Don't have an account? <Link to="/register" className="auth-switch-link">Sign up free</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
