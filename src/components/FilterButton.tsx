import { FilterButtonProps } from "@/types/types";

const FilterButton = ({ label } : FilterButtonProps ) => {
    return (
        <li>
            <button className="text-inherit text-font7 font-medium">
                {label}
            </button> {/* filter-btn */}
        </li>
    );
}

export default FilterButton;

// text-eerieBlack agregar al button cada vez que se clickea una categoria