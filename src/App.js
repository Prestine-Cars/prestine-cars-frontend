/*eslint-disable */
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<SignInPage />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
