import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const ImageWithSquares = ({ src }: { src: string }) => {
  return (
    <div className="p-2 not-prose relative bg-gray-50/50 rounded-xl overflow-hidden dark:bg-gray-800/25">
      <div
        className="absolute inset-0 bg-grid-neutral-200/20 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] bg-grid-white/5 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
        style={{ backgroundPosition: `10px 10px` }}
      ></div>
      <AspectRatio ratio={16 / 9}>
        <Image
          src={src}
          fill
          sizes={"100vw"}
          alt="The founding team embracing in a photography studio."
          className="object-cover h-auto max-w-full rounded-lg"
        />
      </AspectRatio>
    </div>
  );
};
