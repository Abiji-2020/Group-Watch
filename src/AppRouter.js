// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/App';
import WatchParty from './components/WatchParty';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/watchparty/:sessionId" element={<WatchParty />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
