import Link from "next/link";
import { useState } from "react";
import Router from "next/router";

import { Add, Remove } from "@mui/icons-material";
import { Avatar, Box, Button, Chip, Grid } from "@mui/material";
import LazyImage from "components/LazyImage";
import BazaarRating from "components/BazaarRating";
import { H1, H2, H3, H6 } from "components/Typography";
import { useAppContext } from "contexts/AppContext";
import { FlexBox, FlexRowCenter } from "../../components/flex-box";
import { currency } from "lib";
import productVariants from "data/product-variants";

// ================================================================

// ================================================================

const ProductIntro = ({ product }) => {
  const { id, price, title, images, slug, thumbnail } = product;
  console.log(product)
  const { state, dispatch } = useAppContext();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectVariants, setSelectVariants] = useState({
    option: "option 1",
    type: "type 1",
  });
  // const router = useRouter();

  // HANDLE CHAMGE TYPE AND OPTIONS
  const handleChangeVariant = (variantName, value) => () => {
    setSelectVariants((state) => ({
      ...state,
      [variantName.toLowerCase()]: value,
    }));
  };

  // CHECK PRODUCT EXIST OR NOT IN THE CART
  const cartItem = state.cart.find((item) => item.id === id);

  // HANDLE SELECT IMAGE
  const handleImageClick = (ind) => () => setSelectedImage(ind);

  // HANDLE CHANGE CART
  const handleCartAmountChange = (amount) => () => {
    console.log("coming to dispa")

//  const cc = dispatch({
//       type: "CHANGE_CART_AMOUNT",
//       payload: {
//         price:product?.basePrice,
//         qty: amount,
//         name:product.productName,
//         imgUrl:product?.image[0]?.url,
//         id,
//         slug,
//       },
//     });
const cc = dispatch({
  type: "CHANGE_CART_AMOUNT",
  payload: {
    price:product?.basePrice,
    qty: amount,
    name: product.productName,
    imgUrl: product?.image[0].url,
    id:product.id,
    slug:product.id,
  },
});
    console.log("coming to dispa",cc,dispatch)  };

//   const handleClick = (id) => {
//     Router.push({
//         pathname: "/3Dview",
//         query: { id },
//     });
// };


  return (
    <Box width="100%">
      <Grid container spacing={3} justifyContent="space-around">
        <Grid item md={6} xs={12} alignItems="center">
          <FlexBox justifyContent="center" mb={6}>
            {/* <LazyImage
              alt={title}
              width={300}
              height={300}
              loading="eager"
              src={product.images[selectedImage]}
              sx={{
                objectFit: "contain",
              }}
            /> */}
              <img src={ "http://3.0.78.116:8080" + product?.image[selectedImage]?.url} alt="Product Image" style={{ width: "100%",
  height: "auto",}} />
          </FlexBox>

          <FlexBox overflow="auto">
            {product?.image.map((item, ind) => (
              <FlexRowCenter
                key={ind}
                width={64}
                height={64}
                minWidth={64}
                bgcolor="white"
                border="1px solid"
                borderRadius="10px"
                ml={ind === 0 ? "auto" : 0}
                style={{
                  cursor: "pointer",
                }}
                onClick={handleImageClick(ind)}
                mr={ind === product?.image?.length - 1 ? "auto" : "10px"}
                borderColor={
                  selectedImage === ind ? "primary.main" : "grey.400"
                }
              >
                <Avatar
                  src={"http://3.0.78.116:8080" + item.url}
                  variant="square"
                  sx={{
                    height: 40,
                  }}
                />
              </FlexRowCenter>
            ))}
          </FlexBox>
        </Grid>

        <Grid item md={6} xs={12} alignItems="center">
          <H1 mb={1}>{title}</H1>

          <FlexBox alignItems="center" mb={1}>
            <Box>Brand:</Box>
            <H6> Mr.Couch</H6>
          </FlexBox>

          <FlexBox alignItems="center" mb={2}>
            <Box lineHeight="1">Rated:</Box>
            <Box mx={1} lineHeight="1">
              <BazaarRating
                color="warn"
                fontSize="1.25rem"
                value={4}
                readOnly
              />
            </Box>
            <H6 lineHeight="1">(50)</H6>
          </FlexBox>

        

          <Box pt={1} mb={3}>
            <H2 color="primary.main" mb={0.5} lineHeight="1">
            {currency(product?.basePrice)}
            </H2>
            <Box color="inherit">Stock Available</Box>
          </Box>
          <Link href={`/3Dview/${id}`}>
          <Button
              color="primary"
              variant="outlined"
              sx={{
                mb: 4.5,
                px: "1.75rem",
                height: 40,
              }}
            >
             Customize
            </Button>
          </Link>
          {!cartItem?.qty ? (
            <Button
              color="primary"
              variant="contained"
              onClick={handleCartAmountChange(1)}
              sx={{
                mb: 4.5,
                px: "1.75rem",
                height: 40,
                marginLeft:10,
              }}
            >
              Add to Cart
            </Button>
          ) : (
            <FlexBox alignItems="center" mb={4.5}>
              <Button
                size="small"
                sx={{
                  p: 1,
                }}
                color="primary"
                variant="outlined"
                onClick={handleCartAmountChange(cartItem?.qty - 1)}
              >
                <Remove fontSize="small" />
              </Button>

              <H3 fontWeight="600" mx={2.5}>
                {cartItem?.qty.toString().padStart(2, "0")}
              </H3>

              <Button
                size="small"
                sx={{
                  p: 1,
                }}
                color="primary"
                variant="outlined"
                onClick={handleCartAmountChange(cartItem?.qty + 1)}
              >
                <Add fontSize="small" />
              </Button>
            </FlexBox>
          )}

          <FlexBox alignItems="center" gap={1} mb={2}>
            <Box>Sold By:</Box>
            <Link href="/shops/scarlett-beauty">
              <H6>AB Store</H6>
            </Link>
          </FlexBox>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ProductIntro;
