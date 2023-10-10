import RatingsPage from './pages/RatingsPage';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { casinosRU, casinosUA } from './data';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const userPrefers = JSON.parse(localStorage.getItem('userPrefers'));
    if (userPrefers) {
      i18n.changeLanguage(userPrefers.lang);
      return;
    }
    const lng = navigator.language;
    if (lng === 'uk') i18n.changeLanguage(lng);
    else {
      i18n.changeLanguage('ru');
    }
  }, [i18n]);
  return (
    <ThemeProvider>
      <Navbar />
      <RatingsPage title="topCasino.title" ua={casinosUA} ru={casinosRU} />
    </ThemeProvider>
  );
}

export default App;
