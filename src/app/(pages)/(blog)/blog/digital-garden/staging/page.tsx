import Link from "next/link";
import { ImageWithBg, src } from "@/components/ui/image-with-bg";

export default async function DigitalGardeStagingPage() {
  return (
    <div>
      <h1 className="text-5xl max-w-[750px] mx-auto my-6 pb-2 font-bold text-center ">
        Digital Garden / Staging
      </h1>
      <ImageWithBg src={src} ratio={16 / 7} />
      <div>
        <h2 className="text-2xl max-w-[750px] mx-auto my-6 pb-2 font-bold ">
          Links:
        </h2>
        <ul className="list-disc pl-8">
          <li>
            <Link
              className="underline"
              href="/blog/digital-garden/staging/single-post"
            >
              Single Post Staging
            </Link>
          </li>
          <li>
            <Link className="underline" href="/blog/digital-garden/sprouts">
              Sprouts (drafts)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
