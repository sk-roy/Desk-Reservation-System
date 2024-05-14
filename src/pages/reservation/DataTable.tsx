import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


const CustomPagination: React.FC = () => {
    // You can implement your own pagination logic here
    // For simplicity, I'll just display page numbers
    const totalPages = 50; // Example: Total pages from your data
  
    const handlePageChange = (newPage: number) => {
      // Handle page change (e.g., fetch data for the new page)
      console.log(`Go to page ${newPage + 1}`);
    };
  
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "gray"}}>
        <Box display= 'flex' justifyContent= 'space-between' alignItems= 'left' >
          Showing 10 items per page
        </Box>
        <div>
          <button onClick={() => handlePageChange(0)}>A</button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              style={{ fontWeight: 'bold' }}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={() => handlePageChange(totalPages - 1)}>B</button>
        </div>
      </div>
    );
  };

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        slots={{
            pagination: CustomPagination
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}



// import React from 'react';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import { Box } from '@mui/material';

// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID' },
//   { field: 'title', headerName: 'Title', width: 300 },
//   { field: 'body', headerName: 'Body', width: 600 },
// ];

// const CustomPagination: React.FC = () => {
//   // You can implement your own pagination logic here
//   // For simplicity, I'll just display page numbers
//   const totalPages = 50; // Example: Total pages from your data

//   const handlePageChange = (newPage: number) => {
//     // Handle page change (e.g., fetch data for the new page)
//     console.log(`Go to page ${newPage + 1}`);
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "gray"}}>
//       <Box display= 'flex' justifyContent= 'space-between' alignItems= 'left' >
//         Showing 10 items per page
//       </Box>
//       <div>
//         <button onClick={() => handlePageChange(0)}>A</button>
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageChange(index)}
//             style={{ fontWeight: 'bold' }}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button onClick={() => handlePageChange(totalPages - 1)}>B</button>
//       </div>
//     </div>
//   );
// };

// const DataTable: React.FC = () => {
//   // Assume you have fetched data and set it to `tableData`
//   const tableData: any[] = []; // Example: Fetch data from API

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={tableData}
//         columns={columns}
//         slots={{ pagination: CustomPagination }}
//         // pagination
//         // pageSize={10}
//       />
//     </div>
//   );
// };

// export default DataTable;
