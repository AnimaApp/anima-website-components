import {
  Box,
  Heading,
  HStack,
  VStack,
  Flex,
  Text,
  Image,
  Divider,
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
      h="300px"
      w="100%"
      padding={'80px 150px'}
      color="var(--white)"
    >
      <Flex gap={6} height={'100%'}>
        <Divider
          borderRadius={"100px"}
          borderLeftWidth={0}
          opacity={1}
          w={"6px"}
          alignSelf="stretch"
          backgroundColor="var(--amber-8)"
          orientation="vertical"
        />
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
            <Box w="100%" color={"var(--amber-8)"}>
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
