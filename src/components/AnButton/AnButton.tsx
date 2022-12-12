import { Button } from '@mantine/core';

type AnButtonProps = {
  children: React.ReactNode;
  variant?: "filled" | "light" | "outline" | "default" | "subtle";
};
export const AnButton = ({ children, variant }: AnButtonProps) => {
  return <Button variant={variant}>{children}</Button>;
};
