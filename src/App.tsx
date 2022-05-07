// import 'react-notifications-component/dist/theme.css'
import React from 'react';
import { ReactNotifications } from 'react-notifications-component';
import './App.css';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <ReactNotifications />
      <Main />
    </div>
  );
}

export default App;
