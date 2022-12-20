import { AnText } from "../components";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Anima/AnText",
  component: AnText,
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "select",
        options: ["xs" , "sm" , "md" , "lg" , "xl"],
      },
    },
    weight: {
      control: {
        type: "select",
        options: ["light", "regular", "medium", "semibold", "bold"],
      },
    },
    align: {
      control: {
        type: "select",
        options: ["left", "center", "right"],
      },
    },
  },
} as ComponentMeta<typeof AnText>;

const Template: ComponentStory<typeof AnText> = (args) => <AnText {...args} />;
export const Default = Template.bind({});
Default.args = {
  text: "Text",
};
