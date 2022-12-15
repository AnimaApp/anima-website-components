import { Button } from "@mantine/core";

type AnButtonProps = {
  children: React.ReactNode;
  variant?: "filled" | "light" | "outline" | "default" | "subtle";
  className?: string;
};
export const AnButton = ({ children, variant, className }: AnButtonProps) => {
  return (
    <Button className={className} variant={variant}>
      {children}
    </Button>
  );
};
