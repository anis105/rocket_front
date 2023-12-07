import {React} from 'react';
import {Layout, Typography} from 'antd';
import {MainAppSider} from "../../components/MainAppSider";


const {Header, Content, Footer} = Layout;
const {Title} = Typography;


const MainApp = ({user, component}) => {
    return (
        <Layout hasSider>
            <MainAppSider user={user}/>
            <Layout className="site-layout" style={{marginLeft: 200,}}>
                <Header style={{padding: 0,}}>
                    <Title style={{color: "white", marginLeft: 20,}} level={2}>EduMorph</Title>
                </Header>
                <Content style={{margin: '24px 16px 0', overflow: 'initial',}}>
                    {component}
                </Content>
                <Footer style={{textAlign: 'center',}}>
                    EduMorph ©2023 Created by Team Rocket
                </Footer>
            </Layout>
        </Layout>
    );
};
export default MainApp;