
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/student/';

function Register(){

    const [studentData, setStudentData] = useState({
        'full_name': '',
        'email': '',
        'password': '',
        'username': '',
        'interested_categories': '',
        'status':''
    });

    const handleChange = (event) => {
        setStudentData({
            ...studentData,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        try{
        axios.post(baseUrl, studentData)
            .then((response) => {
                setStudentData({
                    'full_name': '',
                    'email': '',
                    'password': '',
                    'username': '',
                    'interested_categories': '',
                    'status': 'success'
                })
                // Optionally, you can redirect the user or display a success message here
            })
        }catch(error){
                console.error('Error occurred:', error);
                setStudentData({'status': 'error'})
                // Handle error (e.g., display error message to the user)
            };
    };

    useEffect(()=>{
        document.title='Student Registration'
    });
    


    return (
        <div className='container mt-4'>
            <div  className='row'>
                <div className='col-8 offset-3'>
                {studentData.status == '' && <p className='text-danger'>All the fields are required</p>}
                {studentData.status == 'success' && <p className='text-success'>Thanks for your Registration</p>}
                    {studentData.status == 'error' && <p className='text-danger'>Something went Wrong</p>}
                    <div className='card'>
                        <h5 className='card-header'>User Register</h5>
                        <div className='card-body'>
                       
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Full Name</label>
                                <input type="text" value={studentData.full_name} name='full_name'  onChange={handleChange}  className="form-control"></input>
        
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" value={studentData.email} name='email'  onChange={handleChange}  className="form-control"></input>
        
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Username</label>
                                <input type="text" value={studentData.username} name='username' onChange={handleChange}  className="form-control"></input>
        
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={studentData.password} name='password' onChange={handleChange}  className="form-control" id="exampleInputPassword1"></input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">interested_categories</label>
                                <textarea value={studentData.interested_categories} name='interested_categories' onChange={handleChange}  className="form-control"></textarea>
                                <div id="emailHelp" className="form-text">Php,Python,Javascript,Java,C++,etc</div>
                                
                            </div>
                            
                            <button type="submit" onClick={submitForm} className="btn btn-primary">Register</button>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Register;