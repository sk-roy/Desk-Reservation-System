import { ReactNode } from "react";
import { CustomStyles } from "../../theme"
import { Button, Typography } from "antd";

const { Text } = Typography;

interface Props {
    children: string
}

const PrimaryButton = ({ children }: Props) => {
    return (
        <Button
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "38px",
            borderRadius: "8px",
            padding: "9px 16px 9px 14px",
            gap: "6px",
            backgroundColor: CustomStyles.Color.Primary.Blue,
        }}> 
            <Text
            style={{
                fontSize: "13px",
                fontWeight: 600,
                lineHeight: "20px",
                color: CustomStyles.Color.Primary.White,
            }}> 
                {children} 
            </Text>
        </Button>
    );
}

export default PrimaryButton;