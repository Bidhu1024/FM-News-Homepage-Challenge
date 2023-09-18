import React from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import Middleimage from "../assets/image-web-3-desktop.jpg";
const MiddleSection = () => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      padding="2px .2rem"
      sx={{ display: "flex", gap: "1rem" }}
    >
      <Box width={"65%"}>
        <img
          src={Middleimage}
          width={"100%"}
          height={"250"}
          alt="middle image"
        />
        <Box
          sx={{
            mt: "1rem",
            display: "flex",
            padding: "4px",
            justifyContent: "space-between",
            gap: "4rem",
          }}
        >
          <Box width="65%">
            <Typography fontWeight={"800"} fontSize="20px" fontFamily={"Inter"}>
              The Bright Future of Web 3.0?
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Typography
              color="hsl(240, 100%, 5%)"
              fontWeight={"400"}
              fontSize={"15px"}
              fontFamily={"Inter"}
            >
              We dive into the next evolution of the web that claims to put the
              power of the platform back into the hands of the people. But is it
              really fulfilling its promise?
            </Typography>
            <Button
              sx={{
                backgroundColor: "hsl(5, 85%, 63%)",
                color: "white",
                width: "8rem",
                ":hover": {
                  backgroundColor: "hsl(240, 100%, 5%)",
                  cursor: "pointer",
                },
              }}
            >
              READ MORE
            </Button>
          </Box>
        </Box>
      </Box>
      <Stack width={"40%"} padding={"8px 6px"} bgcolor={"hsl(240, 100%, 5%)"}>
        <Typography
          sx={{ mt: "1.2rem", ml: ".5rem" }}
          fontWeight={"800"}
          fontSize={"1.6rem"}
          color="hsl(35, 77%, 62%)"
        >
          New
        </Typography>
        <Typography
          sx={{ ml: ".5rem", mt: "1.5rem",":hover":{
            cursor:" pointer",
            color:"hsl(35, 77%, 62%)"
          }, }}
          color="hsl(36, 100%, 99%)"
        >
          Hydrogen VS Electric Cars
        </Typography>
        <Typography
          sx={{ ml: ".5rem", mt: ".4rem", }}
          fontSize={"14px"}
          color="hsl(236, 13%, 42%)"
        >
          Will hydrogen-fueled cars ever catch up to EVs
        </Typography>
        <Divider sx={{ mt: "1rem", color: "white !important" }} />

        <Typography sx={{ ml: ".5rem", mt: "2rem",":hover":{
            cursor:" pointer",
            color:"hsl(35, 77%, 62%)"
          }, }} color="hsl(36, 100%, 99%)">
          The Downsides of AI Artistry
        </Typography>
        <Typography
          sx={{ ml: ".5rem", mt: ".4rem" }}
          fontSize={"14px"}
          color="hsl(236, 13%, 42%)"
        >
          What are the possible adverse effects of on-demand AI image
          generation?
        </Typography>
        <Divider sx={{ mt: "1rem", color: "white !important" }} />
        <Typography sx={{ ml: ".5rem", mt: "2rem", fontWeight:'700',":hover":{
            cursor:" pointer",
            color:"hsl(35, 77%, 62%)"
          }, }} color="hsl(36, 100%, 99%)">
          Is VC Funding Drying Up?
        </Typography>
        <Typography
          sx={{ ml: ".5rem", mt: ".4rem" }}
          fontSize={"14px"}
          color="hsl(236, 13%, 42%)"
        >
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </Typography>
      </Stack>
    </Box>
  );
};

export default MiddleSection;
