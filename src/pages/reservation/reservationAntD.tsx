import React from "react";
import { Button,  DatePicker, DatePickerProps, Select, Typography, theme } from "antd";
import { Dayjs } from "dayjs";
import DataTableAntD from "./DataTableAntD";
import { CalendarOutlined } from "@ant-design/icons";
import CustomLayout from "../../layout";

const { Text } = Typography;



const DateRangePicker: React.FC = () => {
    const { token } = theme.useToken();
    const style: React.CSSProperties = {
      border: '1px solid var(--Offwhite-Offwhite-4, #C7D3E1)',
      borderRadius: '8px',
      height: '38px',
      width: '300px',
    };
    const cellRender: DatePickerProps<Dayjs>['cellRender'] = (current, info) => {
      if (info.type !== 'date') {
        return info.originNode;
      }
      if (typeof current === 'number' || typeof current === 'string') {
        return <div className="ant-picker-cell-inner">{current}</div>;
      }
      return (
        <div className="ant-picker-cell-inner" style={current.date() === 1 ? style : {}}>
          {current.date()}
        </div>
      );
    };

    const placeholder = (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CalendarOutlined style={{ marginRight: '8px' }} />
          <span style={{ color: 'rgba(0, 0, 0, 0.45)', marginRight: '8px' }}>Select Date Range</span>
        </div>
      );
      
    return (
        <DatePicker.RangePicker cellRender={cellRender}   />
        // suffixIcon={placeholder} 
    );
  };



const Header = () => {
    return (        
        <> 
            <div // Frame 45 - Booking
            style={{                
                display: "flex",
                flexDirection: "column",
                height: "72px",
                width: "100%",
                paddingBottom: "8px",
                gap: "6px",
             }}
            >          
                <Typography
                style={{ 
                    fontWeight: '700',
                    fontSize: '24px',
                    color: "#212B36",
                }}>
                    Reservation
                </Typography>
                
                <Typography
                style={{ 
                    fontWeight: '500',
                    fontSize: '16px',
                    color: "#4D667C",
                }}>
                    35 Reservation this month
                </Typography>
            </div>  
            
            <div   // Booking action bar
            style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "62px",
                gap: "32px",
                justifyContent: 'space-between',
            }}>
                <div   // select date to filter - this month
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "992px",
                    gap: "10px",
                    alignItems: "space-between",
                }}
                >   
                    <div>
                        <DateRangePicker/>
                    </div>
                    <Select
                        defaultValue="mext3Months"
                        options={[
                            { value: 'thisWeek', label: 'This Week' },
                            { value: 'thisMonth', label: 'This Month' },
                            { value: 'mext3Months', label: 'Next 3 Months' },
                            { value: 'lastWeek', label: 'Last Week'},
                            { value: 'lastMonth', label: 'Last Month'},
                            { value: 'last3Months', label: 'Last 3 Months'},
                        ]}
                    />
                    <Select
                        placeholder= "Status"
                        // suffixIcon={<SelectIcon />}
                        options={[
                            { value: 'upcoming', label: 'Upcoming' },
                            { value: 'attended', label: 'Attended' },
                        ]}
                    />
                </div>
                <div>                                
                    <Button
                    style={{
                        borderRadius: "8px",
                        backgroundColor: "#2E4AAE",
                    }}>  
                        <Text 
                        className="Semi Bold 13"
                        style={{ color: "#FFFFFF", }}>Reserve a Desk</Text>
                    </Button>
                </div>
            </div>
        </>
    );
}





const Booking = () => {

    return (
        <CustomLayout>
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingTop: "32px",
                width: "100%",
                height: "100vh",
                maxHeight: "100vh",
            }}>
                
                <div    // Header
                style = {{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: 'space-between',
                    paddingLeft: "32px",
                    paddingRight: "32px",
                    height: "146px",
                    maxHeight: "146px",
                    gap: '12px',
                }}>
                    <Header/>
                </div>
                <div
                style={{
                    paddingLeft: "32px",
                    height: 'calc(100%)',
                    maxHeight: 'calc(100%)',
                }}>
                    <DataTableAntD/>
                </div>
            </div>
        </CustomLayout>
    );
}

export default Booking;
