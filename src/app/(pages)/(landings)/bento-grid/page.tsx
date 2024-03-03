import Link from "next/link";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { getDatabase } from "@/lib/notion/utils";
import { ImageWithBg, src } from "@/components/ui/image-with-bg";
import {
  ArticlePreview,
  Technologies,
  Header,
} from "@/app/(pages)/(landings)/bento-grid/_parts/components";
import { Bento1 } from "@/app/(pages)/(landings)/bento-grid/_parts/components/Bento1";
import { Bento2 } from "@/app/(pages)/(landings)/bento-grid/_parts/components/Bento2";

const imgSrcWebFraming = "/images/web-framing/newsletter.png";
/** @todo
 * because it's already published blog post, the content should be
 * ISR every 12 hours for example.
 * Content for drafts and stage1 -> every time you hit the page
 *
 * */
export default async function BentoGridPage() {
  return (
    <div className="px-10 relative z-10 pt-5 pb-10 bg-zinc-800 max-w-[1728px] max-md:px-5 h-screen overflow-hidden">
      <img
        className="absolute -z-10 top-0 left-0"
        src="/images/bentogrid/Martin-Bento-grid-top.svg"
      />
      <img
        className="absolute -z-10 bottom-0 -right-[10%]"
        src="/images/bentogrid/Martin-Bento-grid.svg"
      />
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 z-50">
        <Header />
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-1.5 max-md:mt-10 max-md:max-w-full">
            <ArticlePreview />
            <div className="mt-5 max-md:max-w-full">
              <div className="flex gap-5">
                <div className="w-1/2">
                  <Bento1 />
                </div>
                <div className="w-1/2">
                  <Bento2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
