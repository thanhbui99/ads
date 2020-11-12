import React,{useEffect,useState} from "react";
import PageLayout from "./PageLayout";
import BreadcrumbPage from "../commons/BreadcrumbPage";
import {Layout,Row,Col,Skeleton, Card} from "antd";
import {api} from "../../service/api";
import {useParams} from "react-router-dom";
import "./style.css"
const {Content} = Layout;
const { Meta} = Card;
const DetailPage = ()=>{
    let params =useParams();
    let idProduct = parseInt(params.id);
    console.log(idProduct);
    const [listProduct,setListProduct] = useState([]);
    useEffect(()=>{
        const getDataById = (idProduct)=>{
            const data = api.getDataById(idProduct);
            if(data){
                setListProduct(data);
            }
        }
        getDataById(idProduct);
    },[idProduct])
    return (
        <>
          <PageLayout>             
              <Content className="container">
              <BreadcrumbPage
              item1="Product"
              item2="Detail"
              item3="Smatphone"
              />
                 {listProduct ? (<div className="site-layout-content">
                     <Row>
                         {listProduct.map((item)=>(
                             <Col 
                             span={12} 
                             offset={6}
                             key={item.id}
                             >
                                 <Card
                                 hoverable
                                 style={{ width: 240 }}
                                 cover={<img alt={item.title} src={item.image} />}
                                 >
                             <Meta title={` Price ${item.price}`} description={item.desc} />
                              </Card>
                             </Col>
                         ))}
                     </Row>
                 </div>):(<Skeleton active />)}
              </Content>
          </PageLayout>
        </>
    )
}
export default React.memo(DetailPage)