import Image from "next/image";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-amber-200/20 blur-xl"></div>
      <div className="absolute right-10 bottom-20 h-40 w-40 rounded-full bg-rose-200/20 blur-xl"></div>

      <div className="container mx-auto h-full max-w-7xl px-4">
        <div className="grid min-h-[85vh] items-center gap-12 py-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-2">
              <div className="inline-block">
                <span className="bg-warmdark/10 text-warmdark rounded-full px-4 py-2 text-xs font-medium tracking-wide">
                  ✨ PREMIUM COLLECTION
                </span>
              </div>

              <h1 className="text-warmdark leading-tight font-bold">
                <div className="mb-2 text-5xl lg:text-6xl">Curated Luxury</div>
                <div className="mb-2 text-5xl lg:text-6xl">
                  Gifts<span className="text-amber-600">,</span> Delivered
                </div>
                <div className="mb-6 text-5xl lg:text-6xl">
                  with <span className="text-rose-600 italic">Love</span>
                </div>
              </h1>
            </div>

            <div className="space-y-6">
              <p className="max-w-lg text-sm leading-relaxed text-gray-600 lg:text-base">
                Discover handpicked treasures that speak to the heart. Each
                piece is carefully selected to create moments of joy and lasting
                memories.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-warmdark hover:bg-warmdark/90 rounded-xl px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Shop Now
                  <MoveRight />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-warmdark text-warmdark hover:bg-warmdark rounded-xl border-2 px-8 py-4 text-sm font-semibold transition-all duration-300 hover:text-white"
                >
                  View Collection
                </Button>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 border-t border-gray-200 pt-8">
              <div className="text-center">
                <div className="text-warmdark text-2xl font-bold">500+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-warmdark text-2xl font-bold">50+</div>
                <div className="text-sm text-gray-500">Luxury Items</div>
              </div>
              <div className="text-center">
                <div className="text-warmdark text-2xl font-bold">4.9★</div>
                <div className="text-sm text-gray-500">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative background circle */}
              <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-amber-200 to-rose-200 opacity-20 blur-sm"></div>

              {/* Main image */}
              <div className="relative z-10 transform transition-transform duration-500 hover:scale-105">
                <Image
                  src="/luxuriabg.png"
                  alt="Luxury gifts and home decor collection"
                  height={300}
                  width={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 z-20 rounded-2xl border border-gray-100 bg-white p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Free Shipping
                  </span>
                </div>
              </div>

              <div className="absolute -right-6 -bottom-6 z-20 rounded-2xl border border-gray-100 bg-white p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎁</span>
                  <span className="text-sm font-medium text-gray-700">
                    Gift Wrapped
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
