import {Menu} from "antd";
import React from "react";

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


export function CourseNavBar({setCoursePage}) {
    const onMenuClick = (e) => {
        setCoursePage(e.key);
    };
    return (
        <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={items}
            onClick={onMenuClick}
        />
    )
}