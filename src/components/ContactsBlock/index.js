/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { Box, styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import MenuItem from "components/MenuItem";
import { Box } from "@mui/material";
import useIsInViewport from "hooks/useIsInViewport";

const ContactsBlock = ({ refContactsBlock, refContactsMenu, refClientsBlock }) => {
  const [open, setOpen] = useState(false);
  const isVisible = useIsInViewport(refContactsBlock);

  useEffect(() => {
    setOpen(isVisible);
  }, [isVisible]);

  const menuClickHadler = () => {
    setOpen((prev) => !prev);
    if (!open) {
      refContactsBlock.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    } else {
      refClientsBlock.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <MenuItem
        title="contacts"
        description="email, social & application"
        ref={refContactsMenu}
        onClick={menuClickHadler}
        position="contacts"
        isVisible={isVisible}
      />

      <section ref={refContactsBlock}>
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
          <div style={{ textDecoration: "underline" }}>contacts</div>
        </Box>
        <Box sx={{ pt: 10, height: "100%" }}>
          <h1>Contacts Block</h1>
        </Box>
      </section>
    </>
  );
};

export default ContactsBlock;
