type Product = {
  id: number;
  title: string;
  category: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const singleProduct: Product = {
  id: 1,
  title: "Sicilian",
  category: "",
  price: 0,
  desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  img: "/temporary/p1.png",
  options: [
    { title: "Small", additionalPrice: 2 },
    { title: "Medium", additionalPrice: 4 },
    { title: "Large", additionalPrice: 6 },
  ],
};

export const products: Products = [
  // Pizzas
  {
    id: 1,
    title: "Sicilian",
    category: "pizza",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 2,
    title: "Bacon Deluxe",
    category: "pizza",
    desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
    img: "/temporary/p2.png",
    price: 29.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 3,
    title: "Bella Napoli",
    category: "pizza",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p3.png",
    price: 24.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },

  // Pastas
  {
    id: 4,
    title: "Spaghetti Carbonara",
    category: "pasta",
    desc: "Classic Roman pasta with creamy sauce, crispy pancetta, parmesan, and a hint of black pepper.",
    img: "/temporary/p1.png",
    price: 19.9,
  },
  {
    id: 5,
    title: "Penne Arrabbiata",
    category: "pasta",
    desc: "Spicy tomato sauce with garlic, chili flakes, and penne pasta for a bold Italian flavor.",
    img: "/temporary/p2.png",
    price: 18.9,
  },
  {
    id: 6,
    title: "Fettuccine Alfredo",
    category: "pasta",
    desc: "Rich and creamy Alfredo sauce tossed with fettuccine and topped with parmesan cheese.",
    img: "/temporary/p3.png",
    price: 20.9,
  },

  // Burgers
  {
    id: 7,
    title: "Classic Cheeseburger",
    category: "burghers",
    desc: "Juicy beef patty with cheddar cheese, lettuce, tomato, onion, and pickles on a toasted bun.",
    img: "/temporary/p4.png",
    price: 14.9,
  },
  {
    id: 8,
    title: "Bacon BBQ Burger",
    category: "burghers",
    desc: "Flame-grilled beef patty topped with crispy bacon, cheddar cheese, and BBQ sauce.",
    img: "/temporary/p5.png",
    price: 16.9,
  },
  {
    id: 9,
    title: "Spicy Jalapeño Burger",
    category: "burghers",
    desc: "Fiery jalapeños, pepper jack cheese, and chipotle mayo on a succulent beef patty.",
    img: "/temporary/p6.png",
    price: 15.9,
  },
];

