import { Text } from "@mantine/core";

type AnTextProps = {
  text: string;
  order?: 1 | 2 | 3 | 4 | 5 | 6;
  align?:
    | "left"
    | "right"
    | "-moz-initial"
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "center"
    | "end"
    | "start"
    | "justify"
    | "match-parent";
  size?: number | "xs" | "sm" | "md" | "lg" | "xl";
  weight?: string;
  italic?: boolean;
};
export const AnText = ({ text, size, ...props }: AnTextProps) => {
  return <Text fz={size} {...props}>{text}</Text>;
};
