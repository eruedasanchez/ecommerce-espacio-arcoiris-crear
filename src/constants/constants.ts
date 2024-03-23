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

export const serviceList = [
    {
        id: 1,
        src: `/images/service-icon-1.svg`,
        alt: "Service icon 1",
        image: {
            width: 46.699,
            height: 40.604 
        },
        content: {
            title: 'Envio gratis',
            subtitle: 'Compras superiores a $20000'
        }
    },
    {
        id: 2,
        src: `/images/service-icon-2.svg`,
        alt: "Service icon 2",
        image: {
            width: 41.583,
            height: 40.603 
        },
        content: {
            title: 'Devolución fácil ',
            subtitle: 'Política de retorno 30 dias'
        }
    },
    {
        id: 3,
        src: `/images/service-icon-3.svg`,
        alt: "Service icon 3",
        image: {
            width: 40.603,
            height: 40.603 
        },
        content: {
            title: 'Pago seguro',
            subtitle: 'Sistema 100% seguro'
        }
    },
    {
        id: 4,
        src: `/images/service-icon-4.svg`,
        alt: "Service icon 4",
        image: {
            width: 33.672,
            height: 40.472 
        },
        content: {
            title: 'Atención personalizada',
            subtitle: 'Atención personalizada 24hs'
        }
    }
]



export const keys = {
    ESC: 'Escape'
}