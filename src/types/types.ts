import { LucideIcon } from "lucide-react";

/*-----------------------------*\
    #HEADER TYPES & INTERFACES
\*-----------------------------*/

export interface OverlayProps {
    overlayActive: boolean;
};

type HeaderAction = {
    id: number,
    icon: LucideIcon,
    label: string 
};

export interface HeaderActionsProps {
    headerActions: HeaderAction[];
    containedStyles: string;
};

export interface NavbarProps {
    handleOpenMenu?: () => void;
    containedStyles: string;
};

export interface NavLinkProps {
    href: string;
    label: string; 
    lastLink: boolean
};

export interface MobileMenuProps {
    navbarActive: boolean;
    handleOpenMenu: () => void,
};

export interface NavbarOpenButtonProps {
    handleOpenMenu: () => void,
};

/*-----------------------------------*\
    #HERO SECTION TYPES & INTERFACES
\*-----------------------------------*/

export interface HeroSectionProps {
    heroHeader: string; 
    heroTitle: string;
    heroButton: string
};

/*--------------------------------------*\
    #SERVICE SECTION TYPES & INTERFACES
\*--------------------------------------*/

export interface ServiceItemProps {
    src: string;
    alt: string;
    imageWidth: number;
    imageHeight: number;
    serviceTitle: string;
    serviceSubtitle: string
};

/*--------------------------------------*\
    #CATEGORY SECTION TYPES & INTERFACES
\*--------------------------------------*/

export interface CategoryItemProps {
    src: string;
    alt: string;
    href: string;
    label: string;
    firstSecondItem: boolean
}
















