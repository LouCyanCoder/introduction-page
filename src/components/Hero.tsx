import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const FRAME_COUNT = 213
const PROGRESS_TARGET = Math.min(FRAME_COUNT, 20)
const asset = (path: string) => new URL(
    path.replace(/^\//, ''),
    `${window.location.origin}${import.meta.env.BASE_URL}`
).toString()
const FIRST_FRAME = asset('hero/frames/hero_0001.jpg')

type HeroProps = {
    onProgress?: (p: number) => void
}

export default function Hero({ onProgress }: HeroProps) {
    const sectionRef = useRef<HTMLElement>(null)
    const dom = useRef({
        canvas: null as HTMLCanvasElement | null,
        foreground: null as HTMLDivElement | null,
        title: null as HTMLHeadingElement | null,
    })
    const images = useRef<HTMLImageElement[]>([])
    const frame = useRef({ index: 0 })

    useGSAP(() => {
        const { canvas, foreground, title } = dom.current
        const section = sectionRef.current
        if (!canvas || !section) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // canvas size
        canvas.width = window.innerWidth + 10
        canvas.height = window.innerHeight + 10

        let loaded = 0

        const report = () => {
            const pct = Math.min(loaded / PROGRESS_TARGET, 1)
            onProgress?.(pct)
        }

        // images with progress
        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image()
            img.onload = img.onerror = () => {
                loaded += 1
                if (loaded === 1) render()
                report()
            }
            img.src = asset(`hero/frames/hero_${String(i).padStart(4, '0')}.jpg`)
            images.current.push(img)
        }

        const render = () => {
            const img = images.current[frame.current.index]
            if (!img) return

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // cover behavior
            const scale = Math.max(
                canvas.width / img.width,
                canvas.height / img.height
            )


            const x = canvas.width - img.width * scale
            const y = (canvas.height - img.height * scale) / 2

            ctx.drawImage(
                img,
                x,
                y,
                img.width * scale,
                img.height * scale
            )
        }

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            render()
        }

        window.addEventListener('resize', handleResize)

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: '+=200%',
                scrub: 2,
                pin: true,
                anticipatePin: 1,
            },
        })

        let breathe: gsap.core.Timeline | null = null
        let splitTitle: SplitText | null = null

        const pauseBreathe = () => { if (breathe) breathe.pause() }
        const resumeBreathe = () => { if (breathe) breathe.resume() }

        if (title) {

            splitTitle = new SplitText(title, { type: 'words,chars' })
            const chars = splitTitle.chars


            gsap.set(title, {
                position: 'absolute',
                zIndex: 9,
                top: '15%',
                left: '65%',
                xPercent: -50,
                yPercent: -50,
                transformOrigin: '50% 50%',
                scale: 1,
                filter: 'blur(0px)'
            })

            const randX = gsap.utils.random(-window.innerWidth * 0.4, window.innerWidth * 0.4, true)
            const randY = gsap.utils.random(-window.innerHeight * 0.3, window.innerHeight * 0.3, true)

            tl.fromTo(chars, {
                opacity: 0,
                scale: 0.3,
                x: () => randX(),
                y: () => randY(),
                rotate: () => gsap.utils.random(180, 540),
                transformOrigin: '50% 50%',
                filter: 'blur(12px)',
            }, {
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotate: 0,
                filter: 'blur(0px)',
                duration: 1.25,
                ease: 'power3.out',
                stagger: { each: 0.02, from: 'random' },
            }, 0)

            tl.to(chars, {
                duration: 0.45,
                ease: 'power1.in',
                opacity: 0,
                filter: 'blur(20px)',
            }, 1.6)

            tl.set(title, { opacity: 0 }, 2.2)
        }

        tl.to(frame.current, {
            duration: 2,
            index: FRAME_COUNT - 1,
            snap: 'index',
            ease: 'none',
            onUpdate: render,
        }, 0)

        if (foreground) {
            gsap.set(foreground, {
                width: '100%',
                height: '100vh',
                xPercent: 0,
                yPercent: 0,
                transformOrigin: '50% 50%',
                backgroundPosition: '0% 0%',
                opacity: 0.1,
                scale: 1,
                filter: 'brightness(0.6) blur(30px)',
            })


            tl.to(foreground, {
                duration: 1,
                ease: 'none',
                keyframes: [
                    { backgroundPosition: '0% -20%', opacity: 0.05, scale: 1.05, filter: 'brightness(0.5) blur(2px)', duration: 0.5 },
                    { backgroundPosition: '0% -35%', opacity: 0, scale: 1.15, filter: 'brightness(0.4) blur(6px)', duration: 0.5 },
                ],
            }, 0)
        }

        if (foreground || canvas) {
            breathe = gsap.timeline({ repeat: -1, yoyo: true, defaults: { duration: 3.4, ease: 'sine.inOut' } })

            if (foreground) {
                breathe.to(foreground, { scale: 1.01, filter: 'brightness(0.58) blur(1px)' }, 0)
            }

            if (canvas) {
                breathe.to(canvas, { rotate: 1, scale: 1.03, transformOrigin: '50% 50%' }, 0)
            }

        }

        ScrollTrigger.addEventListener('scrollStart', pauseBreathe)
        ScrollTrigger.addEventListener('scrollEnd', resumeBreathe)

        return () => {
            ScrollTrigger.removeEventListener('scrollStart', pauseBreathe)
            ScrollTrigger.removeEventListener('scrollEnd', resumeBreathe)
            breathe?.kill()
            splitTitle?.revert()
            window.removeEventListener('resize', handleResize)
            ScrollTrigger.getAll().forEach(t => t.kill())
        }
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="hero">
            <div className="hero__content">
                <h1 ref={(el) => { dom.current.title = el }} className='hero__title'>Lucian <br />Nguyen <br /> <span className='hero__subtitle'>web developer</span></h1>

                <canvas
                    ref={(el) => { dom.current.canvas = el }}
                    style={{
                        backgroundImage: `url(${FIRST_FRAME})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div
                    ref={(el) => { dom.current.foreground = el }}
                    className="hero__foreground"
                    style={{ backgroundImage: `url(${asset('hero/pattern.svg')})` }}
                />
            </div>

        </section>
    )
}
