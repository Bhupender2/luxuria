import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container mx-auto flex max-w-7xl justify-between">
      <div className="text-warmdark text-5xl font-bold">
        <div>Curated Luxury</div>
        <div>Gifts , Delivered</div>
        <div>with Love</div>
      </div>
      <div>
        <Image
          src="/luxuriabg.png"
          alt="background_img"
          height={300}
          width={400}
        />
      </div>
    </div>
  );
};

export default HeroSection;
