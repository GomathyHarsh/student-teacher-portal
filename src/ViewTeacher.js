import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ViewTeacher() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://6449d2f5a8370fb3213ed62a.mockapi.io/teachers/${id}`);
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
          <h1>Teacher Information</h1>
          <table className="table">
            <tbody>
              <tr>
                <td>ID:</td>
                <td>{user.id}</td>
              </tr>
              <tr>
                <td>Employee No:</td>
                <td>{user.employeeNo}</td>
              </tr>
              <tr>
                <td>Name:</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>Join Date:</td>
                <td>{user.joinDate}</td>
              </tr>
              <tr>
                <td>DOB:</td>
                <td>{user.dob}</td>
              </tr>
              <tr>
                <td>Subject:</td>
                <td>{user.Subject}</td>
              </tr>
              
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default ViewTeacher;