import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
// Styles
import './styles/index.css';
import './styles/components.css';
import './styles/animations.css';
// Context
import { UserProvider } from './context/UserContext';
import { InstanceProvider } from './context/InstanceContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <UserProvider>
      <InstanceProvider>
        <App />
      </InstanceProvider>
    </UserProvider>
  </BrowserRouter>
);
