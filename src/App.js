import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import CitiesPage from './pages/CitiesPage';
import CityDetailsPage from './pages/CityDetailsPage';
import AddCarPage from './pages/AddCarPage';
import Sidebar from './components/Sidebar';

const App = () => (
  <>
    <BrowserRouter>
      <Sidebar />
      <div>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<CitiesPage />} />
          <Route path="/cities/:id" element={<CityDetailsPage />} />
          <Route path="/add_car/:cityId" element={<AddCarPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
);

export default App;
