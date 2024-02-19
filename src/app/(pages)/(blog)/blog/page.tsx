import { getRecursivelyBlocks } from "@/lib/notion/utils";

/** @todo
 * because it's already published blog post, the content should be
 * ISR every 12 hours for example.
 * Content for drafts and stage1 -> every time you hit the page
 *
 * */
export default async function BlogHomePage() {
  const notionRecursivelyBlock = await getRecursivelyBlocks(
    "b3b3bc4cd37e4e75bec7984dcb4dd04c",
  );

  return (
    <section className="flex justify-center">
      <div className="max-w-[660px] mx-6 my-12">
        <div className="text-4xl">BlogHomePage</div>
      </div>
    </section>
  );
}
