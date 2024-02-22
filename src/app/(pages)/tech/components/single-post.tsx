import Link from "next/link";
import { FunctionComponent } from "react";
import { ImageWithBg } from "@/components/ui/image-with-bg";
import { Label } from "@/components/ui/label";
import { ImageSimple } from "@/components/ui/image-simple";

interface SinglePostProps {
  src: string;
  title: string;
}

export const SinglePost: FunctionComponent<SinglePostProps> = ({
  src,
  title = "",
}) => {
  return (
    <section
      className="max-w-[800px] grid grid-cols-1 w-full" /* "w-full" this class makes image to not collapse */
    >
      <h2 className="w-full max-w-[800px] py-20 text-center text-4xl font-medium">
        {title}
      </h2>
      <Link className="aspect-video" href={`/post/`}>
        <ImageWithBg src={src} />
      </Link>
      <div>
        <Label color="green">
          <span>Technology</span>
        </Label>
        <div className="mt-1 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
          <time>October 21, 2022</time>
        </div>
      </div>
    </section>
  );
};
