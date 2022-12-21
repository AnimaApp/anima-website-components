import { useState, useEffect } from "react";
import {
  Card,
  Container,
  Image,
  Divider,
  Box,
  Flex,
  Stack,
  Title,
} from "@mantine/core";
import { HighlitghtIcon } from "../Icons";
import { AnFeatureList } from "../";

type AnButtonProps = {
  variant?: "filled" | "highlighted";
  dividerVariant?: "solidRed" | "solidLight";
  dividerSize: "sm" | "md" | "lg" | "xl" | null;
  title: string;
  titleImgUrl?: string;
  bodyImgUrl?: string;
  validFeatures?: string[];
  invalidFeatures?: string[];
  children: React.ReactNode;
};
export const AnCard = ({
  title,
  titleImgUrl,
  bodyImgUrl,
  variant,
  dividerVariant,
  dividerSize,
  validFeatures,
  invalidFeatures,
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
      case "xl":
        setDividerWidth(100);
        break;
      default:
        setDividerWidth(0);
        break;
    }
  }, [dividerSize]);

  return (
    <Container
      size="xs"
      sx={{
        position: "relative",
        marginTop: "40px",
        maxWidth: "470px",
      }}
    >
      {variant === "highlighted" && (
        <>
          <HighlitghtIcon
            style={{
              color: "var(--white)",
              position: "absolute",
              top: "-50px",
              right: "-50px",
            }}
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
            ...(variant === "highlighted"
              ? {
                  backgroundColor: "var(--white)",
                }
              : {}),
          }}
        >
          <Flex>
            <Title
              sx={{
                fontWeight: 700,
                fontSize: "24px",
                fontFamily: "Roslindale",
                ...(variant === "highlighted"
                  ? {
                      color: "var(--secondary)",
                    }
                  : {}),
              }}
              order={variant === "highlighted" ? 4 : 5}
              size={variant === "highlighted" ? "h4" : "h5"}
            >
              {title}
            </Title>
            {titleImgUrl && (
              <Image src={titleImgUrl} alt={title} height={60} width={60} />
            )}
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
        <Box style={{ padding: "20px" }}>
          {bodyImgUrl && (
            <Image
              src={bodyImgUrl}
              alt={title}
              sx={{ width: "260px", height: "260px" }}
            />
          )}
          {validFeatures && (
            <Stack>
              <AnFeatureList
                items={validFeatures.map((feature) => ({
                  label: feature,
                  hasFeature: true,
                }))}
              />
            </Stack>
          )}
          {invalidFeatures && (
            <Stack>
              <AnFeatureList
                items={invalidFeatures.map((feature) => ({
                  label: feature,
                  hasFeature: false,
                }))}
              />
            </Stack>
          )}
          {children}
        </Box>
      </Card>
    </Container>
  );
};
