import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { page, layout } from './imports/page';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (in ms)
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<page.Landing />} />
          {/* AUTH ROUTES */}
          <Route path="/login" element={<page.Login />} />
          <Route path="/register" element={<page.Register />} />
          <Route path="/reset" element={<page.Reset />} />
          {/* AUTH ROUTES */}
          {/* DASHBOARD ROUTES */}
          <Route element={<layout.DashboardLayout />}>
            <Route path="/dashboard" element={<page.Dashboard />} />
            <Route path="/add-finance" element={<page.AddFinance />} />
          </Route>
          {/* DASHBOARD ROUTES */}

        </Routes>
      </Router>
    </div>
  )
}

export default App