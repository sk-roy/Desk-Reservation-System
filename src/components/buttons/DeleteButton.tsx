import { Button, Typography } from "@mui/material";
import DeleteIcon from "../icons/DeleteIcon";
import theme from "../../theme";
import { ButtonProps } from "../interface";

const DeleteButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "8px",
            height: props.height === null ? 38 : props.height,
            padding: "9px 16px 9px 14px",
            gap: "6px",
            border: `1px solid ${theme.customTheme.Color.OffWhite[3]}`,
            backgroundColor: theme.customTheme.Color.Primary.White,
            boxShadow: theme.customTheme.Shadows.Elevation1,
            textTransform: "none",
        }}>
            {props.icon}
            <Typography
            style={{
                fontSize: "13px",
                fontWeight: 600,
                lineHeight: "20px",
                color: theme.customTheme.Color.Alert.Red,
            }}> {props.title} </Typography>
        </Button>
    );
}

export default DeleteButton;