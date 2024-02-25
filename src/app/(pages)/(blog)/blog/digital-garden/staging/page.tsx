import Link from "next/link";
import { ImageWithBg, src } from "@/components/ui/image-with-bg";

export default async function DigitalGardeStagingPage() {
  return (
    <div>
      <h1 className="text-5xl max-w-[750px] mx-auto my-6 pb-2 font-bold text-center ">
        Digital Garden Staging Page
      </h1>
      <ImageWithBg src={src} ratio={16 / 7} />
      <div>
        <h2 className="text-2xl max-w-[750px] mx-auto my-6 pb-2 font-bold ">
          Links:
        </h2>
        <div>
          <Link href="/blog/digital-garden">Seeds</Link>
          <Link href="/blog/digital-garden">Single Sapling</Link>
          <Link href="/blog/digital-garden">Back to Seeds</Link>
        </div>
      </div>
    </div>
  );
}
