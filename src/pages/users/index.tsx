import React from "react";
import Layout from "../../layout";
import { Box, Button, FormControl, MenuItem, Select, Typography } from "@mui/material";

import CustomDataGrid from "../../components/CustomDataGrid";
import Sidebar from "../../components/sidebar";
import DateRangePicker from "./DateRangePicker";
import theme from "../../theme";
import TertiaryButton from "../../components/buttons/TertiaryButton";
import DeleteButton from "../../components/buttons/DeleteButton";
import Edit03Icon from "../../components/icons/Edit03Icon";
import DeleteIcon from "../../components/icons/DeleteIcon";
import { GridColDef } from "@mui/x-data-grid";
import { DataGridRow } from "../../components/interface";
import { datagridrows } from "../../assets/data";



interface SelectDeptProps {
    department: string;
}
  
const SelectDept: React.FC<SelectDeptProps> = ({ department }) => {
    const renderValue = (value: any) => {
        return value ? value : department;
    };

    return (
        <FormControl>
            <Select
                renderValue={renderValue}
                displayEmpty
                sx={{
                    height: "38px",
                    borderRadius: "6px",
                    border: "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)",
                    boxShadow: "0px 1px 4px 0px #4C577314",
                    fontSize: "13px",
                    paddingLeft: "9px",
                    paddingTop: "16px",
                    paddingRight: "9px",
                    paddingBottom: "18px",
                    color: "#6C859B",
                }}
            >
                {/* <MenuItem value={'Human Research'}>Human Research</MenuItem> */}
            </Select>
        </FormControl>
    );
};

const Header = () => {
    return (        
        <Box    // Header
        display="flex"
        flexDirection="column"
        alignItems='space-between'
        px="32px"
        //height="130px"
        gap='6px'
        >
            <Box // Frame 45 - Reservation
            display="flex"
            flexDirection="column"
            height="72px"
            width="100%"
            paddingBottom="8px"
            gap="6px"
            >          
                <Typography
                sx={{ 
                    fontWeight: '700',
                    fontSize: '24px' }}
                color="#212B36"
                fontFamily="Inter"
                component="div"
                >
                    Reservation
                </Typography>
                
                <Typography
                sx={{ 
                    fontWeight: '500',
                    fontSize: '16px' }}
                    color="#4D667C"
                    fontFamily="Inter"
                    component="div"
                >
                    35 reservations this month
                </Typography>
            </Box>  
            
            <Box   // Reservation action bar
            display="flex"
            flexDirection="row"
            width="100%"
            gap="32px"
            // px="32px"
            // alignItems="space-between"
            // bgcolor="gray"
            justifyContent='space-between'
            >
                <Box   // select date to filter - this month
                display="flex"
                flexDirection="row"
                width="992px"
                gap="10px"
                alignItems="space-between"
                >   
                    <DateRangePicker/>
                    <Select // dropdown
                    defaultValue={2}
                    sx={{  
                        height: "38px",
                        borderRadius: "6px",
                        border: "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)",
                        boxShadow: "0px 1px 4px 0px #4C577314",
                        fontSize: "13px",
                        paddingLeft: "9px",
                        paddingTop: "16px",
                        paddingRight: "9px",
                        paddingBottom: "18px",
                        color: "#6C859B",
                    }}>
                        <MenuItem value={1}>This Week</MenuItem>
                        <MenuItem value={2}>This Month</MenuItem>
                        <MenuItem value={3}>Next 3 Months</MenuItem>
                        <MenuItem value={4}>Last Week</MenuItem>
                        <MenuItem value={5}>Last Month</MenuItem>
                        <MenuItem value={6}>Last 3 Months</MenuItem>
                    </Select>
                    <Select // dropdown
                    defaultValue={1}
                    sx={{  
                        height: "38px",
                        borderRadius: "6px",
                        border: "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)",
                        boxShadow: "0px 1px 4px 0px #4C577314",
                        fontSize: "13px",
                        paddingLeft: "9px",
                        paddingTop: "16px",
                        paddingRight: "9px",
                        paddingBottom: "18px",
                        color: "#6C859B",
                    }}>
                        <MenuItem value={1}>Status</MenuItem>
                    </Select>
                </Box>
                {/* <Button>Reserve a Desk</Button> */}
                <Box>                                
                    <Button
                    sx={{
                        borderRadius: "8px",
                        px: "16px",
                        py: "9px",
                        backgroundColor: "#2E4AAE",
                        textTransform: "none",
                        '&:hover': {
                          backgroundColor: '#2E4AAE',
                          boxShadow: "0px 1px 2px 1px #2E4AAE",
                        },
                    }}
                    >  
                        <Typography className="Semi Bold 13" color="#FFFFFF">Reserve a Desk</Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}




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
  
  const CustomButtonCell = ({ status, id, currentRow }: { status: number, id: number, currentRow: number }) => {
    return (   
      <>{ 
        currentRow === id && 
        <Box>
        {
          status === 1 ? <TertiaryButton title='Edit' icon={<Edit03Icon color={theme.customTheme.Color.grey[3]}/>}/>
                      : <DeleteButton title="Delete" height={32} icon={<DeleteIcon/>}/>
        }
        </Box>      
      }</>
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
  


const Users: React.FC = () => {
    const columnLenth = 6;
    const initialPage = 0;
    const initialRowsPerPage = 10;
    const rowsPerPageOptions = [10, 15, 20];
  
    const [page, setPage] = React.useState<number>(initialPage);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(initialRowsPerPage);
    const [currentRow, setCurrentRow] = React.useState(-1);

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
          renderCell: (params) => <CustomButtonCell currentRow={currentRow}  {...params.row} />,
        },
    ];

    return (
        <Sidebar>
            <Box 
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            paddingTop="32px"
            width="100%"
            height="100vh"
            maxHeight="100vh"
            >
                <Header/>
                <CustomDataGrid 
                    rows={datagridrows} 
                    columns={columns}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    currentRow={currentRow}
                    rowsPerPageOptions = {rowsPerPageOptions}
                    // pageSize={}
                    
                    setPage={setPage}
                    setRowsPerPage={setRowsPerPage}
                    setCurrentRow={setCurrentRow}
                
                />
            </Box>
        </Sidebar>
    );
}

export default Users;
