import { OverlayProps } from "@/types/types";

const Overlay = ({ overlayActive } : OverlayProps) => {
    return (
        <div className={`fixed inset-[0px] bg-black transition-opacity duration-250 ease z-[2]
        ${overlayActive ? 'opacity-70 pointer-events-auto ' : 'opacity-0 pointer-events-none'}
        tabletL:hidden`}>
        </div> 
    );
}

export default Overlay;
