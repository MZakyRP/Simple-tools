import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { IoTrash } from "react-icons/io5";
import { Link } from "react-router-dom";
import { setEventIsCompleted } from "../utils/data";

function ECTItem({ id, name, eventDate, isComplete, onDeleteHandler }) {
  const [countdown, setCountdown] = useState("Please wait...");
  const [isEventComplete, setIsEventCompleted] = useState(isComplete);
  let countdownHandler = useRef(null);

  useEffect(() => {
    if (!isEventComplete) {
      countdownHandler.current = setInterval(() => {
        let now = new Date().getTime();
        let time = eventDate - now;

        let days = Math.floor(time / (1000 * 60 * 60 * 24));
        let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((time % (1000 * 60)) / 1000);

        setCountdown(`${days ? `${days}:` : ""}${hours}:${minutes}:${seconds}`);

        if (time < 0) {
          setEventIsCompleted(id);
          setIsEventCompleted(true);
        }
      }, 1000);
    } else {
      clearInterval(countdownHandler.current);
      setCountdown("this event has passed");
    }
  }, [isEventComplete]);

  return (
    <div className="ect-list__item-container">
      <h3>{name}</h3>
      <h3 className={/0:0:[0-9]/g.test(countdown) ? "time-out" : ""}>{countdown}</h3>
      <div className="ect-list__item-container__buttons">
        <Link to={`/${id}/detail`}>Show detail</Link>
        <IoTrash color="red" size="1.5em" onClick={() => onDeleteHandler(id)} />
      </div>
    </div>
  );
}

ECTItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  eventDate: PropTypes.number.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
};

export default ECTItem;
