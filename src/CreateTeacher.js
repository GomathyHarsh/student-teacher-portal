import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CreateTeacher() {
    const navigate=useNavigate();
    const formik= useFormik({
        initialValues :{
            employeeNo:"",
            name:"",
            joinDate:"",
            dob:"",
            Subject:"",
            Phone:""
           
        },
        validate: (values) =>{
            let error = {};

            if(!values.employeeNo){
                error.employeeNo = "Please eNter a value"
            }

            if(!values.name){
                error.name = "Please eNter a value"
            }
            if(values.name && (values.name.length <=2 || values.name.length > 15)){
                error.name = "Name must between range 2 to 15 Characters"
            }
            
            if(!values.joinDate){
                error.joinDate = "Please enter a value"
            }
            
            let age=new Date().getFullYear() - parseInt(values.dob.split("-")[0]);
             if(age < 21){
                 error.dob="You must be above 21"
             }
             if(!values.Subject){
                error.Subject = "Please eNter a value"
            }
            if(values.Phone.toString().length !== 10){
                     error.Phone = "Please enter valid Number"  
                }


          

            return error;
        },
        onSubmit : async (values) =>{
            try{
                const userdata = await axios.post("https://6449d2f5a8370fb3213ed62a.mockapi.io/teachers",values);
                navigate('/portal/teacher');
                alert("success");
                
            }
            catch(error){
             alert("Error");
            }
        }
    });
    
    
    return (
    <div className='container'>
        <form onSubmit={formik.handleSubmit}>
        <div className='row'>
            <div className='col-lg-6'>
                <div className='form-group'>
                    <lable>Employee No*</lable>
                    <input name="employeeNo" onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.employeeNo} type={"text"} 
                    className={`form-control ${formik.touched.employeeNo && formik.errors.employeeNo ? 'error-box':''} ${formik.touched.employeeNo && !formik.errors.employeeNo ? 'success-box' : ""} `}
                     />
                     
               {   
                formik.touched.employeeNo && formik.errors.employeeNo ? <span style={{color:'red'}} >{formik.errors.employeeNo}</span> : null
               }
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='form-group'>
                    <lable>Name*</lable>
                    <input name="name" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.name} type={"text"} 
                    className={`form-control ${formik.touched.name && formik.errors.name ? 'error-box':''} ${formik.touched.name && !formik.errors.name ? 'success-box' : ""} `}/>
                 {   
                formik.touched.name && formik.errors.name ? <span style={{color:'red'}} >{formik.errors.name}</span> : null
               }
                </div>
            </div>
        
            
            <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>Join Date</lable>
                    <input name="joinDate" onChange={formik.handleChange} 
                     onBlur={formik.handleBlur}
                    value={formik.values.joinDate}type={"date"} 
                    className={`form-control ${formik.touched.joinDate && formik.errors.joinDate ? 'error-box':''} ${formik.touched.joinDate && !formik.errors.joinDate ? 'success-box' : ""} `}/>
                     {   
                formik.touched.joinDate && formik.errors.joinDate ? <span style={{color:'red'}} >{formik.errors.joinDate}</span> : null
               }
                 </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>DOB</lable>
                    <input name="dob" onChange={formik.handleChange} 
                     onBlur={formik.handleBlur}
                    value={formik.values.dob}type={"date"} 
                    className={`form-control ${formik.touched.dob && formik.errors.dob ? 'error-box':''} ${formik.touched.dob && !formik.errors.dob ? 'success-box' : ""} `}/>
                     {   
                formik.touched.dob && formik.errors.dob ? <span style={{color:'red'}} >{formik.errors.dob}</span> : null
               }
                 </div>
            </div>
            <div className='col-lg-6'>
                <div className='form-group'>
                    <lable>Subject*</lable>
                    <input name="Subject" onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.Subject} type={"text"} 
                    className={`form-control ${formik.touched.Subject && formik.errors.Subject ? 'error-box':''} ${formik.touched.Subject && !formik.errors.Subject ? 'success-box' : ""} `}
                     />
                     
               {   
                formik.touched.Subject && formik.errors.Subject ? <span style={{color:'red'}} >{formik.errors.Subject}</span> : null
               }
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>Phone No</lable>
                    <input name="Phone" onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.Phone} type={"text"} 
                    className={`form-control ${formik.touched.Phone && formik.errors.Phone ? 'error-box':''} ${formik.touched.Phone && !formik.errors.Phone ? 'success-box' : ""} `}/>
                 {   
                formik.touched.Phone && formik.errors.Phone ? <span style={{color:'red'}} >{formik.errors.Phone}</span> : null
               }
                 </div>
            </div>
            
            <div className='col-lg-4'>
                <div className='form-group'>
                    <input type={"Submit"} className="btn btn-primary"/>
                    
                 </div>
            </div>
        </div>
        </form>
     
    </div>
  )
}

export default CreateTeacher