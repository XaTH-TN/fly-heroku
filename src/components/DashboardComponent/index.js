import { Layout } from "antd";

const { Content } = Layout;

const DashboardComponent = () => {
    return (
        <>
            <Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}
            >
            This is Dashboard
            </Content>
        </>
    )
}

export default DashboardComponent;