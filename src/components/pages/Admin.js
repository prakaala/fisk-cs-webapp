import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUs from "date-fns/locale/en-US";

const locales = {
  "en-US": enUs,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function Admin() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);
  const containerStyles = {
    width: "1000px",
    height: "680px",
    margin: "0 auto",
    padding: "20px",
  };
  function handleAddEvent() {
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);

      if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
        alert("CLASH");
        break;
      }
    }
    setAllEvents([...allEvents, newEvent]);
    console.log(newEvent);
  }

  const [loggedin, setLoggedin] = useState(false);
  return loggedin ? (
    <div>
      <h1>Hello, this is an admin page. You are the admin of the page.</h1>
      <div>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px" }}
        />
        <h2>Add New Event</h2>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
    </div>
  ) : (
    <div className="login">
      

      <div className="login-container">
        <div className="brand-logo"></div>
        <div className="brand-title">Admin</div>
        <div className="inputs">
          <label className="login-label">EMAIL</label>
          <input className="login-input" type="email" placeholder="example@test.com" />
          <label className="login-label">PASSWORD</label>
          <input className="login-input" type="password" placeholder="Min 6 charaters long" />
          <button className="login-btn" type="submit">LOGIN</button>
        </div>
      </div>
      </div>
  );
}
