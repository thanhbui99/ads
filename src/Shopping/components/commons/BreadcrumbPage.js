import React from "react";
import {Breadcrumb} from "antd";
const BreadcrumbPage = (props) => {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>{props.item1}</Breadcrumb.Item>
        <Breadcrumb.Item>{props.item2}</Breadcrumb.Item>
        <Breadcrumb.Item>{props.item3}</Breadcrumb.Item>
      </Breadcrumb>
  );
};

export default React.memo(BreadcrumbPage);
