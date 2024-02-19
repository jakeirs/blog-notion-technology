import {
  getBlocks,
  getPageFromSlug,
  getPropertyFromPage,
} from "@/lib/notion/utils";
import ClientConsoleLog from "@/components/technical/ClientConsoleLog";

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
  const properties = page.properties;
  const title = getPropertyFromPage({ property: "Title", page });
  const blocks = await getBlocks(page.id);

  return (
    <section className="flex justify-center">
      <ClientConsoleLog dataToLog={title} name="title" />
      <ClientConsoleLog dataToLog={properties} name="properties" />
      <div className="max-w-[660px] mx-6 my-12">
        <div className="text-4xl font-bold">{title}</div>
      </div>
    </section>
  );
}
