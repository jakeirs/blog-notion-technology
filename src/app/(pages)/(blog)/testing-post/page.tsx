import ThemeToggle from "@/components/blocks/theme-toggle";
import {getRecursivelyBlocks} from "@/lib/notion/utils";
import {RenderNotionBlocks} from "@/lib/notion/Render";

export default async function TestingPost() {
    const notionRecursivelyBlock = await getRecursivelyBlocks(
        "b3b3bc4cd37e4e75bec7984dcb4dd04c"
    );
  return (
    <div>
      <ThemeToggle />
        <div>
            <RenderNotionBlocks blocks={notionRecursivelyBlock} />
        </div>
    </div>
  );
}
