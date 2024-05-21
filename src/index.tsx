import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// Use consistent styling
import 'sanitize.css/sanitize.css';

// Import root app
import { App } from 'app';
import { HelmetProvider } from 'react-helmet-async';
import { persistor, store } from 'redux/store/Store';
import { PersistGate } from 'redux-persist/integration/react';
// import reportWebVitals from 'reportWebVitals';
// Initialize languages
import './locales/i18n';
import { LogOut } from 'utils/utils';
// require('dotenv').config()
const AppElements: React.FC = () => {
  React.useEffect(() => {
    const route = window.location.pathname;
    if (route.includes('logout')) {
      LogOut();
      window.location.href = '/app/login';
    }
  }, []);
  return (
    // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </PersistGate>
    </Provider>
    // </React.StrictMode>
  );
};

const container: HTMLElement | null = document.getElementById('App') as HTMLElement;
hydrateRoot(container, <AppElements />); // createRoot(container!) if you use TypeScript
// root.render(<AppElements />);

// Hot reloadable translation json files
// if (module.hot) {
//   module.hot.accept(['./locales/i18n'], () => {
//     // No need to render the App again because i18next works with the hooks
//   });
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

if (process.env.NODE_ENV === 'development') {
  // reportWebVitals(console.table);
}
