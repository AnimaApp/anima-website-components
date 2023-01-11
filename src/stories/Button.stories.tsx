import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AnButton } from "../components";

export default {
  title: "Anima/AnButton",
  component: AnButton,
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "light", "outline", "default", "subtle"],
    },
    size: {
      control: "select",
      options: [null, "xs", "sm", "md", "lg", "xl"],
    },
  },
} as ComponentMeta<typeof AnButton>;

const Template: ComponentStory<typeof AnButton> = (args) => (
  <AnButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};
