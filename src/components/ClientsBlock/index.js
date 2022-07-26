/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, styled, Typography, useTheme, Tooltip } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import MenuItem from "components/MenuItem";
import useIsInViewport from "hooks/useIsInViewport";
import { H4 } from "commonStyles";
import Birkenstock from "assets/images/clientsLogo/Birkenstock.svg";
import NationalGeographic from "assets/images/clientsLogo/NationalGeographic.svg";
import NationalGeographicWhite from "assets/images/clientsLogo/NationalGeographicWhite.svg";
import AdidasBlack from "assets/images/clientsLogo/AdidasBlack.svg";
import AdidasWhite from "assets/images/clientsLogo/AdidasWhite.svg";
import Reebok from "assets/images/clientsLogo/Reebok.svg";
import ReebokWhite from "assets/images/clientsLogo/ReebokWhite.svg";
import TaylorMadeBlack from "assets/images/clientsLogo/TaylorMadeBlack.svg";
import TaylorMadeWhite from "assets/images/clientsLogo/TaylorMadeWhite.svg";
import RockportBlack from "assets/images/clientsLogo/RockportBlack.svg";
import RockportWhite from "assets/images/clientsLogo/RockportWhite.svg";
import PolarBlack from "assets/images/clientsLogo/PolarBlack.svg";
import PolarWhite from "assets/images/clientsLogo/PolarWhite.svg";

import LoupedeckBlack from "assets/images/clientsLogo/LoupedeckBlack.svg";
import LoupedeckWhite from "assets/images/clientsLogo/LoupedeckWhite.svg";

const Logo1 = styled("img")(({ theme }) => ({
  filter: theme.palette.mode === "dark" ? "brightness(0) invert(1)" : "grayscale(100%)",
  cursor: "pointer",
  "&:hover ": {
    filter: theme.palette.mode === "dark" ? "grayscale(0%)" : "grayscale(0%)",
  },
}));
const Logo2 = styled("img")(({ theme }) => ({
  filter: theme.palette.mode === "dark" ? "brightness(0) invert(1)" : "grayscale(100%)",
  cursor: "pointer",
  "&:hover ": {
    filter: theme.palette.mode === "dark" ? "grayscale(0%)" : "grayscale(0%)",
  },
}));
const Logo3 = styled("img")(({ theme }) => ({
  filter: theme.palette.mode === "dark" ? "brightness(0) invert(1)" : "grayscale(100%)",
  cursor: "pointer",
  "&:hover ": {
    filter: theme.palette.mode === "dark" ? "grayscale(0%)" : "grayscale(0%)",
  },
}));

const ClientsBlock = ({ refClientsBlock, refClientsMenu, refBioBlock }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isVisible = useIsInViewport(refClientsBlock);
  const isDark = theme.palette.mode === "dark";

  useEffect(() => {
    setOpen(isVisible);
  }, [isVisible]);

  const menuClickHadler = () => {
    if (!open) {
      refClientsBlock.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    } else {
      refBioBlock.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
    setOpen((prev) => !prev);
  };

  return (
    <>
      <MenuItem
        title="clients"
        description="adidas, birkenstock & more"
        ref={refClientsMenu}
        onClick={menuClickHadler}
        position="clients"
        isVisible={isVisible}
      />

      <section ref={refClientsBlock}>
        <Box
          sx={{
            pt: 5,
            pl: 3,
            display: { xs: 'flex', sm: 'none', md: 'none' },
            flexDirection: "column",
            justifyContent: "center",
          }}
          onClick={menuClickHadler}
        >
          <div style={{ textDecoration: "underline" }}>clients</div>
        </Box>
        <Box
          sx={{
            // pt: 10,
            pl: 2,
            height: "100vh",
          }}
        >
          <Box sx={{ pt: 1, height: "100%" }}>
            <H4 sx={{ pt: 8 }}>i worked for</H4>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: "70%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  maxWidth: { md: 800, xs: 400 },
                  flexWrap: "wrap",
                }}
              >
                <Tooltip sx={{}} title="Test text" placement="top" arrow>
                  <Logo1 src={Birkenstock} alt="Birkenstock" />
                </Tooltip>
                <Tooltip title="Text text" placement="top" arrow>
                  {isDark ? (
                    <Logo2 src={NationalGeographicWhite} alt="National Geographic" />
                  ) : (
                    <Logo2 src={NationalGeographic} alt="National Geographic" />
                  )}
                </Tooltip>
                <Tooltip title="Test text" placement="top" arrow>
                  {isDark ? (
                    <Logo3 src={AdidasWhite} alt="Adidas" />
                  ) : (
                    <Logo3 src={AdidasBlack} alt="Adidas" />
                  )}
                </Tooltip>
                <Tooltip title="Test text" placement="top" arrow>
                  {isDark ? (
                    <Logo3 src={ReebokWhite} alt="Reebok" />
                  ) : (
                    <Logo3 src={Reebok} alt="Reebok" />
                  )}
                </Tooltip>
                {/* </Box> */}
                {/* <Box
                sx={{
                  display: "flex",
                }}
              > */}
                <Tooltip title="Test text" placement="bottom" arrow>
                  {isDark ? (
                    <Logo2 src={TaylorMadeWhite} alt="Taylor Made" />
                  ) : (
                    <Logo2 src={TaylorMadeBlack} alt="Taylor Made" />
                  )}
                </Tooltip>
                <Tooltip title="Test text" placement="bottom" arrow>
                  {isDark ? (
                    <Logo3 src={RockportWhite} alt="Rockport" />
                  ) : (
                    <Logo3 src={RockportBlack} alt="Rockport" />
                  )}
                </Tooltip>
                <Tooltip title="Test text" placement="bottom" arrow>
                  {isDark ? (
                    <Logo3 src={PolarWhite} alt="Polar" />
                  ) : (
                    <Logo3 src={PolarBlack} alt="Polar" />
                  )}
                </Tooltip>
                <Tooltip title="Test text" placement="bottom" arrow>
                  {isDark ? (
                    <Logo3 src={LoupedeckWhite} alt="Reebok" />
                  ) : (
                    <Logo3 src={LoupedeckBlack} alt="Reebok" />
                  )}
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default ClientsBlock;
