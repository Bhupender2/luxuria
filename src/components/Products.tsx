import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  image: string;
  alt: string;
}

const Products = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Elegant Table Centerpiece Set",
      description: "Premium crystal candle holders with decorative elements",
      price: "$89.99",
      originalPrice: "$129.99",
      image: "/Products/product1.jpg",
      alt: "Crystal candle holders on wooden table",
    },
    {
      id: 2,
      name: "Autumn Harvest Arrangement",
      description: "Handcrafted seasonal floral display with natural elements",
      price: "$64.99",
      originalPrice: "$89.99",
      image: "/Products/product2.jpg",
      alt: "Autumn floral arrangement in decorative vase",
    },
    {
      id: 3,
      name: "Modern Art Sculpture",
      description: "Contemporary abstract figure sculpture for home decor",
      price: "$149.99",
      originalPrice: "$199.99",
      image: "/Products/product3.jpg",
      alt: "Modern abstract sculpture",
    },
    {
      id: 4,
      name: "Luxury Brass Vase Collection",
      description:
        "Vintage-inspired brass vases with fresh flower arrangements",
      price: "$124.99",
      originalPrice: "$169.99",
      image: "/Products/product4.jpg",
      alt: "Brass vases with red flowers",
    },
    {
      id: 5,
      name: "Swan Duo Decorative Set",
      description: "Elegant ceramic swan figurines with intricate detailing",
      price: "$79.99",
      originalPrice: "$109.99",
      image: "/Products/product5.jpg",
      alt: "Two decorative ceramic swans",
    },
    {
      id: 6,
      name: "Statement Swan Centerpiece",
      description: "Large decorative swan sculpture for elegant home styling",
      price: "$189.99",
      originalPrice: "$249.99",
      image: "/Products/product6.jpg",
      alt: "Large decorative swan sculpture",
    },
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <div className="text-warmdark mb-12 text-center">
        <h2 className="mb-4 text-5xl font-bold">Our Best Sellers</h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Discover our most loved home decor pieces, carefully curated to bring
          elegance and style to your living space
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card
            key={product.id}
            className="group overflow-hidden border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <CardHeader className="p-0">
              <div className="overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  height={280}
                  width={400}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </CardHeader>

            <CardContent>
              <CardTitle className="group-hover:text-warmdark mb-2 text-xl font-semibold text-gray-800 transition-colors">
                {product.name}
              </CardTitle>
              <CardDescription className="mb-2 line-clamp-2 text-gray-600">
                {product.description}
              </CardDescription>

              <div className="flex items-center gap-2">
                <span className="text-warmdark text-xl font-bold">
                  {product.price}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  {product.originalPrice}
                </span>
                <span className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  Save{" "}
                  {Math.round(
                    ((parseFloat(product.originalPrice.slice(1)) -
                      parseFloat(product.price.slice(1))) /
                      parseFloat(product.originalPrice.slice(1))) *
                      100,
                  )}
                  %
                </span>
              </div>
            </CardContent>

            <CardFooter>
              <div className="w-full space-y-3">
                <Button className="bg-warmdark hover:bg-warmdark/90 w-full rounded-lg py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg">
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  className="border-warmdark text-warmdark hover:bg-warmdark/5 w-full py-2 font-medium"
                >
                  Quick View
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-12 text-center">
        <Button
          variant="outline"
          size="lg"
          className="border-warmdark text-warmdark hover:bg-warmdark rounded-lg border-2 px-8 py-3 font-semibold transition-all duration-300 hover:text-white"
        >
          View All Products
        </Button>
      </div>
    </div>
  );
};

export default Products;
