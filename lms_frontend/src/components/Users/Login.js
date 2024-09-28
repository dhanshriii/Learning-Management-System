import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api';

function Login(){

    const [studentLoginData, setStudentLoginData] = useState({
        email: '',
        password: ''
    });

    const [errorMsg, seterrorMsg] = useState('');

    const handleChange = (event) => {
        setStudentLoginData({
            ...studentLoginData,
            [event.target.name]: event.target.value
        });
    }

    const submitForm = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        
        const studentFormData = new FormData();
        studentFormData.append('email', studentLoginData.email);
        studentFormData.append('password', studentLoginData.password);
        
        try {
            axios.post(baseUrl + '/student-login', studentFormData)
                .then((res) => {
                    if(res.data.bool == true){
                        localStorage.setItem('studentLoginStatus',true)
                        localStorage.setItem('studentId',res.data.student_id)
                        window.location.href = '/User-Dashboard';
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

    const studentLoginStatus=localStorage.getItem('studentLoginStatus');
    if(studentLoginStatus == 'true'){
        window.location.href = '/User-Dashboard';
    }

    useEffect(() => {
        document.title = 'Student Login';
    },[]); // Empty dependency array to run effect only once
    

    return (
        <div className='container mt-4'>
            <div  className='row'>
                <div className='col-8 offset-3'>
                    <div className='card'>
                        {errorMsg && <p className='text-danger'>{errorMsg}</p>} 
                        <h5 className='card-header'>User Login</h5>
                        <div className='card-body'>
                        <form onSubmit={submitForm}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input value={studentLoginData.email} name='email' 
                                onChange={handleChange} type="email" className="form-control"></input>
        
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input value={studentLoginData.password} name='password' 
                                onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1"></input>
                            </div>

                            {/* <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div> */}

                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login;