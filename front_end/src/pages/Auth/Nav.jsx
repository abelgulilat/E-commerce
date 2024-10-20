import { useState } from "react";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
// import {mobileNavContainerVariant,mobileNavListVariant,mobileNavExitProps,} from "~/data/animationConfig";
import Navigation from "../Auth/Navigation.jsx"

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

        <AnimatePresence mode="wait">
            {isOpen && (
            <motion.div
                layout="position"
                key="nav-links"
                // variants={mobileNavContainerVariant}
                initial="hidden"
                animate="show"
                className={`mt-4 basis-full md:hidden ${showSidebar ? "hidden" : "flex"}`}
                id="navigation-container"
            >
                <Navigation />

            </motion.div>
            )}
        </AnimatePresence>

    </div>


    

    );
};

export default Nav;
