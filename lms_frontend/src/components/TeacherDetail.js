import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const baseUrl = 'http://127.0.0.1:8000/api';

function TeacherDetail(){

    const [teacherData,setTeacherData]=useState([]);
    const [courseData,setCourseData]=useState([]);
    let {teacher_id}=useParams();

          // Fetch courses when page loads
          useEffect(() => {
            axios.get(baseUrl+'/teachers/'+teacher_id)
                .then((res) => {
                    setTeacherData(res.data);
                    setCourseData(res.data.teacher_courses);
                })
                .catch((error) => {
                    console.error('Error occurred:', error);
                });
        }, []);
    
    
    
    
    
    return (
        <div className="container">
        <div className="row">
        <div className="col-4 mt-2">
        <img src="/logo512.png" className="img-thumbnail" alt="Teacher Image"/>
        </div>
        <div className="col-8 mt-2">
            <h3>{teacherData.full_name}</h3>
            <p>{teacherData.detail}</p>
            <p className="fw-bold">Skills:<Link to="/category/php">{teacherData.skills}</Link>,<Link to="/category/python">Python</Link>,<Link to="/category/javascript">Javascript</Link></p>
            <p className="fw-bold">Recent Courses: <Link to="/category/php">ReactJs Course</Link></p>
            <p className="fw-bold">Duration:3 Hours 30 Minutes</p>
            <p className="fw-bold">Total Enrolled:3 456 Students</p>
            <p className="fw-bold">Rating:4.5/5</p>

        </div>
        </div>
        {/*Course Videos*/}
        <div className="card mt-4">
            <h5 className="card-header">
                Course List
                </h5>
  <div className="list-group list-group-flush">
    {courseData.map((course,index)=>
        <Link to={`/detail/${course.id}`} className="list-group-item list-group-item-action">{course.title}</Link>
    )}
        </div>
      </div>
    </div>
    );
}
export default TeacherDetail;