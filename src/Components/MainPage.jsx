import React from 'react'
import { Box } from "@mui/material"
import Navbar from './Navbar'
const MainPage = () => {

    return (
        <Box className="main-box" sx={{ width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box bgcolor={"red"} sx={{ width: '70%', height: '80%' }}>
<NavBar/>
            </Box>
        </Box>
    )
}

export default MainPage