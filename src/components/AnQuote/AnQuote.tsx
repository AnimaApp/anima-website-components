import { Box, Title, Flex, Text, Avatar } from "@mantine/core";

type AnQuoteAuthorProps = {
  name: string;
  title: string;
  profileImageUrl?: string;
};

type AnQuoteArticleProps = {
  title: string;
  date: string;
};

type AnQuoteProps = {
  text: React.ReactNode;
  author?: AnQuoteAuthorProps;
  article?: AnQuoteArticleProps;
};
export const AnQuote = ({ text, author, article }: AnQuoteProps) => {
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
          {author && (
            <Box
              sx={(theme) => ({
                fontFamily: "Mulish",
              })}
            >
              <Flex direction="row" gap={8} align="center">
                <Box>
                  <Avatar
                    radius="xl"
                    src={author.profileImageUrl}
                    alt={author.name}
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
                    {author.name}
                  </Text>
                  <Text
                    size={16}
                    weight={400}
                    sx={(theme) => ({
                      marginTop: 1,
                    })}
                  >
                    {author.title}
                  </Text>
                </Box>
              </Flex>
            </Box>
          )}
          {article && (
            <Box
              sx={(theme) => ({
                color: "var(--amber-7)",
              })}
            >
              <Text size={16} weight={700} mt={2}>
                {article.title}
              </Text>
              <Text size={16} mt={1}>
                {article.date}
              </Text>
            </Box>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};
