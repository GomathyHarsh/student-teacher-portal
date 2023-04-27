
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from './Login';
import Dashboard from './Dashboard';
import "./css/sb-admin-2.css";
import "./css/fontawesome-free/css/all.min.css";
import PortalLayout from './PortalLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Student from './Student';
import Teacher from './Teacher';
import ViewStudent from './ViewStudent';
import ViewTeacher from './ViewTeacher';
import CreateStudent from './CreateStudent';
import CreateTeacher from './CreateTeacher';
import EditStudent from './EditStudent';
import EditTeacher from './EditTeacher';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/portal" element={<PortalLayout/>}>
      <Route path="dashboard" element={<Dashboard/>}></Route>
      <Route path="student" element={<Student/>}></Route>
      <Route path="teacher" element={<Teacher/>}></Route>
      <Route path="student/:id" element={<ViewStudent/>}></Route>
      <Route path="teacher/:id" element={<ViewTeacher/>}></Route>
      <Route path="student/student_create" element={<CreateStudent/>}></Route>
      <Route path="teacher/teacher_create" element={<CreateTeacher/>}></Route>
      <Route path="student/:id/edit" element={<EditStudent/>}></Route>
      <Route path="teacher/:id/edit" element={<EditTeacher/>}></Route>
       
       </Route>
       </Routes>
      
   
    </BrowserRouter>
    
  );
}

export default App;
    