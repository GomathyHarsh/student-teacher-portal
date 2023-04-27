import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
function Teacher() {
    const [users,setUsers]=useState([]);
    const [isLoading,setLoading] = useState(false);
    useEffect( () =>{ 
    fetchData()
    },[])

let fetchData = async() =>{
    try{
        setLoading(true)
        const users= await axios.get("https://6449d2f5a8370fb3213ed62a.mockapi.io/teachers");
        console.log(users);
        setUsers(users.data);
        setLoading(false)
    }catch (error){
        alert()
    }

}
let deleteTeacher = async (userId) => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      try {
        await axios.delete(`https://6449d2f5a8370fb3213ed62a.mockapi.io/teachers/${userId}`);
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
       <h1 class="h3 mb-2 text-gray-800">teachers List</h1>
       <Link to={"teacher_create"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Create Teacher</Link>
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
                                <th>Employee No</th>
                                <th>Name</th>
                                <th>Joined Date</th>
                                <th>DOB</th>
                                <th>Subject</th>
                                <th>Phone</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                    
                        <tbody>
                           
                           {users.map((user) =>{
                            return  <tr key={user.id}>
                                <td>{user.id}</td>
                            <td>{user.employeeNo}</td>
                            <td>{user.name}</td>
                            <td>{user.joinDate}</td>
                            <td>{user.dob}</td>
                            <td>{user.Subject}</td>
                            <td>{user.Phone}</td>
                            
                            <td>
                               <span> <Link to={`${user.id}`} className='btn btn-warning mr-2'>View</Link></span>
                            
                            
                               <span> <Link to={`${user.id}/edit`} className='btn btn-primary mr-2'>Edit</Link></span>
                               <span> <button onClick={() => deleteTeacher(user.id)} className='btn btn-danger'>Del</button></span>
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

export default Teacher
