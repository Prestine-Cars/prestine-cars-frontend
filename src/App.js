import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import CitiesPage from './pages/CitiesPage';
import Sidebar from './components/Sidebar';
import { authHeader } from './redux/services';

const App = () => (
  <BrowserRouter>
    <div className={authHeader ? 'sm:flex' : null}>
      {authHeader ? <Sidebar /> : null}
      <div className="flex-1">
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/cities" element={<CitiesPage />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
