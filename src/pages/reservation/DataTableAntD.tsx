import React, { useState } from 'react';
import { Button, ConfigProvider, Table, Typography } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import {  DataTableRows } from '../../assets/data';
import CustomFooterAntD from './CustomFooterAntD';
import { DeleteOutlined } from '@ant-design/icons';

const { Text } = Typography;


type TableRowSelection<T> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  reservedOn: string;
  desk: string;
  status: number;
  madeReservedOn: string;
  button: number;
}


const StatusCell = (status: number) => {
  return (    
    <div>
        {status === 1 ? <Text style={{          
          fontSize: '12px',
          fontWeight: 600,
          lineHeight: '18px',
          textAlign: 'left',
          color: '#3E61DE',
          backgroundColor: '#3E61DE26',
          padding: '3px 8px 3px 8px',  
          borderRadius: '6px',
          height: '24px',
        }}>Upcoming</Text> 
        : <Text style={{          
          fontSize: '12px',
          fontWeight: 600,
          lineHeight: '18px',
          textAlign: 'left',
          color: '#8092A3',
          backgroundColor: '#8092A326',
          padding: '3px 8px 3px 8px',  
          borderRadius: '6px',
          height: '24px',
        }}>Completed</Text>}
    </div>
  );
}

const CustomButtonCell = (status: number) => {
  return (    
    <div>
    {status !== 1 ? (
      <Button>Cancel</Button>
    ) :
     (
      <Button
      style={{
        color: '#ff7875',
        paddingBottom: "7px",
        fontSize: '15px',
        fontWeight: 600,
        backgroundColor: "#EEF3FA",
        borderColor: "transparent"
      }}
      icon={<DeleteOutlined />}
      >
        Delete
      </Button>
    )}
  </div>
  );
};


const DeskCell = (text: any, record: DataType) => {
  return (    
    <div>
        {record.status === 1 ? <Text style={{   
          fontSize: '13px',
          fontWeight: 600,
          lineHeight: '20px',
          color: '#2E4AAE',
        }}>{record.desk}</Text> 
        : <Text style={{   
          fontSize: '13px',
          fontWeight: 600,
          lineHeight: '20px',
          color: '#6C859B',
        }}>{record.desk}</Text>}
    </div>  
  );
}

const ReservedOnCell = (text: any, record: DataType) => {
  return (  
    <div>
        {record.status === 1 ? <Text style={{   
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: '20px',
          color: '#212B36',
        }}>{record.reservedOn}</Text> 
        : <Text style={{   
          fontSize: '13px',
          fontWeight: 600,
          lineHeight: '20px',
          color: '#6C859B',
        }}>{record.reservedOn}</Text>}
    </div>  
  );
}

const MadeReservedOnCell = (text: any, record: DataType) => {
  return (  
    <div> <Text style={{   
          fontSize: '13px',
          fontWeight: 500,
          lineHeight: '20px',
          color: '#4D667C',
        }}>{record.madeReservedOn}</Text>
    </div>
  );
}

 
const columns: TableColumnsType<DataType> = [
  {
    title: 'Reserved On',
    dataIndex: 'reservedOn',
    render: ReservedOnCell,
  },
  {
    title: 'Desk',
    dataIndex: 'desk',
    render: DeskCell,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: StatusCell,
  },
  {
    title: 'Made Reserved On',
    dataIndex: 'madeReservedOn',
    render: MadeReservedOnCell,
  },
  {
    title: '',
    dataIndex: 'button',
    render: CustomButtonCell,
  },
];

const GetDataTableSlice = (current: number, pageSize: number) : DataType[] => {
  return DataTableRows.slice((current - 1) * pageSize, current * pageSize);
};


  
const tableStyle = {
  border: 0,
  '.ant-table-tbody': {
    backgroundcolor: "#E8EDF5",
  },
}; 


const DataTableAntD: React.FC = () => {
  const initialPage = 1;
  const initialRowsPerPage = 10;
  const rowsPerPageOptions = [10, 15, 20];
  const initialDataSource = GetDataTableSlice(initialPage, initialRowsPerPage);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [page, setPage] = React.useState<number>(initialPage);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(initialRowsPerPage);
  const [dataSource, setDataSource] = useState(initialDataSource);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  
const handlePageChange = (page: number, pageSize: number) => {
  setPage(page);
  setDataSource(GetDataTableSlice(page, pageSize));
};

const handlePageSizeChange = (newPageSize: number) => {
    setPage(initialPage);
    setRowsPerPage(newPageSize);
    setDataSource(GetDataTableSlice(page, newPageSize));
};

const Footer = () => {
  return (
    <CustomFooterAntD
      totalRows={DataTableRows.length}
      page={page - 1}
      rowsPerPageOptions={rowsPerPageOptions}
      pageSize={rowsPerPage}
      onPageSizeChangeCallback={handlePageSizeChange}
      onPageChangeCallback={handlePageChange}
    />
  );
};



  return (
    // <ThemeProvider theme={theme}>
    <ConfigProvider
    theme={{
      token: {
        // Seed Token
        borderRadius: 2,

        // Alias Token
        // colorBgContainer: '#f6ffed',

      },
      components: {
        Table: {
          
          headerBg: "#ffffff",
          footerBg: "#ffffff",
          rowHoverBg: "#EEF3FA",
          rowSelectedBg: ""
          // ant-table-tbody {
          //   background-color: #fafafa;
          // }
        
        }
      }
    }}
  >
  <Table 
  style={tableStyle}
  rowSelection={rowSelection} 
  columns={columns} 
  dataSource={dataSource} 
  // scroll={{y: 300}}
  pagination={false}
  footer={Footer}
  rowClassName='highlight-row'
  scroll={{ y: 450}}
  // style={{ height: '100%', maxHeight: '100vw', backgroundColor: "#EEF3FA"}}

  />
      
  </ConfigProvider>
    );
};

export default DataTableAntD;