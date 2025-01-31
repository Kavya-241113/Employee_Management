// import React, { useState, useEffect } from 'react';
// import AddEmployeeForm from './AddEmployeeForm';
// import EditEmployeeForm from './EditEmployeeForm';
// import EmployeeTable from './EmployeeTable';

// const EmployeeManagement = () => {
//   const [employees, setEmployees] = useState([]);
//   const [editingEmployee, setEditingEmployee] = useState(null);

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
//     setEditingEmployee(null); // Reset edit state after update
//   };

//   const editEmployee = (employee) => {
//     setEditingEmployee(employee);
//   };

//   return (
//     <div>
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
//     </div>
//   );
// };

// export default EmployeeManagement;
