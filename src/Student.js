import React,{ useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Student() {
    const [users,setUsers]=useState([]);
    useEffect(() =>{
      setUsers([
        {
            id:1,
            username:"Ritchi",
            email:"rvs@gmail.com",
            country:"India",
            state:"TamilNadu",
            city:"Chennai",
            phone:"636458678",
            DOB:"20-04-1996",
            gender:"Male"
        },
        {
            id:2,
            username:"Rikshitha",
            email:"riks@gmail.com",
            country:"India",
            state:"TamilNadu",
            city:"Chennai",
            phone:"964558678",
            DOB:"25-08-1996",
            gender:"Female"
        },
        {
            id:3,
            username:"Shasha",
            email:"shas@gmail.com",
            country:"India",
            state:"TamilNadu",
            city:"Chennai",
            phone:"852658678",
            DOB:"20-11-1996",
            gender:"Female"
        }
      ])

    },[])
    let deleteStudent=() =>{
        const result =window.confirm("Are sure want to delete?")
        if(result){
            alert("Deleted")
        }
    }
    return (
        <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
       <h1 class="h3 mb-2 text-gray-800">Users List</h1>
       <Link to={"/student_create"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Create Student</Link>
      </div>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>
           <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div> 
                        <div class="card-body">
                        <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Country</th>
                                            <th>State</th>
                                            <th>city</th>
                                            <th>Phone</th>
                                            <th>DOB</th>
                                            <th>Gender</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                
                                    <tbody>
                                       
                                       {users.map((user) =>{
                                        return  <tr>
                                            <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.country}</td>
                                        <td>{user.state}</td>
                                        <td>{user.city}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.DOB}</td>
                                        <td>{user.gender}</td>
                                        <td>
                                            <Link to={`/student/${user.id}`} className='btn btn-warning mr-2'>View</Link>
                                        
                                        
                                            <Link to={`/edit-student/${user.id}`} className='btn btn-primary mr-2'>Edit</Link>
                                            <button onClick={() => deleteStudent} className='btn btn-danger'>Del</button>
                                        </td>
                                    </tr>
                                       })

                                       }

                                    </tbody>
                          
                          
                          </table>

                          </div>
                          </div>                 
            </div>
      </div>
  )
}

export default Student
