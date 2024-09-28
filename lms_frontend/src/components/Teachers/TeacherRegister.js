import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/teachers/';

function TeacherRegister() {
    const [teacherData, setTeacherData] = useState({
        'full_name': '',
        'email': '',
        'password': '',
        'qualification': '',
        'mobile_no': '',
        'skills': '',
        'status':''
    });

    const handleChange = (event) => {
        setTeacherData({
            ...teacherData,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        try{
        axios.post(baseUrl, teacherData)
            .then((response) => {
                setTeacherData({
                    'full_name': '',
                    'email': '',
                    'password': '',
                    'qualification': '',
                    'mobile_no': '',
                    'skills': '',
                    'status': 'success'
                })
                // Optionally, you can redirect the user or display a success message here
            })
        }catch(error){
                console.error('Error occurred:', error);
                setTeacherData({'status': 'error'})
                // Handle error (e.g., display error message to the user)
            };
    };

useEffect(()=>{
    document.title='Teacher Registration'
});

// const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
// if(teacherLoginStatus === 'true'){
//     window.location.href = '/teacher-dashboard';
// }



const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
    if(teacherLoginStatus == 'true'){
        window.location.href = '/teacher-dashboard';
    }



    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-8 offset-3'>
                    {teacherData.status == 'success' && <p className='text-success'>Thanks for your Registration</p>}
                    {teacherData.status == 'error' && <p className='text-danger'>Something went Wrong</p>}

                    <div className='card'>
                        <h5 className='card-header'>Teacher Register</h5>
                        <div className='card-body'>
                            <form onSubmit={submitForm}>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Full Name</label>
                                    <input value={teacherData.full_name} onChange={handleChange} name="full_name" type="text" className="form-control" id="fullName" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input value={teacherData.email} onChange={handleChange} name="email" type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input value={teacherData.password} onChange={handleChange} name="password" type="password" className="form-control" id="password" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="qualification" className="form-label">Qualification</label>
                                    <input value={teacherData.qualification} onChange={handleChange} name="qualification" type="text" className="form-control" id="qualification" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobileNo" className="form-label">Mobile Number</label>
                                    <input value={teacherData.mobile_no} onChange={handleChange} name="mobile_no" type="number" className="form-control" id="mobileNo" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="skills" className="form-label">Skills</label>
                                    <textarea value={teacherData.skills} onChange={handleChange} name="skills" className="form-control" id="skills"></textarea>
                                    <div id="text" className="form-text">Php, Python, Javascript, Java, C++, etc.</div>
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherRegister;
