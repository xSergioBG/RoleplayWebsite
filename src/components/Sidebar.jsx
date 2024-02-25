import { Flex, Menu } from "antd";
import { GiDiceTarget } from "react-icons/gi";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import React from "react";
import "./Sidebar.css"; // Importa el archivo CSS donde definiremos la animación

export const Sidebar = () => {
  return (
    <>
      <Flex justify="center">
        <div className="logo" style={{ fontSize: "7em" }}>
          <GiDiceTarget className="dice-icon" />
        </div>
      </Flex>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: <Link to="/">Create sheet</Link>,
          },
          {
            key: "2",
            icon: <UserOutlined />,
            label: <Link to="/wod">All characters</Link>,
          },
          {
            key: "3",
            icon: <UserOutlined />,
            label: "Pf2",
          },
          {
            key: "4",
            icon: <UserOutlined />,
            label: "Character Management",
          },
          {
            key: "5",
            icon: <UserOutlined />,
            label: "Combat Tracker",
          },
          {
            key: "6",
            icon: <UserOutlined />,
            label: "Map Management",
          },
        ]}
      />
    </>
  );
};
