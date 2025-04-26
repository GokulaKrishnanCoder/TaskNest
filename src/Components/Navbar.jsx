import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({onSearchTask,onResetTasks}){
    
    const [val, setVal] = useState("");
    const handleSearch=(e)=>{
        setVal(e.target.value);
    }
    const handleSave1 = (e) => {
      e.preventDefault();
      onSearchTask(val);   
    };
    const handlereset = () =>{
      onResetTasks();
    }
    
    return (
      <>
        <nav className="navbar" style={{ backgroundColor: "#FFC785" }}>
          <div className="container-fluid">
            <Link
              to="/"
              className="navbar-brand fw-bold text-light"
              onClick={handlereset}
            >
              TaskNest
            </Link>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                onChange={handleSearch}
                value={val}
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" onClick={handleSave1}>
                Search
              </button>
            </form>
          </div>
        </nav>
      </>
    );
}
 export default Navbar