import categoriesMegaMenu from "./categoriesMegaMenu";

// MEGAMENU DATA
const megaMenus = [
  [
    {
      title: "Home",
      child: [
        {
          title: "Market 1",
          url: "/market-1",
        },
        {
          title: "Furniture",
          url: "/furniture-shop",
        },
        {
          title: "Grocery-v1",
          url: "/grocery1",
        },
        {
          title: "Grocery-v2",
          url: "/grocery2",
        },
        {
          title: "Grocery-v3",
          url: "/grocery3",
        },
        {
          title: "Health and Beauty",
          url: "/healthbeauty-shop",
        },
        {
          title: "Fashion",
          url: "/fashion-shop-1",
        },
        {
          title: "Gift Store",
          url: "/gift-shop",
        },
        {
          title: "Gadget",
          url: "/gadget-shop",
        },
      ],
    },
  ],
  [
    {
      title: "User Account",
      child: [
        {
          title: "Order List",
          url: "/orders",
        },
        {
          title: "Order Details",
          url: "/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
        },
        {
          title: "View Profile",
          url: "/profile",
        },
        {
          title: "Edit Profile",
          url: "/profile/e42e28ea-528f-4bc8-81fb-97f658d67d75",
        },
        {
          title: "Address List",
          url: "/address",
        },
        {
          title: "Add Address",
          url: "/address/d27d0e28-c35e-4085-af1e-f9f1b1bd9c34",
        },
        {
          title: "All tickets",
          url: "/support-tickets",
        },
        {
          title: "Ticket details",
          url: "/support-tickets/when-will-my-product-arrive",
        },
        {
          title: "Wishlist",
          url: "/wish-list",
        },
      ],
    },
  ],
  [
    {
      title: "Vendor Account",
      child: [
        {
          title: "Dashboard",
          url: "/vendor/dashboard",
        },
        {
          title: "Profile",
          url: "/vendor/account-setting",
        },
      ],
    },
    {
      title: "Products",
      child: [
        {
          title: "All products",
          url: "/admin/products",
        },
        {
          title: "Add/Edit product",
          url: "/admin/products/create",
        },
      ],
    },
    {
      title: "Orders",
      child: [
        {
          title: "All orders",
          url: "/admin/orders",
        },
        {
          title: "Order details",
          url: "/admin/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
        },
      ],
    },
  ],
  [
    {
      title: "Sale Page",
      child: [
        {
          title: "Sales Version 1",
          url: "/sale-page-1",
        },
        {
          title: "Sales Version 2",
          url: "/sale-page-2",
        },
      ],
    },
    {
      title: "Shop",
      child: [
        {
          title: "Search product",
          url: "/product/search/mobile phone",
        },
        {
          title: "Single product",
          url: "/product/lord-2019",
        },
        {
          title: "Cart",
          url: "/cart",
        },
        {
          title: "Checkout",
          url: "/checkout",
        },
        {
          title: "Alternative Checkout",
          url: "/checkout-alternative",
        },
        {
          title: "Order confirmation",
          url: "/order-confirmation",
        },
      ],
    },
  ],
];

const livingMenus = [
  [
    {
      title: "Sofa's",
      child: [
        {
          title: "Two Seater Sofa's",
          url: "/",
        },
        {
          title: "Three Seater Sofa's",
          url: "/furniture-shop",
        },
        {
          title: "Sofa Sets",
          url: "/",
        },
        {
          title: "L Shaped Sofa's",
          url: "/",
        },
        {
          title: "Corner Sofa's",
          url: "/",
        },
        {
          title: "Sofa Beds",
          url: "/",
        },
        {
          title: "ZeroWall Recliner sofa's",
          url: "/fashion-shop-1",
        },
        {
          title: "Customize Sofa's",
          url: "/",
        },
      ],
    },
  ],
  [
    {
      title: "Recliners",
      child: [
        {
          title: "Single Seater Recliners",
          url: "/",
        },
        {
          title: "Two Seater Recliners",
          url: "/",
        },
        {
          title: "Three Seater Recliners",
          url: "/",
        },
        {
          title: "Recliner Sets",
          url: "/",
        },
        {
          title: "Home Theatre Recliners",
          url: "/",
        } 
      ],
    },
  ],
  [
    {
      title: "Seating",
      child: [
        {
          title: "Royal chairs",
          url: "/vendor/dashboard",
        },
        {
          title: "Ottomen's & Pouf's",
          url: "/vendor/account-setting",
        },
      ],
    },
  ],
  [
    {
      title: "Centre Tables",
      child: [
        {
          title: "Wooden Center Tables",
          url: "/",
        },
        {
          title: "Glass Center Tables",
          url: "/",
        },
        {
          title: "Marble Center Tables",
          url: "/",
        },
      ],
    },
   
  ],
];

