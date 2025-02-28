import { Box, Button, Grid, styled, useTheme } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import { H1, H6, Paragraph } from "components/Typography";
// styled components
const StyledBox = styled(Box)({
  marginBottom: 60,
  overflow: "hidden",
  "& .carousel-dot": {
    left: 40,
    right: 0,
    bottom: "30px",
    margin: "auto",
    position: "absolute",
  },
});
const Container = styled(Box)(({ theme }) => ({
  minHeight: 650,
  display: "flex",
  alignItems: "center",
  margin:"0% 1%",
  backgroundImage:
  "url('/assets/images/Furniture Shop/arm2.jpg')",
    // "url('https://media.istockphoto.com/id/1310420510/photo/modern-concept-of-domestic-interior-with-design-sofa-wooden-room-screen-pillow-blanket.jpg?s=1024x1024&w=is&k=20&c=o_JY8SdRhtBUGFX-s5s3ex6FtA3-zPmH9ISEexBkSyE=')",
    // "url('/assets/images/Furniture Shop/arm2.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  transition: "all 0.3s",
  [theme.breakpoints.down("md")]: {
    height: "60vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "50vh",
  },
}));
const StyledGrid = styled(Grid)({
  maxWidth: 1280,
  margin: "auto",
  position: "relative",
  alignItems: "center",
  padding: "2rem 2rem 5rem 2rem",
});
const GridItemOne = styled(Grid)(({ theme }) => ({
  padding:"0 3% 0 3%",
  "& h1": {
    fontSize: 60,
  },
  [theme.breakpoints.down("md")]: {
    "& h1": {
      fontSize: 50,
    },
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    "& h1": {
      fontSize: 40,
    },
  },
}));
const StyledButton = styled(Button)({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
  borderRadius: 0,
  padding: "8px 30px",
});
const TextBox = styled(Box)(({ theme }) => ({
  marginTop: 5,
  marginBottom: 40,
  paddingRight: 100,
  [theme.breakpoints.down("md")]: {
    paddingRight: 0,
  },
}));

// =============================================================================

// =============================================================================

const Section1 = ({ mainCarouselData }) => {
  const { palette } = useTheme();
  return (
    <StyledBox id="carouselBox">
      <Carousel
        spacing="0px"
        showDots={true}
        autoPlay={false}
        visibleSlides={1}
        showArrow={false}
        dotClass="carousel-dot"
        dotColor={palette.primary.main}
        totalSlides={mainCarouselData.length}
      >
        {mainCarouselData.map((item) => (
          <Container key={item.id}>
            <StyledGrid container>
              <GridItemOne item lg={6} md={8} xs={12}>
                <H6 color="whitesmoke" fontSize="50px" fontWeight="800">{item.subTitle}</H6>
                <H1 fontSize={60} color="whitesmoke">{item.title}</H1>

                <TextBox>
                  <Paragraph color="whitesmoke" fontWeight="500">{item.description}</Paragraph>
                </TextBox>

                <StyledButton color="primary" variant="contained">
                  {item.buttonText}
                </StyledButton>
              </GridItemOne>
            </StyledGrid>
          </Container>
        ))}
      </Carousel>
    </StyledBox>
  );
};
export default Section1;

