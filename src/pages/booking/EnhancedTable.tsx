import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Button, Hidden, TableFooter } from '@mui/material';
import { Delete } from '@mui/icons-material';

interface Data {
  id: number;
  bookingPeriod: string;
  customerName: string;
  carType: string;
  licensePlateNo: string;
  emailSent: string;
  status: number;
}

function createData(
  id: number,
  licensePlateNo: string,
  bookingPeriod: string,
  carType: string,
  customerName: string,
  emailSent: string,
  status: number,
): Data {
  return {
    id,
    licensePlateNo,
    bookingPeriod,
    carType,
    customerName,
    emailSent,
    status,
  };
}

const rows = [
  createData(1, 'A23457', '2-5 March, 2024', 'Luxary', 'Chinmoy Saha', 'Yes', 1),
  createData(1, 'A23457', '2-5 March, 2024', 'Luxary', 'Chinmoy Saha', 'Yes', 1),
  createData(1, 'A23457', '2-5 March, 2024', 'Luxary', 'Chinmoy Saha', 'Yes', 0),
  createData(1, 'A23457', '2-5 March, 2024', 'Luxary', 'Chinmoy Saha', 'Yes', 0),
  createData(1, 'A23457', '2-5 March, 2024', 'Luxary', 'Chinmoy Saha', 'Yes', 1),
  createData(1, 'A23457', '2-5 March, 2024', 'Luxary', 'Chinmoy Saha', 'Yes', 1),
  createData(1, 'A23457', '2-5 March, 2024', 'Luxary', 'Chinmoy Saha', 'Yes', 0),
  createData(1, 'A23457', '2-5 March, 2024', 'Luxary', 'Chinmoy Saha', 'Yes', 0),
  createData(1, 'A23457', '2-5 March, 2024', 'Luxary', 'Chinmoy Saha', 'Yes', 1),
  createData(1, 'A23457', '2-5 March, 2024', 'Luxary', 'Chinmoy Saha', 'Yes', 1),
  createData(1, 'A23457', '2-5 March, 2024', 'Luxary', 'Chinmoy Saha', 'Yes', 0),
  createData(1, 'A23457', '2-5 March, 2024', 'Luxary', 'Chinmoy Saha', 'Yes', 0),
  createData(1, 'A23457', '2-5 March, 2024', 'Luxary', 'Chinmoy Saha', 'Yes', 1),
  createData(1, 'A23457', '2-5 March, 2024', 'Luxary', 'Chinmoy Saha', 'Yes', 1),
  createData(1, 'A23457', '2-5 March, 2024', 'Luxary', 'Chinmoy Saha', 'Yes', 0),
  createData(1, 'A23457', '2-5 March, 2024', 'Luxary', 'Chinmoy Saha', 'Yes', 0),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'licensePlateNo',
    numeric: false,
    disablePadding: true,
    label: 'Licence Plate No',
  },
  {
    id: 'bookingPeriod',
    numeric: false,
    disablePadding: false,
    label: 'Booking Period',
  },
  {
    id: 'carType',
    numeric: false,
    disablePadding: false,
    label: 'Car type',
  },
  {
    id: 'customerName',
    numeric: false,
    disablePadding: false,
    label: 'Customer Name',
  },
  {
    id: 'emailSent',
    numeric: false,
    disablePadding: false,
    label: 'E-mail Sent',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        {/* <TableCell>
            <Box>Status</Box>
        </TableCell> */}
        <TableCell>
            <Box>Action</Box>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="subtitle1"
          id="tableTitle"
          component="div"
        >
          Not Selected
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}


export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('bookingPeriod');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer sx={{ height: 450 }}>
          <Table
            sx={{ height: 'max-content' }}
            aria-labelledby="tableTitle"
            size='medium'
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer', 
                        bgcolor: '#F9FAFB',
                        borderRadius: '8px',
                        height: "64px" 
                    }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"          
                    >
                      <Box 
                      color= {row.status === 1 ? 'black' : '#6C859B'}   
                      fontWeight={row.status === 1 ? '600' : ''}
                      fontSize="14px"
                      >
                        {row.licensePlateNo}
                      </Box>
                    </TableCell>
                    <TableCell align="left">{row.bookingPeriod}</TableCell>
                    <TableCell align="left">
                        <Box sx={{
                            color: '#2E4AAE'
                        }}>
                        {row.carType}
                        </Box>
                    </TableCell>
                    <TableCell align="left">{row.customerName}</TableCell>
                    <TableCell align="left">{row.emailSent}</TableCell>
                    <TableCell align="left">
                        <Box sx={{      
                            // bgcolor: {row.status === 1 ? '#2E4AAE' : '#C7D3E1'},
                            borderRadius: '4px',
                            height: '22px',
                            width: '80px',
                            textAlign: 'center',
                            fontSize: 10,
                            paddingTop: .5,
                            paddingBottom: 0,
                        }}                               
                        color= {row.status === 1 ? 'white' : 'black'}
                        bgcolor= {row.status === 1 ? '#2E4AAE' : '#C7D3E1'}
                        >
                            {row.status === 1 ? 'UPCOMING' : 'ATTENDED'}
                        </Box>
                    </TableCell>
                    <TableCell align="left">
                      <Box>
                        {row.status === 1 ? (
                          <button 
                          style={{
                            borderRadius: "6px",
                            paddingLeft: "14px",
                            paddingTop: "7px",
                            paddingRight: "14px",
                            paddingBottom: "7px",
                            color: "#4D667C",
                            borderColor: "transparent",
                            fontSize: "12px",
                            fontWeight: "600",
                            backgroundColor: "#EEF3FA",
                          }}>
                            Cancel
                          </button>
                        ) : (
                          <Button
                          variant="outlined"
                          color="secondary"
                          style={{
                            color: 'red',
                            borderColor: 'transparent',
                            fontSize: '10px',
                            fontWeight: 600,
                            backgroundColor: "#EEF3FA",
                          }}
                          startIcon={<DeleteIcon />}
                          >
                            Delete
                          </Button>
                        )}
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={10}>
              <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                count={rows.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Paper>
    </Box>
  );
}