import { productsList } from "@/constants/constants";
import ProductItem from "./ProductItem";

const ProductsList = () => {
    return (
        <ul className="flex flex-wrap justify-center 
        gap-y-[50px] gap-x-[25px] mb-[60px]"> {/* product-list */}
            {
                productsList.map((product) => (
                    <ProductItem 
                        key={product.id} 
                        src={product.src}
                        alt={product.alt}
                        label={product.label}
                        price={product.price}
                        regularPrice={product.regularPrice}
                        cardBadge={product.cardBadge}
                    />
                ))
            }
        </ul>
    );
}

export default ProductsList;