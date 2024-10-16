import AppRouter from './routes/Router';
// Hook
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}


export default App;
