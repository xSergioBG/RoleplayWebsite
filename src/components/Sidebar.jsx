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
            label: "Dungeons & Dragons 5e",
          },
          {
            key: "2",
            icon: <ProfileOutlined />,
            label: "Vampire: The Masquerade 5e",
          },
          {
            key: "3",
            icon: <LoginOutlined />,
            label: "User Management",
          },
          {
            key: "4",
            icon: <OrderedListOutlined />,
            label: "Tasks List",
          },
          {
            key: "5",
            icon: <CarryOutOutlined />,
            label: "Tasks Management",
          },
          {
            key: "6",
            icon: <SettingOutlined />,
            label: "Settings",
          },
        ]}
      />
    </>
  );
};
