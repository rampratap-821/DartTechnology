// import React from "react";

// const Users = () => {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow">
//       <h1 className="text-2xl font-bold mb-4">Users Management</h1>
//       <p>All users will be displayed here in a table format.</p>
//     </div>
//   );
// };

// export default Users;



// import React from "react";

// const Users = () => {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow">
//       <h1 className="text-2xl font-bold mb-4">Users Management</h1>
//       <p>All users will be displayed here in a table format.</p>
//     </div>
//   );
// };

// export default Users;



import React from "react";

const Users = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Users Management</h1>
        <button className="mt-4 sm:mt-0 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-colors duration-200 transform hover:scale-105">
          Add User
        </button>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-600">Name</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-600">Email</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-600">Status</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150">
                  <td className="py-4 px-4">John Doe</td>
                  <td className="py-4 px-4">john@example.com</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Active
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;