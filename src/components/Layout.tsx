import React, { useEffect, useState } from 'react'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import Loader from './Loader'

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const finish = () => setIsLoading(false)
    window.addEventListener('load', finish)
    const fallback = window.setTimeout(finish, 2000)
    return () => {
      window.removeEventListener('load', finish)
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <div className="app-shell">
      {/* <Header /> */}
      <main>
        {children}
      </main>
      {/* <Footer /> */}
      <Loader active={isLoading} />
    </div>
  )
}