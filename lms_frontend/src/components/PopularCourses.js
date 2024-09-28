import {Link} from 'react-router-dom';
function PopularCourses(){
    return(
        <div className="container mt-4">
        {/*LATEST COURSES*/}
       
                        <h3 className="pb-1 mb-4">Popular Courses</h3>
                        <div className="row mb-4">
                            <div className="col-md-3 mb-4">
                                <div className="card">
                                    <Link to="/detail/1"><img src="DataScience.jpg" className="card-img-top" alt="..."/></Link>
                                    <div className="card-body">
                                    <h5 className="Card Title"><Link to="/detail/1">Course Title</Link></h5>
                                    </div>
                                    <div className='card-footer'>
                                        <div className='title'>
                                            <span>Rating : 4.5/5</span> 
                                            <span className='float-end'>views : 123</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="card">
                                    <Link to="/detail/1"><img src="DataScience.jpg" className="card-img-top" alt="..."/></Link>
                                    <div className="card-body">
                                    <h5 className="Card Title"><Link to="/detail/1">Course Title</Link></h5>
                                    </div>
                                    <div className='card-footer'>
                                        <div className='title'>
                                            <span>Rating : 4.5/5</span> 
                                            <span className='float-end'>views : 123</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                         <div className="col-md-3 mb-4">
                                <div className="card">
                                    <Link to="/detail/1"><img src="DataScience.jpg" className="card-img-top" alt="..."/></Link>
                                    <div className="card-body">
                                    <h5 className="Card Title"><Link to="/detail/1">Course Title</Link></h5>
                                    </div>
                                    <div className='card-footer'>
                                        <div className='title'>
                                            <span>Rating : 4.5/5</span> 
                                            <span className='float-end'>views : 123</span> 
                                        </div>
                                    </div>
                                </div>
                         </div>

                        <div className="col-md-3 mb-4">
                                <div className="card">
                                    <Link to="/detail/1"><img src="DataScience.jpg" className="card-img-top" alt="..."/></Link>
                                    <div className="card-body">
                                    <h5 className="Card Title"><Link to="/detail/1">Course Title</Link></h5>
                                    </div>
                                    <div className='card-footer'>
                                        <div className='title'>
                                            <span>Rating : 4.5/5</span> 
                                            <span className='float-end'>views : 123</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                        <div className="col-md-3 mb-4">
                                <div className="card">
                                    <Link to="/detail/1"><img src="DataScience.jpg" className="card-img-top" alt="..."/></Link>
                                    <div className="card-body">
                                    <h5 className="Card Title"><Link to="/detail/1">Course Title</Link></h5>
                                    </div>
                                    <div className='card-footer'>
                                        <div className='title'>
                                            <span>Rating : 4.5/5</span> 
                                            <span className='float-end'>views : 123</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-4">
                                <div className="card">
                                    <Link to="/detail/1"><img src="DataScience.jpg" className="card-img-top" alt="..."/></Link>
                                    <div className="card-body">
                                    <h5 className="Card Title"><Link to="/detail/1">Course Title</Link></h5>
                                    </div>
                                    <div className='card-footer'>
                                        <div className='title'>
                                            <span>Rating : 4.5/5</span> 
                                            <span className='float-end'>views : 123</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-4">
                                <div className="card">
                                    <Link to="/detail/1"><img src="DataScience.jpg" className="card-img-top" alt="..."/></Link>
                                    <div className="card-body">
                                    <h5 className="Card Title"><Link to="/detail/1">Course Title</Link></h5>
                                    </div>
                                    <div className='card-footer'>
                                        <div className='title'>
                                            <span>Rating : 4.5/5</span> 
                                            <span className='float-end'>views : 123</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end LATEST COURSES*/}

                            {/* Pagination start */}
        <nav aria-label="Page navigation example mb-4">
            <ul className="pagination justify-content-center">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        </nav>
         {/**End */}  

                        </div>      
    );
}

export default PopularCourses;