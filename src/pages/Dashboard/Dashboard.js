import React from 'react';
import {Layout} from 'antd';


const {Content} = Layout;

const Dashboard = () => {
    return (
        <Layout className="layout">
            <div className="demo-logo"/>
            <Content style={{padding: '0 50px',}}>
                <div className="site-layout-content">
                    Dashboard here
                    {/*{activeMenu}*/}
                </div>
            </Content>
        </Layout>
    );
};
export default Dashboard;