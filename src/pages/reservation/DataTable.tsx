import * as React from 'react';
import { DataGrid, GridColDef, GridFooterContainer, GridPagination, GridRowParams, gridPageCountSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import { Box, Button, FormControl, MenuItem, Select, Stack, TablePaginationProps, Typography, colors } from '@mui/material';
import MuiPagination from '@mui/material/Pagination';
import CustomFooter from './CustomFooter';
import DeleteIcon from '@mui/icons-material/Delete';
import { ClassNames, useTheme } from '@emotion/react';
import theme from '../../theme';
import { DataGridRows } from '../../assets/data';
import { BorderBottom, Padding } from '@mui/icons-material';
import IconUnsorted from "../../assets/icons/chevron-selector-vertical.svg"


const StatusCell = ({ status }: {status: number}) => {
  return (    
    <Box sx={{      
      borderRadius: '6px',
      height: '24px',
      width: '75px',
      py: "3px",
      px: "8px",
      marginY: "14px",
    }}      
    bgcolor= {status === 1 ? '#3E61DE26' : '#8092A326'}
    >
        {status === 1 ? <Typography className='Semi Bold 12' color='#3E61DE'>Upcoming</Typography>
                      : <Typography className='Semi Bold 12' color={theme.palette.grey[200]}>Attended</Typography>}
    </Box>
  );
}

const CustomButtonCell = ({ status }: { status: number }) => {
  return (    
    <Box>
    {status === 1 ? (
      <Button 
      sx={{
        borderRadius: "6px",
        paddingLeft: "14px",
        paddingTop: "7px",
        paddingRight: "14px",
        paddingBottom: "7px",
        // borderColor: "transparent",
        textTransform: "none",
        fontSize: "12px",
        fontWeight: "600",
        backgroundColor: "#EEF3FA",
      }}>
        <Typography className='Semi Bold 12' color={theme.palette.grey[400]}>Cancel</Typography>
      </Button>
    ) :
     (
      <Button
      variant="outlined"
      sx={{
        color: 'red',
        textTransform: "none",
        paddingBottom: "7px",
        fontSize: '10px',
        fontWeight: 600,
        backgroundColor: "#EEF3FA",
        borderColor: "transparent"
      }}
      startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    )}
  </Box>
  );
};


const DeskCell = ({ status, desk }: {status: number, desk: string}) => {
  return (    
    <Box marginY= "14px">
        {status === 1 ? <Typography className='Semi Bold 13' color='#2E4AAE'>{desk}</Typography>
                      : <Typography className='Semi Bold 13' color={theme.palette.grey[300]}>{desk}</Typography>}
                      
    </Box>
  );
}

const ReservedOnCell = ({ status, reservedOn }: {status: number, reservedOn: string}) => {
  return (    
    <Box marginY= "14px">
        {status === 1 ? <Typography className='Semi Bold 14' color={theme.palette.primary.dark}>{reservedOn}</Typography>
                      : <Typography className='Semi Bold 14' color={theme.palette.grey[300]}>{reservedOn}</Typography>}
                      
    </Box>
  );
}
const MadeReservedOnCell = ({ status, madeReservedOn }: {status: number, madeReservedOn: string}) => {
  return (    
    <Box marginY= "14px">
        {status === 1 ? <Typography className='Medium 13' color={theme.palette.grey[400]}>{madeReservedOn}</Typography>
                      : <Typography className='Medium 13' color={theme.palette.grey[300]}>{madeReservedOn}</Typography>}
                      
    </Box>
  );
}

const columnLenth = 6;

const columns: GridColDef[] = [
  { 
    field: 'reservedOn', headerName: 'Reserved On', flex: (1/columnLenth), sortable: true,
    disableColumnMenu: true,
    renderCell: (params) => <ReservedOnCell {...params.row} />
  }, {
    field: 'desk', headerName: 'Desk', flex: (1/columnLenth), sortable: true,
    disableColumnMenu: true,
    renderCell: (params) => <DeskCell {...params.row} />
  }, { 
    field: 'status', headerName: 'Status', flex: (1/columnLenth),
    disableColumnMenu: true, headerClassName: 'status-header',
    renderCell: (params) => <StatusCell status={params.value} />,
  },{ 
    field: 'madeReservedOn', headerName: 'Made Reserved On', flex: (1/columnLenth), sortable: true,
    disableColumnMenu: true,
    renderCell: (params) => <MadeReservedOnCell {...params.row} />
  },{
    field: 'button', headerName: '', flex: (1/columnLenth),
    disableColumnMenu: true, headerClassName: 'button-header',
    renderCell: (params) => <CustomButtonCell {...params.row} />,
  },
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
        ClassName: "Medium 12",
        colors: "#8092A3",
        wordWrap: 'break-word',
        paddingLeft: "20px",
    },
    '& .MuiDataGrid-row': {
        BorderBottom: "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)",
        backgroundcolor: "#E8EDF5",
        paddingLeft: "18px",
        alignItems: 'center',
    },
    '& .hideRightSeparator > .MuiDataGrid-columnSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-columnSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-columnHeaderTitleContainer': {
        display: 'flex',
        ClassNames: "Medium 12",
    },
    '& .MuiDataGrid-cell': {
        outline: 'none !important',
        Padding: '0px !important'
    },
    '& .MuiDataGrid-iconButtonContainer': {
        marginTop: '3px',
        visibility: 'visible !important',
      },
      '& .status-header .MuiDataGrid-iconButtonContainer': {
          display: 'none',
      },
      '& .button-header .MuiDataGrid-iconButtonContainer': {
          display: 'none',
      },
  };  

  const rowClicked = (params: GridRowParams<any>) => {
      console.log('Row clicked');
     // if (rowClick) rowClick(params.row);
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
                totalRows={DataGridRows.length}
                page={page}
                rowsPerPageOptions={rowsPerPageOptions}
                pageSize={rowsPerPage}
                onPageSizeChangeCallback={handlePageSizeChange}
                onPageChangeCallback={handlePageChange}
            />
        </GridFooterContainer>
    );
};

const UnsortedIcon = () => {
  return (
      <Box>
          <img src={IconUnsorted} alt='UnsortedIcon'></img>
      </Box>
  );
};

const AscendingIcon = () => {
    return (
        <Box>
            <img src={IconUnsorted} alt='AscendingIcon'></img>
        </Box>
    );
};

const DescendingIcon = () => {
    return (
        <Box>
            <img src={IconUnsorted} alt='DescendingIcon'></img>
        </Box>
    );
};

const CustomNoRowsOverlay = () => {
    return <Stack></Stack>;
};


  return (
    <Box sx={{ height: 'calc(100vh - 174px)', width: '100%' }}>
      <DataGrid
        sx={datagridSx}
        rows={DataGridRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: initialPage, pageSize: initialRowsPerPage },
          },
        }}
        onRowClick={rowClicked}
        disableRowSelectionOnClick
        // sortingOrder={['asc', 'desc', null]}
        pagination={true}
        rowHeight={66}
        slots={{
          columnSortedDescendingIcon: DescendingIcon,
          columnSortedAscendingIcon: AscendingIcon,
          columnUnsortedIcon: UnsortedIcon,
          footer: Footer,
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        autoPageSize={true}
        paginationModel={{
            pageSize: rowsPerPage,
            page: page,
        }}
        checkboxSelection
      />
    </Box>
  );
}


