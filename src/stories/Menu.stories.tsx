import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AnMenu } from "../components";

export default {
  title: "Anima/AnMenu",
  component: AnMenu,
  argTypes: {},
} as ComponentMeta<typeof AnMenu>;

const Template: ComponentStory<typeof AnMenu> = (args) => <AnMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoUrl: "https://a.storyblok.com/f/89137/x/e1adbda50a/anima-logo.svg",
  logoLink: "https://www.animaapp.com/",
  sections: [
    {
      label: "Use cases",
      items: [
        {
          label: "Build a Website",
          link: "https://www.animaapp.com/use-cases/build-a-website",
        },
        {
          label: "Build a Webapp",
          link: "https://www.animaapp.com/use-cases/build-a-webapp",
        },
        {
          label: "Build a Prototype",
          link: "https://www.animaapp.com/use-cases/build-a-prototype",
        },
        {
          label: "Manage Design Systems",
          link: "https://www.animaapp.com/use-cases/design-systems",
        },
      ],
    },
    {
      label: "Plugins",
      items: [
        {
          label: "Figma",
          link: "https://www.animaapp.com",
          imageSrc:
            "https://a.storyblok.com/f/89137/20x20/ac7dbd1267/figma-logo.png",
        },
        {
          label: "Adobe XD",
          link: "https://www.animaapp.com",
          imageSrc:
            "https://a.storyblok.com/f/89137/20x20/6be15fe14a/adobe-xd-logo.png",
        },
      ],
    },
    { label: "Pricing", link: "https://www.animaapp.com/pricing" },
  ],
};
