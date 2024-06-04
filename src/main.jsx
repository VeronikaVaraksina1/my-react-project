import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import './index.css';

// імпортуємо контекст із файла context.js
import { UserContext } from './context';
import React from 'react';

// передаємо як пропс для провайдера
export const contextValue = {
  name: "Mango",
  isLoggedIn: true,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext.Provider value={contextValue}>
    <App />
    </UserContext.Provider>
  </React.StrictMode>
);
