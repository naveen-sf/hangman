import React, { useState } from 'react';
import Login from './login';
import Game from './game';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

// main component to render either login or game screen
const App = () => {

  const [userEmail, setUserEmail] = useState("");
  
  return (
    <div className="App">
      {!userEmail ?
        <ErrorBoundary>
          <Login setUserEmail={setUserEmail} />
        </ErrorBoundary>
        :
        <ErrorBoundary>
          <Game userEmail={userEmail} />
        </ErrorBoundary>
      }
    </div>
  );
}

export default App;
