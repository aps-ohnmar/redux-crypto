import React from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Typography, Row, Col, Statistic, Card } from "antd";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import Loader from "./Loader";

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={24}>
          <Title level={2} className="heading">
            Global Crypto Stats
          </Title>
          <div className="site-card-wrapper">
            <Row gutter={24}>
              <Col span={12}>
                <Card title="Total Cryptocurrencies" bordered={false}>
                  <Statistic
                    title="Total Cryptocurrencies"
                    value={globalStats.total}
                  />
                  <Statistic
                    title="Total Exchanges"
                    value={millify(globalStats.totalExchanges)}
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Market Cap" bordered={false}>
                  <Statistic
                    title="Total Market Cap"
                    value={`$${millify(globalStats.totalMarketCap)}`}
                  />

                  <Statistic
                    title="Total Markets"
                    value={globalStats.totalMarkets}
                  />
                </Card>
              </Col>
            </Row>
          </div>

          <div className="heading-container">
            <Title level={2} className="home-title">
              Top 10 Cryptos In The World
            </Title>
          </div>
          <Cryptocurrencies simplified />
          <div className="show-more-container">
            <Title level={3} className="show-more">
              <Link to="/cryptocurrencies">Show more</Link>
            </Title>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
