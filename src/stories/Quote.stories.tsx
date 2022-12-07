import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AnQuote } from "../components";

export default {
  title: "Anima/AnQuote",
  component: AnQuote,
  argTypes: {},
} as ComponentMeta<typeof AnQuote>;

const Template: ComponentStory<typeof AnQuote> = (args) => (
  <AnQuote {...args} />
);

export const QuoteAuthor = Template.bind({});
QuoteAuthor.args = {
  text: "“Anima just turned any backend developer to a fullstack, and will save precious time to production.”",
  author: {
    name: "Amit Ben",
    title: "CEO @ OneAI.com",
    profileImageUrl:
      "https://a.storyblok.com/f/89137/200x200/9213ad6831/stephen-callender.jpg",
  },
};

export const QuoteArticle = Template.bind({});
QuoteArticle.args = {
  text: "How R&D leaders should use Anima’s design-to-code tech to slash time to market",
  article: {
    title: "Gartner, “Design-to-code” article.",
    date: "Nov 2022",
  },
};
