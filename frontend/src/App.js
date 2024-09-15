import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/pages/Normalize.css";
import "./styles/pages/AllPages.css";

import HomePage from "./pages/HomePage";
import Contacto from "./pages/Contacto";
import Novedades from "./pages/Novedades";
import Proyectos from "./pages/Proyectos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="novedades" element={<Novedades />} />
          <Route path="proyectos" element={<Proyectos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
