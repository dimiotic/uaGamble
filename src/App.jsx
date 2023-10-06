import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage, CasinoPage, RatingsPage } from './pages';
import { Navbar } from './components';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { casinosRU, casinosUA, mfoRU, mfoUA } from './data';
import styled from 'styled-components';

function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);
  return (
    <Wrapper>
      <BrowserRouter>
        <Navbar />
        <Routes>
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
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.body`
  background-color: #0c0c0c;
`;
