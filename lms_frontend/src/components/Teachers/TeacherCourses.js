import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api';

function TeacherCourses(){

    const [courseData,setCourseData]=useState([]);

    const teacherId = localStorage.getItem('teacherId');
   

    // Fetch courses when page loads
    useEffect(() => {
        axios.get(baseUrl + '/teacher-courses/'+ teacherId)
            .then((res) => {
                setCourseData(res.data);
            })
            .catch((error) => {
                console.error('Error occurred:', error);
            });
    }, []);


   

    return(
        <div className="container mt-4">
    <div className="row">
        <aside className="col-md-3">
            <TeacherSidebar/>
        </aside>
        <section className='col-md-9'>
            <div className='card'>
                <h5 className='card-header'>My Courses</h5>
                <div className='card-body'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Total Enrolled</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courseData.map((course,index)=> 
                            <tr>
                                <td><Link to={"/all-chapters/"+course.id}>{course.title}</Link></td>
                                <td><img src ={course.featured_img} width = "80" className='rounded' alt = {course.title} style={{ height: '200px', objectFit: 'cover' }}/></td>
                                <td><Link to={`/enrolled-students/` + course.id}>{course.total_enrolled_students} student(s)</Link></td>
                                <td>
                                    
                                    <Link className="btn btn-info btn-sm " to={'/edit-course/' + course.id}>Edit</Link>
                                    <Link className="btn btn-success btn-sm ms-3" to={'/add-chapters/' + course.id}>Add Chapter</Link>
                                    <button className='btn btn-danger btn-sm ms-3'>Delete</button>

                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
</div>

    )
}
export default TeacherCourses;
    