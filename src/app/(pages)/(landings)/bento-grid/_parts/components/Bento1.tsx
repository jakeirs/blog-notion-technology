import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const Bento1 = () => {
  return (
    <div className="border border-solid rounded-3xl w-full overflow-hidden max-h-[40vh]">
      <div className="relative h-[55%]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6509abbc53482f69b960f23c492469b14a28ef34832d7f8462b238815650541?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex w-full justify-end pt-3 pr-3">
          <Button className="bg-white text-purple-900 rounded-full h-10 w-10 p-0">
            <ArrowUpRight />
          </Button>
        </div>
        <div className="uppercase w-full text-4xl tracking-tighter font-bold text-center z-10 p-4">
          See All <br /> Articles
        </div>
      </div>
      <div className="h-[45%]">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0605ebbdfe9e6d84ce63d5efc317d6474fc2c6e7ff2c7dd087f4a1467a3631fc?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0605ebbdfe9e6d84ce63d5efc317d6474fc2c6e7ff2c7dd087f4a1467a3631fc?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0605ebbdfe9e6d84ce63d5efc317d6474fc2c6e7ff2c7dd087f4a1467a3631fc?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0605ebbdfe9e6d84ce63d5efc317d6474fc2c6e7ff2c7dd087f4a1467a3631fc?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0605ebbdfe9e6d84ce63d5efc317d6474fc2c6e7ff2c7dd087f4a1467a3631fc?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0605ebbdfe9e6d84ce63d5efc317d6474fc2c6e7ff2c7dd087f4a1467a3631fc?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0605ebbdfe9e6d84ce63d5efc317d6474fc2c6e7ff2c7dd087f4a1467a3631fc?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0605ebbdfe9e6d84ce63d5efc317d6474fc2c6e7ff2c7dd087f4a1467a3631fc?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&"
          className="w-full"
        />
      </div>
    </div>
  );
};
