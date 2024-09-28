import {Link} from 'react-router-dom';
function Header() {
  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
  const studentLoginStatus=localStorage.getItem('studentLoginStatus')
    return (
      <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: 'skyblue'}}>
  <div className="container">
    <a className="navbar-brand" href="#"><b>Domain Dive</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <Link className="nav-link active" aria-current="page" to="/">Home <span className="sr-only"></span></Link>
        <Link className="nav-link" to="/all-courses">Courses</Link>

                  <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Teacher
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          {teacherLoginStatus !='true' &&
                          <li> <Link className="dropdown-item" to="/Teacher-Login">Login</Link></li>
                          }
                          <li> <Link className="dropdown-item" to="/Teacher-Register">Register</Link></li>
                         
                          <li> <Link className="dropdown-item" to="/Teacher-Dashboard">Dashboard</Link></li>
                          <li><a className="dropdown-item" href="/Teacher-logout">Logout</a></li>
                        </ul>
                      </li>


                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            User
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          {studentLoginStatus !='true' &&
                            <li> <Link className="dropdown-item" to="/User-Login">Login</Link></li>
                        }
                            <li> <Link className="dropdown-item" to="/User-Register">Register</Link></li>
                            
                            <li> <Link className="dropdown-item" to="/User-Dashboard">Dashboard</Link></li>
                            <li><a className="dropdown-item" href="/student-logout">Logout</a></li>
                          </ul>
                        </li>   
      </div>
    </div>
  </div>
</nav>
        );
  }
  export default Header;