import { ReactNode } from "react";
import { CustomStyles } from "../../theme"
import { Button, Typography } from "antd";

const { Text } = Typography;

interface Props {
    text: string;
    onClick: () => void;
}

const SecondaryButton = ({ text, onClick }: Props) => {
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
            backgroundColor: CustomStyles.Color.OffWhite[2],
        }}
        onClick={onClick}> 
            <Text
            style={{
                fontSize: "13px",
                fontWeight: 600,
                lineHeight: "20px",
                color: CustomStyles.Color.grey[4],
            }}> 
                {text} 
            </Text>
        </Button>
    );
}

export default SecondaryButton;