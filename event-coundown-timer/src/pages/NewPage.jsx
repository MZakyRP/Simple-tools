import useInput from "../hooks/useInput";
import { addEvent } from "../utils/data";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NewPage() {
  const navigate = useNavigate();
  const [name, setName] = useInput("");
  const [date, setDate] = useInput("");

  function onAddHandler() {
    if (name && date) {
      const eventDate = new Date(date).getTime();
      addEvent(name, eventDate);
      navigate("/");
    } else {
      alert("Please fill the fields");
    }
  }

  return (
    <main>
      <article className="ect-new">
        <input
          type="text"
          value={name}
          onChange={setName}
          placeholder="Insert event name here..."
        />
        <input
          type="datetime-local"
          value={date}
          onChange={setDate}
        />

        <IoArrowBackCircleOutline
          className="ect-new__button-left"
          onClick={() => navigate(-1)}
        />
        <FaRegCheckCircle
          className="ect-new__button-right"
          onClick={onAddHandler}
        />
      </article>
    </main>
  );
}

export default NewPage;
