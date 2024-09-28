import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Swal from 'sweetalert2';

const baseUrl = 'http://127.0.0.1:8000/api';


function AddChapters(){

    const [chapterData, setChapterData] = useState({
        title: '',
        description: '',
        vedio:'',
        remarks:''
    });

    

    const handleChange = (event) => {
        setChapterData({
            ...chapterData,
            [event.target.name]: event.target.value
        });
    };

    const handleFileChange = (event) => {
        setChapterData({
            ...chapterData,
            [event.target.name]: event.target.files[0] // Access file from event object
        });
    };

    const {course_id}=useParams();

    const formSubmit = () => {
        const _formData = new FormData();
        _formData.append('course', course_id); 
        _formData.append('title', chapterData.title);
        _formData.append('description', chapterData.description);
        _formData.append('vedio', chapterData.vedio, chapterData.vedio.name); // Make sure f_img is not null
        _formData.append('remarks', chapterData.remarks);
    
        try {
            axios.post(baseUrl + '/chapter/', _formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
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


    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3"> 
                    <TeacherSidebar/>
                </aside>
                <div className="col-md-9">
                <div className='card'>
                        <h5 className='card-header'>Add Chapter</h5>
                        <div className='card-body'>

                    <form>
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Title</label>
                            <input type="text" onChange={handleChange} name='title' className="form-control" id="title"/>
                        </div>

                    <div className="mb-3 row">
                        <label for="staticEmail" className="col-sm-2 col-form-label">Description</label>
                        <input type="text" onChange={handleChange} name='description' className="form-control" id="description" />
                    </div>

                    <div className="mb-3 row">
                        <label for="staticEmail" className="col-sm-2 col-form-label">Video</label>
                        <input type="file" onChange={handleFileChange} name='vedio' className="form-control" id="vedio" />
                    </div>

                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Remarks</label>
                        <textarea onChange={handleChange} name='remarks' className="form-control" placeholder="This video is focus on Introduction" id="remarks"></textarea>
                    </div>
                    <button type='button' onClick={formSubmit} className='btn btn-primary'>Submit</button>
                </form>
                </div>
                </div>
                </div>
                </div>
        </div>
       
    )

}

export default AddChapters;