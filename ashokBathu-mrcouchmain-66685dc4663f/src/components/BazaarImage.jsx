import { compose, display, spacing, styled } from "@mui/system";
const BazaarImage = styled("img")(compose(spacing, display));
BazaarImage.defaultProps = {
  display: "block",
  marginLeft:-5,
  // marginLeft: "50px"
};
export default BazaarImage;
