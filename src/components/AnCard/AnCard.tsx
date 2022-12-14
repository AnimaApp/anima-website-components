import { useState, useEffect } from "react";
import {
  Card,
  Container,
  Image,
  Title,
  Divider,
  Box,
  Flex,
} from "@mantine/core";
import { HighlitghtIcon } from "../Icons";

type AnButtonProps = {
  variant?: "filled" | "highlighted";
  dividerVariant?: "solidRed" | "solidLight";
  dividerSize: "sm" | "md" | "lg" | "xl" | null;
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
        setDividerWidth(30);
        break;
      case "md":
        setDividerWidth(50);
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
    <Container
      size="xs"
      sx={{
        position: "relative",
        marginTop: "40px",
      }}
    >
      {variant === "highlighted" && (
        <>
          <HighlitghtIcon
            style={{ color: "var(--white)", position: "absolute", top: "-50px", right: "-50px" }}
          />
          <HighlitghtIcon
            style={{
              color: "var(--white)",
              position: "absolute",
              bottom: "-50px",
              left: "-50px",
              transform: "rotate(180deg)",
            }}
          />
        </>
      )}
      <Card
        shadow="sm"
        p="lg"
        radius="lg"
        withBorder={variant === "highlighted"}
        sx={{
          backgroundColor: "var(--secondary)",
          fontFamily: "Roslindale",
        }}
      >
        <Card.Section
          style={{
            textAlign: "left",
            color: "var(--white)",
            padding: "40px",
            ...(variant === "highlighted" ? {
              backgroundColor: "var(--white)",
            } : {}),
          }}
        >
          <Flex>
            <Title
              sx={{
                fontWeight: 700,
                fontSize: "36px",
                fontFamily: "Roslindale",
                ...(variant === "highlighted" ? {
                  color: "var(--secondary)",
                } : {}),
              }}
            >
              {title}
            </Title>
            {titleImgUrl && <Image src={titleImgUrl} alt={title} />}
          </Flex>
        </Card.Section>
        {dividerVariant && (
          <Box style={{ padding: "0 20px", width: `${dividerWidth}%` }}>
            <Divider
              size="lg"
              sx={{
                color:
                  dividerVariant === "solidRed"
                    ? "var(--tomato-9)"
                    : "var(--white)",
                borderTopColor:
                  dividerVariant === "solidRed"
                    ? "var(--tomato-9)"
                    : "var(--white)",
                opacity: 1,
                borderRadius: "25px",
                borderTopWidth: "6px",
                margin: "0px",
                marginBottom: "20px",
              }}
            />
          </Box>
        )}
        <Box style={{ padding: "20px" }}>{children}</Box>
      </Card>
    </Container>
  );
};
