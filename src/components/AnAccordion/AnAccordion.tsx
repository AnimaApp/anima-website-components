import {
  Image,
  Box,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  Flex,
  Text,
} from "@chakra-ui/react";

type AnAccordionItemProps = {
  label: string;
  iconSource?: string;
  link: string;
};
type AnAccordionSectionProps = {
  label: string;
  items?: AnAccordionItemProps[];
  link?: string;
};
type AnAccordionProps = {
  sections: AnAccordionSectionProps[];
};
export const AnAccordion = ({ sections }: AnAccordionProps) => {
  return (
    <Accordion allowToggle>
      {sections.map((section, index) => (
        <AccordionItem
          key={index}
          borderBottomWidth={"1px"}
          borderTopWidth={"0px"}
          borderColor={"var(--grey-10)"}
        >
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight={600} fontSize={"lg"}>
                {section.link ? (
                  <Link variant="ghost" href={section.link}>
                    <Text>{section.label}</Text>
                  </Link>
                ) : (
                  <Text>{section.label}</Text>
                )}
              </Box>
              {section.items && <AccordionIcon />}
            </AccordionButton>
          </h2>
          {section.items && (
            <AccordionPanel pb={4}>
              <Box
                flex="1"
                textAlign="left"
                fontWeight={600}
                bg={"var(--secondary)"}
                margin={"10px 0"}
                borderRadius={"25px"}
                padding={"25px"}
                gap={"10px"}
              >
                <Flex gap={"10px"} direction={"column"}>
                  {section.items?.map((item, index) => (
                    <Link variant="ghost" key={index} href={item.link}>
                      <HStack>
                        {item.iconSource && (
                          <Image
                            src={item.iconSource}
                            alt={item.label}
                            mr="12px"
                          />
                        )}
                        <Text>{item.label}</Text>
                      </HStack>
                    </Link>
                  ))}
                </Flex>
              </Box>
            </AccordionPanel>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
