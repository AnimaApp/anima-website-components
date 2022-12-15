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
  },
} as ComponentMeta<typeof AnText>;

const Template: ComponentStory<typeof AnText> = (args) => <AnText {...args} />;
export const Header = Template.bind({});
Header.args = {
  text: "Text",
};
