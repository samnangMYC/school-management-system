
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from './dashboard/DashboardLayout';
import HomePage from './HomePage';
import AllProfessor from './dashboard/professors/AllProfessor';
import DataLayoutPage from './components/DataLayout';
import AddNewProfessor from './dashboard/professors/AddProfessor';

function App() {
 

  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Nested routing under dashboard layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DataLayoutPage />} /> {/* /dashboard */}
          <Route path="professor" element={<AllProfessor />} /> {/* /dashboard/professor */}
          <Route path="add-professor" element={ <AddNewProfessor /> } /> {/* /dashboard/Add professor */}
        </Route>
      </Routes>
    </BrowserRouter>
   
   </>
  )
}

export default App
