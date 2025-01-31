// import React, { useEffect, useState } from 'react';

// const EmployeeTable = () => {
//   const [employeeData, setEmployeeData] = useState([]);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchEmployeeData = async () => {
//       try {
//         // Replace with your actual API URL
//         const response = await fetch('https://your-api-endpoint.com/employees');
        
//         // Check if the response is ok (status code 200-299)
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         // Parse the response as JSON
//         const data = await response.json();
//         setEmployeeData(data);
//         setIsLoading(false); // Data has been loaded, stop loading spinner
//       } catch (err) {
//         setError(err.message);
//         setIsLoading(false); // Stop loading spinner
//         console.error('There was an error fetching the data:', err);
//       }
//     };

//     fetchEmployeeData();
//   }, []);

//   // Show loading message while fetching data
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   // Show error message if fetching failed
//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
    
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Position</th>
//             {/* Add more headers as needed */}
//           </tr>
//         </thead>
//         <tbody>
//           {employeeData.map((employee, index) => (
//             <tr key={index}>
//               <td>{employee.name}</td>
//               <td>{employee.position}</td>
//               {/* Add more employee details here */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
    
// };

// export default EmployeeTable;

































import React, { useState, useMemo } from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';
import 'bootstrap/dist/css/bootstrap.min.css';

const Employee = () => {
  const initialData = [
    { id: 1, name: 'John Doe', department: 'HR', position: 'Manager' },
    { id: 2, name: 'Jane Smith', department: 'IT', position: 'Developer' },
  ];

  const [data, setData] = useState(initialData);
  const [formState, setFormState] = useState({
    id: '',
    name: '',
    department: '',
    position: '',
  });

  const columns = useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Department', accessor: 'department' },
      { Header: 'Position', accessor: 'position' },
      {
        Header: 'Actions',
        Cell: ({ row }) => (
          <>
            <button
              className="btn btn-primary btn-sm me-2"
              onClick={() => handleEdit(row.original)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(row.original.id)}
            >
              Delete
            </button>
          </>
        ),
      },
    ],
    []
  );

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.id) {
      // Update employee
      setData((prevData) =>
        prevData.map((emp) => (emp.id === formState.id ? formState : emp))
      );
    } else {
      // Add new employee
      setData([
        ...data,
        {
          ...formState,
          id: data.length ? data[data.length - 1].id + 1 : 1,
        },
      ]);
    }
    setFormState({ id: '', name: '', department: '', position: '' });
  };

  const handleEdit = (employee) => {
    setFormState(employee);
  };

  const handleDelete = (id) => {
    setData(data.filter((emp) => emp.id !== id));
  };

  const tableInstance = useTable({ columns, data }, useFilters, useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Employee Management</h2>

      {/* Form for Adding/Editing */}
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Department"
              name="department"
              value={formState.department}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Position"
              name="position"
              value={formState.position}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-success w-100">
              {formState.id ? 'Update' : 'Add'} Employee
            </button>
          </div>
        </div>
      </form>

      {/* Table */}
      <table className="table table-bordered table-hover" {...getTableProps()}>
        <thead className="table-dark">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="text-center"
                >
                  {column.render('Header')}
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' ▼'
                      : ' ▲'
                    : ''}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="text-center">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
