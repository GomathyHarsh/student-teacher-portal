import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CreateStudent() {
    const navigate = useNavigate();
    const formik= useFormik({
        initialValues :{
            RollNo:"",
            Name:"",
            FatherName:"",
            AdmissionDate:"",
            Standard:"",
            ClassTeacher:"",
           
        },
        validate: (values) =>{
            let error = {};

            if(!values.RollNo){
                error.RollNo = "Please eNter a value"
            }

            if(!values.Name){
                error.Name = "Please eNter a value"
            }
            if(values.Name && (values.Name.length <=2 || values.Name.length > 15)){
                error.Name = "Name must between range 2 to 15 Characters"
            }
            if(!values.FatherName){
                error.FatherName = "Please enter a value"
            }
            if(values.FatherName && (values.FatherName.length <=2 || values.FatherName.length > 15)){
                error.FatherName = "Father Name must between range 2 to 15 Characters"
            }
            if(!values.AdmissionDate){
                error.AdmissionDate = "Please enter a value"
            }
            
            if(!values.Standard){
                error.Standard = "Please enter a value"
            }
            if(!values.ClassTeacher){
                error.ClassTeacher = "Please enter a value"
            }
            if(values.ClassTeacher && (values.ClassTeacher.length <=2 || values.ClassTeacher.length > 15)){
                error.ClassTeacher = " Name must between range 2 to 15 Characters"
            }

          

            return error;
        },
        onSubmit : async (values) =>{
            try{
                const userdata = await axios.post("https://63ec8d3d32a08117239d13f9.mockapi.io/api/students",values);
                navigate('/portal/student');
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
                    <lable>RollNo*</lable>
                    <input name="RollNo" onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.RollNo} type={"text"} 
                    className={`form-control ${formik.touched.RollNo && formik.errors.RollNo ? 'error-box':''} ${formik.touched.RollNo && !formik.errors.RollNo ? 'success-box' : ""} `}
                     />
                     
               {   
                formik.touched.RollNo && formik.errors.RollNo ? <span style={{color:'red'}} >{formik.errors.RollNo}</span> : null
               }
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='form-group'>
                    <lable>Name*</lable>
                    <input name="Name" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.Name} type={"text"} 
                    className={`form-control ${formik.touched.Name && formik.errors.Name ? 'error-box':''} ${formik.touched.Name && !formik.errors.Name ? 'success-box' : ""} `}/>
                 {   
                formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}} >{formik.errors.Name}</span> : null
               }
                </div>
            </div>
        
             <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>Father Name*</lable>
                    <input name="FatherName" onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.FatherName} type={"text"} 
                    className={`form-control ${formik.touched.FatherName && formik.errors.FatherName ? 'error-box':''} ${formik.touched.FatherName && !formik.errors.FatherName ? 'success-box' : ""} `}/>
                 {   
                formik.touched.FatherName && formik.errors.FatherName ? <span style={{color:'red'}} >{formik.errors.FatherName}</span> : null
               }
                 </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>Admission Date</lable>
                    <input name="AdmissionDate" onChange={formik.handleChange} 
                     onBlur={formik.handleBlur}
                    value={formik.values.AdmissionDate}type={"date"} 
                    className={`form-control ${formik.touched.AdmissionDate && formik.errors.AdmissionDate ? 'error-box':''} ${formik.touched.AdmissionDate && !formik.errors.AdmissionDate ? 'success-box' : ""} `}/>
                     {   
                formik.touched.AdmissionDate && formik.errors.AdmissionDate ? <span style={{color:'red'}} >{formik.errors.AdmissionDate}</span> : null
               }
                 </div>
            </div>
            <div className='col-lg-6'>
                <div className='form-group'>
                    <lable>Standard*</lable>
                    <input name="Standard" onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.Standard} type={"text"} 
                    className={`form-control ${formik.touched.Standard && formik.errors.Standard ? 'error-box':''} ${formik.touched.Standard && !formik.errors.Standard ? 'success-box' : ""} `}
                     />
                     
               {   
                formik.touched.Standard && formik.errors.Standard ? <span style={{color:'red'}} >{formik.errors.Standard}</span> : null
               }
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='form-group'>
                    <lable>Class Teacher*</lable>
                    <input name="ClassTeacher" onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.ClassTeacher} type={"text"} 
                    className={`form-control ${formik.touched.ClassTeacher && formik.errors.ClassTeacher ? 'error-box':''} ${formik.touched.ClassTeacher && !formik.errors.ClassTeacher ? 'success-box' : ""} `}
                     />
                     
               {   
                formik.touched.ClassTeacher && formik.errors.ClassTeacher ? <span style={{color:'red'}} >{formik.errors.ClassTeacher}</span> : null
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

export default CreateStudent