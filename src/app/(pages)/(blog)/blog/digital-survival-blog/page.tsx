import Link from "next/link";
import { ImageWithBg, src } from "@/components/ui/image-with-bg";

export default async function DigitalSurvivalPage() {
  return (
    <div>
      <h1 className="text-5xl max-w-[750px] mx-auto my-6 pb-2 font-bold text-center ">
        Digital Survival Blog (Landing)
      </h1>
      <h2 className="text-2xl max-w-[750px] mx-auto my-6 pb-2 font-bold text-center">
        Goal of this page: What is this post category about?
      </h2>
      <ImageWithBg src={src} ratio={16 / 7} />
      <div>
        <h2 className="text-2xl max-w-[750px] mx-auto my-6 pb-2 font-bold ">
          Links:
        </h2>
        <ul className="list-disc pl-8">
          <li>
            <Link className="underline" href="/blog/single-post">
              Single Post
            </Link>
          </li>
          <li>
            <Link className="underline" href="/blog">
              Back to Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
