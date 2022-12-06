import { Button } from "@chakra-ui/react";

type AnButtonProps = {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost" | "link" | "unstyled";
};
export const AnButton = ({ children, variant }: AnButtonProps) => {
  return <Button variant={variant}>{children}</Button>;
};
