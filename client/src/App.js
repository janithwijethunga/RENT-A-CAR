
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DriverProfile from './screens/DriverProfile';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/DriverProfile' element={<DriverProfile />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
