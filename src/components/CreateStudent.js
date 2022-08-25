import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateStudent = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rollno, setRollno] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:4000/students/create-student', { name, email, rollno })
            .then(res => {
                if (res.status === 200) {
                    alert('Student successfully created');
                    navigate('/student-list');
                }
                else
                    Promise.reject()
            })
            .catch(err => {
                console.log("err", err)
                alert('Something went wrong')
            })
    }

    return (
        <div className="col-md-6 offset-3 mt-3">
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" onChange={(e) => setName( e.target.value )} value={name} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" onChange={(e) => setEmail( e.target.value )} value={email} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="rollno" className="form-label">Roll no</label>
                    <input type="text" name="rollno" className="form-control" onChange={(e) => setRollno( e.target.value ) } value={rollno} required/>
                </div>
                <button type="submit" className="btn btn-primary">Create Student</button>
            </form>
        </div>
    )
}

export default CreateStudent