import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const StudentTableRow = (props) => {
    const navigate = useNavigate();
    const { _id, name, email, rollno } = props.obj;
    const deleteStudent = async () => {
        const ans = window.confirm("Do you Want to delete ?");
        try {
            if (ans) {
                await axios.delete(`http://localhost:4000/students/delete-student/${_id}`);
                alert("Student successfully deleted");
                navigate('/create-student');
            }
        } catch (error) {
            console.log('err', error);
            alert("Something went wrong");
        }
    }
  return (
      <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{rollno}</td>
          <td>
              <Link className=" btn btn-success btn-sm mx-3" to={`/edit-student/${_id}`}>Edit</Link>
              <button onClick={deleteStudent} className="btn btn-sm btn-danger">Delete</button>
          </td>
    </tr>
  )
}

export default StudentTableRow