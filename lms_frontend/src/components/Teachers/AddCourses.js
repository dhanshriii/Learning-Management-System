import { useState, useEffect } from 'react';
import axios from 'axios';
import TeacherSidebar from './TeacherSidebar';

const baseUrl = 'http://127.0.0.1:8000/api';

function AddCourses() {

    const [cats, setCats] = useState([]);
    const [courseData, setCourseData] = useState({
        category: '',
        title: '',
        description: '',
        f_img: null, // Set initial value to null for file input
        techs: ''
    });

    // Fetch category when page loads
    useEffect(() => {
        axios.get(baseUrl + '/category')
            .then((res) => {
                setCats(res.data);
            })
            .catch((error) => {
                console.error('Error occurred:', error);
            });
    }, []);

    const handleChange = (event) => {
        setCourseData({
            ...courseData,
            [event.target.name]: event.target.value
        });
    };

    const handleFileChange = (event) => {
        setCourseData({
            ...courseData,
            [event.target.name]: event.target.files[0] // Access file from event object
        });
    };

    const formSubmit = () => {

        const teacherId = localStorage.getItem('teacherId'); // Retrieve teacher ID from local storage
    if (!teacherId) {
        console.error('Teacher ID not found in local storage');
        return;
    }


        const _formData = new FormData();
        _formData.append('category', courseData.category);
        _formData.append('teacher', teacherId); 
        _formData.append('title', courseData.title);
        _formData.append('description', courseData.description);
        _formData.append('featured_img', courseData.f_img, courseData.f_img?.name); // Make sure f_img is not null
        _formData.append('techs', courseData.techs);
    
        try {
            axios.post(baseUrl + '/course/', _formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((res) => {
                //console.log(res.data);
                window.location.href='/add-courses'
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
                        <h5 className='card-header'>Add Courses</h5>
                        <div className='card-body'>
                            <form>
                                <div className="mb-3 row">
                                    <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
                                    <select name='category' onChange={handleChange} className='form-control'>
                                        {cats.map((category, index) => <option key={index} value={category.id}>{category.title}</option>)}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input onChange={handleChange} name='title' className="form-control" id='title'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea onChange={handleChange} name='description' className="form-control" id='description'></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="f_img" className="form-label">Featured Image</label>
                                    <input type="file" onChange={handleFileChange} name='f_img' id='f_img' className="form-control"  />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="techs" className="form-label">Technologies</label>
                                    <textarea onChange={handleChange} name='techs' className='form-control' placeholder='Php,Python, Javascript,HTML,CSS' id='techs'></textarea>
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

export default AddCourses;
