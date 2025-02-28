/* eslint-disable react-hooks/exhaustive-deps */
import { DeleteOutline, ModeEditOutline } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Grid,
  MenuItem,
  Typography,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Card1 from "components/Card1";
import { FlexBetween, FlexBox } from "components/flex-box";
import LazyImage from "components/LazyImage";
import { H6, Paragraph } from "components/Typography";
import { months, years } from "data/months-years";
import { format } from "date-fns";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as yup from "yup";
import EditAddressForm from "./EditAddressForm";
import NewAddressForm from "./NewAddressForm";
import axios from "axios";
import { useSelector } from "react-redux";
import { useAppContext } from "contexts/AppContext";
import swal from "sweetalert";

// ====================================================================
// date types

// ====================================================================

const Heading = ({ number, title }) => {
  return (
    <FlexBox gap={1.5} alignItems="center" mb={3.5}>
      <Avatar
        sx={{
          width: 32,
          height: 32,
          color: "primary.text",
          backgroundColor: "primary.main",
        }}
      >
        {number}
      </Avatar>
      <Typography fontSize="20px">{title}</Typography>
    </FlexBox>
  );
};
const CheckoutForm2 = () => {
  const router = useRouter();
  const [hasVoucher, setHasVoucher] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const [dateList, setDateList] = useState([]);
  const [addressData, setAddressData] = useState([]);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [selected, setSelected] = useState(false);
  const user = useSelector((state) => state?.Auth?.auth);
  const token = useSelector((state) => state?.Auth?.token);
  const { state } = useAppContext();
  // const getTotalPrice = undefined;
console.log(state)
const [subtotal,setSubTotal] = useState(0)

const getTotalPrice = () => {
  return state.cart.reduce((accum, item) => accum + item.price * item.qty, 0);
};

const getProductsInArray = () => {
  return state.cart.map((item) => id);
};

const getDescriptionInArray = () => {
  return state.cart.map((item) => ProductName);
};

  const handleFormSubmit = async (values) => {
    console.log("coming here",values,newAddress)
    const loginData = {
      customerName: newAddress.name,
      customerMobile: newAddress.phone,
      customerEmail: newAddress.Email,
      customerAddress:newAddress.street + newAddress.city + newAddress.state + newAddress.zip,
      franchise_store: user.franchise_store.id,
    };
    axios
    .post("http://3.0.78.116:8080/store-customers", loginData)
    // navigate("/Profile/overview");
    .then((response) => {
      const { data } = response;
      console.log(response, "response");
      const orderDataAPI = {
        totalAmount: getTotalPrice(),
        paymentStatus: "Pending",
        description: "new order",
        store_customer:response?.data?.id ,
        franchise_store: user.franchise_store.id,
        products:getProductsInArray(),
        dateAndTime:	"2023-07-13T06:30:00.000Z",
        description:	"ee",
        // franchise_store:	"649d7613de5b3e7571744a75",
        orderId	:"opp8",
        // paymentStatus	:"done",
        // products:	[
        // "6464a7aa7dcca83667a08a55",
        // "6464af5346f23a3a2bfde564",
        // "646b24c5fc319d1c2491a420"],
        // store_customer:	"649f552f92427233030da163",
        // totalAmount:	5455,
      };
        axios
      .post("http://3.0.78.116:8080/orders", orderDataAPI)
      // navigate("/Profile/overview");
      .then((response) => {
        const { data } = response;
        console.log(response, "response");
        // setStatus(response?.status);
        // dispatch(fetchSignIn(data));
        router.push("/order-confirmation");

      })
      .catch((error) => {
        console.log("error", error);
        swal("Please try again. Request failed");
        // eslint-disable-next-line no-param-reassign
        error.clientMessage = "Can't find";
      });
    })
    .catch((error) => {
      console.log("error", error);
      swal("Please try again. Request failed");
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
    });
    //OrderConfirmation

  };
  const handleFieldValueChange = (value, fieldName, setFieldValue) => () => {
    setFieldValue(fieldName, value);
  };
  const toggleHasVoucher = () => setHasVoucher((has) => !has);
  useEffect(() => {
    let list = [];
    let today = new Date();
    let dateCount = today.getDate();
    list.push({
      label: format(today, "dd MMMM"),
      value: today.toISOString(),
    });
    for (let i = 1; i < 15; i++) {
      let dateCount1 = today.getDate();
      today.setDate(dateCount1 + 1);
      list.push({
        label: format(today, "dd MMMM"),
        value: today.toISOString(),
      });
    }
    setDateList(list);
  }, []);
  useEffect(() => {
    if (newAddress !== "") setAddressData([newAddress, ...addressData]);

    else setAddressData(addressList2);
  }, [newAddress]);
  const deleteAddress = (name) => {
    const newArr = addressData.filter((item) => item.name !== name);
    setAddressData(newArr);
  };
  const editHandler = (value) => {
    const data = addressData.find((item) => item.name === value);
    setSelected(data);
    openEditForm ? setOpenEditForm(false) : setOpenEditForm(true);
  };
  const initialValues = {
    // card: "",
    date: "",
    time: "",
    address: "",
    // voucher: "",
    // cardHolderName: "",
    // cardNumber: "",
    // cardMonth: "",
    // cardYear: "",
    // cardCVC: "",
  };
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      // validationSchema={checkoutSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <Card1
            sx={{
              mb: 3,
            }}
          >
            <Heading number={1} title="Delivery Date and Time" />

            <Box mb={3.5}>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <TextField
                    select
                    fullWidth
                    type="text"
                    name="date"
                    label="Delivery Date"
                    onChange={handleChange}
                    value={values.date}
                    error={!!touched.date && !!errors.date}
                    helperText={touched.date && errors.date}
                  >
                    {dateList.map((item) => (
                      <MenuItem value={item.value} key={item.label}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    select
                    fullWidth
                    type="text"
                    name="time"
                    label="Delivery Time"
                    onChange={handleChange}
                    value={values.time}
                    error={!!touched.time && !!errors.time}
                    helperText={touched.time && errors.time}
                  >
                    {timeList.map((item) => (
                      <MenuItem value={item.value} key={item.value}>
                        {item.value}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Box>
          </Card1>

          <Card1
            sx={{
              mb: 3,
            }}
          >
            <FlexBetween>
              <Heading number={2} title="Customer Details" />

              <NewAddressForm setNewAddress={setNewAddress} />
            </FlexBetween>

            <Typography mb={1.5}>Customer's Details</Typography>
            <Grid container spacing={3}>
              {addressData.map((item, ind) => (
                <Grid item md={4} sm={6} xs={12} key={ind}>
                  <Card
                    sx={{
                      padding: 2,
                      boxShadow: "none",
                      cursor: "pointer",
                      border: "1px solid",
                      position: "relative",
                      backgroundColor: "grey.100",
                      borderColor:
                        item.street1 === values.address
                          ? "primary.main"
                          : "transparent",
                    }}
                    onClick={handleFieldValueChange(
                      item.street1,
                      "address",
                      setFieldValue
                    )}
                  >
                    <FlexBox
                      justifyContent="flex-end"
                      sx={{
                        position: "absolute",
                        top: 5,
                        right: 5,
                      }}
                    >
                      {selected && (
                        <EditAddressForm
                          selected={selected}
                          addressData={addressData}
                          openEditForm={openEditForm}
                          setOpenEditForm={setOpenEditForm}
                          setAddressData={setAddressData}
                        />
                      )}

                      <IconButton
                        size="small"
                        sx={{
                          mr: 1,
                        }}
                        onClick={() => editHandler(item.name)}
                      >
                        <ModeEditOutline
                          sx={{
                            fontSize: 20,
                          }}
                        />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => deleteAddress(item.name)}
                      >
                        <DeleteOutline
                          sx={{
                            fontSize: 20,
                          }}
                        />
                      </IconButton>
                    </FlexBox>

                    <H6 mb={0.5}>{item.name}</H6>
                    <Paragraph color="grey.700">{item.street1}</Paragraph>
                    {item.street2 && (
                      <Paragraph color="grey.700">{item.address2}</Paragraph>
                    )}
                    <Paragraph color="grey.700">{item.phone}</Paragraph>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Card1>

          <Card1
            sx={{
              mb: 3,
            }}
          >
            <FlexBetween>
              <Heading number={3} title="Payment Details" />

              {/* <NewAddressForm setNewAddress={setNewAddress} /> */}
            </FlexBetween>

            <Typography mb={1.5}>Scan the code</Typography>
            <FormControlLabel required control={<Checkbox />} label="Payment Received" />
            </Card1>

          <Card1
            sx={{
              mb: 3,
            }}
          >
           
            <Button
              fullWidth
              type="submit"
              color="primary"
              variant="contained"
              sx={{
                mt: 3,
              }}
            >
              Place Order
            </Button>
          </Card1>
        </form>
      )}
    </Formik>
  );
};
const addressList2 = [

];
const paymentMethodList = [
  
];
const timeList = [
  {
    label: "9AM - 11AM",
    value: "9AM - 11AM",
  },
  {
    label: "11AM - 1PM",
    value: "11AM - 1PM",
  },
  {
    label: "3PM - 5PM",
    value: "3PM - 5PM",
  },
  {
    label: "5PM - 7PM",
    value: "5PM - 7PM",
  },
];
const checkoutSchema = yup.object().shape({
  // card: yup.string().required("required"),
  date: yup.string().required("required"),
  time: yup.string().required("required"),
  // address: yup.string().required("required"),
  // cardHolderName: yup.string().required("required"),
  // cardNumber: yup.number().required("required"),
  // cardMonth: yup.string().required("required"),
  // cardYear: yup.number().required("required"),
  // cardCVC: yup.number().required("required"),
  // voucher: yup.string(),
});
export default CheckoutForm2;
