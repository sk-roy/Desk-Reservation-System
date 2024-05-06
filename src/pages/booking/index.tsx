import React, { useState } from "react";
import Layout from "../../layout";
import { Box, Button, FormControl, Grid, IconButton, MenuItem, OutlinedInput, Select, Stack, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
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

    return (
        <Layout>
            <Stack 
            direction='column'
            alignItems='flex-start'
            justifyContent='space-between'
            spacing={1}
            padding={4}>
                <Stack
                direction='column'
                alignItems='flex-start'
                justifyContent='space-between'
                spacing={0}
                padding={0}>                
                    <Typography
                    sx={{ 
                        flex: '1 1 100%',
                        fontWeight: 'bold',
                        fontSize: '24px' }}
                    color="inherit"
                    variant="h5"
                    component="div"
                    >
                        Bookings
                    </Typography>
                    
                    <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="#4D667C"
                    variant="subtitle1"
                    component="div"
                    >
                        35 bookings this month
                    </Typography>
                </Stack>


                <Grid 
                container 
                spacing={2}>
                    {/* First date input */}
                    <Grid item>
                        <DateRangeFilter/>
                    </Grid>

                    <Grid item xs>
                        <TextField 
                        type="text"
                        placeholder="This month"                         
                        InputProps={{
                            style: {
                            height: 38,
                            },
                        }} />
                    </Grid>

                    {/* Button */}
                    <Grid item>
                        <Button variant="contained" color="primary">
                        Book A Car
                        </Button>
                    </Grid>
                </Grid>

    {/* 
                <Stack
                direction='row'
                alignItems='flex-start'
                justifyContent='space-between'
                spacing={2}
                padding={2}>   
                    <DateRangeFilter onFilterChange={handleFilterChange} />             
                    <DatePicker label={'"month" and "year"'} views={['month', 'year']} />
                    <DateRange>22</DateRange>
                    <DateRange>22</DateRange>
                    <Button variant="contained">
                        Book a Car
                    </Button>
                </Stack> */}
                
                <EnhancedTable/>
            </Stack>
        </Layout>
    );
}

export default Booking;