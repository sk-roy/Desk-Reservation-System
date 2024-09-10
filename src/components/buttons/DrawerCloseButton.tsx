import { Button } from "antd";
import { CustomStyles } from "../../theme";
import { CloseOutlined } from "@ant-design/icons";
import React from "react";



interface Props {
    onClose: () => void;
}

const DrawerCloseButton: React.FC<Props> = ({onClose}) => {
    return (
        <Button
        onClick={onClose}
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "28px",
            width: "28px",
            backgroundColor: CustomStyles.Color.OffWhite[2],
            borderRadius: "20px",
            padding: "5px",
        }}>
            <CloseOutlined/>
        </Button>
    );
}

export default DrawerCloseButton;