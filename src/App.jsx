import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Pages
import HomePage from './pages/HomePage'
import CoursesPage from './pages/CoursesPage'
import CourseDetailPage from './pages/CourseDetailPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/auth/LoginPage'
import StudentDashboard from './pages/student/StudentDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import HireTalentPage from './pages/HireTalentPage'
import SuccessStoriesPage from './pages/SuccessStoriesPage'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'
import ProductsPage from './pages/ProductsPage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import SpecialOfferPage from './pages/SpecialOfferPage'
import NotFoundPage from './pages/NotFoundPage'
import ScrollToTop from './components/ScrollToTop'

// Context
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#FFFFFF',
              color: '#0F172A',
              border: '1px solid rgba(15,23,42,0.08)',
              borderRadius: '12px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9rem',
            },
            success: {
              iconTheme: { primary: '#22C55E', secondary: '#FFFFFF' },
            },
            error: {
              iconTheme: { primary: '#EF4444', secondary: '#FFFFFF' },
            },
          }}
        />
        <ScrollToTop />
        <Routes>
            {/* Public */}
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:slug" element={<CourseDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/hire-talent" element={<HireTalentPage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/special-offers" element={<SpecialOfferPage />} />

            {/* Auth */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Navigate to="/contact#send-message" replace />} />

            {/* Portals */}
            <Route path="/app/*" element={<StudentDashboard />} />
            <Route path="/admin/*" element={<AdminDashboard />} />

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  )
}

export default App
