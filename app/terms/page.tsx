'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const sections = [
  {
    title: "Introduction",
    content:
      "Welcome to Aurelius Fine Dining. By accessing our website and making a reservation, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services. We reserve the right to update these terms at any time, and continued use constitutes acceptance of any changes.",
  },
  {
    title: "Reservations & Cancellations",
    content:
      "All reservations are subject to availability. We require a credit card to secure your booking. Cancellations made less than 24 hours before your reservation time may incur a charge. Parties of six or more require 48 hours notice for cancellation. We reserve the right to cancel or modify reservations due to unforeseen circumstances, and will notify you as soon as possible in such cases.",
  },
  {
    title: "Dining & Dress Code",
    content:
      "Aurelius maintains a smart casual dress code. We kindly ask guests to refrain from wearing athletic wear, flip-flops, or excessively casual attire. Our tasting menu is designed to be enjoyed by the entire party \u2014 we require all guests at a table to participate in the tasting menu experience. Please inform us of any dietary restrictions at least 48 hours before your reservation.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this website \u2014 including text, images, logos, menus, and designs \u2014 is the intellectual property of Aurelius Fine Dining unless otherwise stated. You may not reproduce, distribute, modify, or use any content without prior written consent. The Aurelius name and logo are registered trademarks.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Aurelius Fine Dining shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services. Our total liability is limited to the amount paid for your reservation. We are not responsible for allergic reactions or food sensitivities, despite our best efforts to accommodate dietary needs.",
  },
  {
    title: "Governing Law",
    content:
      "These terms shall be governed by and construed in accordance with the laws of the State of New York. Any disputes arising from these terms or your use of our services shall be resolved in the courts of New York County. If any provision of these terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.",
  },
  {
    title: "Contact",
    content:
      "For questions about these Terms of Service, please contact us at hello@aurelius.com or write to Aurelius Fine Dining, 123 Gourmet Avenue, New York, NY 10001. We value your patronage and are committed to providing an exceptional dining experience.",
  },
]

export default function TermsPage() {
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
            Terms of <span style={{ color: 'var(--gold)' }}>Service</span>
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
            <h2 className="font-serif text-2xl md:text-3xl mb-4" style={{ color: 'var(--cream)' }}>Questions About Our <span style={{ color: 'var(--gold)' }}>Terms</span>?</h2>
            <p className="text-sm md:text-base mb-8" style={{ color: 'rgba(245, 239, 230, 0.4)' }}>
              We are happy to clarify any questions you may have.
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
