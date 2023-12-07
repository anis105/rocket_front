import React, {useEffect, useState} from 'react';
import {Layout} from 'antd';
import {CourseNavBar} from "../../components/CourseNavBar";
import {useParams} from "react-router-dom";
import CourseHome from "./CourseHome";
import CourseMaterial from "./CourseMaterial";
import CourseAssignment from "./CourseAssignment";

const {Content} = Layout;

const Course = () => {
    const {courseId} = useParams();
    const [thisCourse, setThisCourse] = useState(null);
    const [coursePage, setCoursePage] = useState('1');

    useEffect(() => {
        // To get the course information by courseId
        const getCourse = async () => {
            try {
                const response = await fetch(`http://ec2-18-220-170-81.us-east-2.compute.amazonaws.com:8081/api/courses/${courseId}`);
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
        getCourse().then(r => console.log(r));
    }, [courseId, thisCourse, coursePage]);
    return (
        <Layout className="layout">
            <div className="demo-logo"/>
            <CourseNavBar setCoursePage={setCoursePage}/>
            <Content style={{padding: '0 50px',}}>
                <div className="site-layout-content">
                    {/*Change course content according to nav bar selection*/}
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