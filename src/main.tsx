import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import SmoothScroll from './hooks/SmoothScroll';

// Expose asset base for CSS (GitHub Pages needs the repo prefix)
document.documentElement.style.setProperty('--asset-base', import.meta.env.BASE_URL)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </StrictMode>,

)
