import * as React from 'react';
import { DataGrid, GridColDef, GridFooterContainer, GridPagination, gridPageCountSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import { Box, Button, FormControl, MenuItem, Select, TablePaginationProps, Typography } from '@mui/material';
import MuiPagination from '@mui/material/Pagination';
import CustomFooter from './CustomFooter';
import DeleteIcon from '@mui/icons-material/Delete';


const CustomButtonCell = ({ value }: { value: string }) => {
  const handleButtonClick = () => {
    // Handle button click logic here (e.g., open a modal, perform an action, etc.)
    console.log(value);
  };

  return (
    
    <Box>
    {value !== 'Cancel' ? (
      <button 
      style={{
        borderRadius: "6px",
        paddingLeft: "14px",
        paddingTop: "7px",
        paddingRight: "14px",
        paddingBottom: "7px",
        borderColor: "transparent",
        fontSize: "12px",
        fontWeight: "600",
        backgroundColor: "#EEF3FA",
      }}
      onClick={handleButtonClick}>
        Cancel
      </button>
    ) :
     (
      <Button
      variant="outlined"
      color="secondary"
      style={{
        color: 'red',
        borderColor: 'transparent',
        fontSize: '10px',
        fontWeight: 600,
        backgroundColor: "#EEF3FA",
      }}
      startIcon={<DeleteIcon />}
      onClick={handleButtonClick}
      >
        Delete
      </Button>
    )}
  </Box>
  );
};

const columns: GridColDef[] = [
  { field: 'reservedOn', headerName: 'Reserved On', width: 150 },
  { field: 'desk', headerName: 'Desk', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },
  { field: 'madeReservedOn', headerName: 'Made Reserved On', width: 130 },
  { field: 'button', headerName: '', width: 130 ,    
    renderCell: (params) => <CustomButtonCell value={params.value} />,
  },
];

const rows = [
  { id: 3, reservedOn: 'Friday, 26 Oct 2023', desk: 'Desk 301-03', status: 'Upcoming', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Cancel'  },
  { id: 3, reservedOn: 'Monday, 15 Sep 2023', desk: 'Desk 302-09', status: 'Upcoming', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Cancel'  },
  { id: 3, reservedOn: 'Tuesday, 27 Aug 2023', desk: 'Desk 303-22', status: 'Upcoming', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Cancel'  },
  { id: 3, reservedOn: 'Wednesday, 21 Aug 2023', desk: 'Desk 501-03', status: 'Upcoming', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Cancel'  },
  { id: 3, reservedOn: 'Thursday, 12 Aug 2023', desk: 'Desk 701-03', status: 'Upcoming', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Cancel'  },
  { id: 3, reservedOn: 'Monday, 05 Aug 2023', desk: 'Desk 401-03', status: 'Attended', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Delete'  },
  { id: 3, reservedOn: 'Friday, 07 Jul 2023', desk: 'Desk 601-03', status: 'Attended', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Delete'  },
  { id: 3, reservedOn: 'Friday, 26 Oct 2023', desk: 'Desk 301-03', status: 'Upcoming', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Cancel'  },
  { id: 3, reservedOn: 'Monday, 15 Sep 2023', desk: 'Desk 302-09', status: 'Upcoming', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Cancel'  },
  { id: 3, reservedOn: 'Tuesday, 27 Aug 2023', desk: 'Desk 303-22', status: 'Upcoming', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Cancel'  },
  { id: 3, reservedOn: 'Wednesday, 21 Aug 2023', desk: 'Desk 501-03', status: 'Upcoming', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Cancel'  },
  { id: 3, reservedOn: 'Thursday, 12 Aug 2023', desk: 'Desk 701-03', status: 'Upcoming', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Cancel'  },
  { id: 3, reservedOn: 'Monday, 05 Aug 2023', desk: 'Desk 401-03', status: 'Attended', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Delete'  },
  { id: 3, reservedOn: 'Friday, 07 Jul 2023', desk: 'Desk 601-03', status: 'Attended', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Delete'  },
  { id: 3, reservedOn: 'Friday, 26 Oct 2023', desk: 'Desk 301-03', status: 'Upcoming', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Cancel'  },
  { id: 3, reservedOn: 'Monday, 15 Sep 2023', desk: 'Desk 302-09', status: 'Upcoming', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Cancel'  },
  { id: 3, reservedOn: 'Tuesday, 27 Aug 2023', desk: 'Desk 303-22', status: 'Upcoming', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Cancel'  },
  { id: 3, reservedOn: 'Wednesday, 21 Aug 2023', desk: 'Desk 501-03', status: 'Upcoming', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Cancel'  },
  { id: 3, reservedOn: 'Thursday, 12 Aug 2023', desk: 'Desk 701-03', status: 'Upcoming', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Cancel'  },
  { id: 3, reservedOn: 'Monday, 05 Aug 2023', desk: 'Desk 401-03', status: 'Attended', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Delete'  },
  { id: 3, reservedOn: 'Friday, 07 Jul 2023', desk: 'Desk 601-03', status: 'Attended', madeReservedOn: '27 Oct 2022 6:22 AM', button: 'Delete'  },
 
];


export default function DataTable() {
  const initialPage = 0;
  const initialRowsPerPage = 10;
  const rowsPerPageOptions = [10, 15, 20];

  const [page, setPage] = React.useState<number>(initialPage);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(initialRowsPerPage);


  
  const datagridSx = {
    border: 0,
    '& .MuiDataGrid-columnHeader': {
        outline: 'none !important',
        // color: theme.palette.text.secondary,
        fontSize: '12px',
        fontFamily: 'Inter',
        fontWeight: '800',
        lineHeight: '18px',
        wordWrap: 'break-word',
        paddingLeft: '20px',
    },
    '& .MuiDataGrid-columnSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-cell': {
        outline: 'none !important',
    },
    '& .MuiDataGrid-row:hover': {
        cursor: 'pointer',
        // backgroundColor: themeOptions.palette?.common?.white,
        boxShadow: 1,
        borderRadius: 2,
    },
    '& .MuiDataGrid-iconButtonContainer': {
        marginTop: '3px',
        visibility: 'visible !important',
      },
};




  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage - 1);
  };

  const handlePageSizeChange = (newPageSize: number) => {
      setPage(initialPage);
      setRowsPerPage(newPageSize);
  };

  const Footer = () => {
    return (
        <GridFooterContainer>
            <CustomFooter
                totalRows={rows.length}
                page={page}
                rowsPerPageOptions={rowsPerPageOptions}
                pageSize={rowsPerPage}
                onPageSizeChangeCallback={handlePageSizeChange}
                onPageChangeCallback={handlePageChange}
            />
        </GridFooterContainer>
    );
};
  return (
    <Box sx={{ height: "500px", width: '100%' }}>
      <DataGrid
        sx={datagridSx}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: initialPage, pageSize: initialRowsPerPage },
          },
        }}
        pagination={true}
        slots={{
            footer: Footer,
        }}
        autoPageSize={true}
        sortingOrder={['asc', 'desc', null]}
        autoHeight={true}
        disableRowSelectionOnClick
        paginationModel={{
            pageSize: rowsPerPage,
            page: page,
        }}
        // pageSizeOptions={[5, 10, 15]}
        checkboxSelection
      />
    </Box>
  );
}


