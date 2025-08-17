import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Plantoes from './components/pages/Plantoes'
import Perfil from './components/pages/Perfil'
import HistoricoPlantoes from './components/pages/HistoricoPlantoes'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        {/* Navbar */}
        <nav className="bg-pink-600 text-white shadow mt-2">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold">Calculadora Plantões</h1>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link to="/novo-plantao" className="hover:text-gray-300">Novo Plantão</Link>
              </li>
              <li>
                <Link to="/historico-plantoes" className="hover:text-gray-300">Historico Plantões</Link>
              </li>
              <li>
                <Link to="/perfil" className="hover:text-gray-300">Perfil</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Rotas */}
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/novo-plantao" element={<Plantoes />} />
            <Route path="/historico-plantoes" element={<HistoricoPlantoes />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-pink-200 text-center py-4 mb-2 mt-2">
          Criado por uma pessoa que te ama muitinho ❤️
        </footer>
      </Router>
    </div>
  )
}

export default App
