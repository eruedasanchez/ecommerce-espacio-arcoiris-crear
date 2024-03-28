import Image from 'next/image';
import Link from 'next/link';
import { CardBannerBlogProps } from '@/types/types';

const CardBannerBlog = ({ src, alt } : CardBannerBlogProps) => {
    return (
        <figure className="bg-cultured aspect-[2/1.37] overflow-hidden mb-[25px]"> 
            <Link href="#">
                <Image 
                    src={src} 
                    alt={alt}
                    width={1020}
                    height={700}
                    className="w-100 h-full transition-opacity duration-750 ease hover:scale-105" 
                />
            </Link>
        </figure>
    )
}

export default CardBannerBlog;