import { headerActions } from "@/constants/constants";
import { MobileMenuProps } from "@/types/types";
import NavbarOpenButton from "./NavbarOpenButton";
import HeaderActions from "./HeaderActions";
import Navbar from "./Navbar";

const MobileMenu = ({ navbarActive, handleOpenMenu } : MobileMenuProps) => {
    return (
        <>
            <NavbarOpenButton handleOpenMenu={handleOpenMenu}/>
            <HeaderActions 
                headerActions={headerActions}
                containedStyles='bg-white fixed bottom-[0px] left-[0px] w-full flex justify-evenly items-center gap-[5px] shadow-header-actions z-[1] tabletL:hidden'
            />
            <Navbar 
                handleOpenMenu={handleOpenMenu}
                containedStyles={`bg-white fixed top-[0px] -right-[300px] max-w-[300px] w-full h-full py-[30px] px-[25px] z-[3] 
                ${navbarActive ? 'visible -translate-x-[300px] transition duration-500 ease-cubic-in' : 'invisible transition duration-250 ease-cubic-out'}`}
            />
        </>
    );
}

export default MobileMenu;


