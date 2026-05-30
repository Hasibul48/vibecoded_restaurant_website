'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const sections = [
  {
    title: "Information We Collect",
    content:
      "When you make a reservation or interact with Aurelius, we may collect personal information including your name, email address, phone number, dining preferences, and any special requests or dietary restrictions you provide. We also collect non-personal information such as browser type, device information, and usage patterns through cookies and similar technologies to improve your experience on our website.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to process and confirm your reservations, communicate with you about your dining experience, send you updates about our menu, events, and promotions (with your consent), improve our services and website functionality, and ensure the security and integrity of our operations. We do not sell your personal information to third parties.",
  },
  {
    title: "Data Sharing & Disclosure",
    content:
      "We may share your information with trusted third-party service providers who assist us in operating our website, processing payments, or managing reservations. These partners are contractually obligated to protect your data and use it solely for the services they provide. We may also disclose information if required by law or to protect the rights, property, or safety of Aurelius, our guests, or others.",
  },
  {
    title: "Cookies",
    content:
      "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyse site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our website. We do not use cookies for targeted advertising without your explicit consent.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal information held by us. You may also opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly. We will respond to your request within a reasonable timeframe and in accordance with applicable data protection laws.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about this Privacy Policy or how we handle your data, please reach out to us at hello@aurelius.com or write to Aurelius Fine Dining, 123 Gourmet Avenue, New York, NY 10001. We are committed to addressing your concerns and protecting your privacy.",
  },
]

export default function PrivacyPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const gsap = (window as any).gsap
    const ScrollTrigger = (window as any).ScrollTrigger
    if (!gsap || !ScrollTrigger) return

    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let lastSTUpdate = 0
    lenis.on('scroll', () => {
      const now = performance.now()
      if (now - lastSTUpdate > 50) {
        lastSTUpdate = now
        ScrollTrigger.update()
      }
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const spring = [0.16, 1, 0.3, 1]

    gsap.from('.hero-reveal', { opacity: 0, y: 40, duration: 1, ease: spring, delay: 0.3 })

    gsap.utils.toArray('.reveal-section').forEach((el: any, i: number) => {
      gsap.fromTo(el, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, delay: i * 0.1, ease: spring,
        scrollTrigger: { trigger: el, start: 'top 88%', end: 'top 40%', toggleActions: 'play none none none' }
      })
    })

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach((st: any) => st.kill())
    }
  }, [])

  return (
    <main ref={pageRef} className="min-h-screen overflow-x-hidden" style={{ background: 'radial-gradient(ellipse 100% 60% at 50% 15%, #0f3d2e 0%, #0a1f14 50%, #070707 100%)' }}>
      <div className="grain-overlay"></div>

      <Navbar variant="simple" />

      <section className="relative pt-32 pb-16 md:pb-24 px-6 md:px-12">
        <div className="light-spot" style={{ width: 400, height: 400, top: '-5%', right: '10%', background: 'radial-gradient(circle, rgba(201,168,98,0.08), transparent)' }}></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="hero-reveal text-xs tracking-[4px] uppercase mb-4" style={{ color: 'rgba(201, 168, 98, 0.6)', letterSpacing: '5px' }}>Legal</p>
          <h1 className="hero-reveal font-serif text-4xl sm:text-5xl md:text-6xl mb-4" style={{ color: 'var(--cream)' }}>
            Privacy <span style={{ color: 'var(--gold)' }}>Policy</span>
          </h1>
          <div className="deco-line-center mx-auto mt-5"></div>
          <p className="hero-reveal text-sm md:text-base mt-6" style={{ color: 'rgba(245, 239, 230, 0.4)' }}>
            Last updated: January 2024
          </p>
        </div>
      </section>

      <section className="relative px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((section, i) => (
            <div key={i} className="reveal-section">
              <h2 className="font-serif text-2xl md:text-3xl mb-4" style={{ color: 'var(--cream)' }}>
                <span style={{ color: 'var(--gold)' }}>0{i + 1}.</span> {section.title}
              </h2>
              <div className="deco-line mb-5" style={{ width: 40, height: 2, background: 'var(--gold)', opacity: 0.4 }}></div>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(245, 239, 230, 0.5)' }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto text-center reveal-section">
          <div className="glass rounded-3xl p-8 md:p-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-4" style={{ color: 'var(--cream)' }}>Have <span style={{ color: 'var(--gold)' }}>Questions</span>?</h2>
            <p className="text-sm md:text-base mb-8" style={{ color: 'rgba(245, 239, 230, 0.4)' }}>
              We are here to help. Reach out to us anytime.
            </p>
            <Link href="/" className="btn-primary inline-flex items-center gap-2 text-sm py-3 px-8">
              <span>Back to Home</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 8h14M8 1l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
