import { AnText } from "../components";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Anima/AnText",
  component: AnText,
  argTypes: {
    text: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    weight: {
      control: "select",
      options: ["light", "regular", "medium", "semibold", "bold"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
    },
  },
} as ComponentMeta<typeof AnText>;

const Template: ComponentStory<typeof AnText> = (args) => <AnText {...args} />;
export const Default = Template.bind({});
Default.args = {
  text: "Text",
};
