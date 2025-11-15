

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import Home from "./pages/Home";
<<<<<<< HEAD
import CardOPenAdminPannel from "./pages/CardOPenAdminPannel";
import HiddoDashboard from "./HiddoPages/HiddoDashBoard";
import HiddoHome from "./HiddoPages/HiddoHome";
import HiddoUsers from "./HiddoPages/HiddoUsers";
import HiddoSettings from "./HiddoPages/HiddoSetting";
import HiddoHome2 from "./HiddoPages/HiddoHome2";
import Home2 from "./pages/Home2";
=======
>>>>>>> 24b826f5f528b1d9ee488106c0e01c42ae31eb23

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
<<<<<<< HEAD
        <Route path="/cardOpenAdminPannel" element={<CardOPenAdminPannel />} />




        <Route path="/coin/*" element={<Dashboard />}>
          <Route index element={<Home2 />} />

=======

        <Route path="/dashboard" element={<Dashboard />}>
>>>>>>> 24b826f5f528b1d9ee488106c0e01c42ae31eb23
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
        </Route>
<<<<<<< HEAD


        <Route path="/hiddo/*" element={<HiddoDashboard />}>
          <Route index element={<HiddoHome2 />} />

          <Route path="hiddoHome" element={<HiddoHome />} />
          <Route path="hiddoUsers" element={<HiddoUsers />} />
          <Route path="hiddoSettings" element={<HiddoSettings />} />
          <Route path="reports" element={<Reports />} />
        </Route>



=======
        
>>>>>>> 24b826f5f528b1d9ee488106c0e01c42ae31eb23
      </Routes>
    </Router>
  );
};

export default App;