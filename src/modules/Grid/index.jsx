import React from "react";
import PropTypes from "prop-types";
import GridMUI from "@material-ui/core/Grid";

const Grid = ({
  children,
  alignContent,
  alignItems,
  component = "div",
  container = false,
  item = false,
  direction,
  justify,
  lg,
  md,
  sm,
  xl,
  xs,
  spacing,
  wrap,
}) => {
  return (
    <GridMUI
      alignContent={alignContent}
      alignItems={alignItems}
      component={component}
      container={container}
      item={item}
      direction={direction}
      justify={justify}
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
      xl={xl}
      spacing={spacing}
      wrap={wrap}
    >
      {children}
    </GridMUI>
  );
};

export const sizes = [
  false,
  "auto",
  "true",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
];

Grid.propTypes = {
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
  container: PropTypes.bool,
  item: PropTypes.bool,
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
  lg: PropTypes.oneOf(sizes),
  md: PropTypes.oneOf(sizes),
  sm: PropTypes.oneOf(sizes),
  xl: PropTypes.oneOf(sizes),
  xs: PropTypes.oneOf(sizes),
  spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
};

export default Grid;
