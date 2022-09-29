import React from "react";
import { Menu, Col, Row, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  CrownOutlined,
} from "@ant-design/icons";
import Cryptocurrencies from "./Cryptocurrencies";

const Navbar = () => {
  const navItems = [
    {
      label: "Home",
      icon: <HomeOutlined />,
      key: "item-1",
      path: "/",
    },
    {
      label: "Cryptocurrencies",
      icon: <FundOutlined />,
      key: "item-2",
    },
    { label: "Exchanges", icon: <MoneyCollectOutlined />, key: "item-3" },
    { label: "News", icon: <BulbOutlined />, key: "item-4" },
  ];
  return (
    <>
      <Row>
        <Col span={8}>
          <div className="logo-container">
            <Avatar
              size={{ xs: 24, sm: 32, md: 30, lg: 30, xl: 40, xxl: 40 }}
              icon={<CrownOutlined />}
            />
            <Typography.Title level={2}>
              <Link to="/"> Crypto Redux </Link>{" "}
            </Typography.Title>
          </div>
        </Col>
        <Col span={16}>
          {/* <Menu items={navItems} mode="horizontal" /> */}
          <Menu mode="horizontal">
            <Menu.Item icon={<HomeOutlined />} key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FundOutlined />}>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<MoneyCollectOutlined />}>
              <Link to="/exchanges">Exchanges</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<BulbOutlined />}>
              <Link to="/news">News</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </>
  );
};

export default Navbar;
