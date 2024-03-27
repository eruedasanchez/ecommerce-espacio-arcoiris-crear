import { cardActions } from "@/constants/constants";

const CardActions = () => {
    return (
        <div className="flex h-[45px]"> {/* card-actions */}
            {
                cardActions.map((cardAction) => (
                    <button 
                        key={cardAction.id}
                        className={`border border-solid border-cultured
                        w-[45px] flex justify-center items-center gap-[8px] 
                        hover:border-eerieBlack focus:border-eerieBlack
                        ${ cardAction.id === 2 ? 'grow bg-eerieBlack text-white border-eerieBlack hover:bg-white hover:text-eerieBlack focus:bg-white focus:text-eerieBlack' : 'bg-white text-eerieBlack'}
                        `} 
                        aria-label={cardAction.label}
                    > {/* card-action-btn */}
                        <cardAction.icon size={20} strokeWidth={1.5}/>
                        { cardAction.id === 2 && <p>Add to cart</p> }
                    </button>
                ))
            }
        </div>
    );
}

export default CardActions;