const bedroomMenus = [
  [
    {
      title: "Beds",
      child: [
        {
          title: "Queen Bed Without Storage",
          url: "/",
        },
        {
          title: "King Bed Without Storage",
          url: "/furniture-shop",
        },
        {
          title: "Queen Bed With Storage",
          url: "/",
        },
        {
          title: "King Bed Without Storage",
          url: "/",
        },
      ],
    },
  ],
  [
    {
      title: "Mattress",
      child: [
        {
          title: "Single Mattress",
          url: "/",
        },
        {
          title: "Double Mattress",
          url: "/",
        },
        {
          title: "Queen Size Mattress",
          url: "/",
        },
        {
          title: "King Size Mattress",
          url: "/",
        },
        {
          title: "Customise Mattress",
          url: "/",
        } 
      ],
    },
  ],
  [
    {
      title: "Decor",
      child: [
        {
          title: "Bed Sheets",
          url: "/",
        },
        {
          title: "Carpets",
          url: "/",
        },
        {
          title: "Bathmats",
          url: "/",
        },
      ],
    },
  ],
  
];

const diningMenus = [
  [
    {
      title: "Dining Tables & set",
      child: [
        {
          title: "4 Seater Dining Set",
          url: "/",
        },
        {
          title: "6 Seater Dining Set",
          url: "/",
        },
        {
          title: "8 Seater Dining Set",
          url: "/",
        },
  
      ],
    },
  ],
  [
    {
      title: "Dining Tables & Chairs",
      child: [
        {
          title: "Tables",
          url: "/",
        },
        {
          title: "Chairs",
          url: "/",
        },
      ],
    },
  ],
  [
    {
      title: "Bed Furniture",
      child: [
        {
          title: "Bed Stools",
          url: "/",
        },
        {
          title: "Chairs",
          url: "/",
        },
       
      ],
    },
  ],
  
];

