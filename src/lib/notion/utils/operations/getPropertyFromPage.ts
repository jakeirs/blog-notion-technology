import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { PropertiesNotion } from "@/lib/notion/types";

export const getPropertyFromPage = ({
  page,
  property,
}: {
  property: string;
  page: PageObjectResponse;
}) => {
  const propertiesObj = page.properties;
  const singleProperty = propertiesObj[property] as PropertiesNotion;

  switch (singleProperty.type) {
    case "title":
      return singleProperty[singleProperty.type][0].plain_text;
  }

  return propertiesObj;
};

export const getAllPropertiesFromPage = ({
  page,
}: {
  property: string;
  page: PageObjectResponse;
}) => {
  const propertiesObj = page.properties;
};
