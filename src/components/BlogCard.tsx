import { BlogCardProps } from "@/types/types";
import CardBannerBlog from "./CardBannerBlog";
import CardContentBlog from "./CardContentBlog";

const BlogCard = ({ src, alt, dateTime, dateOfPublish, label, topic } : BlogCardProps) => {
    return (
        <li className="tablet:w-[calc(50%-15px)] tabletL:w-[calc(33.33%-20px)]">
            <div className="blog-card">
                <CardBannerBlog src={src} alt={alt}/>
                <CardContentBlog
                    dateTime={dateTime} 
                    dateOfPublish={dateOfPublish}
                    label={label}
                    topic={topic}
                />
            </div>
        </li>
    );
}

export default BlogCard;