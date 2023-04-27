import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
            RollNo:"",
            Name:"",
            FatherName:"",
            AdmissionDate:"",
            Standard:"",
            ClassTeacher:""
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://63ec8d3d32a08117239d13f9.mockapi.io/api/students/${id}`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [id]);

  const { RollNo,Name,FatherName,AdmissionDate,Standard,ClassTeacher } = user;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`https://63ec8d3d32a08117239d13f9.mockapi.io/api/students/${id}`, user);
       navigate('/portal/student');
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
            <label>Roll No</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Roll No"
              name="RollNo"
              value={RollNo}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Name</label>
            <input
              type="Name"
              className="form-control form-control-lg"
              placeholder="Enter your Name"
              name="Name"
              value={Name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Father Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your FatherName"
              name="FatherName"
              value={FatherName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Admission Date</label>
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter your AdmissionDate"
              name="AdmissionDate"
              value={AdmissionDate}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Standard</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Standard"
              name="Standard"
              value={Standard}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Class Teacher</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your ClassTeacher"
              name="ClassTeacher"
              value={ClassTeacher}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update </button>
        </form>
      </div>
    </div>
  );
}

export default EditStudent;