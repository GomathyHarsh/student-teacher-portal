import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
function Student() {
    const [users,setUsers]=useState([]);
    const [isLoading,setLoading] = useState(false);
    useEffect( () =>{ 
    fetchData()
    },[])

let fetchData = async() =>{
    try{
        setLoading(true)
        const users= await axios.get("https://63ec8d3d32a08117239d13f9.mockapi.io/api/students");
        console.log(users);
        setUsers(users.data);
        setLoading(false)
    }catch (error){
        alert()
    }

}
let deleteStudent = async (userId) => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      try {
        await axios.delete(`https://63ec8d3d32a08117239d13f9.mockapi.io/api/students/${userId}`);
        setUsers(users.filter(user => user.id !== userId));
        alert("User deleted successfully");
      } catch (error) {
        alert("Error deleting user");
      }
    }
     };
    
  return (
    
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
       <h1 class="h3 mb-2 text-gray-800">Students List</h1>
       <Link to={"student_create"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Create Student</Link>
      </div>
          {
            isLoading ? <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div> : <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTable</h6>
            </div> 
            <div class="card-body">
            <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Roll No</th>
                                <th>Name</th>
                                <th>Father Name</th>
                              
                                <th>Admission Date</th>
                                <th>Standard</th>
                              <th>Class Teacher</th>
                              <th>Action</th>
                            </tr>
                        </thead>
                    
                        <tbody>
                           
                           {users.map((user) =>{
                            return  <tr key={user.id}>
                                <td>{user.id}</td>
                            <td>{user.RollNo}</td>
                            <td>{user.Name}</td>
                            
                            <td>{user.FatherName}</td>
                            <td>{user.AdmissionDate}</td>
                            <td>{user.Standard}</td>
                            <td>{user.ClassTeacher}</td>
                            <td>
                               <span> <Link to={`${user.id}`} className='btn btn-warning mr-2'>View</Link></span>
                            
                            
                               <span> <Link to={`${user.id}/edit`} className='btn btn-primary mr-2'>Edit</Link></span>
                               <span> <button onClick={() => deleteStudent(user.id)} className='btn btn-danger'>Del</button></span>
                            </td>
                        </tr>
                           })

                           }

                        </tbody>
              
              
              </table>

              </div>
              </div>                 
</div>
          }         
          
      </div>
   
  )
}

export default Student