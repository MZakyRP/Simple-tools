import PropTypes from "prop-types";

function getFromLocalStorage() {
  if (localStorage) {
    return localStorage.getItem("events-data");
  } else {
    alert(
      "Your browser does not support Local Storage, changes would not be kept"
    );
    return null;
  }
}

let eventsdata = JSON.parse(getFromLocalStorage()) ?? [
  {
    id: `event-${+new Date()}`,
    name: "Your first event",
    eventDate: new Date(
      new Date().setMinutes(new Date().getMinutes() + 1)
    ).getTime(),
    isComplete: false,
  },
];

function putToLocalStorage() {
  if (localStorage)
    localStorage.setItem("events-data", JSON.stringify(eventsdata));
  return;
}

function getEvents() {
  return eventsdata;
}

function getEventById(id) {
  const filteredEvent = eventsdata.filter((ev) => ev.id === id);
  return filteredEvent;
}

function addEvent(name, eventDate) {
  eventsdata = [
    ...eventsdata,
    {
      id: `event-${+new Date()}`,
      name,
      eventDate,
      isComplete: false,
    },
  ];
  putToLocalStorage();
}

function setEventIsCompleted(id) {
  eventsdata = eventsdata.map((event) => {
    if (event.id === id) {
      return { ...event, isComplete: true };
    }
    return event;
  });
  putToLocalStorage();
}

function deleteEventById(id) {
  eventsdata = eventsdata.filter((event) => event.id !== id);
  putToLocalStorage();
}

[getEventById, setEventIsCompleted, deleteEventById].forEach(
  (func) => (func.propTypes = { id: PropTypes.string.isRequired })
);

addEvent.propTypes = {
  name: PropTypes.string.isRequired,
  eventDate: PropTypes.number.isRequired
}

export {
  getEvents,
  getEventById,
  addEvent,
  setEventIsCompleted,
  deleteEventById,
};
