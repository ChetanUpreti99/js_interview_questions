import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createContext } from 'react'


export const ThemeContext = createContext<{ theme: string }>({ theme: "dark" });
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContext.Provider value={{ theme: "dark" }}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
)
