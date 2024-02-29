import { AspectRatio } from "@/components/ui/aspect-ratio";

export const Bento1 = () => {
  return (
    <AspectRatio ratio={3 / 5} className="w-full">
      <div className="flex flex-col grow py-1 w-full border border-solid shadow-md bg-zinc-800 border-[color:var(--TEXT-100,#D9D9D9)] rounded-[30px] max-md:mt-5">
        <div className="flex overflow-hidden relative flex-col items-end pt-0.5 pb-12 pl-20 w-full aspect-[1.51] max-md:pl-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6509abbc53482f69b960f23c492469b14a28ef34832d7f8462b238815650541?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative mt-5 text-5xl font-extrabold tracking-tighter text-center text-white leading-[50px] max-md:text-4xl max-md:leading-10">
            SEE ALL <br />
            ARTICLES
          </div>
          <div className="relative self-center mt-9 ml-12 text-3xl font-semibold leading-9 text-purple-500 underline">
            blog
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0605ebbdfe9e6d84ce63d5efc317d6474fc2c6e7ff2c7dd087f4a1467a3631fc?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0605ebbdfe9e6d84ce63d5efc317d6474fc2c6e7ff2c7dd087f4a1467a3631fc?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0605ebbdfe9e6d84ce63d5efc317d6474fc2c6e7ff2c7dd087f4a1467a3631fc?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0605ebbdfe9e6d84ce63d5efc317d6474fc2c6e7ff2c7dd087f4a1467a3631fc?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0605ebbdfe9e6d84ce63d5efc317d6474fc2c6e7ff2c7dd087f4a1467a3631fc?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0605ebbdfe9e6d84ce63d5efc317d6474fc2c6e7ff2c7dd087f4a1467a3631fc?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0605ebbdfe9e6d84ce63d5efc317d6474fc2c6e7ff2c7dd087f4a1467a3631fc?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0605ebbdfe9e6d84ce63d5efc317d6474fc2c6e7ff2c7dd087f4a1467a3631fc?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&"
          className="w-full aspect-[1.72]"
        />
      </div>
    </AspectRatio>
  );
};
