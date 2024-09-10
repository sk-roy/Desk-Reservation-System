import React from 'react';
import theme from '../../theme';
import ArrowBack from "../../assets/icons/ArrowBackIcon.svg";
import ArrowForward from "../../assets/icons/ArrowForwardIcon.svg";
import { Pagination, Select, Typography } from 'antd';
// import { Option } from 'antd/es/mentions';
const { Option } = Select;

interface Props {
    totalRows: number;
    page: number;
    rowsPerPageOptions: number[];
    pageSize: number;
    onPageChangeCallback?: (page: number, pageSize: number) => void;
    onPageSizeChangeCallback: (pageSize: number) => void;
}


const CustomFooterAntD = ({ totalRows, page, rowsPerPageOptions, pageSize, onPageChangeCallback, onPageSizeChangeCallback}: Props) => {

    interface ShowPerPageComponentProps {
        options: number[];
        selectedValue: number;
        onChange: (pageSize: number) => void;
    }

    const ShowPerPageComponent: React.FC<ShowPerPageComponentProps> = ({ options, selectedValue, onChange}) => {
        const handleChange = (selectedPageSize: number) => {
            console.log('selectedPageSize changes value')
            onChange(selectedPageSize);
          };

        return (
            <div 
            style={{
                display: "flex",
                alignItems: "center",
                height: "24px",
                gap: "8px",
            }}>
                <Typography className='Semi Bold 13' color={theme.palette.grey[300]}>Showing</Typography>
                <Select 
                style={{
                    height: "24px",
                    borderRadius: "6px",
                    border: "1px solid var(--Offwhite-Offwhite-4, #C7D3E1)",
                    boxShadow: "0px 1px 4px 0px #4C577314",
                }}                      
                defaultValue={selectedValue}
                onChange={handleChange} >
                    {options.map((value, index) => (
                        <Option key={index} value={value}>
                            {value}
                        </Option>
                    ))}
                </Select>
                <Typography className='Semi Bold 13' color={theme.palette.grey[300]}>per page</Typography>
            </div>
        );
    };

    const CustomPagination = () => {

        return (
            <Pagination
                pageSize={pageSize}
                // count={Math.ceil(totalRows / pageSize)}
                // shape="rounded"
                total = {totalRows}
                size="small"
                current={page + 1}
                onChange={onPageChangeCallback}
            />
        );
    };


    return (
        <div
        style= {{
            height: "58px",
            width: "100%",
            border:  "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)",
            paddingTop: "15px",
            paddingBottom: "15px",
            paddingLeft: "32px",
            paddingRight: "32px",
            gap: "8px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        }}
        >
            <ShowPerPageComponent 
            options={rowsPerPageOptions} 
            selectedValue={pageSize} 
            onChange={onPageSizeChangeCallback} 
            />
            
            <CustomPagination />
        </div>
    );
};

export default CustomFooterAntD;
