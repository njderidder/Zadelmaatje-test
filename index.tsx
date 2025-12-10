if (typeof window !== 'undefined' && (window as any).inEditorMode) {
  import('./registerCloudCannon')
    .catch((error) => {
      console.warn('Failed to load CloudCannon component registration', error);
    });
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
