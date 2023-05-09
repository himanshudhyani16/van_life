import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./VansLifeStyle/Home";
import About from "./VansLifeStyle/About";

import "./server";
import Vans from "./VansLifeStyle/pages/vans/Vans";
import VanDetails from "./VansLifeStyle/pages/vans/VanDetails";
import Layout from "./VansLifeStyle/components/Layout";
import Dashbord from "./VansLifeStyle/pages/host/Dashbord";
import Income from "./VansLifeStyle/pages/host/Income";
import Review from "./VansLifeStyle/pages/host/Review";
import HostLayout from "./VansLifeStyle/components/HostLayout";
import HostVans from "./VansLifeStyle/pages/host/HostVans";
import HosyVansDetails from "./VansLifeStyle/pages/host/HosyVansDetails";
import HostVansSubDetails from "./VansLifeStyle/pages/host/HostDetailpages/HostVansSubDetails";
import HostVanPrice from "./VansLifeStyle/pages/host/HostDetailpages/HostVanPrice";
import HostVanPhoto from "./VansLifeStyle/pages/host/HostDetailpages/HostVanPhoto";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id/:type" element={<VanDetails />} />
          </Route>

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashbord />} />
            <Route path="income" element={<Income />} />
            <Route path="review" element={<Review />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HosyVansDetails />}>
              <Route index element={<HostVansSubDetails />} />
              <Route path="Pricing" element={<HostVanPrice />} />
              <Route path="photos" element={<HostVanPhoto />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
