import {React, useEffect, useState} from 'react';
import './App.css';
import TodoList from "./pages/TodoList/TodoList";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import MainApp from "./pages/Main/MainApp";
import Dashboard from "./pages/Dashboard/Dashboard";
import Course from "./pages/Course/Course";

// This function is used to get the value of a cookie
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

const App = () => {
    // This state variable is used to store the user ID of the logged in user
    const [user, setUser] = useState(null);

    // This effect runs only once when the app is first rendered
    useEffect(() => {
        const loggedInValue = getCookie('loggedIn');
        const userId = getCookie('userId');

        // Check if the cookie exists and the user is logged in
        if (loggedInValue === 'true') {
            // User is logged in, perform actions accordingly
            console.log('User is logged in.');
            setUser(userId);
        } else {
            // User is not logged in or the cookie doesn't exist
            console.log('User is not logged in.');
        }
    }, []);

    // This function is used to set the user ID of the logged in user
    const onLogin = (userData) => {
        setUser(userData);
    };
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={user ? <MainApp user={user}/> : <LogIn onLogin={onLogin}/>}/>
                    <Route path="/home"
                           element={user ? <MainApp user={user} component={<Dashboard/>}/> : <Navigate to="/"/>}/>
                    <Route path="/course/:courseId"
                           element={user ? <MainApp user={user} component={<Course/>}/> : <Navigate to="/"/>}/>
                    <Route path="/todoList"
                           element={user ? <MainApp user={user} component={<TodoList/>}/> : <Navigate to="/"/>}/>
                </Routes>
            </Router>
        </div>
    );
};
export default App;