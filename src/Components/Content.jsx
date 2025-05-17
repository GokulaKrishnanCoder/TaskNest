import Cards from "./Cards";
import plus from "../assets/plus.png";
import { useNavigate } from "react-router-dom";
import CompletedTasks from "./CompletedTasks";
import Offside from "./Offside";
function Content() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fixed p-2">
        <div className="row">
          <div className="col-lg-9">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <Cards />
              
            </div>
          </div>
          <div className=" col-lg-3 col-md-4 col-sm-12">
            <div className="mb-4">
              <Offside />
            </div>
            <div className="">
              <CompletedTasks />
              <button
                className="floating-button"
                onClick={() => navigate("/tasks/new")}
              >
                <img src={plus} alt="Add Task" className="plus-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
