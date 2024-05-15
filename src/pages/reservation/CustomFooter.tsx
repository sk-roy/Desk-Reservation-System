import React from 'react';
import { Box, MenuItem, Pagination, PaginationItem, Select, SelectChangeEvent, SvgIcon, Typography, useTheme } from '@mui/material';
import theme from '../../theme';
import ArrowBack from "../../assets/icons/ArrowBackIcon.svg";
import ArrowForward from "../../assets/icons/ArrowForwardIcon.svg";

interface Props {
    totalRows: number;
    page: number;
    rowsPerPageOptions: number[];
    pageSize: number;
    onPageChangeCallback?: (event: React.ChangeEvent<unknown>, newPage: number) => void;
    onPageSizeChangeCallback: (pageSize: number) => void;
}


const CustomFooter = ({ totalRows, page, rowsPerPageOptions, pageSize, onPageChangeCallback, onPageSizeChangeCallback}: Props) => {

    interface ShowPerPageComponentProps {
        options: number[];
        selectedValue: number;
        onChange: (pageSize: number) => void;
    }

    const ShowPerPageComponent: React.FC<ShowPerPageComponentProps> = ({ options, selectedValue, onChange}) => {
        const handleSelectChange = (e: SelectChangeEvent<string>, child: React.ReactNode) => {
            const selectedPageSize = parseInt(e.target.value, 10);
            console.log('selectedPageSize changes value')
            onChange(selectedPageSize);
        };

        return (
            <Box 
            display="flex" 
            alignItems="center"
            height="24px"
            gap="8px">
                <Typography className='Semi Bold 13' color={theme.palette.grey[300]}>Showing</Typography>
                <Select
                    sx={{
                        height: "24px",
                        borderRadius: "6px",
                        border: "1px solid var(--Offwhite-Offwhite-4, #C7D3E1)",
                        boxShadow: "0px 1px 4px 0px #4C577314",
                    }}      
                    value={String(selectedValue)}
                    onChange={handleSelectChange}
                >
                    {options.map((option) => (
                        <MenuItem key={option} value={option}>
                        <Typography className='Semi Bold 13' color={theme.palette.grey[300]} >{option}</Typography>
                        </MenuItem>
                    ))}
                </Select>
                <Typography className='Semi Bold 13' color={theme.palette.grey[300]}>per page</Typography>
            </Box>
        );
    };

    const CustomPagination = () => {
        return (
            <Pagination
                count={Math.ceil(totalRows / pageSize)}
                shape="rounded"
                size="small"
                page={page + 1}
                onChange={onPageChangeCallback}
                
                renderItem={(item) => (
                    <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                    />
                )}
            />
        );
    };

    const ArrowBackIcon = () => {
        return (
            <img src={ArrowBack} alt='ArrowBackIcon'/>
        );
    };

    const ArrowForwardIcon = () => {
        return (
            <img src={ArrowForward} alt='ArrowForwardIcon'/>
        );
    };

    return (
        <Box
        height="58px"
        width="100%"
        border= "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)"
        py="15px"
        px="32px"
        gap="8px"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        >
            <ShowPerPageComponent 
            options={rowsPerPageOptions} 
            selectedValue={pageSize} 
            onChange={onPageSizeChangeCallback} 
            />
            
            <CustomPagination />
        </Box>
    );
};

export default CustomFooter;