import React from "react";
import HeaderPage from "../commons/HeaderPage"
import FooterPage from "../commons/FooterPage"
import { Layout } from 'antd';
const PageLayout = (props)=>{
    return (
       <>
       <Layout>
           <HeaderPage/>
              {props.children}
           <FooterPage/>
       </Layout>
       </>
    )
}
export default React.memo(PageLayout)