import { useState } from 'react'
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard, BookOpen, Award, MessageCircle,
  User, LogOut, Zap, ChevronRight, TrendingUp, Clock,
  CheckCircle, Play, Lock
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { COURSES } from '../../data/constants'
import './StudentDashboard.css'

const MY_COURSES = [
  { ...COURSES[0], progress: 65, lastLesson: 'API Integration with LangChain' },
  { ...COURSES[1], progress: 30, lastLesson: 'Pandas DataFrames Deep Dive' },
]

const UPCOMING = [
  { title: 'Live Session: React Hooks', date: 'Jul 14, 2026', time: '7:00 PM', type: 'live' },
  { title: 'Assignment Deadline: ML Project', date: 'Jul 16, 2026', time: '11:59 PM', type: 'deadline' },
  { title: 'Mock Interview', date: 'Jul 18, 2026', time: '10:00 AM', type: 'interview' },
]

const NAV_LINKS = [
  { to: '/app', icon: <LayoutDashboard size={18} />, label: 'Dashboard', exact: true },
  { to: '/app/courses', icon: <BookOpen size={18} />, label: 'My Courses' },
  { to: '/app/certificates', icon: <Award size={18} />, label: 'Certificates' },
  { to: '/app/messages', icon: <MessageCircle size={18} />, label: 'Messages' },
  { to: '/app/profile', icon: <User size={18} />, label: 'Profile' },
]

export default function StudentDashboard() {
  const { user, logout } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => { logout(); navigate('/') }

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="dash-logo">
          <img src="/logo.png" alt="Synovers Logo" className="dash-logo-img" />
          <div className="logo-text">
            <span className="logo-name">Synovers</span>
            <span className="logo-sub">Student Portal</span>
          </div>
        </div>

        <div className="dash-user">
          <div className="dash-avatar">{user?.name?.[0] || 'S'}</div>
          <div>
            <div className="dash-username">{user?.name || 'Student'}</div>
            <div className="dash-userrole">Student</div>
          </div>
        </div>

        <nav className="dash-nav">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`dash-nav-link ${
                link.exact
                  ? location.pathname === link.to ? 'active' : ''
                  : location.pathname.startsWith(link.to) && !link.exact ? 'active' : ''
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <button className="dash-logout" onClick={handleLogout}>
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main */}
      <main className="dashboard-main">
        {/* Top bar */}
        <div className="dash-topbar">
          <div className="dash-topbar-title">
            <h1>Student Dashboard</h1>
            <p>Welcome back, {user?.name?.split(' ')[0] || 'Student'}! 👋</p>
          </div>
          <Link to="/" className="btn btn-ghost btn-sm">← Back to Site</Link>
        </div>

        <div className="dashboard-content">
          {/* Stats */}
          <div className="dash-stats">
            {[
              { label: 'Courses Enrolled', value: MY_COURSES.length, icon: <BookOpen size={20} />, color: 'var(--color-primary)' },
              { label: 'Hours Completed', value: '142', icon: <Clock size={20} />, color: 'var(--color-secondary)' },
              { label: 'Assignments Done', value: '18/24', icon: <CheckCircle size={20} />, color: 'var(--color-success)' },
              { label: 'Avg. Progress', value: '47%', icon: <TrendingUp size={20} />, color: 'var(--color-accent)' },
            ].map((s, i) => (
              <div key={i} className="dash-stat-card card">
                <div className="dash-stat-icon" style={{ background: `${s.color}15`, color: s.color }}>
                  {s.icon}
                </div>
                <div>
                  <div className="dash-stat-value">{s.value}</div>
                  <div className="dash-stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* My Courses */}
          <div className="dash-section">
            <div className="dash-section-header">
              <h2>My Courses</h2>
              <Link to="/courses" className="btn btn-ghost btn-sm">Browse More <ChevronRight size={14} /></Link>
            </div>
            <div className="dash-courses-grid">
              {MY_COURSES.map(c => (
                <div key={c.id} className="dash-course-card card">
                  <div className="dash-course-bar" style={{ background: c.color }} />
                  <div className="dash-course-body">
                    <span className="badge badge-primary">{c.category}</span>
                    <h3 className="dash-course-title">{c.title}</h3>
                    <p className="dash-course-last">
                      <Play size={12} style={{ color: c.color }} /> Last: {c.lastLesson}
                    </p>
                    <div className="dash-progress">
                      <div className="dash-progress-bar progress-bar">
                        <div className="progress-fill" style={{ width: `${c.progress}%`, background: c.color }} />
                      </div>
                      <span className="dash-progress-pct">{c.progress}%</span>
                    </div>
                    <button className="btn btn-primary btn-sm" style={{ marginTop: 'var(--space-3)' }}>
                      Continue Learning
                    </button>
                  </div>
                </div>
              ))}

              {/* Locked Course Slot */}
              <div className="dash-course-card dash-course-locked card">
                <div className="locked-icon"><Lock size={28} /></div>
                <h3>Unlock More Courses</h3>
                <p>Enroll in a new course to continue learning</p>
                <Link to="/courses" className="btn btn-outline btn-sm">Browse Courses</Link>
              </div>
            </div>
          </div>

          {/* Upcoming */}
          <div className="dash-section">
            <h2>Upcoming Schedule</h2>
            <div className="dash-upcoming">
              {UPCOMING.map((item, i) => (
                <div key={i} className={`dash-upcoming-item card dash-upcoming-${item.type}`}>
                  <div className="dash-upcoming-icon">
                    {item.type === 'live' ? '🔴' : item.type === 'deadline' ? '⏰' : '🎯'}
                  </div>
                  <div className="dash-upcoming-info">
                    <span className="dash-upcoming-title">{item.title}</span>
                    <span className="dash-upcoming-time">{item.date} · {item.time}</span>
                  </div>
                  <button className="btn btn-ghost btn-sm">Join</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
