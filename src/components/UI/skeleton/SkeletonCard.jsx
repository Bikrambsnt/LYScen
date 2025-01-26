import React from "react";
import { Skeleton,Box,Typography } from "@mui/material";


export default function SkeletonCard(){
    return(

        <Box
         sx={{width:'184px', margin:"0 auto", textAlign:"left"}}>
            <Skeleton
            animation='wave'
            width="100%"
            variant="rectangular"
            height='208px'
            sx={{borderRadius:"4px", backgroundColor:'#636366'}}
            />

            <Box sx={{pt:1}}>
                <Typography variant="body2">
                    <Skeleton width='60%' 
                    animation='wave'
                    sx={{backgroundColor:'#636366'}}
                    />
                </Typography>
                <Typography variant="body2">
                    <Skeleton width='80%'
                    animation='wave'
                    sx={{backgroundColor:'#636366'}}
                    />
                </Typography>

            </Box>





        </Box>

    );
}