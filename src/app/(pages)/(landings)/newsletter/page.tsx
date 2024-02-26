import Link from "next/link";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { getDatabase } from "@/lib/notion/utils";
import { ImageWithBg, src } from "@/components/ui/image-with-bg";

const imgSrcWebFraming = "/images/web-framing/newsletter.png";
/** @todo
 * because it's already published blog post, the content should be
 * ISR every 12 hours for example.
 * Content for drafts and stage1 -> every time you hit the page
 *
 * */
export default async function BlogHomePage() {
  const database = await getDatabase();
  const posts = database.results as Array<PageObjectResponse>;

  return (
    <section className="flex justify-center">
      <div className="max-w-[660px] mx-6 my-12 w-full">
        <div>
          <h1 className="text-5xl max-w-[750px] mx-auto my-6 pb-2 font-bold text-center ">
            Newsletter Page
          </h1>
          <h2 className="text-2xl max-w-[750px] mx-auto my-6 pb-2 font-bold text-center">
            Why to join a Newsletter?
          </h2>
          <ImageWithBg src={imgSrcWebFraming} ratio={16 / 7} />
          <div>
            <h2 className="text-2xl max-w-[750px] mx-auto my-6 pb-2 font-bold ">
              Links:
            </h2>
            <ul className="list-disc pl-8">
              <li>
                <Link className="underline" href="/">
                  Join a Newsletter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
