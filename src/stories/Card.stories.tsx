import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AnCard } from "../components";

export default {
  title: "Anima/AnCard",
  component: AnCard,
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "highlighted"],
    },
    dividerVariant: {
      control: "select",
      options: ["solidRed", "solidLight"],
    },
    dividerSize: {
      control: "select",
      options: ["sm", "md", "lg", "xl", null],
    },
    titleImgUrl: {
      control: {
        type: "file",
      },
    },
    bodyImgUrl: {
      control: {
        type: "file",
      },
    },
  },
} as ComponentMeta<typeof AnCard>;

const Template: ComponentStory<typeof AnCard> = (args) => <AnCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Frontend Development Automation",
  dividerVariant: "solidRed",
  dividerSize: "sm",
  bodyImgUrl: "https://bit.ly/2Z4KKcF",
  titleImgUrl:
    "https://cdn-images-1.medium.com/fit/c/336/336/1*JaXpZQj5wNG_QPd9C2Hegg.png",
  validFeatures: ["Devs get code, not images"],
  invalidFeatures: ["A lot lost in translation"],
};
