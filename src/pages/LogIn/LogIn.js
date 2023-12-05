import React from 'react';
import {Button, Checkbox, Form, Input} from 'antd';

const LoginPage = () => {
    const onFinish = (values) => {
        // Handle login logic here
        console.log('Received values:', values);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: 'url("path-to-your-background-image.jpg")',
                backgroundSize: 'cover',
            }}
        >
            <div style={{
                width: 300,
                padding: 20,
                border: '1px solid #d9d9d9',
                borderRadius: 4,
                backgroundColor: 'white'
            }}>
                <h2 style={{textAlign: 'center', marginBottom: 20}}>EduMorph</h2>
                <Form name="login" initialValues={{remember: true}} onFinish={onFinish}>
                    <Form.Item
                        name="username"
                        rules={[{required: true, message: 'Please input your username!'}]}
                    >
                        <Input placeholder="Username"/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password placeholder="Password"/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                            Log In
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;
