import { DataGrid, GridFooterContainer, GridRowParams } from '@mui/x-data-grid';
import { Box, Stack } from '@mui/material';
import CustomFooter from './CustomFooter';
import IconUnsorted from "../../assets/icons/chevron-selector-vertical.svg"
import React from 'react';
import { CustomDateGridProps } from '../interface';


const CustomDataGrid: React.FC<CustomDateGridProps> = ({
  rows,
  columns,
  page = 0,
  rowsPerPage = 10,
  currentRow,
  rowsPerPageOptions = [10, 25, 50],
  pageSize,
  checkboxSelection = false,
  setPage,
  setRowsPerPage,
  setCurrentRow,
  rowClick
}) => {
  const initialPage = 0;
  const initialRowsPerPage = 10;


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
        // Padding: '0px !important'
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
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
     if (rowClick) rowClick(params.row);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage - 1);
  };

  const handlePageSizeChange = (newPageSize: number) => {
      setPage(initialPage);
      setRowsPerPage(newPageSize);
      console.log(newPageSize)
  };

  const Footer = () => {
    return (
        <GridFooterContainer>
            <CustomFooter
                totalRows={rows.length}
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

const handleRowHover = (event: React.MouseEvent<HTMLElement>) => {
  const id = event.currentTarget.parentElement!.dataset.id!;
  setCurrentRow(parseInt(id, 10));
};

const handleRowExit = () => {
  setCurrentRow(-1);
};


  return (
    <Box sx={{ height: 'calc(100vh - 174px)', width: '100%' }}>
      <DataGrid
        sx={datagridSx}
        rows={rows}
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
        checkboxSelection = {checkboxSelection}
        slotProps={{
          cell: {
            onMouseEnter: handleRowHover,
            onMouseLeave: handleRowExit,
          },
        }}
      />
    </Box>
  );
}

export default CustomDataGrid;