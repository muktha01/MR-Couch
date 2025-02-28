import { Box, Button, Grid } from "@mui/material";
import { H1, Paragraph } from "components/Typography";
import ProductCard17 from "components/product-cards/ProductCard17";
import ProductCard21 from "components/product-cards/ProductCard21";

// ===================================================================

const Section4 = ({ products }) => {
  return (
    <Box>
      <Box my={2}>
        <H1 mb="4px">All Product</H1>
        <Paragraph color="grey.600">
          Tall blind but were, been folks not the expand
        </Paragraph>
      </Box>

      <Grid container mb={-0.5} spacing={3}>
        {products.map((item) => (
          <Grid key={item.id} item md={4} sm={6} xs={12}>
            <ProductCard21
              hideRating
              id={item.id}
              slug={item.id}
              title={item.productName}
              price={item.basePrice}
              rating='4.5'
              off='0'
              // price={item.price}
              // off={item.discount}
              // rating={item.rating}
              // status={item.status}
              imgUrl={item.image[0].url}
              // productColors={item.colors}
            />
          </Grid>
        ))}
      </Grid>

      {/* <Box mt={6} display="flex" justifyContent="center">
        <Button color="primary" variant="contained">
          Load More...
        </Button>
      </Box> */}
    </Box>
  );
};
export default Section4;
