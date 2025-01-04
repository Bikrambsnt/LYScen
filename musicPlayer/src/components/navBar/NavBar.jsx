import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser} from "@fortawesome/free-solid-svg-icons";

function NavBar(){
    return(
        <div>
            <FontAwesomeIcon icon={faUser} className="text-white text-2xl"/>

        </div>
    )
}

export default NavBar;