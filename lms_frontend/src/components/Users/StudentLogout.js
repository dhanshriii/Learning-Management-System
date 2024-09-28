
function StudentLogout(){
    localStorage.removeItem('studentLoginStatus')
    window.location.href = '/User-Login';
    

    return(
        <div></div>
    );
}

export default StudentLogout;