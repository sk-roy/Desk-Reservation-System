import { Button, Col, DatePicker, Drawer, Form, Input, Radio, Row, Select, Typography } from "antd";
import React from "react";
import { CustomStyles } from "../../theme";
import DrawerCloseButton from "../../components/buttons/DrawerCloseButton";
import { Option } from "antd/es/mentions";
import UpDownArrowIcon from "../../components/icons/UpDownArrowIcon";
import FiInfoIcon from "../../components/icons/FiInfoIcon";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import CalenderImage from "../../components/images/CalenderImage";
import TertiaryButton from "../../components/buttons/TertiaryButton";
import PlusCircleIcon from "../../components/icons/PlusCircleIcon";
import DownloadCloudIcon from "../../components/icons/DownloadCloudIcon";
import { PlusCircleOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface NewLocationProps {
    onClose: () => void;
    open: boolean;
}

const InputForm = () => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
        <Form layout="vertical">
            <Row gutter={24}>
                <Col span={17}>
                <Form.Item
                    name="locationName"
                    label={<label className="drawer-label">Location Name</label>}
                    rules={[{ message: 'Location Name' }]}
                >
                    <Input style={{height: '38px'}} placeholder="Type here"/>
                </Form.Item>
                </Col>
                <Col span={7}>
                <Form.Item
                    name="shortName"
                    label={<label className="drawer-label">Short Name</label>}
                    rules={[{ message: 'Short Name' }]}
                >
                    <Input style={{height: '38px'}} placeholder="Type here"/>
                </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                <Form.Item
                    name="address"
                    label={<label className="drawer-label">Address</label>}
                    rules={[{ message: 'Address' }]}
                >
                    <Input style={{height: '38px'}} placeholder="Type here"/>
                </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form.Item
                        name="timeZone"
                        label={<label className="drawer-label">Time Zone</label>}
                        rules={[{ message: 'Time Zone' }]}
                    >
                        <Select style={{height: '38px'}} placeholder="Select Time Zone"/>
                    <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginTop: "4px",
                        gap: "4px",
                    }}>
                        <FiInfoIcon/>
                        <Text className="drawer-label"> Time zone will be auto detected from address </Text>
                    </div>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                <Form.Item
                    name="weekdays"
                    label={<label className="drawer-label">Weekdays</label>}
                    rules={[{ message: 'Weekdays' }]}
                >                        
                    <Radio.Group style={{ width: '100%', display: "flex", flexDirection: "row", gap: "6px"}}>
                        {weekdays.map((weekday) => (
                            <div key={weekday}>
                                <Radio.Button value={weekday}>{weekday}</Radio.Button>
                            </div>
                        ))}
                    </Radio.Group>
                </Form.Item>
                </Col>
            </Row>
        </Form>
    );
}

const AddHolidays = () => {
    return (
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "256px",
            borderRadius: "12px",
            padding: "32px 40px 32px 40px",
            gap: "20px",
            backgroundColor: CustomStyles.Color.OffWhite[2],
        }}>
            <CalenderImage/>
            <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "48px",
                gap: "4px",
            }}> 
                <Text
                style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: CustomStyles.Color.grey[4],
                }}>Add Holidays</Text>
                <Text
                style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: CustomStyles.Color.grey[3],
                }}>You can also add holidays later</Text>
            </div>
            <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                height: "32px",
                gap: "10px",
            }}>
                <TertiaryButton children="Add Manually" icon={<PlusCircleOutlined style={{color: CustomStyles.Color.grey[3]}} />} height={32}/> 
                <TertiaryButton children="Import from Excel" icon={<DownloadCloudIcon color={CustomStyles.Color.grey[3]}/>} height={32}/>
            </div>
        </div>
    );
}

export const NewLocationDrawer: React.FC<NewLocationProps> = (props) => {
    return (                    
        <Drawer
        title={<span style={{fontSize: "18px", fontWeight: 700, color: CustomStyles.Color.grey[4]}}>New Location</span>}
        onClose={props.onClose} 
        open={props.open}
        closable={false}  
        width={560}                      
        extra={ <DrawerCloseButton onClose={props.onClose} />}>
            <div 
            style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <div
                style={{
                    alignItems: "flex-start",
                    height: "758px",
                    padding: "20px 28px 20px 28px",
                    gap: "40px",
                }}>
                    <InputForm/>
                    <AddHolidays/>
                </div>
            </div>
            <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                height: "78px",
                padding: '20px 28px 20px 28px',
                gap: "10px",
                borderTop: `1px solid ${CustomStyles.Color.OffWhite[3]}`,
                boxShadow: CustomStyles.Shadows.Elevation2,
                backgroundColor: CustomStyles.Color.Primary.White,
            }}>
                 <SecondaryButton onClick={props.onClose} text="Cancel" />
                 <PrimaryButton>Create Location</PrimaryButton>
            </div>
        </Drawer>
    );
}