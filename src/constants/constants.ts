import {
    BriefcaseBusiness, 
    Eye, 
    Heart, 
    Search, 
    User
} from "lucide-react";

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

export const categoryList = [
    {
        id: 1,
        src: '/images/category-1.jpg',
        alt: "sunglass",
        link: {
            href: '/sunglass',
            label: 'Sunglass'
        }
    },
    {
        id: 2,
        src: '/images/category-2.jpg',
        alt: "outdoor",
        link: {
            href: '/outdoor',
            label: 'Outdoor'
        }
    },
    {
        id: 3,
        src: '/images/category-3.jpg',
        alt: "winter",
        link: {
            href: '/winter',
            label: 'Winter'
        }
    },
    {
        id: 4,
        src: '/images/category-4.jpg',
        alt: "footwear",
        link: {
            href: '/footwear',
            label: 'Footwear'
        }
    },
    {
        id: 5,
        src: '/images/category-5.jpg',
        alt: "jewelry",
        link: {
            href: '/jewelry',
            label: 'Jewelry'
        }
    },
    {
        id: 6,
        src: '/images/category-6.jpg',
        alt: "cap",
        link: {
            href: '/cap',
            label: 'Caps'
        }
    }
]

export const filterList = [
    {
        id: 1,
        label: "Best Seller"
    },
    {
        id: 2,
        label: "Hot Collection"
    },
    {
        id: 3,
        label: "Trendy"
    },
    {
        id: 4,
        label: "New Arrival"
    }
]

export const productsList = [
    {
        id: 1,
        src: '/images/product-1.jpg',
        alt: 'varsi-leather-bag',
        label: 'Varsi Leather Bag',
        price: 48.75,
        regularPrice: 65.00,
        cardBadge: '-25%'
    },
    {
        id: 2,
        src: '/images/product-2.jpg',
        alt: 'fit-twill-shirt-for-woman',
        label: 'Fit Twill Shirt for woman',
        price: 62.00,
        cardBadge: 'New'
    },
    {
        id: 3,
        src: '/images/product-3.jpg',
        alt: 'gran-atlantic-chukka-boots',
        label: 'Gran Atlantic Chukka Boots',
        price: 32.00
    },
    {
        id: 4,
        src: '/images/product-4.jpg',
        alt: 'womens-faux-trim-shirt',
        label: 'Womens Faux-Trim Shirt',
        price: 84.00
    },
    {
        id: 5,
        src: '/images/product-5.jpg',
        alt: 'soft-touch-interlock-polo',
        label: 'Soft Touch Interlock Polo',
        price: 45.00
    },
    {
        id: 6,
        src: '/images/product-6.jpg',
        alt: 'casmart-smart-watch',
        label: 'Casmart Smart Watch',
        price: 30.00,
        regularPrice: 38.00 
    },
    {
        id: 7,
        src: '/images/product-7.jpg',
        alt: 'casmart-smart-glass',
        label: 'Casmart Smart Glass',
        price: 25.00,
        regularPrice: 39.00
    },
    {
        id: 8,
        src: '/images/product-8.jpg',
        alt: 'cotton-shirt-for-men',
        label: 'Cotton Shirt for Men',
        price: 85.00,
        regularPrice: 99.00
    },
    {
        id: 9,
        src: '/images/product-9.jpg',
        alt: 'double-breasted-blazer',
        label: 'Double-breasted Blazer',
        price: 32.00,
    },
    {
        id: 10,
        src: '/images/product-10.jpg',
        alt: 'ribbed-cotton-bodysuits',
        label: 'Ribbed Cotton Bodysuits',
        price: 71.00,
        cardBadge: 'New'
    }
]

export const cardActions = [
    {
        id: 1,
        icon: Eye,
        label: 'Quick View'
    },
    {
        id: 2,
        icon: BriefcaseBusiness,
        label: 'Add to cart'
    },
    {
        id: 3,
        icon: Heart,
        label: 'Add to Wishlist'
    }
]

export const blogList = [
    {
        id: 1,
        src: '/images/blog-1.jpg',
        alt: 'worthly-cyber-monday-fashion-from-casmart',
        label: 'Worthly Cyber Monday Fashion From Casmart',
        dateTime: '2021-03-31',
        dateOfPublish: '31 Mar 2021',
        topic: 'Fashion'
    },
    {
        id: 2,
        src: '/images/blog-2.jpg',
        alt: 'holiday-home-Decoration-Ive-recently-ordered',
        label: 'Holiday Home Decoration I have Recently Ordered',
        dateTime: '2022-04-31',
        dateOfPublish: '31 April 2022',
        topic: 'Design'
    },
    {
        id: 3,
        src: '/images/blog-3.jpg',
        alt: 'unique-ideas-for-fashion-you-have-not-heard-yet',
        label: 'Unique Ideas For Fashion You Have not heard yet',
        dateTime: '2023-05-31',
        dateOfPublish: '31 May 2023',
        topic: 'Moda'
    }
]

export const keys = {
    ESC: 'Escape'
}