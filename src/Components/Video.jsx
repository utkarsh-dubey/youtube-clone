import { Stack, Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';

const Video = () => {

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);


    const callAPI = async () => {
        const options = {
        
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };

        // axios.request(options).then(function (response) {
        //     console.log(response.data);
        //     setVideos(response.data);
        // }).catch(function (error) {
        //     console.error(error);
        // });

        const {data} = await axios.get("https://youtube-v31.p.rapidapi.com/search?part=snippet&q=New&maxResults=50",options);
        setVideos(data.items);
        console.log(videos);
        console.log(data);
        setLoading(false);
    }

    useEffect(() => {
        console.log(process.env.REACT_APP_API_KEY);
        callAPI();
        
    }, []);

    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
        
            {!loading && videos.map((item,id)=>(<Box><VideoCard video={item}/></Box>))}
        </Stack>
    )
}

export default Video