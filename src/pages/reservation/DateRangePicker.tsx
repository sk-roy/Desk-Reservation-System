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
  const dateFormat = "dd/MM/yyyy";
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
    <div>
      <Box
        display="flex"
        alignItems="center"
        border="1px solid var(--Offwhite-Offwhite-4, #C7D3E1)"
        borderRadius="8px"
        padding="9px 14px"
        onClick={onAdornmentClick}
        sx={{
          cursor: "pointer",
          height: "38px",
          borderRadius: "6px",
          border: "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)",
          boxShadow: "0px 1px 4px 0px #4C577314",
          fontSize: "13px",
          paddingLeft: "9px",
          paddingTop: "16px",
          paddingRight: "9px",
          paddingBottom: "18px",
          color: "#6C859B",
        }}
      >
        <InputAdornment position="start">
          <CalenderIcon />
        </InputAdornment>
        <input
          style={{
            height: "38px",
            border: "none",
            outline: "none",
            flex: 1,
          }}
          name="Date Range Picker"
          value={inputValue}
          placeholder={today.toString()}
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
          <PrimaryButton title="Apply Filter" />
          <SecondaryButton title="Reset All" icon={<RefreshIcon />} />
        </div>
      </Popover>
    </div>
  );
};

export default DateRangePicker;
