import Link from "next/link";
import Image from "next/image";
import CardActions from "./CardActions";
import { CardBannerProps } from "@/types/types";

const CardBanner = ({ src, alt, cardBadge } : CardBannerProps) => {
    return (
        <figure className="relative mb-[20px]"> {/* card-banner */}
            <Link href="#">
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
                </div> // {/* card-badge */}
            }
            <CardActions/>
        </figure>
    );
}

export default CardBanner;