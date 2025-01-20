import {React,useState,useEffect} from "react";

function Greet(){

    const [greeting ,setGreeting] = useState('');

        const getGreeting = ()=>{

            const date = new Date;
            const currentTime=date.getHours()

            if(currentTime >= 0 && currentTime < 12){
                // console.log(currentTime)
                return 'Good Morning'
            }

            else if(currentTime >= 12 && currentTime < 18){
                // console.log(currentTime)
                return 'Good Afternoon'
            }

            else{
                // console.log(currentTime)
                return 'Good Evening'
            }

        };

        useEffect(()=>{
            setGreeting(getGreeting());
        },[])



    return(
        
            <h1 className=" font-[400] font-rubik text-lg">{greeting}</h1>
        
    )
}

export default Greet;