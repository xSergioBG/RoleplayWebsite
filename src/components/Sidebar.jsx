import { Flex, Menu } from "antd";
import { FaLeaf } from "react-icons/fa6";
import {
  UserOutlined,
  ProfileOutlined,
  LoginOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <FaLeaf />
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
            label: <Link to="/">DnD</Link>,
          },
          {
            key: "2",
            icon: <UserOutlined />,
            label: <Link to="/wod">WoD</Link>,
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
