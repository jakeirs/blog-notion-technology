import Link from "next/link";
import { ImageWithBg } from "@/components/ui/image-with-bg";

export default async function DigitalGardeSproutsPage() {
  return (
    <div>
      <h1 className="text-5xl max-w-[750px] mx-auto my-6 pb-2 font-bold text-center ">
        Digital Garden / Sprouts
      </h1>
      <h2 className="text-2xl max-w-[750px] mx-auto my-6 pb-2 font-bold text-center ">
        Here we garden and nurture our sprouts to grow
      </h2>
      <ImageWithBg src={"/images/web-framing/sprout.png"} ratio={16 / 7} />
      <div>
        <h2 className="text-2xl max-w-[750px] mx-auto my-6 pb-2 font-bold ">
          Links:
        </h2>
        <ul className="list-disc pl-8">
          <li>
            <Link
              className="underline"
              href="/blog/digital-garden/sprouts/single-post"
            >
              Single Post Sprout
            </Link>
          </li>
          <li>
            <Link className="underline" href="/blog/digital-garden/staging">
              Staging Main
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
