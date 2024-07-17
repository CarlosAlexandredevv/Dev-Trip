import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Header } from './Components/Header';
import { Passagens } from './Components/Passagens/Passagens';
import { Hoteis } from './Components/Hoteis/Hoteis';
import { Pacotes } from './Components/Pacotes/Pacotes';
import { Carros } from './Components/Carros/Carros';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="passagens" element={<Passagens />} />
            <Route path="pacotes" element={<Pacotes />} />
            <Route path="hoteis" element={<Hoteis />} />
            <Route path="carros" element={<Carros />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
