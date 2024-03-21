import { CircleX } from "lucide-react";
import { navbarLinks } from "@/constants/constants";
import { NavbarProps } from "@/types/types";
import Logo from "./Logo";
import NavLink from "./NavLink";

const Navbar = ({ handleOpenMenu, containedStyles } : NavbarProps) => {
    return (
        <nav className={containedStyles}> 
            <div className="flex justify-between items-center mb-[60px] tabletL:hidden"> 
                <Logo/>
                <button onClick={handleOpenMenu}><CircleX/></button>
            </div>
            <ul className="tabletL:flex tabletL:justify-center tabletL:items-center tabletL:gap-[40px]">
                {
                    navbarLinks.map((navLink) => (
                        <NavLink 
                            key={navLink.id}
                            href={navLink.href}
                            label={navLink.label}
                            lastLink={navLink.id === navbarLinks.length}
                        />
                    ))
                }
            </ul>
        </nav>
    );
}

export default Navbar;