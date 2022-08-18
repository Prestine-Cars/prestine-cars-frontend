/*eslint-disable */
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<SignInPage />} /> 
    </Routes>
  </BrowserRouter>
);

export default App;
