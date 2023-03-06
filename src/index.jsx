// modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Home, FicheLogement, About, Error } from './pages'
import { Header, Footer } from './components'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/fiche-logement" element={<FicheLogement />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    </React.StrictMode>
)
