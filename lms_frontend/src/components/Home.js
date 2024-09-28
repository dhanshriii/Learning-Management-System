import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api';
function Home() {
  const [courseData,setCourseData]=useState([]);
  // Fetch courses when page loads
  useEffect(() => {
      axios.get(baseUrl + '/course/?result=4')
          .then((res) => {
              setCourseData(res.data);
          })
          .catch((error) => {
              console.error('Error occurred:', error);
          });
  }, []);

    return (
    
<div className="container mt-4">
  {/*LATEST COURSES*/}
  <div className="text-center mb-4">
                <h4 className="pb-1"><b>WEL-COME TO DOMAIN DIVE</b></h4>
                <p><i>"Better than a thousand days of diligent study is one day with a great teacher."</i></p>
                <img src="/home.jpg" className="img-fluid mt-2" alt="Cover Image" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            </div>
  <h3 className="pb-1 mb-4">Latest Courses<Link to="all-courses" className="float-end">See All</Link></h3>
  <div className="row mb-4">
  {courseData && courseData.map((course,index) => (
    <div className="col-md-3 mb-4" key={index}>
        <div className="card">
            <Link to={`/detail/${course.id}`}>
                <img src={course.featured_img} className="card-img-top" alt={course.title} style={{ height: '200px', objectFit: 'cover' }}/>
            </Link>
            <div className="card-body">
                <h5 className="Card Title">
                    <Link to={`/detail/${course.id}`}>{course.title}</Link>
                </h5>
            </div>
        </div>
    </div>
))}

 </div>
  {/* end LATEST COURSES*/}
  {/*POPULAR COURSES*/}
  <h3 className="pb-1 mb-4">Popular Courses<Link to="popular-courses" className="float-end">See All</Link></h3>
  <div className="row mb-4">
   <div className="col-md-3">
   <div className="card">
      <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
  <div className="card-body">
    <h5 className="Card Title"><a href="#">Course Title</a></h5>
  </div>
</div>
</div>
<div className="col-md-3">
   <div className="card">
      <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
  <div className="card-body">
    <h5 className="Card Title"><a href="#">Course Title</a></h5>
  </div>
</div>
</div>
<div className="col-md-3">
   <div className="card">
      <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
  <div className="card-body">
    <h5 className="Card Title"><a href="#">Course Title</a></h5>
  </div>
</div>
</div>
<div className="col-md-3">
   <div className="card">
      <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
  <div className="card-body">
    <h5 className="Card Title"><a href="#">Course Title</a></h5>
  </div>
</div>
</div>
</div>
{/* end POPULAR COURSES*/}
  {/*POPULAR Teachers*/}
  <h3 className="pb-1 my-4">Popular Teacher<Link to="popular-teachers" className="float-end">See All</Link></h3>
  <div className="row mb-4">
   <div className="col-md-3">
   <div className="card">
      <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
  <div className="card-body">
    <h5 className="Card Title"><a href="#">Teacher Name</a></h5>
  </div>
</div>
</div>
<div className="col-md-3">
   <div className="card">
      <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
  <div className="card-body">
    <h5 className="Card Title"><a href="#">Teacher Name</a></h5>
  </div>
</div>
</div>
<div className="col-md-3">
   <div className="card">
      <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
  <div className="card-body">
    <h5 className="Card Title"><a href="#">Teacher Name</a></h5>
  </div>
</div>
</div>
<div className="col-md-3">
   <div className="card">
      <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
  <div className="card-body">
    <h5 className="Card Title"><a href="#">Teacher Name</a></h5>
  </div>
</div>
</div>
</div>
{/* end POPULAR Teacher*/}
  {/*Student Testimonial*/}
  <h3 className="pb-1 my-4">Student Testimonial</h3>
  <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <figure className="text-center">
  <blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
    </div>
    <div className="carousel-item">
    <figure className="text-center">
  <blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
    </div>
    <div className="carousel-item">
    <figure className="text-center">
  <blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  {/* Student Testimonial*/}
    </div>
        );
  }
  export default Home;