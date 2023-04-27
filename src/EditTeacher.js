import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditTeacher() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    employeeNo:"",
    name:"",
    joinDate:"",
    dob:"",
    Subject:"",
    Phone:""
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://6449d2f5a8370fb3213ed62a.mockapi.io/teachers/${id}`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [id]);

  const {employeeNo,name,joinDate,dob,Subject,Phone  } = user;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`https://6449d2f5a8370fb3213ed62a.mockapi.io/teachers/${id}`, user);
       navigate('/portal/teacher');
      alert("Successfully Edited")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label>Employee No</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Emp No"
              name="employeeNo"
              value={employeeNo}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>join Date</label>
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter your Joining date"
              name="joinDate"
              value={joinDate}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label> Date of birth</label>
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter your dob"
              name="dob"
              value={dob}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Subject</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Subject"
              name="Subject"
              value={Subject}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Phone</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Phone"
              name="Phone"
              value={Phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update </button>
        </form>
      </div>
    </div>
  );
}

export default EditTeacher;