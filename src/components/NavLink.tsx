import { NavLinkProps } from "@/types/types";
import Link from "next/link";

const NavLink = ({href, label, lastLink} : NavLinkProps) => {
    return (
        <li className={`my-[20px] tabletL:text-font7 tabletL:font-normal tabletL:py-[20px] 
        ${!lastLink && 'border-b-[1px] border-solid border-cultured tabletL:border-none'}`}> 
            <Link 
                href={href} 
                className="py-[10px] text-eerieBlack hover:text-middleBlueGreen focus:text-middleBlueGreen">
                    {label}
            </Link>
        </li> 
    );
}

export default NavLink;

