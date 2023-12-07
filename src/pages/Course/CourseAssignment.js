import React, {useEffect, useState} from 'react';
import {Card, Typography} from "antd";

const {Title, Text} = Typography;

const CourseAssignment = ({thisCourse}) => {
    const [assignment, setAssignment] = useState(null); // [content, setContent]
    const fetchAssignment = async () => {
        try {
            const response = await fetch(`http://localhost:8081/api/assignments/byCourse/${thisCourse.courseId}`);
            if (response.ok) {
                const data = await response.json();
                setAssignment(data);
            } else {
                console.log('Error');
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchAssignment();
    }, [thisCourse]);
    console.log("assignment", assignment)
    return (
        <div className="site-layout-content">
            <Title>{thisCourse.courseName}</Title>
            <Title level={3}>instructed by {thisCourse.instructor.username}</Title>
            {assignment ? (
                <div>
                    {/* Render your content here using the 'content' state */}
                    {assignment.map((item) => (
                        <Card key={item.assignmentId} title={item.title}>
                            {item.description} <br/>
                            {item.dueDate}
                        </Card>
                    ))}
                </div>
            ) : (
                <p>123</p>
            )}
        </div>
    );
};
export default CourseAssignment;