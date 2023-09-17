import React from "react";
import { Grid, Paper, Box, Typography, Button } from "@mui/material";
import Middleimage from "../assets/image-web-3-desktop.jpg";
const MiddleSection = () => {
  return (
    <Box
      bgcolor={"red"}
      width={"100%"}
      height={"100%"}
      padding="2px .2rem"
      sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
    >
      <Box width={"60%"}>
        <img
          src={Middleimage}
          width={"100%"}
          height={"250"}
          alt="middle image"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography>The Bright Future of Web 3.0?</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>
              We dive into the next evolution of the web that claims to put the
              power of the platform back into the hands of the people. But is it
              really fulfilling its promise?
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: "hsl(240, 100%, 5%)", color: "white" }}
            >
              READ MORE
            </Button>
          </Box>
        </Box>
      </Box>
      <Box width={"40%"}> Right violet box</Box>
    </Box>
  );
};

export default MiddleSection;
