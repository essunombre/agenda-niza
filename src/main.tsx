import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AgendaNizaApp } from './AgendaNizaApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AgendaNizaApp />
  </StrictMode>,
)
