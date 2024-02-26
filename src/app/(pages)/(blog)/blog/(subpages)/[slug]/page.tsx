import {
  getAllPropertiesFromPage,
  getPageFromSlug,
  getPropertyFromPage,
  getRecursivelyBlocks,
} from "@/lib/notion/utils";
import { RenderNotionBlocks } from "@/lib/notion/Render";
import ClientConsoleLog from "@/components/technical/ClientConsoleLog";
import Link from "next/link";

// export async function generateStaticParams() {
//   const database = await getDatabaseFiltered({ property });
//   return database?.map((page) => {
//     const slug = page.properties.Slug?.formula?.string;
//     return { id: page.id, slug };
//   });
// }

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = await getPageFromSlug(params.slug);
  if (!page) return null;

  const title = getPropertyFromPage({ property: "Title", page });
  const blocks = await getRecursivelyBlocks(page.id);
  const allProperties = getAllPropertiesFromPage({ page });

  return (
    <section className="flex justify-center">
      <div className="max-w-[660px] mx-6 my-12">
        <div className="text-5xl font-bold">
          <Link href={page.url}>{title}</Link>
        </div>
        <div className="py-14">
          <ClientConsoleLog dataToLog={allProperties.Title} />
          <RenderNotionBlocks blocks={blocks} />
        </div>
      </div>
    </section>
  );
}
