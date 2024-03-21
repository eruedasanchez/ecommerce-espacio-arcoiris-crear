'use client';

import { useEffect, useState } from "react";
import { headerActions } from "@/constants/constants";
import Logo from "./Logo";
import HeaderActions from "./HeaderActions";
import HeaderSearch from "./HeaderSearch";
import Overlay from "./Overlay";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

// transition1: transition-opacity duration-250 ease

const Header = () => {
    const [headerActive, setHeaderActive] = useState(false);
    const [navbarActive, setNavbarActive] = useState(false);
    const [overlayActive, setOverlayActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setHeaderActive(true);
            } else {
                setHeaderActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleOpenMenu = () => {
        setNavbarActive(!navbarActive);
        setOverlayActive(!overlayActive);
    };
    
    return (
        <header className={`top-[0px] left-[0px] bg-white w-full py-[20px] z-[4] transition-opacity duration-250 ease 
        tabletL:relative tabletL:py-[15px] tabletL:border-b-[1px] tabletL:border-solid tabletL:border-cultured tabletL:mb-[67px] 
        ${headerActive ? 'fixed shadow-header tabletL:relative tabletL:shadow-none' : 'absolute'}`}>  
            <div className="container flex justify-between items-center tabletL:grid tabletL:grid-cols-3">
                <Overlay overlayActive={overlayActive}/> 
                <HeaderSearch/>
                <Logo/>
                <HeaderActions 
                    headerActions={headerActions}
                    containedStyles='hidden tabletL:flex tabletL:justify-end tabletL:items-center tabletL:gap-[16px]'
                />
                <Navbar 
                    containedStyles={`hidden tabletL:block tabletL:absolute tabletL:left-[0px] tabletL:w-full tabletL:bg-white tabletL:top-full 
                    ${headerActive && 'tabletL:fixed tabletL:top-[0px] tabletL:shadow-header'}`}
                /> 
                <MobileMenu 
                    navbarActive={navbarActive}
                    handleOpenMenu={handleOpenMenu} 
                />
            </div>
        </header>
    );
}

export default Header;


