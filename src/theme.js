/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
// import { styled, Typography } from "@mui/material";
import {
  amber,
  grey,
  blue,
  // common
} from "@mui/material/colors";

const palette = {
  light: {
    primary: {
      main: "#34C0AC",
      light: "#B1DED3",
      dark: "#00765A",
    },
  },
  dark: {
    primary: {
      main: "#101010",
      light: "#f5f5f5",
      dark: "#f5f5f5",
    },
  },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    common: {
      black: "#101010",
    },
    ...(mode === "light"
      ? {
          primary: {
            main: palette.light.primary.main,
            light: palette.light.primary.light,
            dark: palette.light.primary.dark,
          },

          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          primary: {
            main: palette.dark.primary.main,
          },
          divider: palette.light.primary.main,
          background: {
            default: palette.dark.primary.main,
            paper: palette.dark.primary.main,
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
  typography: {
    fontFamily: ["Oswald", "Roboto", "'Helvetica Neue'", "Arial", "sans-serif"].join(","),
    body1: {
      fontFamily: "Helvetica Neue, sans-serif",
    },
    h1: {
      fontFamily: "'Helvetica Neue', sans-serif",
      // fontSize: "400px",
      letterSpacing: "-0.02em",
      // lineHeight: "68px",
      // [this.breakpoints.down("md")]: {
      //   fontSize: "3.8rem",
      // },
      // [this.breakpoints.down("sm")]: {
      //   lineHeight: "56px",
      //   fontSize: "3.5rem",
      // },
    },
  },
});

export const getThemedComponents = (mode) => ({
  components: {
    ...(mode === "light"
      ? {
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: grey[800],
              },
            },
          },
          // MuiLink: {
          //   variant: "h3",
          // },
          // MuiButton: {
          //   styleOverrides: {
          //     root: {
          //       borderRadius: 0,
          //       color: common.white,
          //       fontFamily:
          //         "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
          //       fontSize: 20,
          //       borderWidth: 2,
          //       "&:hover": {
          //         borderWidth: 2,
          //       },
          //     },
          //   },
          //   variants: [
          //     {
          //       props: { variant: "contained" },
          //       style: {
          //         fontFamily:
          //           "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
          //       },
          //     },
          //     {
          //       props: { variant: "outlined" },
          //       style: {
          //         color: palette.light.primary.main,
          //       },
          //     },
          //     {
          //       props: { variant: "primary", color: "primary" },
          //       style: {
          //         border: "4px dashed blue",
          //       },
          //     },
          //   ],
          // },
          // MuiList: {
          //   styleOverrides: {
          //     root: {},
          //   },
          // },
          // MuiMenuItem: {
          //   styleOverrides: {
          //     root: {
          //       color: common.white,
          //       alignItems: "stretch",
          //       fontFamily:
          //         "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
          //     },
          //   },
          // },
          // MuiAccordion: {
          //   styleOverrides: {
          //     root: {
          //       color: common.white,
          //       fontFamily:
          //         "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
          //     },
          //   },
          // },
        }
      : {
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: blue[800],
              },
            },
          },
        }),
  },
});

// export const H1 = styled(Typography)(({ theme }) => ({
//   fontWeight: 500,

//   // [theme.breakpoints.down("md")]: {
//   //   // lineHeight: "56px",
//   //   fontSize: "9rem",
//   // },
//   // [theme.breakpoints.down("sm")]: {
//   //   // lineHeight: "56px",
//   //   fontSize: "30px",
//   // },
// }));
