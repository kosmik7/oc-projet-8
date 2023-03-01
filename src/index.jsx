// modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/global'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement'
import About from './pages/About'
import Error from './pages/Error'

// composants
import Header from './components/Header'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header />
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
            <Footer />
        </Router>
    </React.StrictMode>
)
