import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage, HomePage, CasinoPage } from './pages';
import { Navbar } from './components';
import styled from 'styled-components';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/casino/:name" element={<CasinoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
