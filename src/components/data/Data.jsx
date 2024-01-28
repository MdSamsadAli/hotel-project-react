import { eventWrapper } from "@testing-library/user-event/dist/utils";

export const navList = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/services",
    text: "Services",
  },
  {
    path: "/event",
    text: "Event",
  },
  {
    path: "/menu",
    text: "Menu",
  },
  {
    path: "/blog",
    text: "Blog",
  },
  {
    path: "/contact",
    text: "Contact",
  },
];

export const features = [
  {
    icon: <i className="fas fa-share text-primary me-2"></i>,
    text: "Fresh and Fast food Delivery",
  },
  {
    icon: <i className="fas fa-share text-primary me-2"></i>,
    text: "24/7 Customer Support",
  },
  {
    icon: <i className="fas fa-share text-primary me-2"></i>,
    text: "Easy Customization Options",
  },
  {
    icon: <i className="fas fa-share text-primary me-2"></i>,
    text: "Delicious Deals for Delicious Meals",
  },
];

export const faces = [
  {
    name: "HAPPY CUSTOMERS",
    icon: <i className="fas fa-users fa-4x mb-4 text-white"></i>,
    counter: "845",
  },
  {
    name: "EXPERT CHEFS",
    icon: <i className="fas fa-users-cog fa-4x mb-4 text-white"></i>,
    counter: "105",
  },
  {
    name: "EVENTS COMPLETE",
    icon: <i className="fas fa-check fa-4x mb-4 text-white"></i>,
    counter: "245",
  },
];

export const services = [
  {
    icon: <i className="fas fa-cheese fa-7x text-primary mb-4"></i>,
    name: "Weding Services",
    discription: "Contrary to popular belief, ipsum is not simply random.",
    btn: "Read More",
  },
  {
    icon: <i className="fas fa-pizza-slice fa-7x text-primary mb-4"></i>,
    name: "Corporate Catering",
    discription: "Contrary to popular belief, ipsum is not simply random.",
    btn: "Read More",
  },
  {
    icon: <i className="fas fa-hotdog fa-7x text-primary mb-4"></i>,
    name: "Cocktail Reception",
    discription: "Contrary to popular belief, ipsum is not simply random.",
    btn: "Read More",
  },

  {
    icon: <i className="fas fa-hamburger fa-7x text-primary mb-4"></i>,
    name: "Bento Catering",
    discription: "Contrary to popular belief, ipsum is not simply random.",
    btn: "Read More",
  },
  {
    icon: <i className="fas fa-wine-glass-alt fa-7x text-primary mb-4"></i>,
    name: "Pub Party",
    discription: "Contrary to popular belief, ipsum is not simply random.",
    btn: "Read More",
  },

  {
    icon: <i className="fas fa-walking fa-7x text-primary mb-4"></i>,
    name: "Home Delivery",
    discription: "Contrary to popular belief, ipsum is not simply random.",
    btn: "Read More",
  },
  {
    icon: <i className="fas fa-wheelchair fa-7x text-primary mb-4"></i>,
    name: "Sit-down Catering",
    discription: "Contrary to popular belief, ipsum is not simply random.",
    btn: "Read More",
  },

  {
    icon: <i className="fas fa-utensils fa-7x text-primary mb-4"></i>,
    name: "Buffet Catering",
    discription: "Contrary to popular belief, ipsum is not simply random.",
    btn: "Read More",
  },
];
export const event = [
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-1.jpg",
    category: "wedding",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-2.jpg",
    category: "corporate",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-3.jpg",
    category: "wedding",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-4.jpg",
    category: "corporate",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-5.jpg",
    category: "buffet",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-6.jpg",
    category: "cocktail",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-7.jpg",
    category: "buffet",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-8.jpg",
    category: "cocktail",
  },
];

