import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { ShoppingBag } from "@mui/icons-material";
import TableRow from "components/TableRow";
import { H5 } from "components/Typography";
import { FlexBox } from "components/flex-box";
import OrderRow from "pages-sections/orders/OrderRow";
import UserDashboardHeader from "components/header/UserDashboardHeader";
import CustomerDashboardLayout from "components/layouts/customer-dashboard";
import CustomerDashboardNavigation from "components/layouts/customer-dashboard/Navigations";
import api from "utils/__api__/orders";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "./redux/ordersAction";

// ====================================================

// ====================================================

const Customers = () => {
  const user = useSelector((state) => state?.Auth?.auth);
  const orderList = useSelector((state) => state?.orderData?.orders);
  console.log(orderList,user?.franchise_store?.id)
  const dispatch = useDispatch();


  useEffect(() => {
    console.log()
    dispatch(fetchOrders(user?.franchise_store?.id));
  }, [dispatch]);
  

  return (
    <CustomerDashboardLayout>
      {/* TITLE HEADER AREA */}
      <UserDashboardHeader
        title="My Customers"
        icon={ShoppingBag}
        navigation={<CustomerDashboardNavigation />}
      />

      {/* ORDER LIST AREA */}
      <TableRow
        elevation={0}
        sx={{
          padding: "0px 18px",
          background: "none",
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <H5 color="grey.600" my={0} mx={0.75} textAlign="left">
          Customer Name
        </H5>

        <H5 color="grey.600" my={0} mx={0.75} textAlign="left">
          Status
        </H5>

        <H5 color="grey.600" my={0} mx={0.75} textAlign="left">
          Email
        </H5>

        <H5 color="grey.600" my={0} mx={0.75} textAlign="left">
          Phone
        </H5>

        <H5
          my={0}
          px={2.75}
          color="grey.600"
          flex="0 0 0 !important"
          display={{
            xs: "none",
            md: "block",
          }}
        />
      </TableRow>

      {orderList?.map((order) => (
        <OrderRow order={order} key={order.id} />
      ))}

      <FlexBox justifyContent="center" mt={5}>
        <Pagination
          count={5}
          color="primary"
          variant="outlined"
          onChange={(data) => console.log(data)}
        />
      </FlexBox>
    </CustomerDashboardLayout>
  );
};
// export const getStaticProps = async () => {
  // const user = useSelector((state) => state?.Auth?.auth);
  // const token = useSelector((state) => state?.Auth?.token);
  // console.log(user?.franchise_stores[0]?.id)

  // const orderList = await api.getOrders(params.slug);
  // return {
  //   props: {
  //     orderList,
  //   },
  // };
// };
export default Customers;
