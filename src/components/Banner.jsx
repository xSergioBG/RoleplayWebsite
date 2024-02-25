import { Card, Typography, Flex, Button } from "antd";

const Banner = () => {
  return (
    <Card style={{ height: 260, padding: "20px" }}>
      <Flex vertical gap="30px">
        <Flex vertical align="flex-start">
          <Typography.Title level={2} strong>
            Create and sell products
          </Typography.Title>
          <Typography.Text type="secondary" strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            numquam iure sed debitis voluptas sunt qui officiis saepe, provident
            tempore iusto ipsam! Quam sit voluptas asperiores harum a, dolorem
            perspiciatis.
          </Typography.Text>
        </Flex>
        <Flex gap="large">
          <Button type="primary" size="large">
            Explore More
          </Button>
          <Button size="large">Top Sellers</Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Banner;
