import React, { useState } from 'react';
// import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import the default styles
import 'react-date-range/dist/theme/default.css'; // Import the default theme

const MyDateRangePicker: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleSelect = (ranges: any) => {
    setSelectedRange(ranges.selection);
  };

  return (
    <div>
      {/* <DateRangePicker
        ranges={[selectedRange]}
        onChange={handleSelect}
      />
      <p>
        Selected range:
        {` ${selectedRange.startDate.toDateString()} - ${selectedRange.endDate.toDateString()}`}
      </p> */}
    </div>
  );
};

export default MyDateRangePicker;
