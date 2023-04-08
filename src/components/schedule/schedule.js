import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CalendarHeader from "../calendarHeader/CalendarHeader";
import TaskCard from "../taskCard/TaskCard";
import "./schedule.css";
import { Container } from "react-bootstrap";

const Schedule = () => {
  let location = useLocation();
  const data = location.state;
  const [date, setDate] = useState(new Date());

  const onNextMonth = () => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  const onPrevMonth = () => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const filteredData = data.filter((task) => {
    const taskDate = new Date(task.date);
    return (
      taskDate.getMonth() === date.getMonth() &&
      taskDate.getFullYear() === date.getFullYear()
    );
  });


  const renderTaskCards = () => {
    return Object.keys(groupedData).map((key) => {
      const tasks = groupedData[key];
      return (
        <TaskCard
          key={key}
          date={new Date(key)}
          tasks={tasks}
        />
      );
    });
  };

  const groupTasksByDate = (tasks) => {
    return tasks.reduce((groups, task) => {
      const date = new Date(task.date).toLocaleDateString();
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(task);
      return groups;
    }, {});
  };
  const groupedData = groupTasksByDate(filteredData);


  return (
    <div>
      <CalendarHeader
        date={date}
        onNextMonth={onNextMonth}
        onPrevMonth={onPrevMonth}
      />
      
          <Container className="task-cards-container mt-3 mx-auto">
            {renderTaskCards()}
          </Container>
        
    </div>
  );
};

export default Schedule;
