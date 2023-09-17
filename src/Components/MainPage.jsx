import React from 'react'
import { Box,useMediaQuery } from "@mui/material"
import Navbar from './Navbar'
import MiddleSection from './MiddleSection';

const MainPage = () => {
    const isMobile = useMediaQuery('(max-width:375px)');
    const isDesktop = useMediaQuery('(max-width:1440px)');
    return (
        <Box className="main-box" sx={{ width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '60%', height: '80%' }}>
<Navbar/>
<MiddleSection />
            </Box>
        </Box>
    )
}

export default MainPage