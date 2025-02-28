import { Box, Divider } from "@mui/material";
import { FlexBetween } from "components/flex-box";
import { Paragraph, Span } from "components/Typography";
import { useAppContext } from "contexts/AppContext";
import { currency } from "lib";
import { useEffect, useState } from "react";
const CheckoutSummary2 = () => {
  const { state } = useAppContext();
  // const getTotalPrice = undefined;
console.log(state)
const [subtotal,setSubTotal] = useState(0)
const getTotalPrice = () => {
  return state.cart.reduce((accum, item) => accum + item.price * item.qty, 0);
};
useEffect(() => {
  // var subT = subtotal
  // state.cart.map((item) => 
  // subT = (item.qty * item.price)
  // ) 
  // setSubTotal(subT)
  
}, [state.cart]);
  return (
    <Box>
      <Paragraph color="secondary.900" fontWeight={700} mb={2}>
        Your order
      </Paragraph>

      {state.cart.map((item) => (
        <FlexBetween mb={1.5} key={item.name}>
          <Paragraph>
            <Span fontWeight="700" fontSize="14px">
              {item.qty}
            </Span>{" "}
            x {item.name}
          </Paragraph>
          <Paragraph>{currency(item.price)}</Paragraph>
        </FlexBetween>
      ))}

      <Divider
        sx={{
          borderColor: "grey.300",
          my: 3,
        }}
      />

      <FlexBetween mb={0.5}>
        <Paragraph color="grey.600">Subtotal:</Paragraph>
        <Paragraph fontWeight="700">{currency(getTotalPrice())}</Paragraph>
      </FlexBetween>

      <FlexBetween mb={0.5}>
        <Paragraph color="grey.600">Shipping:</Paragraph>
        <Paragraph fontWeight="700">1000</Paragraph>
      </FlexBetween>

      {/* <FlexBetween mb={0.5}>
        <Paragraph color="grey.600">Tax:</Paragraph>
        <Paragraph fontWeight="700">{currency(40)}</Paragraph>
      </FlexBetween> */}

      {/* <FlexBetween mb={3}>
        <Paragraph color="grey.600">Discount:</Paragraph>
        <Paragraph fontWeight="700">-</Paragraph>
      </FlexBetween> */}

      <Divider
        sx={{
          borderColor: "grey.300",
          mb: 1,
        }}
      />

      <FlexBetween fontWeight="700" mb={1}>
        <Paragraph>Total:</Paragraph>
        <Paragraph fontWeight="700">{currency(getTotalPrice() + 1000)}</Paragraph>
      </FlexBetween>
    </Box>
  );
};
const cartList = [
  {
    name: "iPhone 12",
    quantity: 1,
    price: 999,
  },
  {
    name: "iPhone 12 pro",
    quantity: 1,
    price: 1199,
  },
  {
    name: "iPhone 12 pro max",
    quantity: 1,
    price: 1299,
  },
];
export default CheckoutSummary2;
