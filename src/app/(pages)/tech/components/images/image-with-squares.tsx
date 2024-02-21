import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const ImageWithSquares = ({ src }: { src: string }) => {
  return (
    <div className="p-2 not-prose relative bg-gray-50/50 rounded-xl overflow-hidden dark:bg-green-800/25">
      <div className="grid-pattern inset-0 absolute"></div>
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
