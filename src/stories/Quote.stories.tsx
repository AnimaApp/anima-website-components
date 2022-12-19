import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AnQuote } from "../components";

export default {
  title: "Anima/AnQuote",
  component: AnQuote,
  argTypes: {
    dividerSize: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl", null],
      },
    },
    authorProfileImageUrl: {
      control: {
        type: "file",
      },
    },
  },
} as ComponentMeta<typeof AnQuote>;

const Template: ComponentStory<typeof AnQuote> = (args) => (
  <AnQuote {...args} />
);

export const QuoteAuthor = Template.bind({});
QuoteAuthor.args = {
  text: "“Anima just turned any backend developer to a fullstack, and will save precious time to production.”",
  authorName: "Amit Ben",
  authorTitle: "CEO @ OneAI.com",
  authorProfileImageUrl:
    "https://a.storyblok.com/f/89137/200x200/9213ad6831/stephen-callender.jpg",
};
