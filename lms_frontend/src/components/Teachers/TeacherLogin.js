import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api';


function TeacherLogin(){

    const [teacherLoginData, setTeacherLoginData] = useState({
        email: '',
        password: ''
    });

    const [errorMsg, seterrorMsg] = useState('');

    const handleChange = (event) => {
        setTeacherLoginData({
            ...teacherLoginData,
            [event.target.name]: event.target.value
        });
    }

    const submitForm = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        
        const teacherFormData = new FormData();
        teacherFormData.append('email', teacherLoginData.email);
        teacherFormData.append('password', teacherLoginData.password);
        
        try {
            axios.post(baseUrl + '/teacher-login', teacherFormData)
                .then((res) => {
                    if(res.data.bool == true){
                        localStorage.setItem('teacherLoginStatus',true)
                        localStorage.setItem('teacherId',res.data.teacher_id)
                        window.location.href = '/Teacher-Dashboard';
                    }else{
                        seterrorMsg('Invalid Email or Password!!');
                    }
                })
                .catch((error) => {
                    console.error('Error occurred:', error);
                });
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };
    
    const teacherLoginStatus=localStorage.getItem('teacherLoginStatus');
    if(teacherLoginStatus == 'true'){
        window.location.href = '/Teacher-Dashboard';
    }


    useEffect(() => {
        document.title = 'Teacher Login';
    },[]); // Empty dependency array to run effect only once


    return (
        <div className='container mt-4'>
            <div  className='row'>
                <div className='col-8 offset-3'>
                    <div className='card'>
                        <h5 className='card-header'>Teacher Login</h5>
                        <div className='card-body'>
                        <form onSubmit={submitForm}>
                            {errorMsg && <p className='text-danger'>{errorMsg}</p>}
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" value={teacherLoginData.email} name='email' 
                                onChange={handleChange} className="form-control"></input>
        
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={teacherLoginData.password} name='password' 
                                onChange={handleChange}  className="form-control" id="exampleInputPassword1"></input>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TeacherLogin;