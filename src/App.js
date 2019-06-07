import React from 'react';
import './App.css';
import Routes from './Routes/index.js'
import IntlProviderConfigured from 'C:/Users/lucas/React/riees/src/i18n/IntlProviderConfigured.js';

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
