import { BriefcaseBusiness, Heart, Search, User } from "lucide-react";

export const navbarLinks = [
    {
        id: 1,
        href: "/home",
        label: "Home"
    },
    {
        id: 2,
        href: "/shop",
        label: "Shop"
    },
    {
        id: 3,
        href: "/acerca",
        label: "Acerca"
    },
    {
        id: 4,
        href: "/blog",
        label: "Blog"
    },
    {
        id: 5,
        href: "/contacto",
        label: "Contacto"
    }
];

export const headerActions = [
    {
        id: 1,
        icon: User,
        label: "Ingresar"
    },
    {
        id: 2,
        icon: Search,
        label: "Buscar"
    },
    {
        id: 3,
        icon: BriefcaseBusiness,
        label: "Carrito"
    },
    {
        id: 4,
        icon: Heart,
        label: "Wishlist"
    }
];

export const keys = {
    ESC: 'Escape'
}