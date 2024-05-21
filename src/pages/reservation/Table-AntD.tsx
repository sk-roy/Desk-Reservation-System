import React, { useState } from 'react';
import { Pagination, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { DataGridRows, DataTableRows } from '../../assets/data';

type TableRowSelection<T> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  reservedOn: string;
  desk: string;
  status: number;
  madeReservedOn: string;
  button: number;
}
 
const columns: TableColumnsType<DataType> = [
  {
    title: 'Reserved On',
    dataIndex: 'reservedOn',
  },
  {
    title: 'Desk',
    dataIndex: 'desk',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Made Reserved On',
    dataIndex: 'madeReservedOn',
  },
  {
    title: '',
    dataIndex: 'button',
  },
];


const CustomFooter = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
            Showing{' '}
            <select>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>{' '}
            items per page
            </div>
            <div>
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </div>
    );
}


const DataTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return <Table 
  rowSelection={rowSelection} 
  columns={columns} 
  dataSource={DataTableRows} 
  scroll={{y: 300}}
  pagination={false}
  footer={CustomFooter}

  />;
};

export default DataTable;