import { CustomStyles } from "../../theme"
import DeleteIcon from "../icons/DeleteIcon";
import { Button, Typography } from "antd";

const { Text } = Typography;

const DeleteButton = () => {
    return (
        <Button
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "8px",
            padding: "9px 16px 9px 14px",
            gap: "6px",
            border: `1px solid ${CustomStyles.Color.OffWhite[3]}`,
            backgroundColor: CustomStyles.Color.Primary.White,
            boxShadow: CustomStyles.Shadows.Elevation1,
        }}>
            <DeleteIcon />
            <Text
            style={{
                fontSize: "13px",
                fontWeight: 600,
                lineHeight: "20px",
                color: CustomStyles.Color.Alert.Red,
            }}> Delete </Text>
        </Button>
    );
}

export default DeleteButton;