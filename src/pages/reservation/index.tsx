import React from "react";
import Layout from "../../layout";
import { Box, Button, FormControl, MenuItem, Select, Typography } from "@mui/material";

import { DataTable } from "./DataTable";
import Sidebar from "../../components/sidebar";
import DateRangePicker from "./DateRangePicker";



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
            <Box // Frame 45 - Booking
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
                    35 bookings this month
                </Typography>
            </Box>  
            
            <Box   // Booking action bar
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
                    {/* <DateRangeFilter />  */}
                    <DateRangePicker/>

                    <SelectDept department="Select Date Range"/>

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





const Booking = () => {

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
                <DataTable/>
            </Box>
        </Sidebar>
    );
}

export default Booking;
