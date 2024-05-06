import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DonutSmall } from '@mui/icons-material';

export default function DateRangeFilter() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['SingleInputDateRangeField']}>
        <DateRangePicker
          slots={{ field: SingleInputDateRangeField}}
          name="allowedRange"
          sx={{
            maxHeight: "30px",
            lineHeight: "14px",
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
