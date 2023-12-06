import {React, useEffect, useState} from 'react';
import './App.css';
import TodoList from "./pages/TodoList/TodoList";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import MainApp from "./pages/Main/MainApp";


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
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInValue = getCookie('loggedIn');

        if (loggedInValue === 'true') {
            // User is logged in, perform actions accordingly
            console.log('User is logged in.');
            const username = getCookie('username');
            setUser({username})
        } else {
            // User is not logged in or the cookie doesn't exist
            console.log('User is not logged in.');
        }
    }, []);

    const onLogin = (userData) => {
        setUser(userData);
    };
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={user ? <MainApp user={user}/> : <LogIn onLogin={onLogin}/>}/>
                    <Route path="/home" element={user ? <MainApp user={user}/> : <Navigate to="/"/>}/>
                    {/*<Route path="profile" element={<Profile />} />*/}
                    {/*<Route path="stats" element={<Stats />} />*/}
                    {/*<Route path="discussion" element={<Discussion />} />*/}
                    <Route path="./pages/TodoList/TodoList" element={<TodoList/>}/>>
                </Routes>
            </Router>
        </div>
    );
};
export default App;