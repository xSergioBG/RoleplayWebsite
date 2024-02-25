import { Flex } from "antd";
import Banner from "./Banner";

const MainContent = () => {
  return (
    <div>
      <div style={{ flex: 1 }}>
        <Flex vertical gap="2.3rem">
          <Banner />
        </Flex>
      </div>
    </div>
  );
};

export default MainContent;
