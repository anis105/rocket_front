import React, { useState } from 'react';
import {
    DashboardOutlined,
    UnorderedListOutlined,
    MailOutlined,
    BookOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';
import './App.css';
import TodoList from "./Components/TodoList/TodoList";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function getItem(label, key, icon) {
    return {
        key,
        icon,
        label,
    };
}

const items = [
    getItem('DashBoard', '1', <DashboardOutlined />),
    getItem('Courses', '2', <UnorderedListOutlined />),
    getItem('Todo List', '3', <BookOutlined />),
    getItem('Inbox', '4', <MailOutlined />),
];

const App = () => {
    const [activeMenu, setActiveMenu] = useState('1');

    const onMenuClick = (e) => {
        setActiveMenu(e.key);
    };

    return (
        <Layout hasSider>
            <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}>
                {/* ... Sider content ... */}
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} onClick={onMenuClick}/>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                {/* ... Header and other content ... */}
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    {activeMenu === '3' && <TodoList />}
                    {/* Other content based on activeMenu */}
                </Content>
                {/* ... Footer ... */}
            </Layout>
        </Layout>
    );
};
export default App;
