import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

export default function DateRangeFilter() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['SingleInputDateRangeField']}>
        <DateRangePicker
          slots={{
            field: (props) => (
              <SingleInputDateRangeField
                {...props}
                inputProps={{ style: { height: '38px', padding: 0, margin: 0,  } }}
              />
            ),
          }}
          name="allowedRange"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}