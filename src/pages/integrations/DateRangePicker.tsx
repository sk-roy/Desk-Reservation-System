import React, { useState, ChangeEvent, MouseEvent } from "react";
import {
  TextField,
  Popover,
  InputAdornment,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import { format, parse, isValid, addDays } from "date-fns";
import { DateRange, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import CalenderIcon from "../../components/icons/CalenderIcon";
import UpDownArrowIcon from "../../components/icons/UpDownArrowIcon";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import RefreshIcon from "../../components/icons/Refresh";
import theme from "../../theme";

const styles = {
  calendarWrapper: {
    padding: "16px",
  },
};

interface DateRangeSelection {
  startDate: Date | undefined;
  endDate: Date | undefined;
  key: string;
}

const DateRangePicker: React.FC = () => {
  const dateFormat = "dd-MM-yyyy";
  const today = new Date();
  const next5Days = addDays(today, 5);

  const [displayCalendar, setDisplayCalendar] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [fromDate, setFromDate] = useState<Date | undefined>(today);
  const [toDate, setToDate] = useState<Date | undefined>(next5Days);

  const onAdornmentClick = (e: MouseEvent<HTMLElement>) => {
    setDisplayCalendar(true);
    setAnchorEl(e.currentTarget);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const { fromDate, toDate } = processInputValue(inputValue);

    setInputValue(inputValue);
    setFromDate(fromDate);
    setToDate(toDate);
  };

  const onPopoverClose = () => {
    setDisplayCalendar(false);
    setAnchorEl(null);
  };

  const onSelectDateRanges = (ranges: RangeKeyDict) => {
    const selection = ranges.selection as DateRangeSelection;
    let { startDate, endDate } = selection;

    startDate = isValid(startDate) ? startDate : undefined;
    endDate = isValid(endDate) ? endDate : undefined;

    let inputValue = "";
    if (startDate) inputValue += format(startDate, dateFormat);
    if (endDate) inputValue += " - " + format(endDate, dateFormat);

    setFromDate(startDate);
    setToDate(endDate);
    setInputValue(inputValue);
  };

  const processInputValue = (value: string): { fromDate: Date | undefined; toDate: Date | undefined } => {
    let [fromDate, toDate] = value.split("-").map((elm) => elm.trim());

    const parsedFromDate = parse(fromDate, dateFormat, new Date());
    const parsedToDate = parse(toDate, dateFormat, new Date());

    return {
      fromDate: isValid(parsedFromDate) ? parsedFromDate : undefined,
      toDate: isValid(parsedToDate) ? parsedToDate : undefined,
    };
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        onClick={onAdornmentClick}
        sx={{
          cursor: "pointer",
          height: "38px",
          width: "300px",
          borderRadius: "8px",
          border: `1px solid var(--Offwhite-Offwhite-4, ${theme.customTheme.Color.OffWhite[4]})`,
          padding: "9px 14px 9px 14px",
          gap: "10px",
          backgroundColor: theme.customTheme.Color.Primary.White,
        }}
        >
        <InputAdornment position="start">
          <CalenderIcon />
        </InputAdornment>
        <input
          style={{
            border: "none",
            outline: "none",
            flex: 1,
            color: theme.customTheme.Color.grey[3]
          }}
          name="Date Range Picker"
          value={inputValue}
          placeholder="Select Date Range"
          onChange={onInputChange}
        />
        <InputAdornment position="end">
          <IconButton>
            <UpDownArrowIcon />
          </IconButton>
        </InputAdornment>
      </Box>

      <Popover
        open={displayCalendar}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={onPopoverClose}
        sx={{
          '.MuiPaper-root': {
            boxShadow: theme.customTheme.Shadows.Elevation3,
            borderRadius: '8px',
            backgroundColor: theme.customTheme.Color.Primary.White,
            padding: '20px',
            gap: "40px",
          },
        }}
      >
        <div>
          <DateRange
            ranges={[
              {
                startDate: fromDate,
                endDate: toDate,
                key: "selection",
              },
            ]}
            months={2}
            direction="horizontal"
            onChange={onSelectDateRanges}
            showMonthAndYearPickers={true}
            moveRangeOnFirstSelection={false}
            showDateDisplay={false}
            scroll={{ enabled: false }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          <PrimaryButton title="Apply Filter" onClick={() => {  setDisplayCalendar(false); }}/>
          <SecondaryButton title="Reset All" icon={<RefreshIcon />} />
        </div>
      </Popover>
    </>
  );
};

export default DateRangePicker;
