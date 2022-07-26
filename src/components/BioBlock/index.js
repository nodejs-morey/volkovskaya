/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import MenuItem from "components/MenuItem";
import { Box, Typography, Grid } from "@mui/material";
import { H4 } from "commonStyles";
import useIsInViewport from "hooks/useIsInViewport";
import BioImg from "../../assets/images/bio.png";

const BioBlock = ({ refBioBlock, refBioMenu, refServiceBlock }) => {
  const [open, setOpen] = useState(false);
  const isVisible = useIsInViewport(refBioBlock);

  useEffect(() => {
    setOpen(isVisible);
  }, [isVisible]);

  const menuClickHadler = () => {
    if (!open) {
      refBioBlock.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    } else {
      refServiceBlock.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
    setOpen((prev) => !prev);
  };
  return (
    <>
      <MenuItem
        title="bio"
        description="8 companies, 2 universities & 5 countries      "
        ref={refBioMenu}
        onClick={menuClickHadler}
        isVisible={isVisible}
        position="bio"
      />

      <section ref={refBioBlock}>
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
          <div style={{ textDecoration: "underline" }}>bio</div>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              paddingLeft: "16px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
              }}
            >
              <H4
                sx={{
                  width: "56%",
                }}
              >
                Being keen on User-Centered Design, I specialize in UI/UX and Tone of Voice of
                digital products. I manage teams and create designs looking both from users'
                perspectives and businesses' goals, bringing them together for effective design
                solutions and meaningful product experiences beyond the expected.
              </H4>
              <Typography sx={{ mt: 4, textDecoration: "underline" }}>download CV</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "50%",
              background: `url(${BioImg}) no-repeat center center`,
              backgroundSize: "cover",

              height: "100vh",
            }}
          />
        </Box>
      </section>
    </>
  );
};

export default BioBlock;
