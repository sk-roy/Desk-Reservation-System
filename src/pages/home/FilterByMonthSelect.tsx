import { MenuItem, Select } from "@mui/material";


export default function FilterByMonthSelect(){
    return (        
        <Select // Attendence 1.2
        style={{
          height: "24px",
          gap: "2px",
          paddingLeft: "3px",
          paddingTop: "4px",
          paddingRight: "3px",
          paddingBottom: "6px",  
          backgroundColor: "#E8EDF5",
          borderRadius: "6px",
          borderColor: "transparent", 
          color: "#6C859B",
          fontSize: "12px",
          fontWeight: 600,
          lineHeight: "18px",
        }}
        defaultValue={6}>                        
          <MenuItem value={1}>This Week</MenuItem>
          <MenuItem value={2}>This Month</MenuItem>
          <MenuItem value={3}>Next Three Months</MenuItem>
          <MenuItem value={4}>Last Week</MenuItem>
          <MenuItem value={5}>Last Month</MenuItem>
          <MenuItem value={6}>Last Three Months</MenuItem>
        </Select>
    );
}