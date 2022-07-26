/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-nested-ternary */
/* eslint-disable object-curly-newline */
import React from "react";
import { styled, Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const getMatgin = (position) => {
  switch (position) {
    case "projects":
      return "116px";
    case "services":
      return "87px";
    case "bio":
      return "58px";
    case "clients":
      return "29px";
    case "contacts":
      return "0px";
    default:
      return "0px";
  }
};

const MenuItemStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "position",
})(({ theme, position = 1 }) => ({
  background:
    theme.palette.mode === "dark" ? theme.palette.common.black : theme.palette.common.white,
  borderTop: `1px solid ${
    theme.palette.mode === "dark" ? theme.palette.common.white : theme.palette.common.black
  }`,
  borderBottom: `1px solid ${
    theme.palette.mode === "dark" ? theme.palette.common.white : theme.palette.common.black
  }`,
  position: "fixed",
  zIndex: 9,
  width: "100%",
  cursor: "pointer",
  height: "30px",
  bottom: getMatgin(position),
  textDecoration: "underline",
  color: theme.palette.common.black,
  padding: "1px 0px 0px 172px",
}));

const MenuItem = React.forwardRef(
  ({ title, description, onClick, isInViewBlock, position, isVisible }, ref) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
      <MenuItemStyled onClick={onClick} ref={ref} position={position}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            marginTop: "0px",
          }}
        >
          <Typography
            sx={{
              width: "43.5%",
              display: { xs: (typeof isVisible !== "undefined" && isVisible) ? 'none' : "block", sm: 'block' },
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              width: "50%",
            }}
          >
            {!isMobile && description}
          </Typography>
        </Box>
      </MenuItemStyled>
    );
  },
);
export default MenuItem;
