import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Header } from './Components/Header';
import { Passagens } from './Components/Passagens/Passagens';
import { Hoteis } from './Components/Hoteis/Hoteis';
import { Pacotes } from './Components/Pacotes/Pacotes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="passagens" element={<Passagens />} />
        <Route path="hoteis" element={<Hoteis />} />
        <Route path="pacotes" element={<Pacotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
