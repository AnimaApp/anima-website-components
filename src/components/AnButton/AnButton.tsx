import { Button } from "@mantine/core";

type AnButtonProps = {
  children: React.ReactNode;
  variant?: "filled" | "light" | "outline" | "default" | "subtle";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
};
export const AnButton = ({ children, variant, className, size }: AnButtonProps) => {
  return (
    <Button className={className} variant={variant} size={size}>
      {children}
    </Button>
  );
};
