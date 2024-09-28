import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState,useEffect } from 'react';

const siteUrl = 'http://127.0.0.1:8000/';

const baseUrl = 'http://127.0.0.1:8000/api';

function CourseDetail(){
    
    const [courseData,setCourseData] = useState([]);
    const [chapterData,setChapterData] = useState([]);
    const [teacherData,setTeacherData] = useState([]);
    const [relatedCourseData,setRelatedCourseData] = useState([]);
    const [userLoginStatus, setUserLoginStatus] = useState([]);
    const [enrollStatus, setEnrollStatus] = useState([]);
    let {course_id} = useParams();
    const studentId = localStorage.getItem('studentId');
    const studentLoginStatus=localStorage.getItem('studentLoginStatus');
      // Fetch courses when page loads
      useEffect(() => {
        axios.get(baseUrl+'/course/'+course_id)
            .then((res) => {
                setCourseData(res.data);
                setChapterData(res.data.course_chapters);
                setTeacherData(res.data.teacher);
                setRelatedCourseData(JSON.parse(res.data.related_vedios));
            })
            .catch((error) => {
                console.error('Error occurred:', error);
            });

            //fetch enroll status
            axios.get(baseUrl+'/fetch-enroll-status/'+studentId+'/'+course_id)
            .then((res) => {
                if(res.data.bool == true){
                    setEnrollStatus('success')
                }

            })
            .catch((error) => {
                console.error('Error occurred:', error);
            });

           
            if(studentLoginStatus == 'true'){
                setUserLoginStatus('success')
            }
    }, []);

    const enrollCourse = ()=>{
        
        const studentId = localStorage.getItem('studentId');
        const _formData = new FormData();
        _formData.append('course', course_id);
        _formData.append('student', studentId); 
       
    
        try {
            axios.post(baseUrl + '/student-enroll-course/', _formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((res) => {
                if(res.status==200 || res.status == 201){
                    Swal.fire({
                        title : 'You have Successfully Enrolled in this course',
                        icon :'success',
                        toast : true,
                        timer : 3000,
                        position : 'top-right',
                        timerProgressBar : false
                    });
                    setEnrollStatus('success')
                }
            })
            .catch((error) => {
                console.error('Error occurred:', error);
            });
        } catch (error) {
            console.log(error);
        }
    }

    //course Rating
    const [ratingData, setRetingData] = useState({
        rating: '',
        reviews: '',
       
    });

    
    const handleChange = (event) => {
        setRetingData({
            ...ratingData,
            [event.target.name]: event.target.value
        });
    };

    const formSubmit = () => {
        const _formData = new FormData();
        _formData.append('course', course_id); 
        _formData.append('student', studentId);
        _formData.append('rating', ratingData.rating);
        _formData.append('reviews', ratingData.reviews); 
      
    
        try {
            axios.post(baseUrl + '/course-rating/', _formData, {
             
            })
            .then((res) => {
                if(res.status==200 || res.status == 201){
                    Swal.fire({
                        title : 'Data has been added',
                        icon :'success',
                        toast : true,
                        timer : 3000,
                        position : 'top-right',
                        timerProgressBar : false
                    });
                    window.location.reload();
                }

               
            })
            .catch((error) => {
                console.error('Error occurred:', error);
            });
        } catch (error) {
            console.log(error);
        }
    };

    return(
        
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src={courseData.featured_img} className = 'img-thumbnail' alt={courseData.title} style={{ height: '350px', objectFit: 'cover' }}/>
                </div>
                <div className="col-8">
                    <h3><b>{courseData.title}</b></h3><br/>
 
                    <p>{courseData.description}</p>
                    <p className = "fw-bold">Course By :<Link to = {`/teacher-detail/${teacherData.id}`}>{teacherData.full_name}</Link></p>
                    <p className = "fw-bold">Duration :3 Hours 30 Min</p>
                    <p className = "fw-bold">Total Enrolled students : {courseData.total_enrolled_students} student(s)</p>
                    
                    <p className = "fw-bold">
                        Rating: 4/5 
                        {enrollStatus === 'success' && userLoginStatus === 'success' &&
                    <>
                        <button className='btn btn-success ms-2'data-bs-toggle="modal" data-bs-target="#ratingModal"> Rating</button>
                        <div className="modal fade" id="ratingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Rate for {courseData.title}</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                    <form>
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Rating</label>
                                                <select onChange={handleChange} className='form-control' name='rating'>
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                </select>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Review</label>
                                               <textarea onChange={handleChange} className='form-control' name='reviews' rows={5}></textarea>
                                            </div>

                                            <button type="submit" onClick={formSubmit} class="btn btn-primary">Submit</button>
                                            </form>
                                    </div>
                        
                                    </div>
                                </div>
                                </div>
                                </>
                    } 
                        </p>
                   
                    {enrollStatus === 'success' && userLoginStatus === 'success' &&
                    
                    <p><span>You are already enrolled in this course</span></p>
                    }
                    {userLoginStatus === 'success' &&  enrollStatus !== 'success' &&
                    
                    <p><button type = 'button' onClick={enrollCourse} className='btn btn-success'>Enroll</button></p>
                    }
                     
                    {userLoginStatus !== 'success' &&
                    <p><Link to ='/user-login'>Please Login to enroll This course</Link></p>
                    }

                </div>
            </div>
            {/* Course Videos */}
            {enrollStatus === 'success' && userLoginStatus === 'success' &&
            <div className="card mt-4"  >
                <div className="card">
                <h5 className="card-header">
                    Chapters
                </h5>

                <ul className="list-group list-group-flush">
                    {chapterData.map((chapter,index) =>
                    <li className="list-group-item">
                        <div><Link to='https://builtin.com/data-science'>
                         <b>{chapter.title} </b></Link>

                        </div>
                        
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 min</span>
                            <button className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#VedioModal1"><i className="bi-youtube"></i></button>
                        </span>
                        {/*Vedio Modal Start */}
                        <div className="modal fade" id="VedioModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog mb-4">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Vedio 1</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                <div className="ratio ratio-16x9">
                                    <iframe src={chapter.vedio} title={chapter.title} allowFullScreen></iframe>
                                    
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*End Vedio Modal*/}
                    </li>
                    )}
                   
                </ul>
                </div>
                </div>
}
                    <h3 className="pb-1 mb-4 mt-5">Related Courses</h3>
                        <div className="row mb-4">
                            {relatedCourseData.map((rcourse,index)=>
                        <div className="col-md-3">
                        <div className="card">
                        <Link target = "_blank" to={`/detail/${rcourse.pk}`}><img src={`${siteUrl}media/${rcourse.fields.featured_img}`} className="card-img-top" alt={rcourse.fields.title}/></Link>
                        <div className="card-body">
                        <h5 className="Card Title"><Link to={`/detail/${rcourse.pk}`}>{rcourse.fields.title}</Link></h5>
                        
                        </div>
                        </div>
                        </div>
                        )}
       
       
        </div>
         
     </div>

    );
}
export default CourseDetail;