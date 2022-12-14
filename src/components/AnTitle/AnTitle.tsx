import { Container, Title } from "@mantine/core";

type AnTitleProps = {
  children: React.ReactNode;
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
  size?: string;
  weight?: string;
  italic?: boolean;
};
export const AnTitle = ({ children, ...props }: AnTitleProps) => {
  return <Title {...props}>{children}</Title>;
};
