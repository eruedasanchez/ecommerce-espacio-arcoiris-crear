'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CardBannerProps } from "@/types/types";
import CardActions from "./CardActions";

const CardBanner = ({ src, alt, cardBadge } : CardBannerProps) => {
    const [activeCardActions, setActiveCardActions] = useState(false);
    
    return (
        <figure 
            className="relative mb-[20px] tabletL:overflow-hidden"
            onMouseEnter={() => setActiveCardActions(true)}
            onMouseLeave={() => setActiveCardActions(false)}
        > 
            <Link href="#" >
                <Image 
                    src={src} 
                    alt={alt} 
                    width={800} 
                    height={1034} 
                    className="w-100" 
                />
            </Link>
            {
                cardBadge && 
                <div className={`${cardBadge === 'New' ? 'bg-oceanGreen' : 'bg-candyPink'} text-white absolute 
                top-[0px] left-[0px] text-font9 font-medium py-[3px] px-[10px]`}>
                    {cardBadge}
                </div> 
            }
            <CardActions activeCardActions={activeCardActions}/>
        </figure>
    );
}

export default CardBanner;