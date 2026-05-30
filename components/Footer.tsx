export default function Footer() {
  return (
    <footer className="relative px-6 md:px-12 pt-20 pb-8" style={{ background: 'linear-gradient(180deg, #0a1f14 0%, #060b08 100%)' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-2 lg:col-span-2" style={{ transitionDelay: '0.05s' }}>
            <div className="footer-brand gentle-pulse" style={{ fontSize: 'clamp(1.6rem, 5vw, 2.2rem)' }}>Aurelius</div>
            <p className="text-sm mt-3 leading-relaxed" style={{ color: 'rgba(245, 239, 230, 0.5)', maxWidth: 240 }}>
              An intimate fine dining experience at the intersection of tradition and innovation.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="footer-social-ring" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="footer-social-ring" aria-label="X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M20 4l-6.768 6.768"/>
                </svg>
              </a>
              <a href="#" className="footer-social-ring" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" className="footer-social-ring" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/><rect x="2" y="2" width="20" height="18" rx="3" ry="3"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="" style={{ transitionDelay: '0.1s' }}>
            <div className="footer-heading">Navigate</div>
            <ul className="space-y-3">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/#story" className="footer-link">Our Story</a></li>
              <li><a href="/menu" className="footer-link">Menu</a></li>
              <li><a href="/#testimonials" className="footer-link">Testimonials</a></li>
              <li><a href="/#awards" className="footer-link">Awards</a></li>
            </ul>
          </div>

          <div className="" style={{ transitionDelay: '0.15s' }}>
            <div className="footer-heading">Contact</div>
            <ul className="space-y-3">
              <li><span className="footer-link">123 Gourmet Ave, NY</span></li>
              <li><a href="tel:+12125550189" className="footer-link">+1 (212) 555-0189</a></li>
              <li><a href="mailto:hello@aurelius.com" className="footer-link">hello@aurelius.com</a></li>
            </ul>
          </div>

          <div className="" style={{ transitionDelay: '0.2s' }}>
            <div className="footer-heading">Hours</div>
            <ul className="space-y-3">
              <li><span className="footer-link">Tue–Sun 18:00–23:00</span></li>
              <li><span className="footer-link">Fri–Sat till 01:00</span></li>
              <li><span className="footer-link" style={{ color: 'rgba(201, 168, 98, 0.6)' }}>Mon — Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <p className="text-xs" style={{ color: 'rgba(245, 239, 230, 0.4)' }}>&copy; 2024 Aurelius Fine Dining. All rights reserved.</p>
            <span className="text-xs hidden sm:inline" style={{ color: 'rgba(245, 239, 230, 0.3)' }}>&middot;</span>
            <span className="text-xs hidden sm:inline" style={{ color: 'rgba(245, 239, 230, 0.35)' }}>Powered by</span>
            <a href="https://flowup-bd.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center opacity-60 hover:opacity-100 transition-opacity">
              <img src="/flow-up.png" alt="FlowUp" style={{ height: 26, width: 'auto' }} />
            </a>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="/privacy" className="footer-link">Privacy</a>
            <a href="/terms" className="footer-link">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
