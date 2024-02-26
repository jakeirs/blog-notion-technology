import Image from "next/image";
import { FunctionComponent } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ImageWithSquaresProps {
  src: string;
  alt?: string;
  ratio?: number;
  vignette?: boolean;
}

export const src =
  "https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWV8ZW58MHx8MHx8fDA%3D";

export const ImageWithBg: FunctionComponent<ImageWithSquaresProps> = ({
  src = "",
  alt = "Thumbnail",
  ratio = 16 / 9,
  vignette = false,
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
      {vignette && <div className="absolute inset-0 shadow-vignette" />}
    </div>
  );
};
