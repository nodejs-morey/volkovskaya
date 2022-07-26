/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useIsInViewport from "hooks/useIsInViewport";

import MenuItem from "components/MenuItem";

const CircleOne = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.dark}`,
  width: "400px",
  height: "400px",
  borderRadius: "50%",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  boxSizing: "border-box",

  [theme.breakpoints.down("md")]: {
    position: "inherit",
    scrollSnapAlign: "start",
    width: "500px",
    height: "500px",
    minWidth: "500px",
    minHeight: "500px",
  },
}));

const CircleTwo = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.dark}`,
  width: "500px",
  height: "500px",
  borderRadius: "50%",
  position: "absolute",
  left: "30%",
  bottom: "0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  padding: "20px",
  scrollSnapAlign: "start",
  [theme.breakpoints.down("md")]: {
    position: "inherit",
    scrollSnapAlign: "start",
    minWidth: "500px",
    minHeight: "500px",
  },
}));
const CircleThree = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.dark}`,
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  position: " absolute",
  right: "10%",
  // top: "0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  boxSizing: "border-box",
  [theme.breakpoints.down("md")]: {
    position: "inherit",

    scrollSnapAlign: "start",
    minWidth: "500px",
    minHeight: "500px",
  },
}));

const ServiceWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  // position: "relative",
  // width: "100%",
  overflow: "auto",

  [theme.breakpoints.down("md")]: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    // flexFlow: "row nowrap",
    // whiteSpace: "nowrap",
    // flexWrap: "nowrap",
    // flex: "1",
    flexDirection: "row",

    // flexWrap: "wrap",
    scrollSnapType: "x mandatory",
    overflow: "auto",
  },
  // [theme.breakpoints.up("sm")]: {
  //   backgroundColor: "#555",
  // },
  // [theme.breakpoints.up("xs")]: {
  //   backgroundColor: "#555",
  // },
}));

const ServicesBlock = ({ refServiceBlock, refServiceMenu, refProjectBlock }) => {
  const [open, setOpen] = useState(false);
  const isVisible = useIsInViewport(refServiceBlock);
  // console.log(isVisible);

  useEffect(() => {
    setOpen(isVisible);
  }, [isVisible]);

  const menuClickHadler = () => {
    if (!open) {
      refServiceBlock.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    } else {
      refProjectBlock.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
    setOpen((prev) => !prev);
  };

  return (
    <>
      <MenuItem
        title="services"
        description="ui/ux design, art direction & design package"
        ref={refServiceMenu}
        onClick={menuClickHadler}
        position="services"
        isVisible={isVisible}
      />

      <section ref={refServiceBlock}>
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
          <div style={{ textDecoration: "underline" }}>services</div>
        </Box>
        <ServiceWrapper>
          {/* <CircleOne>
            <Box>
              <Typography variant="h4" sx={{ textAlign: "left" }}>
                ux design
              </Typography>

              <Typography>
                ux audit <br />
                user research <br />
                user journey <br />
                analytics <br />
                sketching <br />
                wireframing <br />
                lo-fi prototyping <br />
                hi-fi prototyping <br />
                user testing
              </Typography>
            </Box>
          </CircleOne>
          <CircleTwo>
            <Box>
              <Typography variant="h4" sx={{ textAlign: "left" }}>
                ui design
              </Typography>

              <Typography>
                visual design
                <br /> digital design <br />
                content design <br />
                Moodboards & presentations <br />
                design concepts <br />
                design system
              </Typography>
            </Box>
          </CircleTwo>
          <CircleThree>
            <Box>
              <Typography>
                design strategy
                <br /> creative team building
                <br /> leading designers & creative processes
                <br /> brainstorming & workshop conduction
                <br /> stakeholders collaboration
                <br /> brand tone of voice art direction
              </Typography>
              <Typography variant="h4" sx={{ textAlign: "left" }}>
                art direction
              </Typography>
            </Box>
          </CircleThree> */}
        </ServiceWrapper>
      </section>
    </>
  );
};

export default ServicesBlock;
