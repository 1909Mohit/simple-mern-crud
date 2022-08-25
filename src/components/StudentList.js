import axios from 'axios';
import React, { useEffect, useState } from 'react'
import StudentTableRow from './StudentTableRow';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("http://localhost:4000/students/");
            try {
                setStudents(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="col-md-6 offset-3 mt-3">
            <table className="table table-striped-columns">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Roll No</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{students.map((res,i) => {
                    return <StudentTableRow obj={res} key={i} />
                })}
                </tbody>
            </table>
        </div>
    )
}

export default StudentList