/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable object-curly-newline */
import { styled, Box, Typography } from "@mui/material";

const getMatgin = (position) => {
  switch (position) {
    case 1:
      return "0px";
    case 2:
      return "30px";
    case 3:
      return "0px";
    default:
      return "0px";
  }
};

const MenuItem = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "isInViewBlock" && prop !== "position" && prop !== "main" && prop !== "curentScreen",
})(({ theme, isInViewBlock, position = 1, main, curentScreen }) => ({
  background:
    theme.palette.mode === "dark" ? theme.palette.common.black : theme.palette.common.white,
  borderTop: `1px solid ${
    theme.palette.mode === "dark" ? theme.palette.common.white : theme.palette.common.black
  }`,
  borderBottom: `1px solid ${
    theme.palette.mode === "dark" ? theme.palette.common.white : theme.palette.common.black
  }`,

  position: isInViewBlock ? "sticky" : "fixed",
  // position: "fixed",
  bottom: main ? "auto" : isInViewBlock ? "auto" : getMatgin(position),
  top: main ? "0px" : isInViewBlock ? "0px" : "auto",
  zIndex: 99,
  height: "30px",
  width: "100%",
  padding: "2px 0px 0px 172px",
  marginTop: 0,
  transition: "position 3s ease-out",
  cursor: "pointer",
  display: curentScreen > position ? "none" : "block",
  textDecoration: "underline",
  color: theme.palette.common.black,
}));

const menuItem = ({
  ref,
  title,
  description,
  onClick,
  isInViewBlock,
  position,
  main,
  curentScreen,
}) => (
  <MenuItem
    onClick={onClick}
    ref={ref}
    isInViewBlock={isInViewBlock}
    position={position}
    main={main}
    curentScreen={curentScreen}
  >
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
          opacity: isInViewBlock ? 1 : 0.4,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          width: "50%",
          opacity: isInViewBlock ? 1 : 0.4,
        }}
      >
        {description}
      </Typography>
    </Box>
  </MenuItem>
);
export default menuItem;
