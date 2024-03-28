import { blogList } from "@/constants/constants";
import BlogCard from "./BlogCard";

const BlogList = () => {
    return (
        <ul className="flex flex-wrap justify-center items-start gap-[30px]"> 
            {
                blogList.map((blog) => (
                    <BlogCard 
                        key={blog.id} 
                        src={blog.src}
                        alt={blog.alt}
                        dateTime={blog.dateTime}
                        dateOfPublish={blog.dateOfPublish}
                        label={blog.label}
                        topic={blog.topic}
                    />
                ))
            }
        </ul>
    );
}

export default BlogList;