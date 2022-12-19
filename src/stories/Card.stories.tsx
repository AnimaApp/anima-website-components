import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Image, Title, Text, Stack } from "@mantine/core";

import { AnCard, AnFeatureList } from "../components";

export default {
  title: "Anima/AnCard",
  component: AnCard,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["filled", "highlighted"],
      },
    },
    dividerVariant: {
      control: {
        type: "select",
        options: ["solidRed", "solidLight"],
      },
    },
    dividerSize: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl", null],
      },
    },
    titleImgUrl: {
      control: {
        type: "file",
      },
    },
  },
} as ComponentMeta<typeof AnCard>;

const Template: ComponentStory<typeof AnCard> = (args) => <AnCard {...args} />;

export const CardWithImage = Template.bind({});
CardWithImage.args = {
  title: "Frontend Development Automation",
  dividerVariant: "solidRed",
  dividerSize: "sm",
  children: (
    <Image
      src="https://bit.ly/2Z4KKcF"
      alt="Rear view of modern home with pool"
    />
  ),
};
