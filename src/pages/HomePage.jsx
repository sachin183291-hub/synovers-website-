import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Play, Star, Users, Award, TrendingUp, BookOpen,
  Briefcase, CheckCircle, ChevronLeft, ChevronRight, Zap,
  Shield, Clock, Globe, Quote
} from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CourseCard from '../components/course/CourseCard'
import { COURSES, STATS, MENTORS, TESTIMONIALS, BLOG_POSTS } from '../data/constants'
import './HomePage.css'

/* ─── Helper: animated counter ─── */
function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const num = parseInt(target.replace(/\D/g, ''))
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = Math.ceil(num / (duration / 16))
        const timer = setInterval(() => {
          start = Math.min(start + step, num)
          setCount(start)
          if (start >= num) clearInterval(timer)
        }, 16)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target, duration])

  const display = target.includes('+') ? `${count.toLocaleString()}+` : target.includes('%') ? `${count}%` : `${count.toLocaleString()}`
  return <span ref={ref} className="counter-value">{display}</span>
}

/* ─── Hero Section ─── */
function HeroSection() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <section className="hero-section">
      {/* Animated background */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-container">

        {/* ── Left: Content ── */}
        <div className="hero-content">
          <div className="hero-badge animate-fade-up">
            <span className="glow-dot" />
            <span>🏆 Coimbatore's #1 Tech Training Institute — 2026</span>
          </div>

          <h1 className="hero-title animate-fade-up anim-delay-1">
            Transform Your Career<br />
            With <span className="text-gradient">In-Demand</span><br />
            Tech Skills
          </h1>

          <p className="hero-subtitle animate-fade-up anim-delay-2">
            Join <strong>7,500+ learners</strong> from Coimbatore &amp; across India who built their
            tech careers with Synovers's industry-led programs, live mentorship &amp; <strong>guaranteed placement support</strong>.
          </p>

          <div className="hero-actions animate-fade-up anim-delay-3">
            <Link to="/courses" className="btn btn-primary btn-lg">
              Start Learning <ArrowRight size={18} />
            </Link>
            <button className="hero-play-btn" onClick={() => setDemoOpen(true)}>
              <div className="play-icon"><Play size={16} fill="white" /></div>
              Watch Demo
            </button>
          </div>

          <div className="hero-trust animate-fade-up anim-delay-4">
            <div className="hero-trust-item">
              <div className="hero-stars">⭐ 4.7/5</div>
              <div className="hero-trust-label">Google Rating</div>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-item">
              <div className="hero-trust-num">97%</div>
              <div className="hero-trust-label">Placement Rate</div>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-item">
              <div className="hero-trust-num">₹6 LPA</div>
              <div className="hero-trust-label">Avg. Package</div>
            </div>
          </div>
        </div>

        {/* ── Right: Hero Image Visual ── */}
        <div className="hero-visual animate-fade-up anim-delay-2">
          <div className="hv-scene">

            {/* Decorative glow blob behind image */}
            <div className="hv-blob" />

            {/* Background Company Logo & Name (Behind students) */}
            <div className="hv-bg-logo-wrap">
              <img src="/logo.png" alt="Synovers" className="hv-bg-logo" />
              <span className="hv-bg-text">SYNOVERS</span>
            </div>

            {/* Main illustration image */}
            <div className="hv-illus-wrap">
              <img
                src="/synovers-hero-cleaned3.png"
                alt="Synovers student — Be the Voice. Be the Change."
                className="hv-illus-img"
              />
            </div>

            {/* Extra floating badge: placement offer */}
            <div className="hv-badge hv-badge-top-right">
              <Briefcase size={16} color="#fff" />
              <div>
                <p className="hv-badge-title">₹6 LPA Placed! 🎉</p>
                <p className="hv-badge-sub">Karthik R. @ Amazon</p>
              </div>
            </div>

            {/* Extra floating badge: certificate */}
            <div className="hv-badge hv-badge-bottom-left">
              <Award size={16} color="#fff" />
              <div>
                <p className="hv-badge-title">🏅 Certificate Earned!</p>
                <p className="hv-badge-sub">Priya S. — MERN Stack</p>
              </div>
            </div>


            {/* Decorative dot pattern */}
            <div className="hv-dots" aria-hidden="true" />
          </div>
        </div>


      </div>

      {/* Demo Modal */}
      {demoOpen && (
        <div className="overlay" onClick={() => setDemoOpen(false)}>
          <div className="modal video-modal" onClick={e => e.stopPropagation()}>
            <div className="video-placeholder">
              <Play size={48} color="white" />
              <p>Success Stories Video</p>
              <p className="text-muted">Video player would be integrated here</p>
            </div>
            <button className="modal-close" onClick={() => setDemoOpen(false)}>✕ Close</button>
          </div>
        </div>
      )}
    </section>
  )
}


