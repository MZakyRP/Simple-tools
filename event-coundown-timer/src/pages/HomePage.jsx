import ECTList from "../components/ECTList";
import { IoAddCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <ECTList/>
      <Link to={"/new"}><IoAddCircleSharp className="add-button" /></Link>
    </>
  );
}

export default HomePage;
