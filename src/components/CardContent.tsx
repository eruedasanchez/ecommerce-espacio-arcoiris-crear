import Link from "next/link";
import { CardContentProps } from "@/types/types";

const CardContent = ({ label, price, regularPrice } : CardContentProps) => {
    return (
        <div>
            <h3 className="text-font7 font-medium mb-[5px]"> 
                <Link href="#">{label}</Link>
            </h3>
            <div className="text-eerieBlack text-font8 font-medium"> 
                <data value={price}>&pound; {price.toFixed(2)}</data>
                {   
                    regularPrice &&
                    <data value={regularPrice?.toFixed(2)} className="text-sonicSilver ml-[5px] line-through">&pound; {regularPrice?.toFixed(2)}</data>
                }
            </div>
        </div>
    );
}

export default CardContent;