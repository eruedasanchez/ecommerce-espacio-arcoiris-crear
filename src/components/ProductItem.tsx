import { ProductItemProps } from "@/types/types";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const ProductItem = ({ src, alt, label, price, regularPrice, cardBadge } : ProductItemProps) => {
    return (
        <li className="mobile:w-[calc(50%-12.5px)] tabletL:w-[calc(33.33%-16.66px)] 
        desktop:w-[calc(25%-18.75px)]">
            <div>
                <CardBanner
                    src={src}
                    alt={alt}
                    cardBadge={cardBadge}
                />
                <CardContent
                    label={label}
                    price={price}
                    regularPrice={regularPrice}
                />
            </div>
        </li>
    );
}

export default ProductItem;