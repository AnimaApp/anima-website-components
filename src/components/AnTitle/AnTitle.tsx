import { Title } from "@mantine/core";

type AnTitleProps = {
  label: string;
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
  order?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: string;
  size?: number | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
export const AnTitle = ({ label, ...props }: AnTitleProps) => {
  return <Title {...props}>{label}</Title>;
};
