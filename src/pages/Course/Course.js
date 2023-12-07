import React, {useEffect, useState} from 'react';
import {Layout} from 'antd';
import {CourseNavBar} from "../../components/CourseNavBar";
import {useParams} from "react-router-dom";
import CourseHome from "./CourseHome";
import CourseMaterial from "./CourseMaterial";
import CourseAssignment from "./CourseAssignment";

const {Header, Content, Footer} = Layout;

const Course = () => {
    const {courseId} = useParams();
    const [thisCourse, setThisCourse] = useState(null);
    const [coursePage, setCoursePage] = useState('1');

    useEffect(() => {
        // setCoursePage('1')
        const getCourse = async () => {
            try {
                const response = await fetch(`http://localhost:8081/api/courses/${courseId}`);
                if (response.ok) {
                    const data = await response.json();
                    setThisCourse(data);
                } else {
                    console.log("error");
                }
            } catch (error) {
                console.log(error);
            }
        };
        getCourse();
    }, [coursePage]);
    console.log("coursePage", coursePage);
    console.log("thisCourse", thisCourse)
    console.log("courseId", courseId)
    return (
        <Layout className="layout">
            <div className="demo-logo"/>
            <CourseNavBar setCoursePage={setCoursePage}/>
            <Content style={{padding: '0 50px',}}>
                <div className="site-layout-content">
                    {(coursePage === '1' && thisCourse) ? (
                        <CourseHome thisCourse={thisCourse}/>
                    ) : (
                        <p></p> // or any other fallback content
                    )}
                    {(coursePage === '2' && thisCourse) ? (
                        <CourseMaterial thisCourse={thisCourse}/>
                    ) : (
                        <p></p> // or any other fallback content
                    )}
                    {(coursePage === '3' && thisCourse) ? (
                        <CourseAssignment thisCourse={thisCourse}/>
                    ) : (
                        <p></p> // or any other fallback content
                    )}
                </div>
            </Content>
        </Layout>
    );
};
export default Course;