//import React from 'react'
import { Layout, Button, Flex } from "antd";
import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import CustomHeader from "./components/Header";
import "./App.css";
import MainContent from "./components/MainContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wod from "./pages/Wod";

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
              {/* <MainContent /> */}
              {/* <SideContent /> */}
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
