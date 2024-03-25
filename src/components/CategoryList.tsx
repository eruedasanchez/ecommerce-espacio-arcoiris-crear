import { categoryList } from "@/constants/constants";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
    return (
        <ul className="flex flex-wrap justify-center items-center gap-[30px]"> 
            {
                categoryList.map((category) => (
                    <CategoryItem 
                        key={category.id}
                        src={category.src}
                        alt={category.alt}
                        href={category.link.href}
                        label={category.link.label}
                        firstSecondItem={category.id === 1 || category.id=== 2}
                    />
                ))
            }
        </ul>
    );
}

export default CategoryList;