/* ─── Stats Section ─── */
function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="stat-card card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value"><AnimatedCounter target={stat.value} /></div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Featured Courses ─── */
function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const categories = ['all', 'AI & ML', 'Web Development', 'Data & Analytics', 'Security & DevOps', 'Hardware & Embedded', 'Design', 'Marketing']

  const filtered = activeCategory === 'all'
    ? COURSES.slice(0, 6)
    : COURSES.filter(c => c.category === activeCategory).slice(0, 6)

  return (
    <section className="section courses-section">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-label">Industry-Recognized Programs</p>
          <h2 className="section-title">Courses Designed for <span className="text-gradient">Real Careers</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Every course is crafted with industry experts, updated quarterly, and backed by our 97% placement guarantee.
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'all' ? 'All Courses' : cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="courses-grid">
          {filtered.length > 0 ? filtered.map((course, i) => (
            <CourseCard key={course.id} course={course} delay={i * 0.05} />
          )) : (
            <div className="empty-state">
              <p>No courses in this category yet. <Link to="/courses">View All →</Link></p>
            </div>
          )}
        </div>

        <div className="text-center" style={{ marginTop: '48px' }}>
          <Link to="/courses" className="btn btn-outline btn-lg">
            View All 17 Courses <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Why Synovers ─── */
function WhySynoversSection() {
  const features = [
    { icon: '🎓', title: 'Expert-Led Live Training', desc: 'Learn from industry professionals with 8–12 years of real-world experience. Not just videos — live interaction every session.' },
    { icon: '💼', title: 'Guaranteed Placement', desc: '97% placement rate backed by 5+ hiring partners. Our dedicated placement team works until you get placed.' },
    { icon: '🤖', title: 'AI-Powered Learning Path', desc: 'Your curriculum adapts to your learning pace and career goals. Our AI recommends what to learn next for fastest growth.' },
    { icon: '🛠', title: 'Real Industry Projects', desc: 'Build a portfolio with 500+ production-grade projects using real APIs, datasets, and industry tools — not toy examples.' },
    { icon: '📜', title: 'Industry Certification', desc: 'Globally recognized certificates from Synovers + preparation for Google, AWS, and industry certifications included.' },
    { icon: '♾', title: 'Unlimited Internship', desc: 'Get real internship experience with live client projects, supervised by mentors. Adds actual work experience to your resume.' },
  ]

  return (
    <section className="section why-section">
      <div className="why-bg" />
      <div className="container">
        <div className="section-header text-center">
          <p className="section-label">Why 7,500+ Students Choose Us</p>
          <h2 className="section-title">The Synovers <span className="text-gradient">Advantage</span></h2>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={f.title} className="feature-card card" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Learning Journey ─── */
function JourneySection() {
  const steps = [
    { num: '01', label: 'Enroll', desc: 'Choose your course and secure your seat', icon: '📋' },
    { num: '02', label: 'Foundation', desc: 'Master core fundamentals with expert guidance', icon: '📚' },
    { num: '03', label: 'Advanced', desc: 'Deep dive into industry tech stacks', icon: '🚀' },
    { num: '04', label: 'Projects', desc: 'Build real portfolio projects', icon: '🛠' },
    { num: '05', label: 'Internship', desc: 'Work on live client projects', icon: '🏢' },
    { num: '06', label: 'Placement', desc: 'Land your dream job 🎯', icon: '💼' },
  ]

  return (
    <section className="section journey-section">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-label">Your Path to Success</p>
          <h2 className="section-title">Your <span className="text-gradient">Journey</span> With Synovers</h2>
        </div>
        <div className="journey-steps">
          {steps.map((step, i) => (
            <div key={step.num} className="journey-step">
              <div className="journey-step-inner card">
                <div className="journey-icon">{step.icon}</div>
                <div className="journey-num">{step.num}</div>
                <h4 className="journey-label">{step.label}</h4>
                <p className="journey-desc">{step.desc}</p>
              </div>
              {i < steps.length - 1 && <div className="journey-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
/* ─── Founder ─── */
function FounderSection() {
  return (
    <section className="section founder-section">
      <div className="founder-bg-glow"></div>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="section-header text-center" style={{ marginBottom: '56px' }}>
          <p className="section-label">Driving The Vision</p>
          <h2 className="section-title">Meet Our <span className="text-gradient">Leadership</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '600px' }}>
            The driving force behind Synovers Technologies, committed to revolutionizing tech education and building India's next generation of engineers.
          </p>
        </div>

        <div className="leadership-grid">
          {/* Founder Card */}
          <div className="leader-card-premium leader-card-founder">
            <div className="leader-img-wrap">
              <a href="https://improved-amber-kdfwcyza.edgeone.dev/Untitled%20design%20(6).png" target="_blank" rel="noreferrer noopener" style={{ display: 'block', width: '100%', height: '100%' }}>
                <img src="https://improved-amber-kdfwcyza.edgeone.dev/Untitled%20design%20(6).png" alt="Mr. Ramkumar" className="leader-img" />
              </a>
              <div className="leader-img-overlay"></div>
              <div className="leader-badge"><Star size={14} fill="#F59E0B" color="#F59E0B" /> Founder</div>
            </div>
            <div className="leader-content">
              <div className="leader-header">
                <h3 className="leader-name">Mr. Ramkumar</h3>
                <p className="leader-role">Founder</p>
                <p className="leader-company">Synovers Technologies</p>
              </div>
              <div className="leader-quote-box">
                <Quote size={28} className="quote-icon" />
                <p>
                  "Synovers was born out of a singular vision: to democratize elite tech education. We recognized that degrees alone don't build careers—skills do. Our mission is to transform passionate learners in Coimbatore into global tech leaders by providing an ecosystem of real-world innovation and uncompromising quality."
                </p>
              </div>
            </div>
          </div>

          {/* Cofounder (CEO & Director) Card */}
          <div className="leader-card-premium leader-card-ceo">
            <div className="leader-img-wrap">
              <img src="https://cdn.corenexis.com/f/vuK5H57AxZL.jpeg" alt="Mr. Sachin" className="leader-img" />
              <div className="leader-img-overlay"></div>
              <div className="leader-badge"><Star size={14} fill="#F59E0B" color="#F59E0B" /> Cofounder (CEO & Director)</div>
            </div>
            <div className="leader-content">
              <div className="leader-header">
                <h3 className="leader-name">Mr. Sachin</h3>
                <p className="leader-role">Cofounder (CEO & Director)</p>
                <p className="leader-company">Synovers Technologies</p>
              </div>
              <div className="leader-quote-box">
                <Quote size={28} className="quote-icon" />
                <p>
                  "Our success is measured entirely by the success of our students. At Synovers, we don't just teach code; we engineer mindsets. By aligning our cutting-edge curriculum directly with real-world industry demands, we guarantee our graduates don't just find jobs—they define the future of technology."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Mentors ─── */
function MentorsSection() {
  return (
    <section className="section mentors-section">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-label">Learn From The Best</p>
          <h2 className="section-title">Industry <span className="text-gradient">Expert Mentors</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Our mentors are active professionals from India's top companies — not just academics.
          </p>
        </div>
        <div className="mentors-grid">
          {MENTORS.map((m, i) => (
            <div key={m.id} className="mentor-card card" style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="mentor-avatar">
                {m.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <h4 className="mentor-name">{m.name}</h4>
              <p className="mentor-title">{m.title}</p>
              <div className="mentor-tags">
                <span className="badge badge-primary">{m.specialty}</span>
                <span className="badge badge-secondary">{m.exp} exp</span>
              </div>
              <div className="mentor-rating">
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
                <span>{m.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials ─── */
function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const count = TESTIMONIALS.length

  const prev = () => setCurrent(c => (c - 1 + count) % count)
  const next = () => setCurrent(c => (c + 1) % count)

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [])

  const t = TESTIMONIALS[current]

  return (
    <section className="section testimonials-section">
      <div className="testimonials-bg" />
      <div className="container">
        <div className="section-header text-center">
          <p className="section-label">Student Success Stories</p>
          <h2 className="section-title">What Our <span className="text-gradient">Alumni Say</span></h2>
        </div>

        <div className="testimonials-carousel">
          <button className="carousel-btn" onClick={prev}><ChevronLeft size={20} /></button>

          <div className="testimonial-card card">
            <div className="testimonial-quote"><Quote size={32} /></div>
            <div className="testimonial-stars">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} size={18} fill="#F59E0B" color="#F59E0B" />)}
            </div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div className="testimonial-info">
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role} @ <strong>{t.company}</strong></p>
                <p className="testimonial-course">{t.course} · Batch {t.batch}</p>
              </div>
              <div className="testimonial-ctc">
                <span className="ctc-label">Current CTC</span>
                <span className="ctc-value">{t.ctc}</span>
              </div>
            </div>
          </div>

          <button className="carousel-btn" onClick={next}><ChevronRight size={20} /></button>
        </div>

        {/* Dots */}
        <div className="carousel-dots">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} className={`carousel-dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} />
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '40px' }}>
          <Link to="/success-stories" className="btn btn-outline">View All Success Stories</Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Blog Preview ─── */
function BlogSection() {
  return (
    <section className="section blog-section">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-label">Stay Updated</p>
            <h2 className="section-title">Latest From <span className="text-gradient">Synovers Blog</span></h2>
          </div>
          <Link to="/blog" className="btn btn-outline hide-mobile">View All Articles <ArrowRight size={16} /></Link>
        </div>
        <div className="blog-grid">
          {BLOG_POSTS.slice(0, 4).map((post, i) => {
            const colors = ['linear-gradient(135deg,#6C3DEB,#9F67FF)', 'linear-gradient(135deg,#00D9B0,#0EA5E9)', 'linear-gradient(135deg,#FF6B35,#F59E0B)']
            return (
              <Link key={post.id} to={`/blog/${post.slug}`} className="blog-card card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="blog-card-img">
                  <img src={post.image} alt={post.imageAlt || post.title} className="blog-card-image" />
                  <div className="blog-img-overlay" />
                  <span className="badge badge-primary blog-category">{post.category}</span>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-read">⏱ {post.readTime} read</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="text-center show-mobile-only" style={{ marginTop: '32px' }}>
          <Link to="/blog" className="btn btn-outline">View All Articles</Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Final CTA ─── */
function FinalCTASection() {
  return (
    <section className="final-cta-section">
      <div className="final-cta-bg" />
      <div className="container">
        <div className="final-cta-content">
          <h2 className="final-cta-title">
            Ready to <span className="text-gradient">Ignite Your Potential?</span>
          </h2>
          <p className="final-cta-sub">
            Join 7,500+ students who chose Synovers Technologies to launch their tech careers in Coimbatore & beyond.
            Your dream job is closer than you think.
          </p>
          <div className="final-cta-actions">
            <Link to="/courses" className="btn btn-primary btn-lg">
              Explore Courses <ArrowRight size={18} />
            </Link>
            <a href="tel:+919344626768" className="btn btn-ghost btn-lg">
              📞 +91 93446 26768
            </a>
            <a href="tel:+919994915435" className="btn btn-ghost btn-lg">
              📞 +91 99949 15435
            </a>
          </div>
          <div className="final-cta-actions" style={{ marginTop: '12px' }}>
            <a
              href="https://wa.me/919344626768?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Synovers%20Technologies%20courses"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-ghost btn-lg"
              style={{ color: '#25D366', borderColor: '#25D366' }}
            >
              💬 WhatsApp Us
            </a>
            <Link to="/contact" className="btn btn-ghost btn-lg">
              Book Free Counseling
            </Link>
          </div>
          <div className="final-cta-features">
            {['Free Demo Class', 'No Commitment Required', 'EMI Available', '97% Placement Rate'].map(f => (
              <div key={f} className="cta-feature">
                <CheckCircle size={16} color="#00D9B0" /> {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Main HomePage ─── */
export default function HomePage() {
  return (
    <div className="homepage">
      <div className="announcement-bar">
        🔥 <strong>New Batch Starting</strong> — AI + Python Fullstack. Limited seats available! &nbsp;
        <Link to="/contact" style={{ color: '#FFD700', fontWeight: 700 }}>Enroll Now →</Link>
        &nbsp;|&nbsp;
        <a href="https://wa.me/919344626768?text=Hi%2C%20I%20want%20to%20know%20more%20about%20the%20AI%20%2B%20Python%20Fullstack%20batch" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 700 }}>💬 WhatsApp Us</a>
      </div>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <CoursesSection />
        <WhySynoversSection />
        <JourneySection />
        <FounderSection />
        <MentorsSection />
        <TestimonialsSection />
        <BlogSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
