import ECTItem from "./ECTItem";
import { deleteEventById, getEvents } from "../utils/data";
import { useState } from "react";

function ECTList() {
  const [events, setEvents] = useState(getEvents());

  function onDeleteHandler(id) {
    deleteEventById(id)

    setEvents(getEvents());
    return;
  }
  
  return (
    <main>
      <article className="ect-list">
        {events.length !== 0
          ? events.map((event) => <ECTItem key={event.id} {...event} onDeleteHandler={onDeleteHandler}/>)
          : null}
      </article>
    </main>
  );
}

export default ECTList;
