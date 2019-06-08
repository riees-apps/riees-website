import React from 'react';
import './App.css';
import Routes from './Routes/index.js'
import IntlProviderConfigured from './i18n/IntlProviderConfigured';

function App() {
  return (
    <div className="App">
      <IntlProviderConfigured>
        <Routes/>
      </IntlProviderConfigured>
    </div>
  );
}

export default App;
