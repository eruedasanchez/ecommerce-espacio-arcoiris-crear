import { HeroSectionProps } from '@/types/types';

const HeroSection = ({heroHeader, heroTitle, heroButton} : HeroSectionProps) => {
    return (
        <section 
            className='relative bg-no-repeat bg-cover 
            bg-left tablet:bg-center shadow-md w-full min-h-[80vh] tablet:min-h-[800px]
            py-section-padding flex items-center' 
            id='home' 
            style={{backgroundImage: `url('/images/hero-banner.jpg')`}}
        > 
            <div className="absolute inset-[0px] bg-black opacity-60"></div>
            <div className="container w-full relative z-10"> 
                <div className="hero-content">
                    <p className="text-white text-font4 font-semibold mb-[20px]">{heroHeader}</p> 
                    <h2 className="h1 mb-[35px] max-w-[12ch]">{heroTitle}</h2> 
                    <button className="btn btn-primary">{heroButton}</button> 
                </div>
            </div>
        </section>
    );
}

export default HeroSection;


