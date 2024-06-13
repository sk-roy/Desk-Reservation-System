import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Typography } from "antd";
import React from "react";
import { CustomStyles } from "../../theme";
import DrawerCloseButton from "../../components/buttons/DrawerCloseButton";
import { Option } from "antd/es/mentions";
import UpDownArrowIcon from "../../components/icons/UpDownArrowIcon";

const { Text } = Typography;

interface NewLocationProps {
    onClose: () => void;
    open: boolean;
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
            <Form layout="vertical" hideRequiredMark>
                <Row gutter={24}>
                    <Col span={17}>
                    <Form.Item
                        name="locationName"
                        label={<label className="drawer-label">Location Name</label>}
                        rules={[{ required: true, message: 'Location Name' }]}
                    >
                        <Input style={{height: '38px'}} placeholder="Type here"/>
                    </Form.Item>
                    </Col>
                    <Col span={7}>
                    <Form.Item
                        name="shortName"
                        label={<label className="drawer-label">Short Name</label>}
                        rules={[{ required: true, message: 'Short Name' }]}
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
                        rules={[{ required: true, message: 'Address' }]}
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
                        rules={[{ required: true, message: 'Time Zone' }]}
                    >
                        <Select style={{height: '38px'}} placeholder="Select Time Zone"/>
                    </Form.Item>
                    </Col>
                </Row>
                </Form>
        </Drawer>
    );
}