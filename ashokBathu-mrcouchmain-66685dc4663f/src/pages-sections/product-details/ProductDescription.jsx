import { Box } from "@mui/material";
import { H3 } from "components/Typography";

// ======================================================

// ======================================================

const ProductDescription = ({ productsData }) => {
  return (
    <Box>
      <H3 mb={2}>Specification:</H3>
      <Box>
      {productsData?.productDescription}<br />
        Model: {productsData?.productCode} <br />
        Weight:{productsData?.weight}<br />
        Seating Height: {productsData?.seatingHeight} <br />
        Dimentions: {productsData?.dimensions} <br />
        Made in India <br />
      </Box>
    </Box>
  );
};
export default ProductDescription;
