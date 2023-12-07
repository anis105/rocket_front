import React, {useEffect, useState} from 'react';
import {Card, Typography} from "antd";

const {Title} = Typography;

const CourseMaterial = ({thisCourse}) => {
    const [content, setContent] = useState(null); // [content, setContent]
    const fetchContent = async () => {
        // To get the content information by courseId
        try {
            const response = await fetch(`http://0.0.0.0:8081/api/content/byCourse/${thisCourse.courseId}`);
            if (response.ok) {
                const data = await response.json();
                setContent(data);
            } else {
                console.log('Error');
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchContent().then(r => console.log(r));
    }, [thisCourse]);

    return (
        <div className="site-layout-content">
            <Title>{thisCourse.courseName}</Title>
            <Title level={3}>instructed by {thisCourse.instructor.username}</Title>
            {content ? (
                <div>
                    {/* Render your content here using the 'content' state */}
                    {content.map((item) => (
                        <Card key={item.contentId} title={item.contentName}>
                            {item.content}
                        </Card>
                    ))}
                </div>
            ) : (
                <p>123</p>
            )}
        </div>
    );
};
export default CourseMaterial;