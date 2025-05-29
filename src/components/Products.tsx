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

const Products = () => {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="text-warmdark mb-10 text-center text-5xl font-bold">
        Our Best Sellers
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <Image
              src="/Products/product1.jpg"
              alt="product1"
              height={100}
              width={500}
            />

            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <Button className="bg-warmdark">Buy Now</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Image
              src="/Products/product2.jpg"
              alt="product1"
              height={100}
              width={500}
            />
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <Button className="bg-warmdark">Buy Now</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Image
              src="/Products/product3.jpg"
              alt="product1"
              height={100}
              width={500}
            />
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <Button className="bg-warmdark">Buy Now</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Image
              src="/Products/product4.jpg"
              alt="product1"
              height={100}
              width={500}
            />
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <Button className="bg-warmdark">Buy Now</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Image
              src="/Products/product5.jpg"
              alt="product1"
              height={100}
              width={500}
            />
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <Button className="bg-warmdark">Buy Now</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Image
              src="/Products/product6.jpg"
              alt="product1"
              height={100}
              width={500}
            />
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <Button className="bg-warmdark">Buy Now</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Products;
