



// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   FiHome, 
//   FiUsers, 
//   FiSettings, 
//   FiBarChart2, 
//   FiX,
//   FiDatabase,
//   FiShield
// } from "react-icons/fi";

// const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
//   const location = useLocation();

//   const menuItems = [
//     { path: "/dashboard/users", icon: <FiUsers size={20} />, label: "Users" },
//     { path: "/dashboard/settings", icon: <FiSettings size={20} />, label: "Settings" },
//     { path: "/dashboard/reports", icon: <FiBarChart2 size={20} />, label: "Reports" },
//   ];

//   const closeSidebar = () => {
//     if (window.innerWidth < 1024) {
//       setSidebarOpen(false);
//     }
//   };

//   return (
//     <>
//       <div
//         className={`fixed inset-y-0 left-0 z-30 w-64 bg-gradient-to-b from-green-800 to-green-900 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between p-6 border-b border-green-700">
//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
//               <FiShield className="text-green-700" size={24} />
//             </div>
//             <div>
//               <h1 className="text-white font-bold text-xl">AdminPro</h1>
//               <p className="text-green-200 text-xs">v2.0</p>
//             </div>
//           </div>
          
//           <button
//             onClick={() => setSidebarOpen(false)}
//             className="lg:hidden p-2 rounded-lg hover:bg-green-700 text-white transition-colors duration-200"
//           >
//             <FiX size={20} />
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="p-4 space-y-2 mt-4">
//           {/* Dashboard Link */}
//           <Link
//             to="/dashboard"
//             onClick={closeSidebar}
//             className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
//               location.pathname === "/dashboard" 
//                 ? "bg-green-700 text-white shadow-lg" 
//                 : "text-green-100 hover:bg-green-700 hover:shadow-md"
//             }`}
//           >
//             <FiHome size={20} />
//             <span className="font-medium">Dashboard</span>
//           </Link>

//           {/* Other Menu Items */}
//           {menuItems.map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               onClick={closeSidebar}
//               className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
//                 location.pathname === item.path
//                   ? "bg-green-700 text-white shadow-lg" 
//                   : "text-green-100 hover:bg-green-700 hover:shadow-md"
//               }`}
//             >
//               {item.icon}
//               <span className="font-medium">{item.label}</span>
//             </Link>
//           ))}
//         </nav>

//         {/* Footer */}
//         <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-green-700">
//           <div className="flex items-center space-x-3 text-green-200">
//             <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
//               <FiDatabase size={16} />
//             </div>
//             <div className="flex-1">
//               <p className="text-sm font-medium">Storage</p>
//               <div className="w-full bg-green-700 rounded-full h-2 mt-1">
//                 <div className="bg-white rounded-full h-2 w-3/4"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;



import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FiHome, 
  FiUsers, 
  FiSettings, 
  FiBarChart2, 
  FiX,
  FiDatabase,
  FiShield
} from "react-icons/fi";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", icon: <FiHome size={20} />, label: "Dashboard" },
    { path: "/dashboard/users", icon: <FiUsers size={20} />, label: "Users" },
    { path: "/dashboard/settings", icon: <FiSettings size={20} />, label: "Settings" },
    { path: "/dashboard/reports", icon: <FiBarChart2 size={20} />, label: "Reports" },
  ];

  const closeSidebar = () => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gradient-to-b from-green-800 to-green-900 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-green-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <FiShield className="text-green-700" size={24} />
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">AdminPro</h1>
              <p className="text-green-200 text-xs">v2.0</p>
            </div>
          </div>
          
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-green-700 text-white transition-colors duration-200"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeSidebar}
              className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
                location.pathname === item.path
                  ? "bg-green-700 text-white shadow-lg" 
                  : "text-green-100 hover:bg-green-700 hover:shadow-md"
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-green-700">
          <div className="flex items-center space-x-3 text-green-200">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <FiDatabase size={16} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Storage</p>
              <div className="w-full bg-green-700 rounded-full h-2 mt-1">
                <div className="bg-white rounded-full h-2 w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;