// MAIN NAVIGATION DATA
const navbarNavigations = [
  {
    title: "Home ",
    url: "/",
    megaMenu: false,
    megaMenuWithSub: false,
   
  },
  {
    title: "Interiors",
    url: "/recliners",
    megaMenu: false,
    megaMenuWithSub: false,
   
  },
  {
    title: "Study & Office",
    url: "/sectional-sofas",
    megaMenu: false,
    megaMenuWithSub: false,
   
  },
  {
    megaMenu: true,
    megaMenuWithSub: false,
    title: "Living",
    child: livingMenus,
  },
  {
    megaMenu: true,
    megaMenuWithSub: false,
    title: "Bedroom",
    child: bedroomMenus,
  },
  {
    megaMenu: true,
    megaMenuWithSub: false,
    title: "Dining",
    child: diningMenus,
  },
  {
    title: "Furnishing's",
    url: "/chairs",
    megaMenu: false,
    megaMenuWithSub: false,
   
  },
  {
    title: "OutDoor",
    url: "/modular-kitchen",
    megaMenu: false,
    megaMenuWithSub: false,
   
  },
  {
    title: "Services",
    url: "/matress",
    megaMenu: false,
    megaMenuWithSub: false,
   
  },
  
  // {
  //   megaMenu: false,
  //   megaMenuWithSub: true,
  //   title: "Full Screen Menu",
  //   child: categoriesMegaMenu,
  // },
  // {
  //   megaMenu: false,
  //   megaMenuWithSub: false,
  //   title: "Pages",
  //   child: [
  //     {
  //       title: "Sale Page",
  //       child: [
  //         {
  //           title: "Version 1",
  //           url: "/sale-page-1",
  //         },
  //         {
  //           title: "Version 2",
  //           url: "/sale-page-2",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Vendor",
  //       child: [
  //         {
  //           title: "All vendors",
  //           url: "/shops",
  //         },
  //         {
  //           title: "Vendor store",
  //           url: "/shops/scarlett-beauty",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Shop",
  //       child: [
  //         {
  //           title: "Search product",
  //           url: "/product/search/mobile phone",
  //         },
  //         {
  //           title: "Single product",
  //           url: "/product/lord-2019",
  //         },
  //         {
  //           title: "Cart",
  //           url: "/cart",
  //         },
  //         {
  //           title: "Checkout",
  //           url: "/checkout",
  //         },
  //         {
  //           title: "Alternative Checkout",
  //           url: "/checkout-alternative",
  //         },
  //         {
  //           title: "Order confirmation",
  //           url: "/order-confirmation",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   megaMenu: false,
  //   megaMenuWithSub: false,
  //   title: "User Account",
  //   child: [
  //     {
  //       title: "Orders",
  //       child: [
  //         {
  //           title: "Order List",
  //           url: "/orders",
  //         },
  //         {
  //           title: "Order Details",
  //           url: "/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Profile",
  //       child: [
  //         {
  //           title: "View Profile",
  //           url: "/profile",
  //         },
  //         {
  //           title: "Edit Profile",
  //           url: "/profile/e42e28ea-528f-4bc8-81fb-97f658d67d75",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Address",
  //       child: [
  //         {
  //           title: "Address List",
  //           url: "/address",
  //         },
  //         {
  //           title: "Add Address",
  //           url: "/address/d27d0e28-c35e-4085-af1e-f9f1b1bd9c34",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Support tickets",
  //       child: [
  //         {
  //           title: "All tickets",
  //           url: "/support-tickets",
  //         },
  //         {
  //           title: "Ticket details",
  //           url: "/support-tickets/when-will-my-product-arrive",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Wishlist",
  //       url: "/wish-list",
  //     },
  //   ],
  // },
  // {
  //   megaMenu: false,
  //   megaMenuWithSub: false,
  //   title: "Vendor Account",
  //   child: [
  //     {
  //       title: "Dashboard",
  //       url: "/vendor/dashboard",
  //     },
  //     {
  //       title: "Products",
  //       child: [
  //         {
  //           title: "All products",
  //           url: "/admin/products",
  //         },
  //         {
  //           title: "Add/Edit product",
  //           url: "/admin/products/lord-2019",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Orders",
  //       child: [
  //         {
  //           title: "All orders",
  //           url: "/admin/orders",
  //         },
  //         {
  //           title: "Order details",
  //           url: "/admin/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Profile",
  //       url: "/vendor/account-setting",
  //     },
  //   ],
  // },
];
export default navbarNavigations;

export const topbarNavigation = [
  {
    title: "Mr.Couch Stores",
    url:"/",
    megaMenu: false,
    megaMenuWithSub: false,
   
  },
  {
    title: "Sell On Mr.Couch",
    url: "/sellOn",
    megaMenu: false,
    megaMenuWithSub: false,
   
  },
  {
    title: "Become a Franchisee",
    url: "/Services",
    megaMenu: false,
    megaMenuWithSub: false,
   
  },
  {
    title: "Register Warranty",
    url: "/ContactUs",
    megaMenu: false,
    megaMenuWithSub: false,
   
  },
 
  {
    title: "Track Your Order",
    url: "/",
    megaMenu: false,
    megaMenuWithSub: false,
   
  },
  {
    title: "About US",
    url: "/aboutUs",
    megaMenu: false,
    megaMenuWithSub: false,
   
  },
  
];

