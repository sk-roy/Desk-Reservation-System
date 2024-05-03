// src/components/DateRangeFilter.tsx

import React, { useState } from 'react';
import { TextField } from '@mui/material';

interface DateRangeFilterProps {
    onFilterChange: (startDate: string, endDate: string) => void;
}

const DateRangeFilter: React.FC<DateRangeFilterProps> = ({ onFilterChange }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleFilterChange = () => {
        // Call the parent component's filter function
        onFilterChange(startDate, endDate);
    };

    return (
        <div>
            <TextField
                label="From"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <TextField
                label="To"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            {/* <button onClick={handleFilterChange}>Apply Filter</button> */}
        </div>
    );
};

export default DateRangeFilter;
