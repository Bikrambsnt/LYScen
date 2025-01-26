import React from "react";
import {Box,Skeleton,Typography } from "@mui/material";

export default function SkeletonAvatar() {



    return (
        <Box sx={{width:'112px', textAlign:'center',pt:'12px'}}>
            <Skeleton
            variant="circular"
            width='100%'
            height='112px'
            animation='wave'
            sx={{backgroundColor:'#636366'}}
            />


           <Box sx={{pt:1}}>
            <Typography
            variant="body2"
            >
                <Skeleton
                variant="text"
                animation='wave'
                sx={{fontSize:'1rem', backgroundColor:'#636366'}}
                />

            </Typography>
            </Box> 
        </Box>

       
    )
}