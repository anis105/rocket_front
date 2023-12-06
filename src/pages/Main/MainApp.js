import {React, useState} from 'react';
import {Layout, Typography} from 'antd';
import TodoList from "../TodoList/TodoList";
import Course from "../Course/Course";
import {MainAppSider} from "../../components/MainAppSider";


const {Header, Content, Footer} = Layout;
const {Title} = Typography;

const MainApp = (user) => {
    console.log(user)
    const [activeMenu, setActiveMenu] = useState('1');
    const courses = []

    return (
        <Layout hasSider>
            <MainAppSider courses={courses} setActiveMenu={setActiveMenu}/>
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
export default MainApp;