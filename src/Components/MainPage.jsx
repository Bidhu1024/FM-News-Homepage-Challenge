import React from 'react'
import { Box,useMediaQuery } from "@mui/material"
import Navbar from './Navbar'

const MainPage = () => {
    const isMobile = useMediaQuery('(max-width:375px)');
    const isDesktop = useMediaQuery('(max-width:1440px)');
    return (
        <Box className="main-box" sx={{ width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box bgcolor={"red"} sx={{ width: '70%', height: '80%' }}>
<Navbar/>

            </Box>
        </Box>
    )
}

export default MainPage