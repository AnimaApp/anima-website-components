import { Text } from "@mantine/core";

type AnTextProps = {
  children: React.ReactNode;
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
export const AnText = ({ children, ...props }: AnTextProps) => {
  return <Text {...props}>{children}</Text>;
};
