import React, { useEffect, useState ,createRef } from "react";
import * as THREE from "three";
import Link from "next/link";
import { Canvas } from "react-three-fiber";
import ColorsSlider from "../../src/pages-sections/3DModelComponents/components/ColorsSlider";
import { OptionsMenu } from "../../src/pages-sections/3DModelComponents/components/OptionsMenu";
import { Scene } from "../../src/pages-sections/3DModelComponents/canvas/Scene";
import makeStyles from "@mui/styles/makeStyles";
import shoppingCartStyle from "../../styles/jss/nextjs-material-kit-pro/pages/shoppingCartStyle";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "./redux/textureAction";
import { Options } from "../../src/pages-sections/3DModelComponents/components/Options";
import { fetchTexture } from "./redux/textureAction";
import api from "utils/__api__/products";
import { Box, Container, styled, Tab,Button,Typography, Tabs,Grid ,GridItem} from "@mui/material";
import { useAppContext } from "contexts/AppContext";

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

const ChairApp = (props) => {
  const { dispatch } = useAppContext();

  // const classes = useStyles();
  const user = useSelector((state) => state?.Auth?.auth);
  const token = useSelector((state) => state?.Auth?.token);
  const   {product}  = props;
  const [activeOption, setActiveOption] = useState("body");
  const [activeTexture, setActiveTexture] = useState([]);
  const [selectColor, setSelectColor] = useState("");

  const productById = product;
  const [activeImage, setActiveImage] = useState(productById?.blgFile[0].url);
  const [newMaterialOpt, setNewMaterialOpt] = useState({
    activeOption,
    newMTL: null,
  });
  const router = useRouter();
  const dispatchMain = useDispatch();

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
 
 

console.log("activeTexture",selectColor)


  useEffect(() => {
    dispatchMain(fetchTexture());
  }, [dispatchMain]);
  const [selectedOption, setSelectedOption] = useState(0);
  const handleOptionClick = (_, value) => setSelectedOption(value);
  // Show a loading state when the fallback is rendered
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  
  console.log("hello route",productById,props)
 
  return (
    // <ShopLayout1></ShopLayout1>
<React.Fragment>

    <Canvas id="rtfCanvas" style={{position:"fixed",width:"100%",height:"100%"}}>   
               {/* <Environment files="/hdr/r2.hdr" background  blur={0.5}/>     */}
               <Scene
              newMaterialOpt={newMaterialOpt}
              activeImage={activeImage}
          />
          
      </Canvas>
      <OptionsMenu
            activeOption={activeOption}
            setActiveOption={setActiveOption}
          />
          <Options
            activeTexture={activeTexture}
            setActiveTexture={setActiveTexture}
          />
      <div className="controls">
        <div className="info">
          <div className="info__message">
          {/* <Link href={`/3Dview/after-customization/${product.id}`}> */}
          <Link
            href={{
              pathname: '/3Dview/after-customization',
              query: { slug: product.id,"productImageUrl":product.image[0].url,"ProductName":product.productName, "activeTexture": activeTexture.textureName, "activeTexturePrice": activeTexture.priceByLength ,
               "activeColorName": selectColor.name,  "activeColorUrl": selectColor.url},
            }}
          >
          <Button
              color="primary"
              variant="outlined"
              sx={{
                mb: 4.5,
                px: "1.75rem",
                height: 40,
                
              }}
              style={{marginTop:"200px"}}
            >
             Finalize
            </Button>
            </Link>
          </div>
        </div>
         
        {/* <ColorsSlider selectSwatch={selectSwatch} /> */}
      </div>
      <div className="frame">
        {/* <h1 className="frame__title">
          3D Model MR.Couch Sample
        </h1> */}
         
      </div>
      <div>
         <ColorsSlider style={{height:"100px"}}
      activeTexture={activeTexture}
      setActiveTexture={setActiveTexture}
      selectSwatch={selectSwatch}
    /> 
      </div>
      </React.Fragment>
      
     
  );
};

export const getStaticPaths = async () => {
  const paths = await api.getSlugs();
  return {
    paths: paths,
    //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};


export const getStaticProps = async ({ params }) => {
  console.log("hello route",params)

  const product = await api.getProductDetails(params.slug);
  // const getProductDetails = await api.getProduct(params.slug);

  return {
    props: {
      product,
      // getProductDetails,
    },
  };
}
export default ChairApp;

