import {useState, React} from 'react';
import {
    DashboardOutlined,
    UnorderedListOutlined,
    MailOutlined,
    BookOutlined, LogoutOutlined,
} from '@ant-design/icons';
import {Layout, Menu, Typography} from 'antd';
import './App.css';
import TodoList from "./pages/TodoList/TodoList";
import Course from "./pages/Course/Course";


const {Header, Content, Footer, Sider} = Layout;
const {Title} = Typography;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('DashBoard', '1', <DashboardOutlined/>),
    getItem('Courses', '2', <UnorderedListOutlined/>, [
        getItem('Course 1', '2-1'),
        getItem('Course 2', '2-2'),
        getItem('Course 3', '2-3'),
    ]),
    getItem('Todo List', '3', <BookOutlined/>),
    getItem('Inbox', '4', <MailOutlined/>),
    getItem('Logout', '5', <LogoutOutlined/>)
];

const App = () => {
    const [activeMenu, setActiveMenu] = useState('1');

    const onMenuClick = (e) => {
        setActiveMenu(e.key);
    };

    return (
        <Layout hasSider>
            <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}>
                <div className="sidebar-logo">
                    <img src={require("./assets/img.png")} alt="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} onClick={onMenuClick}/>
                </div>
            </Sider>

            {/*<Router>*/}
            <Layout className="site-layout" style={{marginLeft: 200,}}>
                <Header style={{padding: 0,}}>
                    <Title style={{color: "white", marginLeft: 20,}} level={2}>EduMorph</Title>
                </Header>
                <Content style={{margin: '24px 16px 0', overflow: 'initial',}}>
                    {/*<Switch>*/}
                    {/*    <Route path="/" exact element={<App/>}/>*/}
                    {/*    <Route path="/components/Course" element={<Course/>}/>*/}
                    {/*    <Route path="/components/TodoList" element={<TodoList/>}/>*/}
                    {/*</Switch>*/}
                    {activeMenu === '2-1' && <Course parameter={activeMenu}/>}
                    {activeMenu === '3' && <TodoList/>}
                </Content>
                <Footer style={{textAlign: 'center',}}>
                    EduMorph ©2023 Created by Team Rocket
                </Footer>
            </Layout>
            {/*</Router>*/}
        </Layout>
    );
};
export default App;