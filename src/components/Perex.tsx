import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Flip from 'gsap/Flip'

gsap.registerPlugin(ScrollTrigger, Flip)

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

    useGSAP(() => {
        const el = sectionRef.current
        const hero = document.querySelector<HTMLElement>('.hero')
        if (!el || !hero) return

        gsap.set(el, { yPercent: 40, opacity: 0 })

        gsap.to(el, {
            yPercent: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: '+=80%',
                scrub: true,
                pin: false,
            },
        })

        gsap.to(el, {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: el,
                start: 'top 95%',
                end: 'top 40%',
                scrub: true,
                pin: false,
            },
        })

        // const boxes = Array.from(el.querySelectorAll<HTMLElement>('.perex__box'))
        // const marker = el.querySelector<HTMLElement>('.perex__marker')

        // if (marker && boxes.length) {
        //     const moveMarker = (box: HTMLElement) => {
        //         const state = Flip.getState(marker)
        //         Flip.fit(marker, box, {
        //             absolute: true,
        //             duration: 0,
        //         })
        //         Flip.from(state, {
        //             duration: 0.35,
        //             ease: 'power2.out',
        //             absolute: true,
        //             simple: true,
        //         })
        //     }

        //     moveMarker(boxes[0])

        //     boxes.forEach((box) => {
        //         ScrollTrigger.create({
        //             trigger: box,
        //             start: 'top center',
        //             onEnter: () => moveMarker(box),
        //             onEnterBack: () => moveMarker(box),
        //         })
        //     })
        // }
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="perex section">
            <div className="container">
                <h2 className="perex__title">Next Section</h2>
                <div className="perex__list">
                    <div className="perex__marker" />
                    {items.map((item, idx) => (
                        <article className={`perex__item${idx % 2 === 1 ? ' is-reversed' : ''}`} key={item.number}>
                            <div className="perex__box" />
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