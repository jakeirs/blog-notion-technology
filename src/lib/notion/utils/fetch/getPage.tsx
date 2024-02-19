import { cache } from "react";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { database_id, notionClient } from "@/lib/notion/setup";

// const pageId = "fcece3b2-7c16-4a14-b775-28a2fbf59b65";
const pageId = "b3b3bc4cd37e4e75bec7984dcb4dd04c";
// const pageId = "db06d2de6c404e74b97188ce9d29de9b"; // working

export const getPage = cache(() => {
  return notionClient.pages.retrieve({
    page_id: pageId,
  });
});

export const getPageFromSlug = cache(
  async (slug: string): Promise<PageObjectResponse | null> => {
    const response = await notionClient.databases.query({
      database_id,
      filter: {
        property: "Slug",
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    });
    if (response?.results?.length) {
      return response?.results?.[0] as PageObjectResponse;
    }
    return null;
  },
);
