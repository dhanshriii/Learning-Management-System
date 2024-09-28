// Main.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import TeacherDetail from './TeacherDetail';
import PopularCourses from './PopularCourses';
import PopularTeachers from './PopularTeachers';
import AllCourses from './AllCourses';
import CategoryCourses from './CategoryCourses';

// User
import CourseDetail from './CourseDetail';
import Login from './Users/Login';
import Register from './Users/Register';
import Dashboard from './Users/Dashboard';
import MyCourse from './Users/MyCourse';
import FavouriteCourse from './Users/FavouriteCourse';
import RecommendedCourse from './Users/RecommendedCourse';
import ProfileSetting from './Users/ProfileSetting';
import ChangePassword from './Users/ChangePassword';

// Teacher
import TeacherLogin from './Teachers/TeacherLogin';
import TeacherLogout from './Teachers/TeacherLogout';
import TeacherRegister from './Teachers/TeacherRegister';
import TeacherDashboard from './Teachers/TeacherDashboard';
import TeacherCourses from './Teachers/TeacherCourses';
import EnrolledStudents from './Teachers/EnrolledStudents';
import AddCourses from './Teachers/AddCourses';
import EditCourse from './Teachers/EditCourse';
import MyUsers from './Teachers/MyUsers';
import ProfileSettings from './Teachers/ProfileSettings';
import Changepass from './Teachers/Changepass';
import AddChapters from './Teachers/AddChapters';
import AllChapters from './Teachers/CourseChapters';
import EditChapter from './Teachers/EditChapter';

//student
import StudentLogout from './Users/StudentLogout';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Main() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:course_id" element={<CourseDetail />} />
          <Route path="/User-Login" element={<Login />} />
          <Route path="/User-Register" element={<Register />} />
          <Route path="/User-Dashboard" element={<Dashboard />} />
          <Route path="/my-course" element={<MyCourse />} />
          <Route path="/favourite-course" element={<FavouriteCourse />} />
          <Route path="/recommended-course" element={<RecommendedCourse />} />
          <Route path="/profile-setting" element={<ProfileSetting />} />
          <Route path="/change-password" element={<ChangePassword />} />

          <Route path="/teacher-Login" element={<TeacherLogin />} />
          <Route path="/teacher-logout" element={<TeacherLogout />} />
          <Route path="/teacher-Register" element={<TeacherRegister />} />
          <Route path="/teacher-Dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher-courses" element={<TeacherCourses />} />
          <Route path="/enrolled-students/:course_id" element={<EnrolledStudents />} />
          <Route path="/add-courses" element={<AddCourses />} />
          <Route path="/my-users" element={<MyUsers />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />
          <Route path="/change-pass" element={<Changepass />} />
          <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail />} />
          <Route path="/popular-courses" element={<PopularCourses />} />
          <Route path="/popular-teachers" element={<PopularTeachers />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/all-chapters/:course_id" element={<AllChapters />} />
          <Route path="/add-chapters/:course_id" element={<AddChapters />} />
          <Route path="/category/:category_slug" element={<CategoryCourses />} />
          <Route path="/edit-chapter/:chapter_id" element={<EditChapter />} />
          <Route path="/edit-course/:course_id" element={<EditCourse />} />

          <Route path="/student-logout" element={<StudentLogout />} />


        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

// Use createRoot from react-dom/client
createRoot(document.getElementById('root')).render(<Main />);

export default Main;
