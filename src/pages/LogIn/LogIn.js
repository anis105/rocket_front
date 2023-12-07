import {React, useState} from 'react';
import {Button, Checkbox, Form, Input, message} from 'antd';
import {useNavigate} from "react-router-dom";

// This function is used to set the value of a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

const Login = ({onLogin}) => {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // When the form is submitted, this function will be called
    const onFinish = async (values) => {
        // values.preventDefault();
        setError('');
        try {
            // Fetch data of the user if authentication is successful
            const response = await fetch(`http://localhost:8081/api/users/authenticate?userEmail=${values.userEmail}&password=${values.password}`);
            if (response.ok) {
                const data = await response.json();
                setCookie('loggedIn', 'true', 7)
                setCookie('userId', data.userId, 7);
                onLogin(data.userId);
                navigate('/home');
            } else {
                message.error('Login failed. Please check your credentials.');
                setError('Login failed. Please check your credentials.');
                console.log(error)
            }
        } catch (error) {
            console.log(error)
            setError(error.message);
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundImage: 'url(/umd_turtle.png)',
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
                        name="userEmail"
                        rules={[{required: true, message: 'Please enter your e-mail!'},
                            {type: 'email', message: 'Please input a valid email!'}]}
                    >
                        <Input placeholder="E-mail"/>
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

export default Login;
