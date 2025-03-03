import {
  container,
  title,
  cardTitle,
  main,
  mainRaised,
  mrAuto,
  whiteColor,
  grayColor,
  mlAuto,
} from "/styles/jss/nextjs-material-kit-pro.js";

import buttonGroup from "/styles/jss/nextjs-material-kit-pro/buttonGroupStyle.js";
import tooltips from "/styles/jss/nextjs-material-kit-pro/tooltipsStyle.js";

const styles = {
  main,
  mainRaised,
  mrAuto,
  mlAuto,
  cardTitle,
  ...buttonGroup,
  ...tooltips,
  container: {
    ...container,
    zIndex: 1,
  },
  title: {
    ...title,
    "&, & + h4": {
      color: whiteColor,
    },
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "1.125em !important",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
    
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
    fontSize: "1.125em !important",
  },
  left: {
    float: "left!important",
    display: "block",
    fontSize:"3em"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
    
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative",
  },
  imgContainer: {
    width: "120px",
    height: "100px",
    maxHeight: "160px",
    overflow: "hidden",
    display: "block",
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  description: {
    maxWidth: "150px",
  },
  tdName: {
    minWidth: "200px",
    fontWeight: "400",
    fontSize: "1.5em",
    
  },
  tdNameAnchor: {
    color: grayColor[1],
  },
  tdNameSmall: {
    color: grayColor[0],
    fontSize: "0.75em",
    fontWeight: "300",
  },
  tdNumber: {
    textAlign: "right",
    minWidth: "150px",
    fontWeight: "300",
    fontSize: "1.125em !important",
  },
  tdNumberSmall: {
    marginRight: "4px",
  },
  tdNumberAndButtonGroup: {
    
    lineHeight: "1 !important",
    "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
      marginRight: "0",
    },
  },
  customFont: {
    fontSize: "16px !important",
  },
  actionButton: {
    margin: "0px",
    padding: "5px",
  },
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },
};

export default styles;
