import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const basename = import.meta.env.DEV ? '/' : '/My-Portfolio';

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Placeholder for future blog or details routes */}
      </Routes>
    </Router>
  );
}

export default App;
