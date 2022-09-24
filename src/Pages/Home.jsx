import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Sidebar from '../Components/Sidebar'
import Video from '../Components/Video'

const Home = () => {
  return (
    <Stack sx={{flexDirection:{sx:"column", md:"row"}}}>
        <Box sx={{ height: {sx:"auto",md:"95vh"}, borderRight: "1px solid #fff", px:{sx:0,md:2}}}>
            <Sidebar/>
        </Box>
    
        <Box p={2} sx={{overflowY:"auto", height:"90vh",flex:2}}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>
                Videos
            </Typography>
            <Video/>
        </Box>
    </Stack>
  )
}

export default Home