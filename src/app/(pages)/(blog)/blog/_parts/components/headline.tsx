import { FunctionComponent } from "react";

interface PageHeadlineProps {
  title: string;
}

export const PageHeadline: FunctionComponent<PageHeadlineProps> = ({
  title,
}) => {
  return (
    <div className="text-center text-6xl font-bold tracking-tight uppercase">
      {title}
    </div>
  );
};
