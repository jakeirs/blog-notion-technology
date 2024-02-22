import Image from "next/image";
import { FunctionComponent } from "react";

interface ImageSimpleProps {
  src: string;
  alt?: string;
  ratio?: number;
}

/** Usage: (it will be fill the container)
 *  <div>
 *    <SimpleImage src={src} />
 *  </div>
 * But it won't appear in `flex` or `grid` unless you add `w-full`
 **/
export const ImageSimple: FunctionComponent<ImageSimpleProps> = ({
  src = "",
  alt = "Thumbnail",
  ratio = 16 / 9,
}) => {
  return (
    <div className="p-[5px] not-prose relative rounded-xl overflow-hidden aspect-video">
      <Image
        src={src}
        fill
        sizes={"100vw"}
        alt={alt}
        className="object-cover h-full w-full max-w-full rounded-lg"
      />
    </div>
  );
};
