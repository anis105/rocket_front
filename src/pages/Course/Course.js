import React from 'react';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {CourseNavBar} from "../../components/CourseNavBar";


const {Header, Content, Footer} = Layout;

const Course = ({activeMenu}) => {
    return (
        <Layout className="layout">
            <div className="demo-logo"/>
            <CourseNavBar/>
            <Content style={{padding: '0 50px',}}>
                <div className="site-layout-content">

                    {/*{activeMenu}*/}
                </div>
            </Content>
        </Layout>
    );
};
export default Course;