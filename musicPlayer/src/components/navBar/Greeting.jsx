import {React,useState,useEffect} from "react";

function Greet(){

    const [greeting ,setGreeting] = useState('');

        const getGreeting = ()=>{

            const date = new Date;
            const currentTime=date.getHours()

            if(currentTime>=0 && currentTime<12){
                return 'Good Morning'
            }

            else if(currentTime>=12 && currentTime <6){
                return 'Good Afternoon'
            }

            else{
                return 'Good Evening'
            }

        };

        useEffect(()=>{
            setGreeting(getGreeting);
        },[getGreeting])



    return(
        <div>
            <h1 className="text-white font-[400] font-rubik text-lg pr-2">{greeting}</h1>
        </div>
    )
}

export default Greet;