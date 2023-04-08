import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "./taskCard.css";
import { Card, Col, ListGroup, Row } from "react-bootstrap";

const TaskCard = ({ tasks, date }) => {
  const [showAll, setShowAll] = useState(false);
  const currDate = new Date().toLocaleDateString();
  const taskDate = new Date(date).toLocaleDateString();  
  const checker = (currDate=== taskDate) ? true : false;
  const checker2 = (new Date(date) < new Date())?true:false;
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    
        
        <Card className="task-card mt-3 "  style={{ width: '18rem' }} >
          <Card.Header as="h5">{moment(date).format("ddd, MMM D")}</Card.Header>
          <ListGroup className="list-group-flush">
            
              {tasks.length > 0 ? (
                  tasks.slice(0, showAll ? tasks.length : 5).map((task) => (
                    
                    <ListGroup.Item>{(checker)?`⌛${task.title}`:((checker2)?`✅${task.title}`:`${task.title}`)}</ListGroup.Item>
                  ))
                
              ) : (
                <p>No tasks scheduled for this day.</p>
              )}
              {tasks.length > 5 && (
                <div className="" onClick={toggleShowAll}>
                  {showAll ? "⬆️ Show less...": "⬇️ Show more..."}
                </div>
              )}


          </ListGroup>
        </Card>
  
      
  );
};

TaskCard.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
    })
  ).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default TaskCard;
