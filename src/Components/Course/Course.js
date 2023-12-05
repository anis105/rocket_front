import React from 'react';
import {Breadcrumb, Layout, Menu, theme} from 'antd';


const {Header, Content, Footer} = Layout;

function getItem(label, key) {
    return {
        key,
        label,
    };
}

const items = [
    getItem('Home', '1'),
    getItem('Materials', '2'),
    getItem('Assignments', '3'),
    getItem('Quizzes', '4'),
    getItem('Grades', '5'),
    getItem('Discussion Forum', '6'),
]

const Course = ({activeMenu}) => {
    return (
        <Layout className="layout">
            <div className="demo-logo"/>
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={items}
            />
            <Content style={{padding: '0 50px',}}>
                <div className="site-layout-content">

                    {activeMenu}
                </div>
            </Content>
        </Layout>
    );
};
export default Course;