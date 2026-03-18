import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  // CATEGORIES FIRST (products depend on catSlug)
  await prisma.category.createMany({
    data: [
      {
        title: "Pizzas",
        slug: "pizzas",
        desc: "Wood-fired artisan pizzas",
        img: "/category1.png",
        color: "#FFDDB5",
      },
      {
        title: "Pastas",
        slug: "pastas",
        desc: "Handmade fresh pasta",
        img: "/category2.png",
        color: "#D4EDDA",
      },
      {
        title: "Burgers",
        slug: "burghers",
        desc: "Juicy handcrafted burgers",
        img: "/category3.png",
        color: "#FFE08C",
      },
    ],
  });

  // PRODUCTS
  await prisma.product.createMany({
    data: [
      // Pizzas
      {
        title: "Sicilian",
        desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese.",
        img: "/temporary/p1.png",
        price: 24.9,
        isFeatured: true,
        catSlug: "pizzas",
        options: [
          { title: "Small", additionalPrice: 0 },
          { title: "Medium", additionalPrice: 4 },
          { title: "Large", additionalPrice: 6 },
        ],
      },
      {
        title: "Bacon Deluxe",
        desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, and tangy BBQ sauce.",
        img: "/temporary/p2.png",
        price: 29.9,
        isFeatured: false,
        catSlug: "pizzas",
        options: [
          { title: "Small", additionalPrice: 0 },
          { title: "Medium", additionalPrice: 4 },
          { title: "Large", additionalPrice: 6 },
        ],
      },
      {
        title: "Bella Napoli",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs.",
        img: "/temporary/p3.png",
        price: 24.9,
        isFeatured: true,
        catSlug: "pizzas",
        options: [
          { title: "Small", additionalPrice: 0 },
          { title: "Medium", additionalPrice: 4 },
          { title: "Large", additionalPrice: 6 },
        ],
      },

      // Pastas
      {
        title: "Spaghetti Carbonara",
        desc: "Classic Roman pasta with creamy sauce, crispy pancetta, parmesan, and a hint of black pepper.",
        img: "/temporary/p1.png",
        price: 19.9,
        isFeatured: true,
        catSlug: "pastas",
        options: [],
      },
      {
        title: "Penne Arrabbiata",
        desc: "Spicy tomato sauce with garlic, chili flakes, and penne pasta for a bold Italian flavor.",
        img: "/temporary/p2.png",
        price: 18.9,
        isFeatured: false,
        catSlug: "pastas",
        options: [],
      },
      {
        title: "Fettuccine Alfredo",
        desc: "Rich and creamy Alfredo sauce tossed with fettuccine and topped with parmesan cheese.",
        img: "/temporary/p3.png",
        price: 20.9,
        isFeatured: true,
        catSlug: "pastas",
        options: [],
      },

      // Burgers
      {
        title: "Classic Cheeseburger",
        desc: "Juicy beef patty with cheddar cheese, lettuce, tomato, onion, and pickles on a toasted bun.",
        img: "/temporary/p4.png",
        price: 14.9,
        isFeatured: true,
        catSlug: "burghers",
        options: [],
      },
      {
        title: "Bacon BBQ Burger",
        desc: "Flame-grilled beef patty topped with crispy bacon, cheddar cheese, and BBQ sauce.",
        img: "/temporary/p5.png",
        price: 16.9,
        isFeatured: false,
        catSlug: "burghers",
        options: [],
      },
      {
        title: "Spicy Jalapeño Burger",
        desc: "Fiery jalapeños, pepper jack cheese, and chipotle mayo on a succulent beef patty.",
        img: "/temporary/p6.png",
        price: 15.9,
        isFeatured: true,
        catSlug: "burghers",
        options: [],
      },
    ],
  });

  console.log("✅ Seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
