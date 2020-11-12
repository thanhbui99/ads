import React,{lazy,Suspense} from 'react';
import {helper} from './helper/UserLogin'
import {Skeleton} from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  const HomePage = lazy(()=>import('./components/home/HomePage'));
  const DetailPage = lazy(()=>import('./components/product/DetailPage'));
  const LoginPage = lazy(()=>import('./components/login/LoginPage'));

const Main = ()=>{
   const isLogined = helper.getInfoUserLogin();
   console.log(isLogined)
   return (
       <>
       <Router>
           <Suspense 
           fallback={<Skeleton active/>}>
           <Switch>
               <Route exact path="/">
               {isLogined ? <HomePage/> : <Redirect to="/login"/>}
               </Route>
               <Route exact path="/homePage">
                  {isLogined ? <HomePage/> : <Redirect to="/login"/>}
               </Route>
               <Route exact path="/product/:id">
               {isLogined ? <DetailPage/> : <Redirect to="/login"/>}
               </Route>
               <Route path="/login">
                  <LoginPage/>
               </Route>
           </Switch>
           </Suspense>
       </Router>
       </>
   )
}
export default Main;