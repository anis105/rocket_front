import React from 'react';
import {
    DashboardOutlined,
    UnorderedListOutlined,
    MailOutlined,
    BookOutlined,
} from '@ant-design/icons';
import {Layout, Menu, Typography} from 'antd';
import './App.css';
import TodoList from "./Components/TodoList/TodoList";


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
        getItem('Course 1', 'sub2-1'),
        getItem('Course 2', 'sub2-2'),
        getItem('Course 3', 'sub2-3'),
    ]),
    getItem('Todo List', '3', <BookOutlined/>),
    getItem('Inbox', '4', <MailOutlined/>),
    // getItem(
    //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
    //         Ant Design
    //     </a>,
    //     'link',
    //     <LinkOutlined />,
    // ),
];
const App = () => {
    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    alignContent: "center",
                }}
            >
                <div className="sidebar-logo">
                    <img
                        src={require("./Assets/img.png")}
                        alt="logo"
                    />
                    {/*<Title style={{color: "white", marginLeft: 5,}} level={1}>EduMorph</Title>*/}
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items}/>
            </Sider>
            <Layout
                className="site-layout"
                style={{
                    marginLeft: 200,
                }}
            >
                <Header
                    style={{
                        padding: 0,
                        // background: colorBgContainer,
                    }}
                >
                    <Title style={{color: "white", marginLeft: 20,}} level={2}>EduMorph</Title>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px 0',
                        overflow: 'initial',
                    }}
                >
                    #TODO: Fix the style issue
                    #TODO: Add switch/router to change page content
                    {/*<TodoList/>*/}
                    {/*<div*/}
                    {/*    style={{*/}
                    {/*        padding: 24,*/}
                    {/*        textAlign: 'center',*/}
                    {/*        // background: colorBgContainer,*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <p>long content</p>*/}
                    {/*    {*/}
                    {/*        // indicates very long content*/}
                    {/*        Array.from(*/}
                    {/*            {*/}
                    {/*                length: 100,*/}
                    {/*            },*/}
                    {/*            (_, index) => (*/}
                    {/*                <React.Fragment key={index}>*/}
                    {/*                    {index % 20 === 0 && index ? 'more' : '...'}*/}
                    {/*                    <br/>*/}
                    {/*                </React.Fragment>*/}
                    {/*            ),*/}
                    {/*        )*/}
                    {/*    }*/}
                    {/*</div>*/}
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;