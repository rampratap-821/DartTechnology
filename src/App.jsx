


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Users from "./pages/Users";
// import Settings from "./pages/Settings";
// import Reports from "./pages/Reports";
// import Home from "./pages/Home";
// import HomeByDefault from "./pages/HomeByDefault";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />

//         <Route path="/dashboard" element={<Dashboard />}>

//           {/* ✔ Default page (Home) */}
//           <Route index element={<HomeByDefault />} />

//           {/* ✔ Other child routes */}
//           <Route path="home" element={<Home />} />
//           <Route path="users" element={<Users />} />
//           <Route path="settings" element={<Settings />} />
//           <Route path="reports" element={<Reports />} />

//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;





import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import Home from "./pages/Home";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3d3f1181ae728935ef1daf0772b116016ff36b9c
import CardOPenAdminPannel from "./pages/CardOPenAdminPannel";
import HiddoDashboard from "./HiddoPages/HiddoDashBoard";
import HiddoHome from "./HiddoPages/HiddoHome";
import HiddoUsers from "./HiddoPages/HiddoUsers";
<<<<<<< HEAD
import HiddoSettings from "./HiddoPages/HiddoSettings";
import HiddoHome2 from "./HiddoPages/HiddoHome2";
import Home2 from "./pages/Home2";
=======
import HiddoSettings from "./HiddoPages/HiddoSetting";
import HiddoHome2 from "./HiddoPages/HiddoHome2";
import Home2 from "./pages/Home2";
=======
>>>>>>> 24b826f5f528b1d9ee488106c0e01c42ae31eb23
>>>>>>> 3d3f1181ae728935ef1daf0772b116016ff36b9c

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
<<<<<<< HEAD
        <Route path="/cardOpenAdminPannel" element={<CardOPenAdminPannel />} />




        <Route path="/coin/*" element={<Dashboard />}>
          <Route index element={<Home2 />} />

=======

        <Route path="/dashboard" element={<Dashboard />}>
>>>>>>> 24b826f5f528b1d9ee488106c0e01c42ae31eb23
>>>>>>> 3d3f1181ae728935ef1daf0772b116016ff36b9c
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
        </Route>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3d3f1181ae728935ef1daf0772b116016ff36b9c


        <Route path="/hiddo/*" element={<HiddoDashboard />}>
          <Route index element={<HiddoHome2 />} />

          <Route path="hiddoHome" element={<HiddoHome />} />
          <Route path="hiddoUsers" element={<HiddoUsers />} />
          <Route path="hiddoSettings" element={<HiddoSettings />} />
          <Route path="reports" element={<Reports />} />
        </Route>



<<<<<<< HEAD
=======
=======
        
>>>>>>> 24b826f5f528b1d9ee488106c0e01c42ae31eb23
>>>>>>> 3d3f1181ae728935ef1daf0772b116016ff36b9c
      </Routes>
    </Router>
  );
};

export default App;