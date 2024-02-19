import { cache } from "react";
import { database_id, notionClient } from "@/lib/notion/setup";

export const getDatabase = cache(() => {
  return notionClient.databases.query({
    database_id,
  });
});

export const getDatabaseFiltered = async ({
  property,
  value,
}: {
  property: string;
  value: string;
}) => {
  const response = await notionClient.databases.query({
    database_id,
    filter: {
      property,
      rich_text: {
        contains: value,
      },
    },
  });
  return response;
};
