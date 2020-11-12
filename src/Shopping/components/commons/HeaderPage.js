import React,{ useState} from "react";
import { Layout, Menu } from "antd";
import {helper} from "../../helper/UserLogin";
import {useHistory} from "react-router-dom"
import "./layout.css"
const { Header } = Layout;

const HeaderPage = () => {
  const history = useHistory();
  const infoUser = helper.getInfoUserLogin();
  const [username,setUsername] = useState(infoUser.data);
  console.log(infoUser);
  const logoutUser = ()=>{
     setUsername(null);
     localStorage.removeItem('token');
     // quay ve trang login
     history.push("/login");
  }
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Điện Thoại</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        <Menu.Item key="4">Hi : {username}</Menu.Item>
        <Menu.Item key="5"><span onClick={logoutUser}>logout</span> </Menu.Item>
      </Menu>
    </Header>
  );
};
export default React.memo(HeaderPage);
