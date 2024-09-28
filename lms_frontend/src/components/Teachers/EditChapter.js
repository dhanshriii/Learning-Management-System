import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {useParams} from 'react-router-dom';

const baseUrl = 'http://127.0.0.1:8000/api';

function EditChapter(){


    const [chapterData, setChapterData] = useState({
        course:'',
        title: '',
        description: '',
        prev_vedio:'',
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

    const {chapter_id}=useParams();

    const formSubmit = () => {
        const _formData = new FormData();
        _formData.append('course', chapterData.course); 
        _formData.append('title', chapterData.title);
        _formData.append('description', chapterData.description);
        if(chapterData.vedio!==''){
            _formData.append('vedio', chapterData.vedio, chapterData.vedio.name); 

        }
        _formData.append('remarks', chapterData.remarks);
    
        try {
            axios.put(baseUrl + '/chapter/' + chapter_id + '/', _formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((res) => {
                if(res.status===200){
                    
    
                    Swal.fire({
                    title: 'Data has been updated!',
                    icon: 'success',
                    toast:true,
                    timer:3000,
                    position:'top-right',
                    timerProgressBar:true,
                    showConfirmButton:false
                   
          });
        }
                //window.location.href='/add-chapters/1';
            })
            .catch((error) => {
                console.error('Error occurred:', error);
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        axios.get(baseUrl + '/chapter/'+ chapter_id)
            .then((res) => {


                setChapterData({
                    course:res.data.course,
                    title:res.data.title,
                    description:res.data.description,
                    prev_vedio:res.data.vedio,
                    remarks:res.data.remarks,
                    vedio:''
                });
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
                <div className="col-md-9">
                <div className='card'>
                        <h5 className='card-header'>Update Chapter Chapter</h5>
                        <div className='card-body'>

                    <form>
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Title</label>
                            <input type="text" value={chapterData.title} onChange={handleChange} name='title' className="form-control" id="title"/>
                        </div>

                    <div className="mb-3 row">
                        <label for="staticEmail" className="col-sm-2 col-form-label">Description</label>
                        <input type="text" value={chapterData.description} onChange={handleChange} name='description' className="form-control" id="description" />
                    </div>

                    <div className="mb-3 row">
                        <label for="staticEmail" className="col-sm-2 col-form-label">Video</label>
                        <input type="file" onChange={handleFileChange} name='vedio' className="form-control" id="vedio" />
                        
                        {chapterData.prev_vedio &&
                        <video controls width="100%" className='mt-2'>
                            <source src={chapterData.prev_vedio} type="video/webm" />
                            <source src={chapterData.prev_vedio} type="video/mp4" />

                            Download the
                            <a href="/media/cc0-videos/flower.webm">WEBM</a>
                            or
                            <a href="/media/cc0-videos/flower.mp4">MP4</a>
                            video.
                        </video>
}
                    </div>

                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Remarks</label>
                        <textarea value={chapterData.description} onChange={handleChange} name='remarks' className="form-control" placeholder="This video is focus on Introduction" id="remarks"></textarea>
                    </div>
                    <button type='button' onClick={formSubmit} className='btn btn-primary'>Submit</button>
                </form>
                </div>
                </div>
                </div>
                </div>
            </div>
    );
}
export default EditChapter;