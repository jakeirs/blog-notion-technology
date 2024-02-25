import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { PropertiesNotion } from "@/lib/notion/types";

export const getPropertyFromPage = ({
  page,
  property,
}: {
  property: string;
  page: PageObjectResponse;
}): string | string[] => {
  const propertiesObj = page.properties;
  const singleProperty = propertiesObj[property] as PropertiesNotion;
  const type = singleProperty.type;
  let result;
  switch (type) {
    case "title":
      result = singleProperty[type][0]?.plain_text;
      break;
    case "rich_text":
      result = singleProperty[type][0]?.plain_text;
      break;
    case "url":
      result = singleProperty[type];
      break;
    case "number":
      result = String(singleProperty[type]);
      break;
    case "select":
      result = singleProperty[type]?.name;
      break;
    case "multi_select":
      result = singleProperty[type]?.map((option) => option.name);
      break;
  }

  return result ? result : "";
};

export const getAllPropertiesFromPage = ({
  page,
}: {
  page: PageObjectResponse;
}): Record<string, string | string[]> => {
  const propertiesObj = page.properties;
  const keys = Object.keys(propertiesObj);
  return keys.reduce((acc, key) => {
    return { ...acc, [key]: getPropertyFromPage({ page, property: key }) };
  }, {});
};
