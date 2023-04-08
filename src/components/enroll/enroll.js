import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './enroll.css';

const Enroll = () => {
  let navigate = useNavigate();
  const [course, setCourse] = useState("");
  const [timePerDay, setTimePerDay] = useState("");

  const handleSubmit = async (e) => {
    console.log(course, timePerDay);
    
    console.log(e);
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:8081/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ course, timePerDay }),
    });
    const data = await res.json();
    console.log(data.tasks.tasksList);

    let path = `schedule`;
    
    navigate(path,{state:data.tasks});
  };

  return (
    <Form onSubmit={handleSubmit} className="form">
      <Form.Group className='course pb-2'>
        <Form.Label htmlFor="course">Course</Form.Label>
        <Form.Select
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="select-dropdown"
          required
        >
          <option value="">--Select a course--</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
          <option value="React Native">React Native</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className='timePerDay pb-2'>
        <Form.Label htmlFor="timePerDay" style={{color:"#000"}}>Time per day</Form.Label>
        <Form.Select
          id="timePerDay"
          value={timePerDay}
          onChange={(e) => setTimePerDay(e.target.value)}
          className="select-dropdown"
          required
        >
          <option value="">--Select time per day--</option>
          <option value="2">2 hours</option>
          <option value="3">3 hours</option>
          <option value="4">4 hours</option>
          <option value="6">6 hours</option>
        </Form.Select>
      </Form.Group>
      <Button type="submit" className='submit-button pt-2 mt-3'>Enroll</Button>
    </Form>
  );
};

export default Enroll;
