import Link from "next/link";
import { FunctionComponent } from "react";
import { ImageWithBg } from "@/components/ui/image-with-bg";
interface PostItemProps {
  src: string;
}

export const PostItem: FunctionComponent<PostItemProps> = ({ src }) => {
  return (
    <div className="group cursor-pointer">
      <div className="transition-all hover:scale-105">
        <Link className="aspect-video" href={`/post/`}>
          <ImageWithBg src={src} />
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
