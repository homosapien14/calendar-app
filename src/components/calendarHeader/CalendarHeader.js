import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../schedule/schedule";
import { Button } from "react-bootstrap";

const CalendarHeader = ({ date, onNextMonth, onPrevMonth }) => {

  
  const displayDate = moment(date).format("MMMM YYYY");

  const handlePrevMonth = () => {
    const prevMonth = moment(date).subtract(1, "month").toDate();
    onPrevMonth(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = moment(date).add(1, "month").toDate();
    onNextMonth(nextMonth);
  };

  return (
    <div className="calendar-header">
      <Button onClick={handlePrevMonth}>Prev</Button>
      <h2>{displayDate}</h2>
      <Button onClick={handleNextMonth}>Next</Button>
    </div>
  );
};


export default CalendarHeader;
