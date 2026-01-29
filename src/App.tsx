import Layout from './components/Layout'
import Hero from './components/Hero'
import Perex from './components/Perex'
import Loader from './components/Loader'
import Timeline from './components/Timeline'

import { useEffect, useState } from 'react'

const jpPrintImage = '/timeline/jpprint.webp'
const parkerImage = '/timeline/parker.webp'
const almaImage = '/timeline/alma.webp'
const devImage = '/timeline/timelineDev.webp'

import './assets/styles/main.scss'

function App() {

  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (progress >= 0.999) {
      const timer = window.setTimeout(() => setIsLoading(false), 150)
      return () => window.clearTimeout(timer)
    }
  }, [progress])


  // data for timeline component
  const timelineData = {
    yearAligning: "top",
    sections: [
      {
        blocks: [
          {
            year: "until 2018",
            title: "Graphic Design & Signmaking",
            text: "Led the Signmaking & Graphic Design Department at J&P Print. Created branding, logotypes, and web wireframes for entrepreneurs and agencies, while also managing IT infrastructure and training new employees.",
            classes: "",
          },
          {
            image: jpPrintImage,
          },
        ],
      },
      {
        blocks: [
          {
            image: parkerImage,
          },
          {
            year: "2018-2022",
            title: "IT Specialist / Sysadmin",
            text: "Provided IT services for international clients at Parker Hannifin and others. Administered servers and networks, managed backups (VEEAM, Veritas), deployed systems via Active Directory & SCCM, and collaborated on large-scale IT upgrades.",
            classes: "",
          },
        ],
      },
      {
        blocks: [
          {
            year: "2022-2025",
            title: "Frontend Developer",
            text: "Developed and optimized career websites at Alma Career Czechia. Modernized legacy platforms, improved accessibility and performance, applied UX/UI best practices, and delivered mobile-first solutions.",
            classes: "",
          },
          {
            image: almaImage,
          },
        ],
      },
      {
        blocks: [
          {
            image: devImage,
          },
          {
            year: "2026-future",
            title: "Your Company",
            text: "Bringing my combined experience in design, IT, and development to new challenges. The next step could be working with your company on exciting projects.",
            classes: "",
          },
        ],
      },
    ],
  };

  return (
    <Layout>
      <Hero onProgress={setProgress} />

      <Timeline data={timelineData} />
      <Perex />
      <Loader active={isLoading} progress={progress} />
    </Layout>
  )
}

export default App
