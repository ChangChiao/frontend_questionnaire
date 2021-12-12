import React, { forwardRef } from "react";
import Icon from "./Icon";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = forwardRef(({ value, onClick }, ref) => (
  <>
    <input onClick={onClick} ref={ref} value={value} readOnly />
    <Icon name="date" />
  </>
));
DateInput.displayName = "DateInput";

function datePicker(props) {
  return <DatePicker customInput={<DateInput />} {...props} />;
}

export default datePicker;
