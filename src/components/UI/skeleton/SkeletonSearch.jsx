import React from "react";
import { Skeleton,Box,Typography } from "@mui/material";


export default function SkeletonSearch() {

    return(
        <Box sx={{position:'relative',mt:'16px', p:'8px', width:'100%',display:"flex",flexWrap:'wrap',flexDirection:'column', alignItems:'start', justifyItems:'center'}}>

            <Skeleton
            width='48px'
            height='48px'
            animation='wave'
            variant="rectangular"
            sx={{position:'absolute',transform:'translate(-50%,-50%)',top:'50%',left:'34px', backgroundColor:'#636366' , borderRadius:'4px'}}
            />

            <Box sx={{ml:'68px', width:'70%'}}>
                <Typography variant="h6">
                    <Skeleton
                    variant="text"
                    animation='wave'
                    sx={{fontSize:'1rem',backgroundColor:'#636366'}}
                    />

                </Typography>

            </Box>
            <Box sx={{ml:'68px',width:'60%'}}>
                <Typography variant="h1">
                    <Skeleton
                    variant="text"
                    width='100%'
                    animation='wave'
                    sx={{fontSize:'1rem',backgroundColor:'#636366'}}
                    />

                </Typography>

            </Box>
            


        </Box>
    )


}