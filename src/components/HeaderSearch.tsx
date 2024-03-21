import { Search } from "lucide-react";

const HeaderSearch = () => {
    return (
        <div className="hidden tabletL:block tabletL:relative tabletL:max-w-max">
            <input 
                type="search" 
                name="search" 
                placeholder="Buscar producto..." 
                className="tabletL:border-[1px] tabletL:border-solid tabletL:border-cultured
                tabletL:w-[280px] tabletL:py-[12px] tabletL:px-[30px] tabletL:rounded-md
                tabletL:transition-opacity tabletL:duration-250 tabletL:ease
                tabletL:focus:outline-[1px] tabletL:focus:outline tabletL:focus:outline-eerieBlack" 
            /> 
            <button 
                className="-translate-y-2/4 text-[20px] text-eerieBlack
                tabletL:absolute tabletL:top-2/4 tabletL:right-[15px]"
            > 
                <Search size={18}/>
            </button>
        </div>
    );
}

export default HeaderSearch;

