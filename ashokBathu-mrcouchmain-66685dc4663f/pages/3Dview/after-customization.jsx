import React, { useEffect, useState } from "react";
import * as THREE from "three";
import Link from "next/link";
import { Canvas } from "react-three-fiber";
import { COLORS } from "../../src/pages-sections/3DModelComponents/constants/colors"; 
import ColorsSlider from "../../src/pages-sections/3DModelComponents/components/ColorsSlider";
import { OptionsMenu } from "../../src/pages-sections/3DModelComponents/components/OptionsMenu";
import { Scene } from "../../src/pages-sections/3DModelComponents/canvas/Scene";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import makeStyles from "@mui/styles/makeStyles";
import shoppingCartStyle from "../../styles/jss/nextjs-material-kit-pro/pages/shoppingCartStyle";
import Router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "./redux/textureAction";
import { Options } from "../../src/pages-sections/3DModelComponents/components/Options";
import { fetchTexture } from "./redux/textureAction";
import api from "utils/__api__/products";
import { Box, Container, styled, Tab,Button,Typography, Tabs,Grid ,GridItem, Select,InputLabel, MenuItem} from "@mui/material";
import { H2 } from "components/Typography";
import ShopLayout1 from "components/layouts/ShopLayout1";
import ProductReview from "pages-sections/product-details/ProductReview";
import AvailableShops from "pages-sections/product-details/AvailableShops";
import ProductDescription from "pages-sections/product-details/ProductDescription";
import { useAppContext } from "contexts/AppContext";
import { Environment } from "@react-three/drei";
const useStyles = makeStyles(shoppingCartStyle);
const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 0,
  marginTop: 80,
  marginBottom: 24,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
  "& .inner-tab": {
    minHeight: 40,
    fontWeight: 600,
    textTransform: "capitalize",
  },
}));

