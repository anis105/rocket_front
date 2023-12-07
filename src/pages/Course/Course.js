import React from 'react';
import {Layout} from 'antd';
import {CourseNavBar} from "../../components/CourseNavBar";
import {useParams} from "react-router-dom";


const {Header, Content, Footer} = Layout;

const Course = () => {
    const {courseId} = useParams();
    return (
        <Layout className="layout">
            <div className="demo-logo"/>
            <CourseNavBar/>
            <Content style={{padding: '0 50px',}}>
                <div className="site-layout-content">
                    {courseId}
                    {/*{activeMenu}*/}
                </div>
            </Content>
        </Layout>
    );
};
export default Course;