
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from './DashboardLayout';
import HomePage from './HomePage';

function App() {
 

  return (
   <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
    </BrowserRouter>
   
   </>
  )
}

export default App
