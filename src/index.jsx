// modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    Navigate,
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Home, Logement, About, Error } from './pages'
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
                    <Route path="/logement/:id" element={<Logement />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="erreur" element={<Error />} />
                    <Route
                        path="*"
                        element={<Navigate to="/erreur" replace />}
                    />
                </Routes>
            </main>
            <Footer />
        </Router>
    </React.StrictMode>
)
