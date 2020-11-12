import React, { useState, useEffect } from "react";
import BreadcrumbPage from "../commons/BreadcrumbPage";
import "./home.css";
import { Layout, Skeleton, Card,Row,Col } from "antd";
import { api } from "../../service/api";
import PageLayout from "../product/PageLayout";
import {Link} from "react-router-dom";
const { Content } = Layout;
const { Meta } = Card;
const HomePage = () => {
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    const getListProduct = () =>{
       const data = api.product;
       setListProduct(data);
    }
    getListProduct();
  },[])
  return (
    <>
    <PageLayout>
      <Content style={{ padding: "0 50px" }}>
        <BreadcrumbPage item1="Home" item2="Product" item3="List" />
        {listProduct ? (
          <div className="site-layout-content">
           <Row>
           {listProduct.map((item) => (
              <Col span={8} key={item.id}>
                <Link to={`product/${item.id}`}>
                <Card
                hoverable
                style={{ width: 350 }}
                cover={
                  <img
                    alt={item.name}
                    src={item.image}
                  />
                }
              >
                <Meta
                  title={item.name}
                  description={item.desc}
                />
                <p>Price : {item.price}</p>
              </Card>
                </Link>
              </Col>
            ))}
           </Row>
          </div>
        ) : (
          <Skeleton active />
        )}
      </Content>
      </PageLayout>
    </>
  );
};
export default React.memo(HomePage);
