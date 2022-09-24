import { IconButton, Input, Paper, Stack, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'

const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{position: "sticky", justifyContent:"space-between"}}>
        <Typography variant="h5" sx={{backgroundColor:'red', ml:10, p:1}}>
            Youtube
        </Typography>

        <Paper component="form" sx={{borderRadius:20,border:'1px solid',pl:2}}>
        <input style={{border:"none",outline:"none",width:"350px"}} placeholder="Search..">
        </input>
        <IconButton sx={{p:'10px',color:'red'}}>
            <SearchIcon/>
        </IconButton>
        </Paper>
        
    </Stack>
  )
}

export default Navbar