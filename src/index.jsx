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
                <Route exact path="/" element={<Home />} />
                <Route
                    exact
                    path="/fiche-logement"
                    element={<FicheLogement />}
                />
                <Route exact path="/a-propos" element={<About />} />
                <Route element={<Error />} />
            </Routes>
            </main>
            <Footer />
        </Router>
    </React.StrictMode>
)
