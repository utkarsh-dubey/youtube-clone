import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import CodeIcon from '@mui/icons-material/Code'
import { Stack } from '@mui/material'

const categories = [

    {
        name: "New",
        icon: <HomeIcon/>

    },
    {
        name:"Coding",
        icon: <CodeIcon/>
    },
    {
        name:"ReactJs",
        icon: <CodeIcon/>
    },
    {
        name:"JavaScript",
        icon: <CodeIcon/>
    }

]

const Sidebar = () => {



  return (
    <Stack direction="row" sx={{overflowY:"auto", height:{sx:"auto",md:"95%"},flexDirection:{md:"column"}}}>
        {categories.map((i)=>(
            <button style={{background:'transparent',color:"white",fontWeight:"bold", textTransform:"capatalize",display:"flex",alignItems:"center",justifyContent:"start",padding:"7px 15px",margin:"10px 0px"}}>
                <span style={{marginRight:"15px"}}>{i.icon}</span>
                <span>{i.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar