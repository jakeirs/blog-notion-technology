import { FunctionComponent, ReactElement } from "react";

interface LabelProps {
  color: "green" | "blue" | "orange" | "purple" | "pink";
  children: ReactElement;
}

export const Label: FunctionComponent<LabelProps> = ({
  color = "pink",
  children,
}) => {
  const definedColors: Record<string, string> = {
    green: "text-emerald-700",
    blue: "text-blue-600",
    orange: "text-orange-700",
    purple: "text-purple-600",
    pink: "text-pink-600",
  };

  return (
    <span
      className={`
        inline-block text-xs font-medium tracking-wider uppercase mt-5",
        ${definedColors[color]}`}
    >
      {children}
    </span>
  );
};
