
// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';

// const AddEmployeeForm = ({ addEmployee }) => {
//   const [name, setName] = useState('');
//   const [department, setDepartment] = useState('');
//   const [position, setPosition] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newEmployee = { id: Date.now(), name, department, position };
//     addEmployee(newEmployee); // Pass the new employee to the parent component
//     setName(''); // Reset form after submission
//     setDepartment('');
//     setPosition('');
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group>
//         <Form.Label>Name</Form.Label>
//         <Form.Control
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Department</Form.Label>
//         <Form.Control
//           type="text"
//           value={department}
//           onChange={(e) => setDepartment(e.target.value)}
//           required
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Position</Form.Label>
//         <Form.Control
//           type="text"
//           value={position}
//           onChange={(e) => setPosition(e.target.value)}
//           required
//         />
//       </Form.Group>
//       <Button type="submit">Add Employee</Button>
//     </Form>
//   );
// };

// export default AddEmployeeForm;
