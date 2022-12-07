import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AnMenu } from "../components";

export default {
  title: "Anima/AnMenu",
  component: AnMenu,
  argTypes: {},
} as ComponentMeta<typeof AnMenu>;

const Template: ComponentStory<typeof AnMenu> = (args) => <AnMenu {...args} />;

export const Menu = Template.bind({});
Menu.args = {
  label: "Plugins",
  items: [
    {
      label: "Figma",
      link: "https://www.animaapp.com",
    },
    {
      label: "Adobe XD",
      link: "https://www.animaapp.com",
    },
  ],
};

export const MenuWithIcons = Template.bind({});
MenuWithIcons.args = {
  label: "Plugins",
  items: [
    {
      label: "Figma",
      link: "https://www.animaapp.com",
      iconSource:
        "https://a.storyblok.com/f/89137/20x20/ac7dbd1267/figma-logo.png",
    },
    {
      label: "Adobe XD",
      link: "https://www.animaapp.com",
      iconSource:
        "https://a.storyblok.com/f/89137/20x20/6be15fe14a/adobe-xd-logo.png",
    },
  ],
};
