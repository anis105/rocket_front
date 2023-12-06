import {BookOutlined, DashboardOutlined, LogoutOutlined, MailOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {React} from "react";
import {Button, Layout, Menu} from "antd";
import {useNavigate} from "react-router-dom";

const {Sider} = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const courses = [
    {course_id: 1, course_name: 'Course 1'},
    {course_id: 2, course_name: 'Course 2'},
    {course_id: 3, course_name: 'Course 3'}
];

function coursesItems(courses) {
    const coursesItems = courses.map(course =>
        getItem(course.course_name, '2-' + course.course_id))
    return coursesItems;
}

const items = [
    getItem('DashBoard', '1', <DashboardOutlined/>),
    getItem('Courses', '2', <UnorderedListOutlined/>, coursesItems(courses)),
    getItem('Todo List', '3', <BookOutlined/>),
    getItem('Inbox', '4', <MailOutlined/>),
];

export function MainAppSider({courses, setActiveMenu}) {
    const navigate = useNavigate();
    const onLogout = () => {
        // Remove the user cookie
        document.cookie = 'loggedIn=; username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        navigate('/');
        window.location.reload();
        // Perform other logout actions
    };

    const onMenuClick = (e) => {
        setActiveMenu(e.key);
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