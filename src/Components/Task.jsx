import { useNavigate } from "react-router-dom";

function Task(p) {
  function handleDelete() {
    p.onDeleteTask(p.id);
  }
  const navigate = useNavigate();

  const getcategorycolor = (category) => {
    switch (category.toLowerCase()) {
      case "work":
        return "#9EC6F3";
      case "personal":
        return "#F2B2D6";
      case "health":
        return "#B4E380";
      case "shopping":
        return "#ADB2D4";
      case "home":
        return "#CEAB93";
      default:
        return "#E2E3E5";
    }
  };

  function handleEdit() {
    navigate(`/tasks/edit/${p.id}`, {
      state: {
        task: {
          id: p.id,
          title: p.title,
          category: p.category,
          desc: p.desc,
          due: p.due,
        },
      },
    });
  }

  return (
    <>
      <div className="col">
        <div className="card h-100 position-relative border rounded p-2">
          <div className="card-body d-flex flex-column">
            <p
              className={`mark rounded p-2 align-items-top text-light`}
              style={{ backgroundColor: getcategorycolor(p.category) }}
            >
              {p.category}
            </p>
            <h5 className="card-title align-items-center">{p.title}</h5>
            <p className="card-text align-items-center">{p.desc}</p>
            <div className="mt-auto d-flex justify-content-between align-items-center">
              <div>
                <button
                  className="btn me-2"
                  style={{ backgroundColor: "#FF8A8A", color: "white" }}
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  className="btn"
                  style={{ backgroundColor: "#FADA7A", color: "white" }}
                  onClick={handleEdit}
                >
                  Edit
                </button>
              </div>
              <p className="text-secondary text-end mb-0">
                {p.due instanceof Date ? p.due.toLocaleDateString() : p.due}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
