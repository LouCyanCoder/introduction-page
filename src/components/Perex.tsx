import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function NextSection() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const el = sectionRef.current
        const hero = document.querySelector<HTMLElement>('.hero')
        if (!el || !hero) return

        const ctx = gsap.context(() => {
            gsap.set(el, { yPercent: 100, opacity: 0 })

            gsap.to(el, {
                yPercent: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: hero,
                    start: 'top top',
                    end: '+=200%',
                    scrub: true,
                    pin: false,
                },
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            style={{
                minHeight: '70vh',
                display: 'grid',
                placeItems: 'center',
                background: '#111',
                color: '#f5f5f5',
                position: 'relative',
                zIndex: 5,
            }}
        >
            <div style={{ textAlign: 'center', maxWidth: 520 }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>Next Section</h2>
                <p style={{ lineHeight: 1.6 }}>
                    This block slides up while the hero stays pinned.
                </p>
            </div>
        </section>
    )
}