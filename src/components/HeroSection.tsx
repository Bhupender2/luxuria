import Image from "next/image";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="container mx-auto flex max-w-6xl justify-between">
      <div className="flex items-center justify-center">
        <div className="text-warmdark text-6xl font-bold">
          <div>Curated Luxury</div>
          <div>Gifts , Delivered</div>
          <div>with Love</div>
          <Button className="bg-warmdark">Shop Now</Button>
        </div>
      </div>
      <div>
        <Image
          src="/luxuriabg.png"
          alt="background_img"
          height={100}
          width={400}
        />
      </div>
    </div>
  );
};

export default HeroSection;
