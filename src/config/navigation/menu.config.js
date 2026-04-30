export const MENU = [
    {
        id: "home",
        label: "Home",
        type: "link",
        path: "/",
    },

    {
        id: "about",
        label: "About Us",
        type: "link",
        path: "/about",
    },

    {
        id: "service",
        label: "Service",
        type: "link",
        path: "/service",
    },

    {
        id: "cars",
        label: "Cars",
        type: "dropdown",
        children: [
            {
                id: "all-cars",
                label: "Car List",
                path: "/cars",
            },
            {
                id: "car-type",
                label: "Car Type",
                path: "/carstype",
            },
            {
                id: "single-car",
                label: "Single Car",
                path: "/cars/1",
            },
        ],
    },
    
    {
        id: "pages",
        label: "Pages",
        type: "dropdown",
        children: [
            {
                id: "blog",
                label: "Blog",
                path: "/blog",
            },
            {
                id: "pricing",
                label: "Pricing",
                path: "/pricing",
            },
            {
                id: "imagegallery",
                label: "Image Gallery",
                path: "/imagegallery",
            },
            {
                id: "testimonials",
                label: "Testimonials",
                path: "/testimonials",
            },
            {
                id: "faqs",
                label: "Faq's",
                path: "/faqs",
            },
        ],
    },

    {
        id: "contact",
        label: "Contact",
        type: "link",
        path: "/contact",
    },
];