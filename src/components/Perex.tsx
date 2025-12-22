import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function NextSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const items = [
        {
            number: '01',
            title: 'Strategy',
            text: 'Discovery, positioning, and a clear roadmap that aligns product and brand.'
        },
        {
            number: '02',
            title: 'Design',
            text: 'Interfaces with intent: hierarchy, rhythm, and motion tuned for your audience.'
        },
        {
            number: '03',
            title: 'Delivery',
            text: 'Robust builds with smooth handoff, performance budgets, and QA baked in.'
        },
        {
            number: '04',
            title: 'Growth',
            text: 'Data-driven optimization and scaling to amplify impact and reach new users.'
        },
        {
            number: '05',
            title: 'Support',
            text: 'Ongoing maintenance, updates, and enhancements to keep your product thriving.'
        }

    ]

    useEffect(() => {
        const el = sectionRef.current
        const hero = document.querySelector<HTMLElement>('.hero')
        if (!el || !hero) return

        const ctx = gsap.context(() => {
            gsap.set(el, { yPercent: 40, opacity: 0 })

            gsap.to(el, {
                yPercent: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: el,
                    start: 'top bottom',
                    end: '+=80%',
                    scrub: true,
                    pin: false,
                },
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="perex section">
            <div className="container">
                <h2 className="perex__title">Next Section</h2>
                <div className="perex__list">
                    {items.map((item, idx) => (
                        <article className={`perex__item${idx % 2 === 1 ? ' is-reversed' : ''}`} key={item.number}>
                            <div className="perex__box">
                                {idx === 0 && <div className="perex__marker" />}
                            </div>
                            <div className="perex__item-texts">
                                <span className="perex__number">{item.number}</span>
                                <h3 className="perex__item-title">{item.title}</h3>
                                <p className="perex__item-text">{item.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}