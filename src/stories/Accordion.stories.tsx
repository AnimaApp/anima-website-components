import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Image, Heading, Text, Stack } from "@chakra-ui/react";

import { AnAccordion } from "../components";

export default {
  title: "Anima/AnAccordion",
  component: AnAccordion,
  argTypes: {},
} as ComponentMeta<typeof AnAccordion>;

const Template: ComponentStory<typeof AnAccordion> = (args) => (
  <AnAccordion {...args} />
);

export const Accordion = Template.bind({});
Accordion.args = {
  sections: [
    {
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
    },
    {
      label: "Login",
      link: "https://www.animaapp.com",
    }
  ],
};
