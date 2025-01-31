// // src/components/EmployeeList.js


// import React, { useEffect, useState } from 'react';


// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);



//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await fetch('/employees');
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }
//         const data = await response.json();
//         setEmployees(data);
//       } catch (error) {
//         console.error("Error fetching employees:", error);
//         setError("Error fetching employees");
//       } finally {
//         setIsLoading(false); // Stop loading spinner
//       }
//     };
//     fetchEmployees();
//   }, []);
  


//   return (
//     <div>
//       <h1>Employee List</h1>
    
      
//       <ul>
//         {employees.map(employee => (
//           <li key={employee.id}>{employee.name}</li>
//         ))}
//       </ul>

      
//     </div>
//   );

// };


// export default EmployeeList;
