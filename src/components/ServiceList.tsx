import { serviceList } from "@/constants/constants";
import ServiceItem from "./ServiceItem";

const ServiceList = () => {
    return (
        <ul className="flex flex-wrap justify-center items-center gap-[40px]"> 
            {
                serviceList.map((service) => (
                    <ServiceItem 
                        key={service.id}
                        src={service.src}
                        alt={service.alt}
                        imageWidth={service.image.width}
                        imageHeight={service.image.height}
                        serviceTitle={service.content.title}
                        serviceSubtitle={service.content.subtitle}
                    />
                ))
            }
        </ul>
    );
}

export default ServiceList;
