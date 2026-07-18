import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard, Users, BookOpen, MessageCircle,
  Settings, LogOut, Zap, TrendingUp, DollarSign,
  Award, BarChart3, ChevronRight, Plus, Edit, Trash2
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { COURSES } from '../../data/constants'
import './AdminDashboard.css'

const ADMIN_NAV = [
  { to: '/admin', icon: <LayoutDashboard size={18} />, label: 'Overview', exact: true },
  { to: '/admin/students', icon: <Users size={18} />, label: 'Students' },
  { to: '/admin/courses', icon: <BookOpen size={18} />, label: 'Courses' },
  { to: '/admin/messages', icon: <MessageCircle size={18} />, label: 'Enquiries' },
  { to: '/admin/reports', icon: <BarChart3 size={18} />, label: 'Reports' },
  { to: '/admin/settings', icon: <Settings size={18} />, label: 'Settings' },
]

const RECENT_ENQUIRIES = [
  { name: 'Arjun Nair', course: 'AI Full Stack', phone: '+91 98765 43210', date: 'Jul 12', status: 'new' },
  { name: 'Divya Mohan', course: 'Data Science', phone: '+91 87654 32109', date: 'Jul 11', status: 'called' },
  { name: 'Santhosh K', course: 'MERN Stack', phone: '+91 76543 21098', date: 'Jul 11', status: 'enrolled' },
  { name: 'Meena R.', course: 'Digital Marketing', phone: '+91 65432 10987', date: 'Jul 10', status: 'new' },
]

export default function AdminDashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => { logout(); navigate('/') }

  const statusColor = {
    new: 'var(--color-warning)',
    called: 'var(--color-info)',
    enrolled: 'var(--color-success)',
  }

  return (
    <div className="dashboard-layout admin-layout">
      {/* Sidebar */}
      <aside className="dashboard-sidebar admin-sidebar">
        <div className="dash-logo">
          <img src="/logo.png" alt="Synovers Logo" className="dash-logo-img" />
          <div className="logo-text">
            <span className="logo-name">Synovers</span>
            <span className="logo-sub">Admin Portal</span>
          </div>
        </div>

        <div className="dash-user">
          <div className="dash-avatar admin-dash-avatar">{user?.name?.[0] || 'A'}</div>
          <div>
            <div className="dash-username">{user?.name || 'Admin'}</div>
            <div className="dash-userrole" style={{ color: 'var(--color-accent)' }}>⚡ Administrator</div>
          </div>
        </div>

        <nav className="dash-nav">
          {ADMIN_NAV.map(link => (
            <Link key={link.to} to={link.to} className="dash-nav-link">
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
        <div className="dash-topbar">
          <div className="dash-topbar-title">
            <h1>Admin Dashboard</h1>
            <p>Manage students, courses & enquiries</p>
          </div>
          <Link to="/" className="btn btn-ghost btn-sm">← Back to Site</Link>
        </div>

        <div className="dashboard-content">
          {/* KPIs */}
          <div className="dash-stats">
            {[
              { label: 'Total Students', value: '25,412', icon: <Users size={20} />, color: 'var(--color-primary)', trend: '+12%' },
              { label: 'Monthly Revenue', value: '₹18.2L', icon: <DollarSign size={20} />, color: 'var(--color-secondary)', trend: '+8%' },
              { label: 'New Enquiries', value: '284', icon: <MessageCircle size={20} />, color: 'var(--color-accent)', trend: '+22%' },
              { label: 'Placements (Jul)', value: '143', icon: <Award size={20} />, color: 'var(--color-success)', trend: '+5%' },
            ].map((s, i) => (
              <div key={i} className="dash-stat-card card">
                <div className="dash-stat-icon" style={{ background: `${s.color}15`, color: s.color }}>
                  {s.icon}
                </div>
                <div>
                  <div className="dash-stat-value">{s.value}</div>
                  <div className="dash-stat-label">{s.label}</div>
                </div>
                <span className="admin-trend">{s.trend}</span>
              </div>
            ))}
          </div>

          <div className="admin-body-grid">
            {/* Recent Enquiries */}
            <div className="dash-section">
              <div className="dash-section-header">
                <h2>Recent Enquiries</h2>
                <button className="btn btn-primary btn-sm"><Plus size={14} /> Add Enquiry</button>
              </div>
              <div className="admin-table-wrap card">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Course</th>
                      <th>Phone</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RECENT_ENQUIRIES.map((enq, i) => (
                      <tr key={i}>
                        <td className="admin-td-name">{enq.name}</td>
                        <td><span className="badge badge-primary" style={{ fontSize: '0.75rem' }}>{enq.course}</span></td>
                        <td className="admin-td-phone">{enq.phone}</td>
                        <td className="admin-td-date">{enq.date}</td>
                        <td>
                          <span className="admin-status-badge" style={{ '--status-color': statusColor[enq.status] }}>
                            {enq.status.charAt(0).toUpperCase() + enq.status.slice(1)}
                          </span>
                        </td>
                        <td>
                          <div className="admin-actions">
                            <button className="admin-action-btn"><Edit size={14} /></button>
                            <button className="admin-action-btn danger"><Trash2 size={14} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Course Overview */}
            <div className="dash-section">
              <div className="dash-section-header">
                <h2>Courses Overview</h2>
                <button className="btn btn-outline btn-sm">View All</button>
              </div>
              <div className="admin-courses-list">
                {COURSES.slice(0, 5).map(c => (
                  <div key={c.id} className="admin-course-row card">
                    <div className="admin-course-color-dot" style={{ background: c.color }} />
                    <div className="admin-course-info">
                      <span className="admin-course-name">{c.title}</span>
                      <span className="admin-course-meta">{c.students.toLocaleString()} students · ₹{c.price.toLocaleString()}</span>
                    </div>
                    <div className="admin-course-rating">
                      ⭐ {c.rating}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
