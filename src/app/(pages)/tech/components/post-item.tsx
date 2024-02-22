import Link from "next/link";
import { FunctionComponent } from "react";
import { ImageWithBg } from "@/components/ui/image-with-bg";
import { Label } from "@/components/ui/label";

interface PostItemProps {
  src: string;
  title: string;
}

export const PostItem: FunctionComponent<PostItemProps> = ({
  src,
  title = "",
}) => {
  return (
    <div className="group cursor-pointer">
      <div className="transition-all hover:scale-105">
        <Link className="aspect-video" href={`/post/`}>
          <ImageWithBg src={src} />
        </Link>
        <div>
          <Label color="green">
            <span>Technology</span>
          </Label>
          <h2 className="text-xl line-clamp-2 font-medium tracking-normal">
            <span
              className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
                bg-no-repeat
                transition-[background-size]
                duration-500
                hover:bg-[length:100%_3px]
                group-hover:bg-[length:100%_10px]
                dark:from-purple-800 dark:to-purple-900"
            >
              {title}
            </span>
          </h2>
          <div className="mt-1 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
            <time>October 21, 2022</time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
