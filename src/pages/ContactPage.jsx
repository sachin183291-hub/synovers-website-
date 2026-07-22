import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { COURSES } from '../data/constants'
import './ContactPage.css'

const CONTACT_INFO = [
  {
    icon: <Phone size={22} />,
    title: 'Call Us',
    lines: ['+91 9344626768', '+91 9994915435'],
    action: 'tel:+919344626768',
    color: 'var(--color-primary)',
  },
  {
    icon: <Mail size={22} />,
    title: 'Email Us',
    lines: ['contact@synovers.com'],
    action: 'mailto:contact@synovers.com',
    color: 'var(--color-secondary)',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Visit Us',
    lines: ['Kalingarayan St, Ram Nagar', 'Gandhipuram, Coimbatore', 'Tamil Nadu - 641009'],
    action: 'https://maps.google.com/?q=Kalingarayan+St,+Ram+Nagar,+Gandhipuram,+Coimbatore,+Tamil+Nadu+641009',
    color: 'var(--color-accent)',
  },
  {
    icon: <Clock size={22} />,
    title: 'Working Hours',
    lines: ['Mon – Sat: 9am – 7pm', 'Sun: 10am – 2pm'],
    action: null,
    color: 'var(--color-warning)',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!form.name.trim()) newErrors.name = 'Name is required'
    else if (form.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters'

    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Please enter a valid email'

    if (!form.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!/^(\+91|0)?[6-9]\d{9}$/.test(form.phone.replace(/\D/g, ''))) newErrors.phone = 'Please enter a valid Indian phone number'

    return newErrors
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      toast.error('Please fix the errors below')
      return
    }

    setLoading(true)
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          course: form.course,
          message: form.message
        })
      })
      
      const result = await response.json()
      
      if (response.ok) {
        setSubmitted(true)
        toast.success("Message sent! We'll call you within 24 hours.")
      } else {
        toast.error(result.message || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      toast.error('Something went wrong. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-page">
      <Navbar />

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-mesh" />
        <div className="container">
          <div className="contact-hero-inner text-center">
            <span className="section-label">📞 Contact Us</span>
            <h1 className="contact-hero-title">
              Get In Touch &<br />
              <span className="text-gradient">Start Your Journey</span>
            </h1>
            <p className="contact-hero-sub">
              Have questions about admissions, courses, or placements? Our counsellors are ready to help you.
            </p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="section-sm">
        <div className="container">
          <div className="contact-info-grid">
            {CONTACT_INFO.map((info, i) => (
              <div key={i} className="contact-info-card card">
                <div className="contact-info-icon" style={{ background: `${info.color}15`, color: info.color }}>
                  {info.icon}
                </div>
                <h3 className="contact-info-title">{info.title}</h3>
                {info.lines.map((line, j) => (
                  info.action ? (
                    <a key={j} href={info.action} className="contact-info-line">{line}</a>
                  ) : (
                    <p key={j} className="contact-info-line">{line}</p>
                  )
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form + Map */}
      <section className="section" id="send-message">
        <div className="container">
          <div className="contact-main-grid">
            {/* Form */}
            <div className="contact-form-wrap">
              <h2 className="contact-form-title">Send Us a Message</h2>
              <p className="contact-form-sub">Fill the form below and our team will reach out within 24 hours</p>

              {submitted ? (
                <div className="contact-success">
                  <CheckCircle size={56} style={{ color: 'var(--color-success)' }} />
                  <h3>Message Received!</h3>
                  <p>Thank you <strong>{form.name}</strong>! Our counsellors will contact you at <strong>{form.phone}</strong> within 24 hours.</p>
                  <button className="btn btn-outline" onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', email: '', phone: '', course: '', message: '' })
                    setErrors({})
                  }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="input-group">
                      <label className="input-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className={`input-field ${errors.name ? 'input-error' : ''}`}
                        required
                      />
                      {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>
                    <div className="input-group">
                      <label className="input-label">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Enter your mobile number"
                        className={`input-field ${errors.phone ? 'input-error' : ''}`}
                        required
                      />
                      {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your Gmail ID"
                      className={`input-field ${errors.email ? 'input-error' : ''}`}
                      required
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  <div className="input-group">
                    <label className="input-label">Interested Course</label>
                    <select name="course" value={form.course} onChange={handleChange} className="input-field">
                      <option value="">Select a course...</option>
                      {COURSES.map(c => (
                        <option key={c.id} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Your Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your background and goals..."
                      className="input-field contact-textarea"
                      rows={5}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg contact-submit-btn" disabled={loading}>
                    <Send size={18} /> {loading ? 'Sending...' : 'Send Message'}
                  </button>
                  <p className="contact-form-disclaimer">
                    🔒 Your information is safe with us. No spam, ever.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar info */}
            <div className="contact-sidebar">
              <div className="contact-whatsapp card">
                <div className="whatsapp-header">
                  <MessageCircle size={24} style={{ color: '#25D366' }} />
                  <h3>Chat on WhatsApp</h3>
                </div>
                <p>Get instant answers to your queries on WhatsApp — available 24/7</p>
                <a
                  href="https://wa.me/919344626768"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  style={{ background: '#25D366', color: 'white', justifyContent: 'center' }}
                >
                  Chat Now
                </a>
              </div>

              <div className="contact-office card">
                <h3>Our Office</h3>
                <div className="office-map">
                  <iframe
                    title="Synovers Technologies Office Location"
                    src="https://maps.google.com/maps?q=Kalingarayan%20St,%20Ram%20Nagar,%20Gandhipuram,%20Coimbatore,%20Tamil%20Nadu%20641009&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="office-details">
                  <p>Kalingarayan St, Ram Nagar</p>
                  <p>Gandhipuram, Coimbatore</p>
                  <p>Tamil Nadu — 641009</p>
                </div>
              </div>

              <div className="contact-quick card">
                <h3>Quick Info</h3>
                <div className="quick-list">
                  {[
                    ['🎓', 'Free demo class available'],
                    ['💳', '0% EMI options available'],
                    ['🚀', 'Batch starts every month'],
                    ['📞', 'Free career counselling'],
                  ].map(([icon, text]) => (
                    <div key={text} className="quick-item">
                      <span>{icon}</span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
