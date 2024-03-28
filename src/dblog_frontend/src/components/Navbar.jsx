import { useState } from "react";
import pic from "../../public/profile.png"
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { NavLink } from "react-router-dom";
export default function Navbar(){
    const [isTrue,setTrue] = useState(false)
    function handleClick(){
        setTrue(true)
    }
    return<>
        <nav className="navbar">
        
            <p>Blogs</p>
            {
                isTrue?<button>Log In </button>:<DragHandleIcon style={{color:"green",cursor:"pointer"}} onClick={handleClick} fontSize="large"/>
            }
        </nav>
    </>
}
