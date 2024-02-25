import Link from "next/link";
import { ImageWithBg } from "@/components/ui/image-with-bg";

export default async function SingleSproutPage() {
  return (
    <div>
      <h1 className="text-5xl max-w-[750px] mx-auto my-6 pb-2 font-bold text-center ">
        Single Sprout Post
      </h1>
      <ImageWithBg src={"/images/web-framing/sprout.png"} ratio={16 / 7} />
      <div>
        <h2 className="text-2xl max-w-[750px] mx-auto my-6 pb-2 font-bold ">
          Links:
        </h2>
        <ul className="list-disc pl-8">
          <li>
            <Link className="underline" href="/blog/digital-garden/sprouts">
              Back to Sprouts
            </Link>
          </li>
          <li>
            <Link className="underline" href="/">
              Back to Notion Page Post
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
