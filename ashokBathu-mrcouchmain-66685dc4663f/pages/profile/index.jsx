import Link from "next/link";
import { format } from "date-fns";
import {  useEffect,useState } from "react";
import { Person } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import TableRow from "components/TableRow";
import { H3, H5, Small } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box";
import UserDashboardHeader from "components/header/UserDashboardHeader";
import CustomerDashboardLayout from "components/layouts/customer-dashboard";
import CustomerDashboardNavigation from "components/layouts/customer-dashboard/Navigations";
import { currency } from "lib";
import api from "utils/__api__/users";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";

// ============================================================

const Profile = ({user}) => {
  const downMd = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const token = useSelector((state) => state?.Auth?.token);
  const user1 = useSelector((state) => state?.Auth?.auth);
  console.log(token, user1)

  useEffect(() => {
    if(!token){
     console.log("heloooooooooo")
     Router.push("/login");
    }
     }, []);
  // const loading = useSelector((state) => state?.cartListPage?.loading);
  // const Carts = useSelector((state) => state?.cartListPage?.CartList);
  // const wishListData = useSelector((state) => state?.wishListPage?.wishList);  // SECTION TITLE HEADER LINK
  const HEADER_LINK = (
    <Button
      color="primary"
      LinkComponent={Link}
      href={`/profile/${user1?.id}`}
      sx={{
        px: 4,
        bgcolor: "primary.light",
      }}
    >
      Edit Profile
    </Button>
  );
  const infoList = [
    {
      title: "16",
      subtitle: "All Orders",
    },
    // {
    //   title: "02",
    //   subtitle: "Awaiting Payments",
    // },
    // {
    //   title: "00",
    //   subtitle: "Awaiting Shipment",
    // },
    {
      title: "01",
      subtitle: "Awaiting Delivery",
    },
  ];
  return (
    <CustomerDashboardLayout>
      {/* TITLE HEADER AREA */}
      <UserDashboardHeader
        icon={Person}
        title="My Profile"
        button={HEADER_LINK}
        navigation={<CustomerDashboardNavigation />}
      />

      {/* USER PROFILE INFO */}
      <Box mb={4}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Card
              sx={{
                display: "flex",
                p: "14px 32px",
                height: "100%",
                alignItems: "center",
              }}
            >
              <Avatar
                src={user.avatar}
                sx={{
                  height: 64,
                  width: 64,
                }}
              />

              <Box ml={1.5} flex="1 1 0">
                <FlexBetween flexWrap="wrap">
                  <div>
                    <H5 my="0px">{`${user1?.username}`}</H5>
                    <FlexBox alignItems="center">
                      <Typography color="grey.600">Balance:</Typography>
                      <Typography ml={0.5} color="primary.main">
                        {currency(500)}
                      </Typography>
                    </FlexBox>
                  </div>

                  <Typography color="grey.600" letterSpacing="0.2em">
                    SILVER USER
                  </Typography>
                </FlexBetween>
              </Box>
            </Card>
          </Grid>

          <Grid item md={6} xs={12}>
            <Grid container spacing={4}>
              {infoList.map((item) => (
                <Grid item lg={3} sm={6} xs={6} key={item.subtitle}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      p: "1rem 1.25rem",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <H3 color="primary.main" my={0} fontWeight={600}>
                      {item.title}
                    </H3>

                    <Small color="grey.600" textAlign="center">
                      {item.subtitle}
                    </Small>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <TableRow
        sx={{
          cursor: "auto",
          p: "0.75rem 1.5rem",
          ...(downMd && {
            alignItems: "start",
            flexDirection: "column",
            justifyContent: "flex-start",
          }),
        }}
      >
        <TableRowItem title="First Name" value={user1?.username} />
        {/* <TableRowItem title="Last Name" value={user.name.lastName} /> */}
        <TableRowItem title="Email" value={user1?.email} />
        <TableRowItem title="Phone" value={user1?.mobile} />
        <TableRowItem
          title="Birth date"
          value={format(new Date(user?.dateOfBirth), "dd MMM, yyyy")}
        />
      </TableRow>
    </CustomerDashboardLayout>
  );
};
const TableRowItem = ({ title, value }) => {
  return (
    <FlexBox flexDirection="column" p={1}>
      <Small color="grey.600" mb={0.5} textAlign="left">
        {title}
      </Small>
      <span>{value}</span>
    </FlexBox>
  );
};
export const getStaticProps = async () => {
  const user = await api.getUser();
  return {
    props: {
      user,
    },
  };
};
export default Profile;
