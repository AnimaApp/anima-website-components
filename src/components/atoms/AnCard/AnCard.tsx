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
import { HighlitghtIcon } from "../Icons";

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
      case "sm":
        setDividerWidth(40);
        break;
      case "md":
        setDividerWidth(60);
        break;
      case "lg":
        setDividerWidth(80);
        break;
      default:
        setDividerWidth(100);
        break;
    }
  }, [dividerSize]);

  return (
    <Card variant={variant} maxW="md" rounded="20px" position={"relative"}>
      {variant === "highlighted" && (
        <>
          <HighlitghtIcon position={"absolute"} top={"-50px"} right={"-50px"} />
          <HighlitghtIcon
            position={"absolute"}
            bottom={"-50px"}
            left={"-50px"}
            transform={"rotate(180deg)"}
          />
        </>
      )}
      <CardHeader roundedTop={"20px"}>
        <HStack>
          <Heading size="lg">{title}</Heading>
          {titleImgUrl && (
            <Image src={titleImgUrl} alt={title} borderRadius="sm" />
          )}
        </HStack>
      </CardHeader>
      {dividerVariant && (
        <Box w={`${dividerWidth}%`} p="0 40px">
          <Divider variant={dividerVariant} />
        </Box>
      )}
      <CardBody>{children}</CardBody>
    </Card>
  );
};
