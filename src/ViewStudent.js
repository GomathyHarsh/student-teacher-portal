import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ViewStudent() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://63ec8d3d32a08117239d13f9.mockapi.io/api/students/${id}`);
      console.log(response.data);
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      alert('Error fetching user data');
    }
  };

  return (
    <div className="container">
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <h1>Student Information</h1>
          <table className="table">
            <tbody>
              <tr>
                <td>ID:</td>
                <td>{user.id}</td>
              </tr>
              <tr>
                <td>Name:</td>
                <td>{user.Name}</td>
              </tr>
              <tr>
                <td>Roll No:</td>
                <td>{user.RollNo}</td>
              </tr>
              <tr>
                <td>Father Name:</td>
                <td>{user.FatherName}</td>
              </tr>
              <tr>
                <td>Admission Date:</td>
                <td>{user.AdmissionDate}</td>
              </tr>
              <tr>
                <td>Standard:</td>
                <td>{user.Standard}</td>
              </tr>
              <tr>
                <td>ClassTeacher:</td>
                <td>{user.ClassTeacher}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default ViewStudent;