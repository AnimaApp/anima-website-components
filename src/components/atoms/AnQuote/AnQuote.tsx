import {
  Box,
  Heading,
  HStack,
  VStack,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";

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
      bg="var(--secondary)"
      padding={"clamp(3rem, 15vw, 1rem) clamp(3rem, 15vw, 7rem)"}
      w="100%"
      color="var(--white)"
    >
      <Flex alignItems={"stretch"} gap={8}>
        <Box borderRadius={"100px"} borderLeft={"6px solid var(--amber-7)"} />
        <VStack>
          <Heading as="h2" size="lg" mb={4}>
            {text}
          </Heading>
          {author && (
            <Box w="100%">
              <HStack gap={4}>
                <Box>
                  <Image
                    borderRadius="full"
                    boxSize="60px"
                    src={author.profileImageUrl}
                    alt={author.name}
                  />
                </Box>
                <Box>
                  <Text as="b" mt={2}>
                    {author.name}
                  </Text>
                  <Text mt={1}>{author.title}</Text>
                </Box>
              </HStack>
            </Box>
          )}
          {article && (
            <Box w="100%" color={"var(--amber-7)"}>
              <Text as="b" mt={2}>
                {article.title}
              </Text>
              <Text mt={1}>{article.date}</Text>
            </Box>
          )}
        </VStack>
      </Flex>
    </Box>
  );
};
