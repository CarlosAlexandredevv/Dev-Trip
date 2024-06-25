import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Header } from './Components/Header';
import { Passagens } from './Components/Passagens';
import { Hoteis } from './Components/Hoteis';
import { Pacotes } from './Components/Pacotes';

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
