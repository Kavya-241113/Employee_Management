





// import React, { useState, useEffect } from 'react';
// import { Form, Button } from 'react-bootstrap';

// // const EditEmployeeForm = ({ employee, updateEmployee }) => {
// //   const [name, setName] = useState(employee.name);
// //   const [department, setDepartment] = useState(employee.department);
// //   const [position, setPosition] = useState(employee.position);

// //   useEffect(() => {
// //     // Update form fields when the employee prop changes
// //     setName(employee.name);
// //     setDepartment(employee.department);
// //     setPosition(employee.position);
// //   }, [employee]);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Update the employee data
// //     updateEmployee({ ...employee, name, department, position });
// //   };


// const EditEmployeeForm = ({ employee, updateEmployee }) => {
//     const [name, setName] = useState(employee.name || '');
//     const [department, setDepartment] = useState(employee.department || '');
//     const [position, setPosition] = useState(employee.position || '');
  
//     useEffect(() => {
//       setName(employee.name);
//       setDepartment(employee.department);
//       setPosition(employee.position);
//     }, [employee]);
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       const updatedEmployee = { ...employee, name, department, position };
//       updateEmployee(updatedEmployee); // Update employee in parent
//     };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group>
//         <Form.Label>Name</Form.Label>
//         <Form.Control
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Department</Form.Label>
//         <Form.Control
//           type="text"
//           value={department}
//           onChange={(e) => setDepartment(e.target.value)}
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Position</Form.Label>
//         <Form.Control
//           type="text"
//           value={position}
//           onChange={(e) => setPosition(e.target.value)}
//         />
//       </Form.Group>
//       <Button type="submit">Update Employee</Button>
//     </Form>
//   );
// };

// export default EditEmployeeForm;
