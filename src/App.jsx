import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage, CasinoPage, RatingsPage } from './pages';
import { Navbar } from './components';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { casinosRU, casinosUA, mfoRU, mfoUA } from './data';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const lng = navigator.language;
    if (lng === 'uk') i18n.changeLanguage(lng);
    else {
      i18n.changeLanguage('ru');
    }
  }, [i18n]);
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<h1>Hi</h1>} />
          <Route
            path="/casino"
            element={
              <RatingsPage
                title="topCasino.title"
                ua={casinosUA}
                ru={casinosRU}
              />
            }
          />
          <Route
            path="/mfo"
            element={<RatingsPage title="mfo.title" ua={mfoUA} ru={mfoRU} />}
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/casino/:name" element={<CasinoPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
