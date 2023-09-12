import React from "react";
import { Box, Typography } from "@mui/material";
const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "6px 8px",
      }}
    >
      <Box>
        <Typography fontSize={"2rem"} fontFamily={"Inter"} fontWeight={"700"}>W.</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1.4rem",
          alignItems: "center",
        }}
      >
        <Typography>Home</Typography>
        <Typography>New</Typography>
        <Typography>Popular</Typography>
        <Typography>Trending</Typography>
        <Typography>Categories</Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
