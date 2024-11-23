import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// I linked bootstrap by the url in index.html insted of installing
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
