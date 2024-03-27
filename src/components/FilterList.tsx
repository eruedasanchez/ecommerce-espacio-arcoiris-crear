import { filterList } from "@/constants/constants";
import FilterButton from "./FilterButton";

const FilterList = () => {
    return (
        <ul className="flex flex-wrap justify-center items-center 
        gap-y-[10px] gap-x-[20px] mb-[50px]"> {/* filter-list */}
            {
                filterList.map((filter) => (
                    <FilterButton key={filter.id} label={filter.label}/>
                ))
            } 
        </ul>
    );
}

export default FilterList;

