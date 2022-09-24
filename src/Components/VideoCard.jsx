// import { Card } from '@material-ui/core'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const VideoCard = ({video}) => {
  return (

    <Card sx={{width:"300px", boxShadow:"none", borderRadius:0}}>
        <CardMedia image={video?.snippet?.thumbnails?.high?.url} alt={"something"} sx={{width:"100%", height:180}}/>
        <CardContent sx={{backgroundColor:"#1E1E1E"}} >
            <Typography variant="subtitle1" fontWeight="bold" color="#fff" >
                {video?.snippet?.title}
            </Typography>
            <Typography variant="subtitle2" color="gray">
                {video?.snippet.channelTitle}
                <CheckCircleIcon sx={{fontSize:"12px", ml:"5px"}}/>
            </Typography>

        </CardContent>
    </Card>

  )
}

export default VideoCard