// // src/components/Dashboard.js
// import React, { useEffect, useState } from 'react';

// const Dashboard = () => {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('/employees')  // Adjust to your correct API endpoint
//       .then(response => response.json())
//       .then(data => {
//         setEmployees(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError('Error fetching employees');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <h2>Employee List</h2>
//       <ul>
//         {employees.map(employee => (
//           <li key={employee.id}>{employee.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;
