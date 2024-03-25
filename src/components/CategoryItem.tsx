import Image from "next/image";
import Link from "next/link";
import { CategoryItemProps } from "@/types/types";

const CategoryItem = ({ src, alt, href, label, firstSecondItem } : CategoryItemProps ) => {
    return (
        <li className={`w-full mobile:w-[calc(50%-15px)] relative hover:scale-105
        ${!firstSecondItem && 'tabletL:w-[calc(25%-22.5px)]'}`}> 
            <figure className="bg-cultured aspect-[2/2.35] overflow-hidden"> 
                <Image
                    src={src} 
                    alt={alt} 
                    width={510} 
                    height={600}
                    className="w-100 h-full object-cover transition-opacity duration-750 ease"
                />
            </figure>
            <Link 
                href={href} 
                className="btn btn-secondary absolute bottom-[30px] left-1/2 -translate-x-1/2 max-w-max px-[30px]"
            >
                {label}
            </Link>
        </li>
    );
}

export default CategoryItem;


