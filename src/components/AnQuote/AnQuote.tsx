import { Box, Title, Flex, Text, Avatar } from "@mantine/core";

type AnQuoteProps = {
  text: React.ReactNode;
  authorName: string;
  authorTitle: string;
  authorProfileImageUrl?: string;
  articleTitle: string;
  articleDate: string;
};
export const AnQuote = ({
  text,
  authorName,
  authorTitle,
  authorProfileImageUrl,
  articleTitle,
  articleDate,
}: AnQuoteProps) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: "var(--secondary)",
        color: "var(--white)",
        borderRadius: "20px",
        padding: "clamp(3rem, 15vw, 1rem) clamp(3rem, 15vw, 7rem)",
        fontFamily: "Roslindale",
      })}
    >
      <Flex gap={20}>
        <Box
          sx={(theme) => ({
            borderRadius: "100px",
            borderLeft: "6px solid var(--amber-7)",
          })}
        />
        <Flex direction="column">
          <Title
            order={2}
            size={32}
            sx={(theme) => ({
              marginBottom: "4px",
              fontFamily: "Roslindale",
            })}
          >
            {text}
          </Title>
          {authorName && (
            <Box
              sx={(theme) => ({
                fontFamily: "Mulish",
              })}
            >
              <Flex direction="row" gap={8} align="center">
                <Box>
                  <Avatar
                    radius="xl"
                    src={authorProfileImageUrl}
                    alt={authorName}
                  />
                </Box>
                <Box>
                  <Text
                    size={16}
                    weight={800}
                    sx={(theme) => ({
                      marginTop: 2,
                    })}
                  >
                    {authorName}
                  </Text>
                  <Text
                    size={16}
                    weight={400}
                    sx={(theme) => ({
                      marginTop: 1,
                    })}
                  >
                    {authorTitle}
                  </Text>
                </Box>
              </Flex>
            </Box>
          )}
          {articleTitle && (
            <Box>
              <Text
                size={16}
                weight={700}
                mt={2}
                sx={(theme) => ({
                  color: "var(--amber-7)",
                })}
              >
                {articleTitle}
              </Text>
              <Text
                size={16}
                mt={1}
                sx={(theme) => ({
                  color: "var(--amber-7)",
                })}
              >
                {articleDate}
              </Text>
            </Box>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};
