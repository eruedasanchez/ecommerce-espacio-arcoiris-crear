import { HeaderActionsProps } from "@/types/types";

const HeaderActions = ({ headerActions, containedStyles } : HeaderActionsProps) => {
    return (
        <div className={containedStyles}> 
            {
                headerActions.map((action) => (
                    <button
                        key={action.id} 
                        className={`relative w-[50px] mt-[2px] text-center hover:text-eerieBlack 
                        tabletL:${action.id === 2 ? 'hidden' : ''}`}
                    > 
                        <action.icon
                            size={23} 
                            strokeWidth={1} 
                            className="mx-auto mb-[3px]"
                        />
                        <p className="text-sonicSilver text-font10 transition-opacity duration-250 ease">{action.label}</p> {/* header-action-label */}
                        { 
                            action.id >= 3 && 
                            <div className="absolute -top-[1px] right-[1px] w-[20px] h-[20px] 
                            bg-eerieBlack grid place-items-center leading-none text-[13px] 
                            text-white rounded-full">2</div> 
                        }
                    </button>
                ))
            }
        </div>
    );
}

export default HeaderActions;





