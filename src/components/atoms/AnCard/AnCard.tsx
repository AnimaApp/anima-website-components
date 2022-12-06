import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Heading,
  Divider,
  Box,
  HStack,
} from "@chakra-ui/react";

type AnButtonProps = {
  variant?: "filled" | "highlighted";
  dividerVariant?: "solidRed" | "solidLight";
  dividerSize?: "sm" | "md" | "lg" | "xl";
  title: string;
  titleImgUrl?: string;
  children: React.ReactNode;
};
export const AnCard = ({
  title,
  titleImgUrl,
  variant,
  dividerVariant,
  dividerSize,
  children,
}: AnButtonProps) => {
  const [dividerWidth, setDividerWidth] = useState(100);

  useEffect(() => {
    switch (dividerSize) {
      case 'sm':
        setDividerWidth(30);
        break;
      case 'md':
        setDividerWidth(50);
        break;
      case 'lg':
        setDividerWidth(75);
        break;
      default:
        setDividerWidth(100);
        break;
    }
  }, [dividerSize]);

  return (
    <Card variant={variant} maxW="md" rounded="20px">
      <CardHeader>
        <HStack>
          <Heading size="lg">{title}</Heading>
          {titleImgUrl && (
            <Image src={titleImgUrl} alt={title} borderRadius="sm" />
          )}
        </HStack>
      </CardHeader>
      {dividerVariant && (
        <Box w={`${dividerWidth}%`} p="0 20px">
          <Divider variant={dividerVariant} />
        </Box>
      )}
      <CardBody>{children}</CardBody>
    </Card>
  );
};
