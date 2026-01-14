import MyRoutes from './MyRoutes'
import './App.css'
import './components/layout/myStyle.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { MyContextProvider } from './hooks/MyContext'
import { createContext, useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

export const MyThemeContext = createContext()

const App = () => {
  const [theme, setTheme] = useState('DARK')
  const isLight = theme === 'LIGHT'

  return (
    <BrowserRouter>
      <MyThemeContext.Provider value={{ theme, setTheme }}>
        <MyContextProvider>

          {/* ✅ Global Call To Action */}
          <div
            className={` z-60 border-b ${isLight
                ? 'bg-white/80 backdrop-blur border-slate-200'
                : 'bg-slate-950/70 backdrop-blur border-white/10'
              }`}
          >
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p
                className={`font-semibold text-sm md:text-base ${isLight ? 'text-slate-700' : 'text-slate-200'
                  }`}
              >
                🍲 Discover simple, delicious recipes curated just for you.
              </p>

              <div className="flex gap-3">
                <Link
                  to="/recipes"
                  className={`px-4 py-2 rounded-xl font-semibold shadow transition ${isLight
                      ? 'bg-slate-900 text-white hover:opacity-95'
                      : 'bg-white text-slate-900 hover:bg-slate-100'
                    }`}
                >
                  Explore Recipes →
                </Link>

                <Link
                  to="/blogs"
                  className={`px-4 py-2 rounded-xl font-semibold border shadow transition ${isLight
                      ? 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
                      : 'bg-white/10 border-white/20 hover:bg-white/15 text-white'
                    }`}
                >
                  Read Blogs
                </Link>
              </div>
            </div>
          </div>

          {/* Routes */}
          <MyRoutes />

        </MyContextProvider>
      </MyThemeContext.Provider>
    </BrowserRouter>
  )
}

export default App
