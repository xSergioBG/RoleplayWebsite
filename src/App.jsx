import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Button, Flex } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useState } from "react";

import { Sidebar } from "./components/Sidebar";
import CustomHeader from "./components/Header";
import MainContent from "./pages/MainContent";
import Wod from "./pages/Wod";
import "./App.css";

const { Sider, Header, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <BrowserRouter>
        <Sider
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="sider"
        >
          <Sidebar />

          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="triger-btn"
          />
        </Sider>
        <Layout>
          <Header className="header">
            <CustomHeader />
          </Header>
          <Content className="content">
            <Flex gap="large">
              {/* Definir las rutas aquí*/}
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/wod" element={<Wod />} />
              </Routes>
            </Flex>
          </Content>
        </Layout>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
