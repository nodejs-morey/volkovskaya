/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
// import { IconButton, Box } from "@mui/material";
import { Box } from "@mui/material";

import { useTheme } from "@mui/material/styles";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "./context/color-context";

const SubHeaderNavigation = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <>
      {/* {theme.palette.mode} mode */}
      {/* <IconButton onClick={colorMode.toggleColorMode} color="inherit" sx={{ marginTop: "0px" }}>
        {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton> */}
      {/* </Box> */}
      <Box
        onClick={colorMode.toggleColorMode}
        color="inherit"
        sx={{
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          background: theme.palette.mode === "dark" ? "#fff" : "#000",
          cursor: "pointer",
        }}
      />
    </>
  );
};

export default SubHeaderNavigation;
