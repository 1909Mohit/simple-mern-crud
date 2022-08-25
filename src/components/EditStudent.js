import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rollno, setRollno] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios
            .put(`http://localhost:4000/students/update-student/${id}`, { name, email, rollno })
            .then((res) => {
                if (res.status === 200) {
                    alert("Student successfully updated");
                    navigate("/student-list");
                } else { Promise.reject() };
            })
            .catch((err) => {
                console.log("err", err)
                alert("Something went wrong")
            });
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:4000/students/edit-student/${id}`);
            try {
                // console.log(response.data)
                const { name, email, rollno } = response.data;
                setName(name);
                setEmail(email);
                setRollno(rollno);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [id]);

    return (
        <div className="col-md-6 offset-3 mt-3">
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" onChange={(e) => setName(e.target.value)} value={name} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="rollno" className="form-label">Roll no</label>
                    <input type="text" name="rollno" className="form-control" onChange={(e) => setRollno(e.target.value)} value={rollno} required/>
                </div>
                <button type="submit" className="btn btn-success">Update Student</button>
            </form>
        </div>
    )
}

export default EditStudent