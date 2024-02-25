import { SinglePost } from "@/app/(pages)/tech/components/single-post";
import { src } from "@/components/ui/image-with-bg";

export const title =
  "Architectural Engineering Wonders of the modern era for your Inspiration";
export default function SinglePostPage() {
  return (
    <div className="grid-cols-1 grid place-items-center">
      <SinglePost title={title} src={src} />
    </div>
  );
}
