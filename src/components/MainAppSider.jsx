import {BookOutlined, DashboardOutlined, LogoutOutlined, MailOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {React, useEffect, useState} from "react";
import {Button, Layout, Menu} from "antd";
import {useNavigate} from "react-router-dom";

const {Sider} = Layout;

// Constructor of a menu item
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

// Sider component of the main app
export function MainAppSider({user}) {
    const [courses, setLocalCourses] = useState([]); // Local state to hold courses
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch courses from the server of a given user
        const getCourses = async () => {
            try {
                const response = await fetch(`http://localhost:8081/api/enrollments/byUser/${user}`);
                if (response.ok) {
                    const data = await response.json();
                    const coursesIds = data.map(item => item.courseId);
                    const fetchedCourses = await Promise.all(coursesIds.map(async courseId => {
                        // Fetch course details for each course in courses
                        try {
                            const response = await fetch(`http://localhost:8081/api/courses/${courseId}`);
                            if (response.ok) {
                                return await response.json();
                            } else {
                                console.log("error")
                            }
                        } catch (error) {
                            console.log(error)
                        }
                    }));
                    setLocalCourses(fetchedCourses);
                } else {
                    console.log("error")
                }
            } catch (error) {
                console.log(error)
            }
        };
        getCourses().then(r => console.log(r));
    }, [user]);


    const onLogout = () => {
        // Remove the user cookie on logout
        document.cookie = 'loggedIn=; userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        navigate('/');
        window.location.reload();
    };

    // Create a menu item for each course
    function coursesItems(courses) {
        return courses.map(course =>
            getItem(course.courseName, '2-' + course.courseId));
    }

    // Create menu items
    const items = [
        getItem('DashBoard', '1', <DashboardOutlined/>),
        getItem('Courses', '2', <UnorderedListOutlined/>, coursesItems(courses)),
        getItem('Todo List', '3', <BookOutlined/>),
        getItem('Inbox', '4', <MailOutlined/>),
    ];

    // Handle menu item click
    const onMenuClick = (e) => {
        const key = e.key;
        if (key.startsWith('2-')) {
            const courseId = key.split('-')[1];
            // setCourseId(courseId);
            navigate(`/course/${courseId}`);
        } else if (key === '1') {
            navigate('/home');
        } else if (key === '3') {
            navigate('/todoList');
        }
    };

    return (
        <Sider style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0}}>
            <div className="sidebar-logo">
                <img src={require("../assets/img.png")} alt="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} onClick={onMenuClick}/>
            </div>

            <div className="logout" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)'
            }}>
                <Button type="primary" icon={<LogoutOutlined/>} size="large" onClick={onLogout}>
                    Log Out
                </Button>
            </div>
        </Sider>
    )
}