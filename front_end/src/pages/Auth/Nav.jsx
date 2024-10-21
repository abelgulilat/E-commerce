import { useState } from "react";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "../Auth/Navigation.jsx"
import "./Navigation.css";

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false); 

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    

  return (
    <div >
        <div className="flex w-[75px] justify-start md:hidden">
            <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
        <div className="hidden justify-start md:flex">
            <Navigation />
        </div>

        <>
            {isOpen && (
            <div  className={`w-[50%] ${showSidebar ? "hidden" : "flex"} `} >
                <Navigation />

            </div>
            )}
        </>

    </div>


    

    );
};

export default Nav;
