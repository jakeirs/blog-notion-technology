import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

type SelectColor =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red";

type SelectPropertyResponse = {
  id: string;
  name: string;
  color: SelectColor;
};

type DateResponse = {
  start: string;
  end: string | null;
  time_zone: string | null;
};

export type PropertiesNotion =
  | {
      type: "title";
      title: Array<RichTextItemResponse>;
      id: string;
    }
  | {
      type: "number";
      number: number | null;
      id: string;
    }
  | {
      type: "url";
      url: string | null;
      id: string;
    }
  | {
      type: "select";
      select: SelectPropertyResponse | null;
      id: string;
    }
  | {
      type: "multi_select";
      multi_select: Array<SelectPropertyResponse>;
      id: string;
    }
  | {
      type: "status";
      status: SelectPropertyResponse | null;
      id: string;
    }
  | {
      type: "date";
      date: DateResponse | null;
      id: string;
    }
  | {
      type: "email";
      email: string | null;
      id: string;
    }
  | {
      type: "phone_number";
      phone_number: string | null;
      id: string;
    }
  | {
      type: "checkbox";
      checkbox: boolean;
      id: string;
    }
  | {
      type: "rich_text";
      rich_text: Array<RichTextItemResponse>;
      id: string;
    };
