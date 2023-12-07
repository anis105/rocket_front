import React from 'react';
import {Typography} from "antd";

const {Title, Text} = Typography;

const CourseHome = ({thisCourse}) => {
    return (
        <div className="site-layout-content1">
            <Title>{thisCourse.courseName}</Title>
            <Text>by {thisCourse.description}</Text>
        </div>
    );
};
export default CourseHome;