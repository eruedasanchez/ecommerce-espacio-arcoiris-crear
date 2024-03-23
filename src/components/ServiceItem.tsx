import Image from "next/image";
import { ServiceItemProps } from "@/types/types";

const ServiceItem = ({src, alt, imageWidth, imageHeight, serviceTitle, serviceSubtitle } : ServiceItemProps) => {
    return (
        <li className="max-w-[250px] w-full flex justify-start items-center gap-[20px]"> 
            <div className="w-[45px]">
                <Image
                    src={src}
                    alt={alt}
                    width={imageWidth}
                    height={imageHeight}
                    className="ms-auto me-auto"
                />
            </div>
            <div>
                <p className="text-eerieBlack text-font7 font-semibold">{serviceTitle}</p> 
                <p className="service-item-text">{serviceSubtitle}</p>
            </div>
        </li>
    );
}

export default ServiceItem;

