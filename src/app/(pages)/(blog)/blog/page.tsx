import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { getDatabase } from "@/lib/notion/utils";
import BlogHomeTemporaryPage from "@/app/(pages)/(blog)/blog/_temporary";
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
    <div className="">
      <BlogHomeTemporaryPage />
    </div>
  );
}
