import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';

function Changepass(){
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3"> 
                <TeacherSidebar/>
                </aside>
                <section className="col-md-9">
                <div className='card'>
                        <h5 className='card-header'>Change Password</h5>
                        <div className='card-body'>
                        <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">NewPassword</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword"/>
                    </div>
                    <div className="mb-3 row"></div>
                    <hr/>
                    <button className='btn btn-primary'>Update</button>
                </div>
                </div>  
                </div>  
                </section>
            </div>
        </div>
    )

}

export default Changepass;