const afterCustomization = (props) => {
  const { dispatch } = useAppContext();
// conso
  const classes = useStyles();
  const user = useSelector((state) => state?.Auth?.auth);
  const token = useSelector((state) => state?.Auth?.token);
  // const   {product}  = props;
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [seats, setSeats] = useState(0);
  const [Selectseat, setSelectseats] = useState(false);
  const [selectColor, setSelectColor] = useState("");
  const [cusionType, setCusionType] = useState('Select Cusion Type');
  const [cusionTypeCost, setCusionTypeCost] = useState(0);

  
  const [totalSeats, setTotalSeats] = useState();
  const [totalFabric, setTotalFabric] = useState();
  const [totalFabricSeats, setTotalFabricSeats] = useState();
  const router = useRouter()
  // const { pid } = router?.query?.slug;
  console.log(props, router.query,"totalFabricSeats");
  const [activeOption, setActiveOption] = useState("body");
  const [activeTexture, setActiveTexture] = useState([]);
  const productById = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [placeOrder, setPlaceOrder] = useState('Place Order');
  const [newMaterialOpt, setNewMaterialOpt] = useState({
    activeOption,
    newMTL: null,
  });
  // const router = useRouter();
  const dispatchMain = useDispatch();
  useEffect(() => {
    if(router.query.slug){
     
     const getProductDetails = api.getProduct(router.query.slug);
     console.log("heloooooooooo",getProductDetails,)
    }
     }, [router.query.slug]);
  const totalAmount = !Selectseat
    ? totalFabricSeats * router.query.activeTexturePrice + seats * (3500 + cusionTypeCost)
    : totalFabric * router.query.activeTexturePrice + totalSeats * (3500 + cusionTypeCost);

    const handleChangeCusion = (e) => {
      console.log(e.target.value)
      setCusionType(e.target.value);
      if(e.target.value == "Basic"){
        console.log(cusionType)

        setCusionTypeCost(500)
      }else if(e.target.value == "Standard"){
        console.log(cusionType)

        setCusionTypeCost(1000)
      }else{
        console.log(cusionType)

        setCusionTypeCost(1500)

      }
    };

  const postOrder = () => {
    const orderObj = {};
    const orderData = {
      totalAmount: totalAmount,
      user: user?.id,
      dateAndTime:
        new Date().getDate() / new Date().getMonth() +
        1 / new Date().getFullYear(),
      orderItems: orderObj,
    };
    dispatchMain(PostOrderList(orderData, token));
  };
  const selectSwatch = (col) => {
    // let color = col?.color;
    setSelectColor(col);
    let newMTL;
    // if (true) {
    // let txt = new THREE.TextureLoader().load("/img/B1.jpg");
    const textureLoader = new THREE.TextureLoader();
    const txt = textureLoader.load(`http://3.0.78.116:8080${col.url}`);
    txt.repeat.set(16, 16, 1);
    txt.wrapS = THREE.RepeatWrapping;
    txt.wrapT = THREE.RepeatWrapping;

    // txt.center.set(0.5, 0.5);
    // txt.rotation = Math.PI / 2;

    newMTL = new THREE.MeshPhongMaterial({
      map: txt,
      shininess: 50,
    });
    // } else {
    //     newMTL = new THREE.MeshPhongMaterial({
    //         color: color,
    //         shininess: color.shininess ? color.shininess : 10
    //     });
    // }

    return setNewMaterialOpt({
      activeOption,
      newMTL,
    });
  };
  const calSeatsPrice = () => {
    const totalLength = Number(length) + Number(width);
    const Totalseats = Math.floor((totalLength - 12) / 21);
    const TotalFabric = totalLength / 12;
    console.log(
      TotalFabric,
      Totalseats,
      totalLength,
      "activeTextureactiveTexture"
    );
    setTotalFabric(Math.ceil(TotalFabric * 1.5));
    setTotalSeats(Totalseats);
  };

  const seatPrice = () => {
    const fabric = (seats * 21 + 12) / 12;
    setTotalFabricSeats(Math.ceil(fabric * 1.5));
  };
  useEffect(() => {
    length && calSeatsPrice();
    seats && seatPrice();
  }, [length, width, seats]);

console.log("activeTexture",activeTexture)


  useEffect(() => {
    dispatchMain(fetchTexture());
  }, [dispatchMain]);
  const [selectedOption, setSelectedOption] = useState(0);
  const handleOptionClick = (_, value) => setSelectedOption(value);
  // Show a loading state when the fallback is rendered
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const handleCartAmountChange = () => () => {
    if(placeOrder == "Order Placed. Please Proceed to cart"){
      Router.push("/checkout-alternative");
    }
    setPlaceOrder('Order Placed. Please Proceed to cart')
    console.log("coming to dispa")
    const cc = dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: {
        price:totalAmount,
        qty: 1,
        name:  totalFabricSeats + "mts of "+router.query.activeTexture+" - "+router.query.activeColorName +" *" + router.query?.ProductName,
        imgUrl: router.query?.productImageUrl,
        id:router.query.slug,
        slug:router.query.slug,
      },
    });
    console.log("coming to dispa",cc,dispatch)
  };
 
  console.log("hello route",props)
 
  return (
    <ShopLayout1>
    <Container
      sx={{
        my: 8,
      }}
    >
    
      
      <Grid container spacing={2}>
        <Grid item md={6} sm={6}>
          {Selectseat ? (
            <Grid container>
              <Grid item md={6} sm={6}>
                <label>Length(in inches)</label>
                <FormControl fullWidth className={classes.selectFormControl}>
                  <TextField
                    id="standard-basic"
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    variant="standard"
                  />
                </FormControl>
              </Grid>
              <Grid item md={6} sm={6}>
                <label>width(in inches)</label>
                <FormControl fullWidth className={classes.selectFormControl}>
                  <TextField
                    id="standard-basic"
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    variant="standard"
                  />
                </FormControl>
              </Grid>
            </Grid>
          ) : (
            <Grid container>
              <Grid item
                md={6}
                sm={6}
              >
                {/* <label>Seats</label> */}
                <FormControl fullWidth className={classes.selectFormControl}>
                {Selectseat ? `select number of Inches ` : `select number of Seats`}
                  <TextField
                    value={seats}
                    onChange={(e) => setSeats(e.target.value)}
                    id="standard-basic"
                    variant="standard"
                  />
                </FormControl>
              </Grid>
            </Grid>
          )}
          <div
            className={classes.card3}
            style={{ marginTop: "1rem", marginLeft: "1rem" }}
          >
            {/* <Button color="rose" onClick={() => setSelectseats(!Selectseat)}>
              {Selectseat ? `Select Seats` : `Select Inches`}
            </Button> */}
             <Button
              color="primary"
              variant="contained"
              onClick={() => setSelectseats(!Selectseat)}
              sx={{
                mb: 4.5,
                px: "1.75rem",
                height: 40,
                marginLeft:10,
              }}
            >
              {Selectseat ? `Change to Seats` : `Change to Inches`}
            </Button>
          </div>
        </Grid>
        <Grid item md={5} xs={12} sm={5}>
          <Box
            sx={{
              border: "2px solid #efedec",
              backgroundColor: "#f6f6f4",
              p: 2,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Product</Typography>
              <Typography>Subtotal</Typography>
            </Box>
            <hr />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>{router.query.ProductName}</Typography>
              <Typography>
                ₹ {!Selectseat ? seats * 4000 : totalSeats * 4000}{" "}
              </Typography>
            </Box>
            <hr />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Fabric Price</Typography>
              <Typography>
                ₹{" "}
                {!Selectseat
                  ? totalFabricSeats * router.query.activeTexturePrice
                  : totalFabric * router.query.activeTexturePrice}
              </Typography>
            </Box>
            <hr />
            <InputLabel id="demo-simple-select-label">Select Material Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={cusionType}
              label="Material Type"
              onChange={handleChangeCusion}
              style={{width:200}}
            >
              <MenuItem value={"Basic"}>Basic</MenuItem>
              <MenuItem value={"Standard"}>Standard</MenuItem>
              <MenuItem value={"Premium"}>Premium</MenuItem>
            </Select>
            {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography>Shipping</Typography>
                            <Box>
                                <Typography>Flat rate: $30.00</Typography>
                                <Typography>Free shipping</Typography>
                                <Typography>Local pickup: $20.00</Typography>
                            </Box>
                        </Box>
                        <hr /> */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Total Amount</Typography>
              <Typography>₹ 
              
                  {!Selectseat
    ? totalFabricSeats * router.query.activeTexturePrice + seats * 3500 + cusionTypeCost
    : totalFabric * router.query.activeTexturePrice + totalSeats * 3500 + cusionTypeCost}</Typography>
            </Box>
            <hr />
            <div className={classes.card3}>
              {/* <Button color="rose" onClick={() => postOrder()}>
                Place order
              </Button> */}
               {/* <Link href="/checkout-alternative"> */}
               <Button
              color="primary"
              variant="contained"
              onClick={handleCartAmountChange()}

              // onClick={() => () => postOrder()}
              sx={{
                mb: 4.5,
                px: "1.75rem",
                height: 40,
                marginLeft:10,
              }}
            >
              {placeOrder}
            </Button>
               {/* </Link> */}
              
            </div>
          </Box>
        </Grid>
        </Grid>
      {/* PRODUCT DESCRIPTION AND REVIEW */}
      <StyledTabs
        textColor="primary"
        value={selectedOption}
        indicatorColor="primary"
        onChange={handleOptionClick}
      >
        <Tab className="inner-tab" label="Description" />
        <Tab className="inner-tab" label="Review (3)" />
      </StyledTabs>

      <Box mb={6}>
        {selectedOption === 0 && <ProductDescription />}
        {selectedOption === 1 && <ProductReview />}
      </Box>


      <AvailableShops />

    </Container>
  </ShopLayout1>
  );
};

// export const getStaticPaths = async () => {
//   const paths = await api.getSlugs();
//   return {
//     paths: paths,
//     //indicates that no page needs be created at build time
//     fallback: "blocking", //indicates the type of fallback
//   };
// };


// export const getStaticProps = async ({ pid }) => {
//   console.log("hello after-cust",pid)

//   const product = await api.getProductDetails(pid);
//   // const getProductDetails = await api.getProduct(params.slug);

//   return {
//     props: {
//       product,
//       // getProductDetails,
//     },
//   };
// }
export default afterCustomization;

