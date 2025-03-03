import { useState } from "react";
import { useRouter } from "next/router";
import { Canvas } from "react-three-fiber";
import { Scene } from "../../src/pages-sections/3DModelComponents/canvas/Scene";
import { Box, Container, styled, Tab, Tabs } from "@mui/material";
import { H2 } from "components/Typography";
import ShopLayout1 from "components/layouts/ShopLayout1";
import ProductIntro from "pages-sections/product-details/ProductIntro";
import ProductReview from "pages-sections/product-details/ProductReview";
import AvailableShops from "pages-sections/product-details/AvailableShops";
import RelatedProducts from "pages-sections/product-details/RelatedProducts";
import FrequentlyBought from "pages-sections/product-details/FrequentlyBought";
import ProductDescription from "pages-sections/product-details/ProductDescription";
import {
  getFrequentlyBought,
  getRelatedProducts,
} from "utils/__api__/related-products";
import api from "utils/__api__/products";

// styled component
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

// ===============================================================

// ===============================================================

const threedvue = (props) => {
  const { frequentlyBought, relatedProducts, product } = props;
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(0);
  const handleOptionClick = (_, value) => setSelectedOption(value);
console.log("product details", props)
  // Show a loading state when the fallback is rendered
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <ShopLayout1>
      <Container
        sx={{
          my: 4,
        }}
      >
        {/* PRODUCT DETAILS INFO AREA */}
        <Canvas id="rtfCanvas">   
            <Scene
                newMaterialOpt={newMaterialOpt}
                // activeImage={activeImage}
            />
        </Canvas>
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

        {frequentlyBought && (
          <FrequentlyBought productsData={frequentlyBought} />
        )}

        <AvailableShops />

        {relatedProducts && <RelatedProducts productsData={relatedProducts} />}
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

export const getStaticProps = async ({ params }) => {
  const relatedProducts = await getRelatedProducts();
  const frequentlyBought = await getFrequentlyBought();
  // const product = await api.getProductDetails();
  // const getProductDetails = await api.getProduct(params.slug);

  return {
    props: {
      frequentlyBought,
      relatedProducts,
      // product,
      // getProductDetails,
    },
  };
};
export default threedvue;
