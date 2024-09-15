import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/home/HomePage';
// Modals
import CookieConsentModal from './components/modals/CookieConsentModal';
import LoginPage from './users/login/LoginPage';

function App() {
  return (
    <>
      <CookieConsentModal />

      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
