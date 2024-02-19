import Link from "next/link";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { getDatabase, getPropertyFromPage } from "@/lib/notion/utils";
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
      <div className="max-w-[660px] mx-6 my-12">
        <div className="text-4xl mb-4">BlogHomePage</div>
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
