import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import {
  Clock, Users, BookOpen, Star, CheckCircle, ChevronDown,
  ChevronRight, Zap, Award, TrendingUp, MessageCircle,
  Play, Download, Globe, Briefcase
} from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { COURSES } from '../data/constants'
import './CourseDetailPage.css'

const CURRICULUM = [
  {
    week: 'Module 1',
    title: 'Foundations & Environment Setup',
    lessons: ['Development Environment & Tools', 'Core Concepts Overview', 'First Project Setup', 'Git & Collaboration'],
  },
  {
    week: 'Module 2',
    title: 'Core Technologies Deep Dive',
    lessons: ['Advanced Patterns & Best Practices', 'State Management', 'API Integration', 'Performance Optimization'],
  },
  {
    week: 'Module 3',
    title: 'Real-World Projects',
    lessons: ['Industry Project #1', 'Code Reviews & Feedback', 'Industry Project #2', 'Deployment Strategies'],
  },
  {
    week: 'Module 4',
    title: 'Career Preparation',
    lessons: ['Resume Building', 'Portfolio Creation', 'Mock Interviews', 'Placement Process & Offers'],
  },
]

const FAQS = [
  { q: 'Do I need prior experience?', a: 'No prior experience is required for beginner courses. For intermediate courses, basic programming knowledge helps.' },
  { q: 'Are classes live or recorded?', a: 'We offer both — live interactive sessions on weekends + 24/7 access to recorded lectures.' },
  { q: 'What is the placement guarantee?', a: 'We provide 100% placement assistance. Students receive interview prep, resume building, and direct referrals to our 5+ hiring partners.' },
  { q: 'Can I pay in installments?', a: 'Yes! We offer 0% EMI options through Razorpay, PhonePe, and HDFC bank with no hidden charges.' },
  { q: 'What happens if I miss a class?', a: 'All live sessions are recorded and uploaded within 24 hours. You never miss out on content.' },
]

