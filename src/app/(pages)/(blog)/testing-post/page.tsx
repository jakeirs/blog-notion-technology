import { getRecursivelyBlocks } from "@/lib/notion/utils";
import { RenderNotionBlocks } from "@/lib/notion/Render";

export default async function TestingPost() {
  const notionRecursivelyBlock = await getRecursivelyBlocks(
    "b3b3bc4cd37e4e75bec7984dcb4dd04c",
  );

  return (
    <section className="flex justify-center">
      <div className="max-w-[660px] mx-6 my-12">
        <RenderNotionBlocks blocks={notionRecursivelyBlock} />
      </div>
    </section>
  );
}
