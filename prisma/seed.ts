
import { db } from "@/prisma/db"

async function main() {
  const products = [
    {
      img_url: "/assets/product-1.png",
      name: "Classic White T-Shirt",
      price: 120,
      in_stock: 50,
      description: "Comfortable cotton white t-shirt for everyday wear.",
    },
    {
      img_url: "/assets/product-2.png",
      name: "Oversized Hoodie",
      price: 250,
      in_stock: 30,
      description: "Warm oversized hoodie with a relaxed fit.",
    },
    {
      img_url: "/assets/product-3.png",
      name: "Slim Fit Jeans",
      price: 280,
      in_stock: 25,
      description: "Modern slim fit denim jeans.",
    },
    {
      img_url: "/assets/product-4.png",
      name: "Casual Denim Jacket",
      price: 300,
      in_stock: 20,
      description: "Classic denim jacket suitable for every season.",
    },
    {
      img_url: "/assets/product-5.png",
      name: "Black Jogger Pants",
      price: 180,
      in_stock: 40,
      description: "Comfortable jogger pants with an elastic waistband.",
    },
    {
      img_url: "/assets/product-6.png",
      name: "Women's Summer Dress",
      price: 220,
      in_stock: 35,
      description: "Lightweight and elegant summer dress.",
    },
    {
      img_url: "/assets/product-7.png",
      name: "Oversized Sweatshirt",
      price: 200,
      in_stock: 28,
      description: "Soft oversized sweatshirt for casual outfits.",
    },
    {
      img_url: "/assets/product-8.png",
      name: "Cotton Polo Shirt",
      price: 150,
      in_stock: 45,
      description: "Classic cotton polo shirt with a modern fit.",
    },
    {
      img_url: "/assets/product-9.png",
      name: "Women's Wide Leg Trousers",
      price: 270,
      in_stock: 22,
      description: "Elegant wide leg trousers for casual and formal looks.",
    },
    {
      img_url: "/assets/product-10.png",
      name: "Classic Leather Jacket",
      price: 300,
      in_stock: 12,
      description: "Stylish leather jacket with a timeless design.",
    },
  ];
  const inserted = await db.orm.public.Product.createAll(products);
  console.log(`Successfully seeded ${(await inserted).length} products!`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
