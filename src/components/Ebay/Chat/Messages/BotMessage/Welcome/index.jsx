import { useState } from "react";
import "./style.css";

import { DatePicker } from "antd";
const Welcome = ({ message, addNewMessage }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
  const handleDateChange = (date) => {
    setSelectedDate(date);
    addNewMessage(date.format("DD-MM-YYYY"));
  };
  return (
    <div>
      <p>{message}</p>
      <DatePicker
        className="dt-picker"
        onChange={handleDateChange}
        value={selectedDate}
        format={dateFormatList}
      />
    </div>
  );
};

export default Welcome;
