import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import CitiesPage from './pages/CitiesPage';
import AddCarPage from './pages/AddCarPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/cities" element={<CitiesPage />} />
      <Route path="/add_car" element={<AddCarPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
