import { FilterButtonProps } from "@/types/types";

const FilterButton = ({ label, activeFilter, setCurrentFilter } : FilterButtonProps ) => {
    return (
        <li>
            <button 
                className={`text-inherit text-font7 font-medium ${activeFilter && 'text-middleBlueGreen'}`}
                onClick={() => setCurrentFilter(label)}
                >
                {label}
            </button> 
        </li>
    );
}

export default FilterButton;

