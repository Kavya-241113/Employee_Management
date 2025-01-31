
// import React, { useState, useEffect } from 'react';
// import AddEmployeeForm from './components/AddEmployeeForm';
// import EmployeeTable from './components/EmployeeTable';
// import EditEmployeeForm from './components/EditEmployeeForm';
// import EmployeeList from './components/EmployeeList';
// import Dashboard from './components/Dashboard';

// const App = () => {
//   const [employees, setEmployees] = useState([]);
//   const [editingEmployee, setEditingEmployee] = useState(null);

//   useEffect(() => {
//     // Fetch employee data from an API
//     fetch('https://your-api-endpoint.com/employees') // Replace with your actual API URL
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setEmployees(data); // Assuming API returns the correct employee data
//       })
//       .catch((error) => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   }, []); // Empty array means this runs once when the component mounts

//   const addEmployee = (newEmployee) => {
//     setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
//   };

//   const deleteEmployee = (id) => {
//     setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
//   };

//   const updateEmployee = (updatedEmployee) => {
//     setEmployees((prevEmployees) =>
//       prevEmployees.map((employee) =>
//         employee.id === updatedEmployee.id ? updatedEmployee : employee
//       )
//     );
//     setEditingEmployee(null);
//   };

//   const editEmployee = (employee) => {
//     setEditingEmployee(employee);
//   };

//   return (
//     <div className="container">
//       <h1>Employee Management</h1>

//       {editingEmployee ? (
//         <EditEmployeeForm employee={editingEmployee} updateEmployee={updateEmployee} />
//       ) : (
//         <AddEmployeeForm addEmployee={addEmployee} />
//       )}

//       <EmployeeTable
//         employees={employees}
//         deleteEmployee={deleteEmployee}
//         editEmployee={editEmployee}
//       />
//       <EmployeeList/>
//       <Dashboard/>
//     </div>
//   );
// };

// export default App;





































import React from 'react';
// import Employee from './Employee';
import './App.css'; // You can add styling here
import Employee from './components/EmployeeTable';

function App() {
  return (
    <div className="App">
      <h1>Employee Management</h1>
     <Employee/>
    </div>
  );
}

export default App;