import { Box } from "@mui/material";
import Logo from "../../assets/images/Logo.svg";
import ThemeToggle from "../../ThemeToggler";

const Header = () => (
  <>
    <Box
      sx={{
        position: "fixed",
        left: "18px",
        zIndex: 20,
        top: 5,
      }}
    >
      <img src={Logo} alt="React Logo" height="15px" marginTop="0" />
    </Box>
    <Box
      sx={{
        position: "fixed",
        right: "150px",
        zIndex: 20,
        top: 6,
      }}
    >
      <ThemeToggle />
    </Box>
  </>
);

export default Header;
