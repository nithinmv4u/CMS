import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext)
    return (
        <div className="bg-cyan-900 h-auto w-full sticky top-0">
            {
                user ? <div className="w-1/3 ml-auto flex justify-around items-center p-4 text-xl font-bold text-white">
                    <h1>Welcome {user.username}</h1>
                    <button className="hover:text-red-500 bg-cyan-900 rounded-md p-2 mx-2"  onClick={() => {
                        logoutUser();
                    }}>Logout</button>
                    </div>
                : <div className="rounded-sm p-4 font-bold text-xl text-white text-center"><h1>CMS</h1></div> 
            }
            
        </div>
    )
}

export default Header;