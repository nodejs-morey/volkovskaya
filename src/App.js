/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useRef } from "react";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { deepmerge } from "@mui/utils";
import useMediaQuery from "@mui/material/useMediaQuery";
// import { Box } from "@mui/material";
import FirstBlock from "components/FirstBlock";
import ProjectBlock from "components/ProjectsBlock";
import BioBlock from "components/BioBlock";
import ServicesBlock from "components/ServicesBlock";
import ClientsBlock from "components/ClientsBlock";
import ContactsBlock from "components/ContactsBlock";
import { getDesignTokens, getThemedComponents } from "./theme";
import { ColorModeContext } from "./context/color-context";
// import ThemeToggle from "./ThemeToggler";
import Header from "./components/Header";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: white)");
  const [mode, setMode] = React.useState();

  React.useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  let theme = React.useMemo(
    () => createTheme(deepmerge(getDesignTokens(mode), getThemedComponents(mode))),
    [mode],
  );

  theme = responsiveFontSizes(theme);

  const parent = useRef();
  const refFirsBlock = useRef();

  const refProjectBlock = useRef();
  const refProjectMenu = useRef();

  const refServiceBlock = useRef();
  const refServiceMenu = useRef();

  const refBioBlock = useRef();
  const refBioMenu = useRef();

  const refClientsBlock = useRef();
  const refClientsMenu = useRef();

  const refContactsBlock = useRef();
  const refContactsMenu = useRef();

  useEffect(() => {
    const main = parent.current;
    const toTop = main.scrollTop || 0;
    const scrollEvent = () => {
      const windowHeight = window.innerHeight;

      if (toTop < windowHeight) {
        refProjectMenu.current.style.position = "sticky";
        refProjectMenu.current.style.top = 0;
      }

      if (toTop < windowHeight * 2) {
        refServiceMenu.current.style.position = "sticky";
        refServiceMenu.current.style.top = 0;
      }

      if (toTop < windowHeight * 3) {
        refBioMenu.current.style.position = "sticky";
        refBioMenu.current.style.top = 0;
      }

      if (toTop < windowHeight * 4) {
        refClientsMenu.current.style.position = "sticky";
        refClientsMenu.current.style.top = 0;
      }

      if (toTop < windowHeight * 5) {
        refContactsMenu.current.style.position = "sticky";
        refContactsMenu.current.style.top = 0;
      }
    };
    main.addEventListener("scroll", scrollEvent);
    return () => main.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="parent" ref={parent}>
          {/* <Box
            sx={{
              // height: "100vh",
              bgcolor: "background.default",
              color: "text.primary",
            }}
          > */}
          <Header />
          <FirstBlock refFirsBlock={refFirsBlock} />
          <ProjectBlock
            refProjectMenu={refProjectMenu}
            refProjectBlock={refProjectBlock}
            refFirsBlock={refFirsBlock}
          />
          <ServicesBlock
            refServiceBlock={refServiceBlock}
            refServiceMenu={refServiceMenu}
            refProjectBlock={refProjectBlock}
          />
          <BioBlock
            refBioBlock={refBioBlock}
            refBioMenu={refBioMenu}
            refServiceBlock={refServiceBlock}
          />
          <ClientsBlock
            refClientsBlock={refClientsBlock}
            refClientsMenu={refClientsMenu}
            refBioBlock={refBioBlock}
          />
          <ContactsBlock
            refContactsBlock={refContactsBlock}
            refContactsMenu={refContactsMenu}
            refClientsBlock={refClientsBlock}
          />
          {/* </Box> */}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default App;
