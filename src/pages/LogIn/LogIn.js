import {React, useState} from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import {useNavigate} from "react-router-dom";


function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

const Login = ({onLogin}) => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const onFinish = async (values) => {
        // values.preventDefault();
        setError('');
        try {
            // const response = await axios.post('http://localhost:8080/api/auth/login', values);
            // if (response.data.id) {
            //     // Authentication successful
            //     // localStorage.setItem('token', response.data.token); // if to implement token based auth
            //     document.cookie = `user=${JSON.stringify(response.data.user)}; Path=/; HttpOnly`;
            //
            // } else {
            //     // Authentication failed
            //     message.error('Login failed. Please check your credentials.');
            // }
            setCookie('loggedIn', 'true', 7)
            setCookie('username', values.username, 7);
            onLogin(values);
            navigate('/home');
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
                        name="username"
                        rules={[{required: true, message: 'Please enter your e-mail!'},
                            {type: 'email', message: 'Please input a valid email!'}]}
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

export default Login;