export const menu = [
  {
    id: 1,
    name: "Paneer",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "starter",
    btn: "Add To Cart",
  },
  {
    id: 2,
    name: "Sweet Potato",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-02.jpg",
    category: "starter",
    btn: "Add To Cart",
  },
  {
    id: 3,
    name: "Sabudana Tikki",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-03.jpg",
    category: "starter",
    btn: "Add To Cart",
  },
  {
    id: 4,
    name: "Pizza",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-04.jpg",
    category: "starter",
    btn: "Add To Cart",
  },
  {
    id: 5,
    name: "Bacon",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-05.jpg",
    category: "starter",
    btn: "Add To Cart",
  },
  {
    id: 6,
    name: "Chicken",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-06.jpg",
    category: "starter",
    btn: "Add To Cart",
  },
  {
    id: 7,
    name: "Blooming",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-07.jpg",
    category: "starter",
    btn: "Add To Cart",
  },
  {
    id: 8,
    name: "Sweet",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-08.jpg",
    category: "starter",
    btn: "Add To Cart",
  },
  {
    id: 9,
    name: "Argentinian",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-09.jpg",
    category: "maincourse",
    btn: "Add To Cart",
  },
  {
    id: 10,
    name: "Crispy",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-10.jpg",
    category: "maincourse",
    btn: "Add To Cart",
  },
  {
    id: 11,
    name: "Lemon",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "maincourse",
    btn: "Add To Cart",
  },
  {
    id: 12,
    name: "Blooming",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-04.jpg",
    category: "ourspecials",
    btn: "Add To Cart",
  },
  {
    id: 13,
    name: "Paneer",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "ourspecials",
    btn: "Add To Cart",
  },
  {
    id: 14,
    name: "Crispy Water",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-03.jpg",
    category: "drinks",
    btn: "Add To Cart",
  },
  {
    id: 15,
    name: "Orange Juice",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-09.jpg",
    category: "drinks",
    btn: "Add To Cart",
  },
  {
    id: 16,
    name: "Crispy Water",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-10.jpg",
    category: "offers",
    btn: "Add To Cart",
  },
  {
    id: 17,
    name: "Juice",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-02.jpg",
    category: "drinks",
    btn: "Add To Cart",
  },
  {
    id: 18,
    name: "Apple Juice",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "drinks",
    btn: "Add To Cart",
  },
  {
    id: 19,
    name: "Paneer",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "maincourse",
    btn: "Add To Cart",
  },
  {
    id: 20,
    name: "Lemon",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "offers",
    btn: "Add To Cart",
  },
];

export const footerIcon = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
  },
  {
    icon: <i className="fab fa-twitter"></i>,
  },
  {
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
  },
];

export const footerUnitItem = [
  {
    icon: <i className="fa fa-check text-primary me-2"></i>,
    name: "Cheese Burger",
  },
  {
    icon: <i className="fa fa-check text-primary me-2"></i>,
    name: "Sandwitch",
  },
  {
    icon: <i className="fa fa-check text-primary me-2"></i>,
    name: "Paneer Burger",
  },
  {
    icon: <i className="fa fa-check text-primary me-2"></i>,
    name: "Special Sweet",
  },
];

export const footerUnitContact = [
  {
    icon: <i className="fa fa-map-marker-alt text-primary me-2"></i>,
    name: "123 Street, New York, USA",
  },
  {
    icon: <i className="fa fa-phone-alt text-primary me-2"></i>,
    name: "(+012) 3456 7890 123",
  },
  {
    icon: <i className="fas fa-envelope text-primary me-2"></i>,
    name: "info@example.com",
  },
  {
    icon: <i className="fa fa-clock text-primary me-2"></i>,
    name: "26/7 Hours Service",
  },
];
export const footergallery = [
  {
    img: "../assets/img/menu-01.jpg",
  },
  {
    img: "../assets/img/menu-02.jpg",
  },
  {
    img: "../assets/img/menu-03.jpg",
  },
  {
    img: "../assets/img/menu-04.jpg",
  },
  {
    img: "../assets/img/menu-05.jpg",
  },
  {
    img: "../assets/img/menu-06.jpg",
  },
];

export const contact = [
  {
    icon: <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>,
    title: "Address",
    address: "123 Street, New York, USA",
  },
  {
    icon: <i className="fas fa-envelope fa-2x text-primary me-4"></i>,
    title: "Mail Us",
    address: "info@example.com",
  },
  {
    icon: <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>,
    title: "Telephone",
    address: "(+012) 3456 7890 123",
  },
];
export const blog = [
  {
    name: "How to get more test in your food from",
    img: "../assets/img/blog-1.jpg",
    day: "16",
    month: "Sep",
  },
  {
    name: "How to get more test in your food from",
    img: "../assets/img/blog-2.jpg",
    day: "16",
    month: "Sep",
  },
  {
    name: "How to get more test in your food from",
    img: "../assets/img/blog-3.jpg",
    day: "16",
    month: "Sep",
  },
];
