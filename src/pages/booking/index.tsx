import React from "react";
import Layout from "../../layout";
import { Box, Button, Stack } from "@mui/material";
import { DateRange } from "@mui/icons-material";
import EnhancedTable from "./EnhancedTable";


const Booking = () => {
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
                <h1>Bookings</h1>
                <h3>35 bookings this month</h3>
            </Stack>

            <Stack
            direction='row'
            alignItems='flex-start'
            justifyContent='space-between'
            spacing={2}
            padding={2}>
                <DateRange>22</DateRange>
                <DateRange>22</DateRange>
                <Button>Book</Button>
            </Stack>
            
            <EnhancedTable/>
        </Stack>
    </Layout>;
}

export default Booking;