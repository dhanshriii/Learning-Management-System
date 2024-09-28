import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import {useParams} from 'react-router-dom'

const baseUrl = 'http://127.0.0.1:8000/api';

function CourseChapters(){

    const [chapterData,setChapterData]=useState([]);
    const [totalResult,setTotalResult]=useState(0);
    const {course_id}=useParams();


    // Fetch courses when page loads
    useEffect(() => {
        axios.get(baseUrl + '/course-chapters/'+ course_id)
            .then((res) => {
                setTotalResult(res.data.length);
                setChapterData(res.data);
            })
            .catch((error) => {
                console.error('Error occurred:', error);
            });
    }, []);

    //Delete Data
    
    const Swal = require('sweetalert2')
    const handleDeleteClick = (chapter_id) =>{
        Swal.fire({
            title: 'Confirm!',
            text: 'Are You sure you want to delete this??',
            icon: 'info',
            confirmButtonText: 'Continue',
            showCancelButton :true
          }).then((result)=>{
            if(result.isConfirmed){
                try{
                    axios.delete(baseUrl + '/chapter/' + chapter_id)
                    .then((res) => {
                        Swal.fire('success','Data has been deleted.');
                        axios.get(baseUrl + '/course-chapters/'+ course_id)
                            .then((res) => {
                                setTotalResult(res.data.length);
                                setChapterData(res.data);
                            })
                            .catch((error) => {
                                console.error('Error occurred:', error);
                            });
                        
                    });
                    

                }catch(error){
                    Swal.fire('error','Data has not been deleted!!');
                }
            }else{
                Swal.fire('error','Data has not been deleted!!');
            }
          });

    }


    return(
        <div className="container mt-4">
    <div className="row">
        <aside className="col-md-3">
            <TeacherSidebar/>
        </aside>
        <section className='col-md-9'>
            <div className='card'>
                <h5 className='card-header'>All Chapters({totalResult}) <Link className='btn btn-success btn-sm float-end'  to={"/add-chapters/" + course_id}>Add Chapter</Link></h5>
                <div className='card-body'>
                <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Vedio</th>
                                <th>Remarks</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {chapterData.map((chapter,index)=> 
                            <tr>
                                <td><Link to={'/edit-chapter/'+chapter.id}>{chapter.title}</Link></td>
                                <td>
                                    <video controls width="250">

                                        <source src={chapter.vedio.url} type="video/webm" />

                                        <source src={chapter.vedio.url} type="video/mp4" />

                                        Download the
                                        <a href="/media/cc0-videos/flower.webm">WEBM</a>
                                        or
                                        <a href="/media/cc0-videos/flower.mp4">MP4</a>
                                        video.
                                    </video>
                                </td>
                                <td>{chapter.remarks}</td>
                                <td>
                                    <Link to={`/edit-chapter/${chapter.id}`} className='btn btn-info text-white btn-sm'><i class="bi bi-pencil-square"></i></Link>
                                    <button onClick={() => handleDeleteClick(chapter.id)} className='btn btn-danger btn-sm ms-1'><i className="bi bi-trash"></i></button>
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
    );
}

export default CourseChapters;