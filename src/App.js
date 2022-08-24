import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import CitiesPage from './pages/CitiesPage';
import AddCityPage from './pages/AddCityPage';
import CityDetailsPage from './pages/CityDetailsPage';
import AddCarPage from './pages/AddCarPage';
import Sidebar from './components/Sidebar';
import AddReservationPage from './pages/AddReservationPage';
import ReservationsPage from './pages/ReservationsPage';

const App = () => (
  <>
    <BrowserRouter>
      <Sidebar />
      <div>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<CitiesPage />} />
          <Route path="/cities" element={<CitiesPage />} />
          <Route path="/add_city" element={<AddCityPage />} />
          <Route path="/cities/:id" element={<CityDetailsPage />} />
          <Route path="/cities/:cityId/cars" element={<AddCarPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route
            path="/cities/:cityId/cars/:carId/add_resevation"
            element={<AddReservationPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  </>
);

export default App;
