import Link from "next/link";
import { CardContentBlogProps } from "@/types/types";
import { Clock3, FolderOpen } from "lucide-react";

const CardContentBlog = ({ dateTime, dateOfPublish, label, topic } : CardContentBlogProps) => {
    return (
        <div className="px-[20px]"> 
            <ul className="flex justify-center items-center gap-[25px] mb-[10px]"> 
                <li className="flex items-center gap-[10px]"> 
                    <FolderOpen size={16} strokeWidth={1}/>
                    <Link href="#" className="text-inherit text-font9 font-medium uppercase hover:text-eerieBlack"> 
                        {topic}
                    </Link>
                </li>
                <li className="flex items-center gap-[10px]"> 
                    <Clock3 size={16} strokeWidth={1}/>
                    <Link href="#" className="text-inherit text-font9 font-medium uppercase hover:text-eerieBlack"> 
                        <time dateTime={dateTime}>{dateOfPublish}</time>
                    </Link>
                </li>
            </ul>
            <h3 className="text-eerieBlack text-font6 font-semibold leading-[1.4] text-center"> 
                <Link href="#">{label}</Link>
            </h3>
        </div>
    )
}

export default CardContentBlog;