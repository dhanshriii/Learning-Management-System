
function TeacherLogout(){
    localStorage.removeItem('teacherLoginStatus')
    window.location.href = '/Teacher-Login';
    

    return(
        <div></div>
    );
}

export default TeacherLogout;