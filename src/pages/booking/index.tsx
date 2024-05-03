import React, { useState } from "react";
import Layout from "../../layout";
import { Box, Button, IconButton, Stack, Toolbar, Tooltip, Typography } from "@mui/material";
import { DateRange } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import EnhancedTable from "./EnhancedTable";
import { DatePicker } from "@mui/x-date-pickers";
import DateRangeFilter from "./DateRangeFilter";


const Booking = () => {
    const [filteredData, setFilteredData] = useState([]); // Your filtered data state

    const handleFilterChange = (startDate: string, endDate: string) => {
        // Implement your data filtering logic here
        // Update the filteredData state accordingly
        // Example: filter data based on date range
        // const newData = originalData.filter(item =>
        //     item.date >= startDate && item.date <= endDate
        // );
        // setFilteredData(newData);
    };
    
    return <Layout>
        <Stack 
        direction='column'
        alignItems='flex-start'
        justifyContent='space-between'
        spacing={2}
        padding={2}>
            <Stack
            direction='column'
            alignItems='flex-start'
            justifyContent='space-between'
            spacing={2}
            padding={2}>                
                <Typography
                sx={{ flex: '1 1 100%' }}
                color="inherit"
                variant="h5"
                component="div"
                >
                    Bookings
                </Typography>
                
                <Typography
                sx={{ flex: '1 1 100%' }}
                color="inherit"
                variant="subtitle1"
                component="div"
                >
                    35 bookings this month
                </Typography>
            </Stack>

            

            <Stack
            direction='row'
            alignItems='flex-start'
            justifyContent='space-between'
            spacing={2}
            padding={2}>   
                <DateRangeFilter onFilterChange={handleFilterChange} />             
                {/* <DatePicker label={'"month" and "year"'} views={['month', 'year']} />
                <DateRange>22</DateRange>
                <DateRange>22</DateRange> */}
                <Button variant="contained">
                    Book
                </Button>
            </Stack>
            
            <EnhancedTable/>
        </Stack>
    </Layout>;
}

export default Booking;