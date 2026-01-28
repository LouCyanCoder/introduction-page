import React, { useEffect, useRef, useState } from 'react'
import Header from './Header.tsx'
import Footer from './Footer.tsx'

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
  const [hideSwipe, setHideSwipe] = useState(false)
  const scrollTimeout = useRef<number | null>(null)
  const cursorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setHideSwipe(true)
      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current)
      scrollTimeout.current = window.setTimeout(() => setHideSwipe(false), 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current)
    }
  }, [])

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let rafId = 0

    const lerp = 0.12

    const move = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
    }

    const loop = () => {
      x += (tx - x) * lerp
      y += (ty - y) * lerp
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      rafId = window.requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', move, { passive: true })
    rafId = window.requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('pointermove', move)
      window.cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="app-shell">
      {/* <Header /> */}
      <main>
        {children}
      </main>

      <div ref={cursorRef} className="cursor-shadow" aria-hidden="true" />

      <div className={`swipe-hint${hideSwipe ? ' is-scrolling' : ''}`} aria-hidden="true">
        <i className='bx bx-finger-swipe-up' />
      </div>

      {/* <Footer /> */}
    </div>
  )
}