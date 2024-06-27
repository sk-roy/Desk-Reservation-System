import { ReactNode } from "react";
import { CustomStyles } from "../../theme"
import { Button, Typography } from "antd";

const { Text } = Typography;

interface Props {
    children: string;
    icon: ReactNode;
    height: number;
}

const TertiaryButton = ({ children, icon, height }: Props) => {
    return (
        <Button
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: `${height}.px`,
            borderRadius: "6px",
            padding: "7px 12px 7px 10px",
            gap: "6px",
            backgroundColor: CustomStyles.Color.Primary.White,
            border: `1px solid ${CustomStyles.Color.OffWhite[3]}`,
            boxShadow: CustomStyles.Shadows.Elevation1,
        }}> 
            {icon}
            <Text
            style={{
                fontSize: "12px",
                fontWeight: 600,
                lineHeight: "18px",
                color: CustomStyles.Color.grey[3],
            }}> 
                {children} 
            </Text>
        </Button>
    );
}

export default TertiaryButton;