export default function CourseDetailPage() {
  const { slug } = useParams()
  const course = COURSES.find(c => c.slug === slug)
  const [openModules, setOpenModules] = useState([0])
  const [openFaqs, setOpenFaqs] = useState([])

  if (!course) {
    return (
      <div className="course-detail-page">
        <Navbar />
        <div className="course-not-found">
          <div className="container">
            <h1>Course Not Found</h1>
            <p>The course you're looking for doesn't exist.</p>
            <Link to="/courses" className="btn btn-primary">Browse All Courses</Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const discount = Math.round((1 - course.price / course.originalPrice) * 100)
  const toggleModule = (i) => setOpenModules(prev =>
    prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
  )
  const toggleFaq = (i) => setOpenFaqs(prev =>
    prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
  )

  return (
    <div className="course-detail-page">
      <Navbar />

      {/* Hero */}
      <section className="cd-hero" style={{ '--course-color': course.color }}>
        <div className="cd-hero-bg" style={{ background: `linear-gradient(135deg, ${course.color}20 0%, transparent 60%)` }} />
        <div className="container">
          <div className="cd-hero-inner">
            <div className="cd-hero-content">
              <div className="cd-badges">
                {course.isTrending && (
                  <span className="badge badge-accent"><TrendingUp size={11} /> Trending</span>
                )}
                <span className="badge badge-primary">{course.category}</span>
                <span className="badge badge-secondary">{course.level}</span>
              </div>

              <h1 className="cd-title">{course.title}</h1>
              <p className="cd-desc">{course.shortDesc}</p>

              {/* Rating Row */}
              <div className="cd-meta-row">
                <div className="cd-rating-inline">
                  <span className="cd-rating-num">{course.rating}</span>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: i < 5 ? '#F59E0B' : 'var(--color-surface-3)' }}>★</span>
                    ))}
                  </div>
                  <span className="text-muted">({course.reviews.toLocaleString()} reviews)</span>
                </div>
                <span className="cd-meta-item"><Users size={14} /> {course.students.toLocaleString()} students</span>
                <span className="cd-meta-item"><Clock size={14} /> {course.duration}</span>
                <span className="cd-meta-item"><BookOpen size={14} /> {course.hours} hours</span>
                <span className="cd-meta-item"><Globe size={14} /> {course.mode}</span>
              </div>

              {/* Instructor */}
              <div className="cd-instructor">
                <div className="cd-inst-avatar" style={{ background: course.color }}>
                  {course.instructor.name[0]}
                </div>
                <div>
                  <span className="cd-inst-label">Instructor</span>
                  <span className="cd-inst-name">{course.instructor.name}</span>
                  <span className="cd-inst-title">{course.instructor.title} · {course.instructor.exp} exp</span>
                </div>
              </div>

              {/* Tags */}
              <div className="cd-tags">
                {course.tags.map(t => (
                  <span key={t} className="course-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="cd-enroll-card card">
              <div className="cd-enroll-preview">
                <div className="cd-preview-icon" style={{ background: `${course.color}20`, border: `2px solid ${course.color}40` }}>
                  <Play size={40} style={{ color: course.color }} fill={course.color} />
                </div>
                <span className="cd-preview-label">Preview Course</span>
              </div>
              <div className="cd-enroll-price">
                <span className="cd-price-main">₹{course.price.toLocaleString()}</span>
                <span className="cd-price-orig">₹{course.originalPrice.toLocaleString()}</span>
                <span className="cd-price-off badge badge-success">{discount}% OFF</span>
              </div>
              {course.pricingTiers && (
                <div className="cd-pricing-tiers">
                  {course.pricingTiers.map(tier => (
                    <div key={tier.duration} className="cd-pricing-tier">
                      <span>{tier.duration}</span>
                      <span>₹{tier.price.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="cd-offer-timer">
                <span className="glow-dot" />
                <span>Offer ends in <strong>2 days 14:38:00</strong></span>
              </div>
              <Link to="/contact" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                Enroll Now — Get Started
              </Link>
              <Link to="/contact" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                Request Callback
              </Link>
              <div className="cd-includes">
                <p className="cd-includes-title">This course includes:</p>
                {[
                  { icon: <Clock size={15} />, text: `${course.hours} hours of content` },
                  { icon: <Play size={15} />, text: 'Live + Recorded sessions' },
                  { icon: <Download size={15} />, text: 'Downloadable resources' },
                  { icon: <Award size={15} />, text: 'Industry certificate' },
                  { icon: <Briefcase size={15} />, text: 'Placement assistance' },
                  { icon: <MessageCircle size={15} />, text: 'Mentor support' },
                ].map((item, i) => (
                  <div key={i} className="cd-include-item">
                    <span style={{ color: 'var(--color-secondary)' }}>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="cd-body-grid">
            <div className="cd-main">

              {/* Highlights */}
              <div className="cd-section">
                <h2 className="cd-section-title">🎯 What You'll Learn</h2>
                <div className="cd-highlights-grid">
                  {course.highlights.map(h => (
                    <div key={h} className="cd-highlight-item">
                      <CheckCircle size={18} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                  {[
                    'Hands-on industry projects',
                    'Real-world problem solving',
                    'Code review sessions',
                    'Career coaching & guidance',
                    'Interview preparation',
                    'Resume & portfolio building',
                  ].map(h => (
                    <div key={h} className="cd-highlight-item">
                      <CheckCircle size={18} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div className="cd-section">
                <h2 className="cd-section-title">📋 Course Curriculum</h2>
                <div className="cd-accordion">
                  {CURRICULUM.map((mod, i) => (
                    <div key={i} className={`cd-accordion-item ${openModules.includes(i) ? 'open' : ''}`}>
                      <button className="cd-accordion-trigger" onClick={() => toggleModule(i)}>
                        <div className="cd-acc-left">
                          <span className="cd-mod-badge">{mod.week}</span>
                          <span className="cd-mod-title">{mod.title}</span>
                        </div>
                        <div className="cd-acc-right">
                          <span className="cd-acc-count">{mod.lessons.length} lessons</span>
                          <ChevronDown size={16} className={`cd-acc-arrow ${openModules.includes(i) ? 'open' : ''}`} />
                        </div>
                      </button>
                      {openModules.includes(i) && (
                        <div className="cd-accordion-body">
                          {mod.lessons.map((lesson, j) => (
                            <div key={j} className="cd-lesson-item">
                              <Play size={13} style={{ color: course.color, flexShrink: 0 }} />
                              <span>{lesson}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="cd-section">
                <h2 className="cd-section-title">❓ Frequently Asked Questions</h2>
                <div className="cd-accordion">
                  {FAQS.map((faq, i) => (
                    <div key={i} className={`cd-accordion-item ${openFaqs.includes(i) ? 'open' : ''}`}>
                      <button className="cd-accordion-trigger" onClick={() => toggleFaq(i)}>
                        <span className="cd-mod-title">{faq.q}</span>
                        <ChevronDown size={16} className={`cd-acc-arrow ${openFaqs.includes(i) ? 'open' : ''}`} />
                      </button>
                      {openFaqs.includes(i) && (
                        <div className="cd-accordion-body">
                          <p className="cd-faq-answer">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar placeholder for desktop */}
            <div className="cd-sidebar-spacer" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cd-cta-banner">
        <div className="container">
          <div className="cd-cta-inner">
            <div>
              <h2>Ready to transform your career?</h2>
              <p>Join 7,500+ students who've launched their IT careers with Synovers</p>
            </div>
            <div className="cd-cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Enroll Now <ChevronRight size={18} /></Link>
              <Link to="/contact" className="btn btn-ghost btn-lg">Talk to Counsellor</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
