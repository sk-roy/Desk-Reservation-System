import { Button, Typography } from "@mui/material";
import { ReactNode } from "react";
import theme from "../../theme";
import { ButtonProps } from "../interface";


const TertiaryButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: props.height,
            borderRadius: "6px",
            padding: "7px 12px 7px 10px",
            gap: "6px",
            backgroundColor: theme.customTheme.Color.Primary.White,
            border: `1px solid ${theme.customTheme.Color.OffWhite[3]}`,
            boxShadow: theme.customTheme.Shadows.Elevation1,
            textTransform: "none",
        }}> 
            {props.icon}
            <Typography
            style={{
                fontSize: "12px",
                fontWeight: 600,
                lineHeight: "18px",
                color: theme.customTheme.Color.grey[3],
            }}> 
                {props.title} 
            </Typography>
        </Button>
    );
}

export default TertiaryButton;