import React from "react";
import PropTypes from "prop-types";
import Grid from "../Grid";

const GridContainer = ({
  children,
  alignContent = "stretch",
  alignItems = "stretch",
  component = "div",
  direction = "row",
  justify = "flex-start",
  spacing = 0,
  wrap = "wrap",
  other = {},
}) => {
  return (
    <React.Fragment>
      <Grid
        container
        alignContent={alignContent}
        alignItems={alignItems}
        component={component}
        direction={direction}
        justify={justify}
        spacing={spacing}
        wrap={wrap}
        {...other}
      >
        {children}
      </Grid>
    </React.Fragment>
  );
};

GridContainer.propTypes = {
  children: PropTypes.node,
  alignContent: PropTypes.oneOf([
    "stretch",
    "center",
    "flex-start",
    "flex-end",
    "sapce-between",
    "space-around",
  ]),
  alignItems: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "stretch",
    "baseline",
  ]),
  component: PropTypes.elementType,
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
  justify: PropTypes.oneOf([
    "flex-start",
    "center",
    "-flex-end",
    "space-between",
    "space-around",
    "space-evenly",
  ]),
  spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  other: PropTypes.object,
};

export default GridContainer;
