import { NavbarOpenButtonProps } from "@/types/types";

const NavbarOpenButton = ({ handleOpenMenu } : NavbarOpenButtonProps) => {
    return (
        <button 
            className="flex flex-col gap-[4px] p-[8px] tabletL:hidden"
            onClick={handleOpenMenu}
        > 
            <span className="w-[20px] h-[2px] bg-black transition-opacity duration-250 ease"></span>
            <span className="w-[20px] h-[2px] bg-black transition-opacity duration-250 ease 
            scale-x-50 origin-right hover:scale-x-100 focus:scale-x-100"></span>
            <span className="w-[20px] h-[2px] bg-black transition-opacity duration-250 ease"></span>
        </button>
    );
}

export default NavbarOpenButton;


