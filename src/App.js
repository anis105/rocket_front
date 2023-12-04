import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Profile from "./pages/Profile/Profile";
import Stats from "./pages/stats/Stats";
import TodoList from "./components/todolist/Todolist";
import Discussion from "./pages/discussion/Discussion";
import { AuthContextProvider } from "./context/AuthContext";
import "./index.css";

import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="home" element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="stats" element={<Stats />} />
              <Route path="discussion" element={<Discussion />} />
              <Route path="todo" element={<TodoList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
