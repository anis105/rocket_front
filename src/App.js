import {React} from 'react';
import './App.css';
import TodoList from "./pages/TodoList/TodoList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="/" element={<LogIn/>}/>
                        {/*<Route path="home" element={<Home />} />*/}
                        {/*<Route path="profile" element={<Profile />} />*/}
                        {/*<Route path="stats" element={<Stats />} />*/}
                        {/*<Route path="discussion" element={<Discussion />} />*/}
                        <Route path="./pages/TodoList/TodoList" element={<TodoList/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;