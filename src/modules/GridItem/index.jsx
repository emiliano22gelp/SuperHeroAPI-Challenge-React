import React from "react";
import PropTypes from "prop-types";
import Grid, { sizes } from "../Grid";

const GridItem = ({
  children,
  component = "div",
  lg = false,
  md = false,
  sm = false,
  xl = false,
  xs = false,
}) => {
  return (
    <Grid item component={component} lg={lg} md={md} sm={sm} xs={xs} xl={xl}>
      {children}
    </Grid>
  );
};

GridItem.propTypes = {
  children: PropTypes.node,
  component: PropTypes.elementType,
  lg: PropTypes.oneOf(sizes),
  md: PropTypes.oneOf(sizes),
  sm: PropTypes.oneOf(sizes),
  xl: PropTypes.oneOf(sizes),
  xs: PropTypes.oneOf(sizes),
};

export default GridItem;
