/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { Box, styled } from "@mui/material";
import { useEffect, useState, Typography } from "react";
import MenuItem from "components/MenuItem";
import { Box, Grid } from "@mui/material";
import useIsInViewport from "hooks/useIsInViewport";
import ProjectLink from "./projectLink";
import portfolioImg from "../../assets/images/portfolio.png";

const projects = [
  {
    id: 0,
    title: "birkenstock",
    locked: true,
    link: "",
  },
  {
    id: 1,
    title: "polar",
    locked: true,
    link: "",
  },
  {
    id: 2,
    title: "lyle & Scott",
    locked: true,
    link: "",
  },
  {
    id: 3,
    title: "natgeo apparel",
    locked: true,
    link: "",
  },
  {
    id: 4,
    title: "natgeo apparel",
    locked: false,
    link: "",
  },
  {
    id: 5,
    title: "adidas",
    locked: false,
    link: "",
  },
  {
    id: 6,
    title: "high project",
    locked: false,
    link: "",
  },
  {
    id: 7,
    title: "crosby studios",
    locked: false,
    link: "",
  },
  {
    id: 8,
    title: "jil sander",
    locked: false,
    link: "",
  },
];

const ProjectsBlock = ({ refProjectMenu, refProjectBlock, refFirsBlock }) => {
  const [open, setOpen] = useState(false);
  const isVisible = useIsInViewport(refProjectBlock);
  const [firstLoad, setFirstLoad] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setOpen(isVisible);
    if (isVisible) {
      setCount((prev) => prev + 1);
    }
  }, [isVisible]);

  useEffect(() => {
    if (count >= 2) {
      setFirstLoad(true);
    }
  }, [count]);

  const handleScroll = () => {
    if (!open) {
      refProjectBlock.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
      setFirstLoad(true);
    } else {
      refFirsBlock.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
    setOpen((prev) => !prev);
  };

  return (
    <>
      <MenuItem
        title="projects"
        description="digital portfolio"
        ref={refProjectMenu}
        onClick={handleScroll}
        position="projects"
        isVisible={!firstLoad ? false : isVisible}
      />

      <section>
        <Box ref={refProjectBlock}>
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  pt: 5,
                  pl: 3,
                  flexDirection: "column",
                  justifyContent: "center",
                  display: { xs: 'flex', sm: 'none', md: 'none' },
                }}
                onClick={handleScroll}
              >
                <div style={{ textDecoration: "underline" }}>projects</div>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "calc(100% - 100px)",
                }}
              >
                {projects.map((item) => (
                  <ProjectLink key={item.id} project={item} />
                ))}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  width: "100%",
                  // height: "100%",
                  background: `url(${portfolioImg}) no-repeat center center`,
                  backgroundSize: "cover",

                  height: "100vh",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </section>
    </>
  );
};

export default ProjectsBlock;
