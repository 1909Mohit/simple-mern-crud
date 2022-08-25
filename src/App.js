import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateStudent from "./components/CreateStudent";
import EditStudent from "./components/EditStudent";
import StudentList from "./components/StudentList";

function App() {
  return (
    <Router>
      <div className="">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>React MERN Stack App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item text-end">
                  <Link className="nav-link" aria-current="page" to={"/create-student"}>Create Student</Link>
                </li>
                <li className="nav-item text-end">
                  <Link className="nav-link" to={"/student-list"}>Student List</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
        <Routes>
          {/* <Route exact path="/" element={<StudentList />} /> */}
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/edit-student/:id"	element={<EditStudent />} />
          <Route path="/student-list" element={<StudentList />} />
        </Routes>
   
    </Router>
  );
}

export default App;
