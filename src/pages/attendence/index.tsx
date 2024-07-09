import React from "react";
import { Avatar, Box, MenuItem, Select, Typography } from "@mui/material";
import CustomDataGrid from "../../components/CustomDataGrid";
import Sidebar from "../../components/sidebar";
import DateRangePicker from "./DateRangePicker";
import theme from "../../theme";
import { GridColDef } from "@mui/x-data-grid";
import { DataGridAttendanceRows } from "../../assets/data";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import AddIcon from '@mui/icons-material/Add';



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
                    Attendance
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
                        <MenuItem value={1}>Upcoming</MenuItem>
                        <MenuItem value={2}>Completed</MenuItem>
                    </Select>
                </Box>

                  <PrimaryButton title="Import" icon={<AddIcon htmlColor={theme.customTheme.Color.Primary.White}/>} /> 
            </Box>
        </Box>
    );
}


const AddCustomDatagrid = () => {
  const columnLenth = 5;
  const initialPage = 0;
  const initialRowsPerPage = 10;
  const rowsPerPageOptions = [10, 15, 20];

  const [page, setPage] = React.useState<number>(initialPage);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(initialRowsPerPage);
  const [currentRow, setCurrentRow] = React.useState(-1);


  const columns: GridColDef[] = [
      { 
        field: 'name', headerName: 'Name', flex: (1/columnLenth), sortable: true,
        disableColumnMenu: true,
        renderCell: (params) => <Box display="flex" gap='10px' alignItems='center'>
          <Avatar style={{height: '32px', width: '32px'}}/>
          <Typography className='Semi Bold 14' color={theme.customTheme.Color.Primary.Dark}>{params.value}</Typography>
        </Box>
      }, {
        field: 'reservationCount', headerName: 'Reservation Count', flex: (1/columnLenth), sortable: true,
        disableColumnMenu: true,
        renderCell: (params) => <Typography className='Semi Bold 13' color={theme.customTheme.Color.grey[4]}>{params.value}</Typography>,
      }, { 
        field: 'reservationUtilized', headerName: 'Reservation Utilized', flex: (1/columnLenth),
        disableColumnMenu: true,
        renderCell: (params) => <Typography className='Semi Bold 13' color={theme.customTheme.Color.grey[4]}>{params.value}</Typography>,
      },{ 
        field: 'percentage', headerName: 'Percentage', flex: (1/columnLenth), sortable: true,
        disableColumnMenu: true,
        renderCell: (params) => <Box
        sx={{
          padding: '2px 8px 2px 8px',
          borderRadius: '8px',
          border: '1px solid var(--Greyscale-Grey-1, #99A5B0)',
          backgroundColor: theme.customTheme.Color.OffWhite[3]
        }}>
          <Typography className='Semi Bold 13' color={theme.customTheme.Color.grey[4]}>{params.value}{'%'}</Typography>
        </Box>
      }
  ];

  return (
    <CustomDataGrid 
      rows={DataGridAttendanceRows} 
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
  );
}
 

const Attendence: React.FC = () => {

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
                <AddCustomDatagrid />
            </Box>
        </Sidebar>
    );
}

export default Attendence;
