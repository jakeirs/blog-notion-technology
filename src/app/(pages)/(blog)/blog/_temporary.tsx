import Link from "next/link";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { getDatabase, getPropertyFromPage } from "@/lib/notion/utils";
import { ImageWithBg, src } from "@/components/ui/image-with-bg";
/** @todo
 * because it's already published blog post, the content should be
 * ISR every 12 hours for example.
 * Content for drafts and stage1 -> every time you hit the page
 *
 * */
export default async function BlogHomeTemporaryPage() {
  const database = await getDatabase();
  const posts = database.results as Array<PageObjectResponse>;

  return (
    <section className="flex justify-center">
      <div className="max-w-[660px] mx-6 my-12">
        <div>
          <h1 className="text-5xl max-w-[750px] mx-auto my-6 pb-2 font-bold text-center ">
            Blog
          </h1>
          <h2 className="text-2xl max-w-[750px] mx-auto my-6 pb-2 font-bold text-center">
            Post Categories divided into 2:
          </h2>
          <div className="text-xl pb-2 font-bold">
            Survive in Digital Economy
          </div>
          <div className="text-xl pb-2 font-bold">How we build</div>
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
                <Link className="underline" href="/blog/digital-survival-blog">
                  Digital Survival
                </Link>
              </li>
              <li>
                <Link className="underline" href="/blog/how-we-build-blog">
                  How we build
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {posts.map((post: PageObjectResponse) => {
            const title = getPropertyFromPage({
              property: "Title",
              page: post,
            });
            const slug = getPropertyFromPage({
              property: "Slug",
              page: post,
            });

            /* @todo add slug URL instead of redirecting to Notion (however this is also nice ./ ) */
            return (
              <div className="text-xl my-1" key={post.id}>
                - <Link href={`/blog/${slug}`}>{title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
