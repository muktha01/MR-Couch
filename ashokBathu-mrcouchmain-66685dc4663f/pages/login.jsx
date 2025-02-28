import SEO from "components/SEO";
import {  useEffect,useState } from "react";
import Login from "pages-sections/sessions/Login";
import { FlexRowCenter } from "components/flex-box";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";

const LoginPage = () => {
  const user = useSelector((state) => state?.Auth?.auth);
  const token = useSelector((state) => state?.Auth?.token);

  useEffect(() => {
 if(!token){
  console.log("heloooooooooo")
  Router.push("/franchise-store");
 }
  }, []);
  return (
    <FlexRowCenter flexDirection="column" minHeight="100vh">
      <SEO title="Login" />
      <Login />
    </FlexRowCenter>
  );
};
export default LoginPage;
