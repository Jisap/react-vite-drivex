import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Index from '../features/home/pages/Index';
import AOS from 'aos';
import ServiceDetails from '../features/home/pages/ServiceDetails';
import ServicePage from '../features/home/pages/Service';



const MainRoutes = () => {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    setTimeout(() => {
      AOS.refreshHard();
    }, 300);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/service/:id" element={<ServiceDetails />} />
    </Routes>
  )
}

export default MainRoutes