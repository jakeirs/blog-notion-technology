import Image from "next/image";
import { FunctionComponent } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ImageWithSquaresProps {
  src: string;
  alt?: string;
  ratio?: number;
}

export const ImageWithBg: FunctionComponent<ImageWithSquaresProps> = ({
  src = "",
  alt = "Thumbnail",
  ratio = 16 / 9,
}) => {
  return (
    <div className="p-[5px] not-prose relative rounded-xl overflow-hidden">
      <div className="grid-pattern inset-0 absolute" />
      <AspectRatio ratio={ratio}>
        {src ? (
          <Image
            src={src}
            fill
            sizes={"100vw"}
            alt={alt}
            className="object-cover h-full w-full max-w-full rounded-lg"
          />
        ) : null}
      </AspectRatio>
    </div>
  );
};
