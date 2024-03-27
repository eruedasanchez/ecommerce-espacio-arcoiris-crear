import { CardActionsProps } from "@/types/types";
import { cardActions } from "@/constants/constants";

const CardActions = ({ activeCardActions } : CardActionsProps) => {
    return (
        <div className={`flex h-[45px] 
        tabletL:absolute tabletL:bottom-[20px] tabletL:left-[20px] tabletL:right-[20px] 
        tabletL:transition-opacity tabletL:duration-250 tabletL:ease
        ${activeCardActions ? 'tabletL:visible tabletL:translate-y-[0px]' : 'tabletL:translate-y-[100px] tabletL:invisible'}`}>
            {
                cardActions.map((cardAction) => (
                    <button 
                        key={cardAction.id}
                        className={`border border-solid border-cultured
                        w-[45px] flex justify-center items-center gap-[8px] 
                        hover:border-eerieBlack focus:border-eerieBlack
                        ${ cardAction.id === 2 ? 'grow bg-eerieBlack text-white border-eerieBlack hover:bg-white hover:text-eerieBlack focus:bg-white focus:text-eerieBlack' : 'bg-white text-eerieBlack'}
                        ${ cardAction.id === 1 ? 'tabletL:rounded-tl-md tabletL:rounded-tr-none tabletL:rounded-bl-md tabletL:rounded-br-none' : ''}
                        ${ cardAction.id === 3 ? 'tabletL:rounded-tl-none tabletL:rounded-tr-md tabletL:rounded-bl-none tabletL:rounded-br-md' : ''}
                        `} 
                        aria-label={cardAction.label}
                    > 
                        <cardAction.icon size={20} strokeWidth={1.5}/>
                        { cardAction.id === 2 && <p>Add to cart</p> }
                    </button>
                ))
            }
        </div>
    );
}

export default CardActions;

