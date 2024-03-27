'use client';

import { useState } from "react";
import { filterList } from "@/constants/constants";
import FilterButton from "./FilterButton";

const FilterList = () => {
    const [currentFilter, setCurrentFilter] = useState(filterList[0].label);
    
    return (
        <ul className="flex flex-wrap justify-center items-center 
        gap-y-[10px] gap-x-[20px] mb-[50px]"> 
            {
                filterList.map((filter) => (
                    <FilterButton 
                        key={filter.id} 
                        label={filter.label}
                        activeFilter={filter.label === currentFilter}
                        setCurrentFilter={setCurrentFilter}
                    />
                ))
            } 
        </ul>
    );
}

export default FilterList;

