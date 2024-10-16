import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/home/HomePage';
// Modals
import CookieConsentModal from './components/modals/CookieConsentModal';
import LoginPage from './users/login/LoginPage';
import InstanceOverviewPage from './pages/instance/InstanceOverviewPage';

function App() {
  return (
    <>
      <CookieConsentModal />

      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="/instance/:id" element={<InstanceOverviewPage />} />
      </Routes>
    </>
  );
}

export default App;
