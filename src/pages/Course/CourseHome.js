import React from 'react';
import {Typography} from "antd";

const {Title, Text} = Typography;

const CourseHome = ({thisCourse}) => {
    return (
        <div className="site-layout-content">
            <Title>{thisCourse.courseName}</Title>
            <Title level={3}>instructed by {thisCourse.instructor.username}</Title>
            <Text>{thisCourse.description}</Text>
        </div>
    );
};
export default CourseHome;