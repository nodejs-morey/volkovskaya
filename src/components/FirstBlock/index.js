/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
import { Box, styled } from "@mui/material";
import Marquee from "react-fast-marquee";
import mainScreen from "../../assets/images/mainScreen.png";

const H1 = styled("h1")({
  fontWeight: 500,
  fontSize: "calc((75vw - 4.5rem) / 10)",
});

const FirstBlock = ({ refFirsBlock }) => (
  // const theme = useTheme();

  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // const isDeckstop = useMediaQuery(theme.breakpoints.down("lg"));
  <section ref={refFirsBlock}>
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Box
        sx={{
          marginLeft: { md: "163px", sm: "15px", xs: "15px" },
          paddingTop: { md: "0px", sm: "80px", xs: "80px" },
        }}
      >
        <H1 variant="h1" sx={{ lineHeight: 1, transform: "translateY(-20px)" }}>
          my name is ksenia
        </H1>

        <H1 variant="h1">and i design</H1>
      </Box>
      <Box sx={{ transform: { md: "translateY(-20px)", sm: "translateY(-20px)" } }}>
        <Marquee speed={50} gradient={false}>
          <H1 variant="h1">
            effective digital solutions / human-centered wesites & apps / positive user experience
          </H1>
        </Marquee>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "300px",
          position: "absolute",
          bottom: "0px",
          background: `url(${mainScreen}) no-repeat center center `,
          backgroundSize: "cover",
        }}
      />
    </Box>
  </section>
);
export default FirstBlock;
