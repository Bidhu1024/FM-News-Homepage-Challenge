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
        <Typography fontSize={"2rem"} fontFamily={"Inter"} fontWeight={"700"}>
          W.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1.4rem",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            "&:hover": {
              color: "red",
              cursor: "pointer",
            },
          }}
        >
          Home
        </Typography>
        <Typography
          sx={{
            "&:hover": {
              color: "red",
              cursor: "pointer",
            },
          }}
        >
          New
        </Typography>
        <Typography
          sx={{
            "&:hover": {
              color: "red",
              cursor: "pointer",
            },
          }}
        >
          Popular
        </Typography>
        <Typography
          sx={{
            "&:hover": {
              color: "red",
              cursor: "pointer",
            },
          }}
        >
          Trending
        </Typography>
        <Typography
          sx={{
            "&:hover": {
              color: "red",
              cursor: "pointer",
            },
          }}
        >
          Categories
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
