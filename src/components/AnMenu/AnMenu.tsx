import { useState } from "react";
import {
  createStyles,
  Header,
  HoverCard,
  Group,
  UnstyledButton,
  Flex,
  Text,
  SimpleGrid,
  ThemeIcon,
  Center,
  Image,
  Anchor,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconChevronUp } from "@tabler/icons";
import { AnButton } from "../";

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: "#2D2D2D",
    borderBottom: "unset",
  },
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.white,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("md")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,
    "&:active": theme.activeStyles,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    backgroundColor: "#2D2D2D",
    color: "var(--white)",
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
}));

type AnMenuSectionItemProps = {
  imageSrc?: string;
  label: string;
  link: string;
};

type AnMenuSectionProps = {
  label?: string;
  items?: AnMenuSectionItemProps[];
  link?: string;
};

type AnMenuProps = {
  logoUrl: string;
  logoLink: string;
  sections: AnMenuSectionProps[];
};
export const AnMenu = ({ logoUrl, logoLink, sections }: AnMenuProps) => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [activeLink, setActiveLink] = useState("");
  const { classes } = useStyles();

  const clickToggle = (label: string | undefined) => {
    toggleLinks();
    setActiveLink(label || "");
  };

  const links = (items: AnMenuSectionItemProps[]) =>
    items.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.label}>
        <Group noWrap align="flex-start">
          <Anchor href="item.link">
            <Flex
              gap="md"
              justify="flex-start"
              align="center"
              direction="row"
              wrap="wrap"
            >
              {item.imageSrc && (
                <ThemeIcon size={34} variant="default" radius="md">
                  <Image src={item.imageSrc} />
                </ThemeIcon>
              )}
              <div>
                <Text size="sm" weight={500}>
                  {item.label}
                </Text>
              </div>
            </Flex>
          </Anchor>
        </Group>
      </UnstyledButton>
    ));

  return (
    <Box pb={120}>
      <Header height={90} px={40} className={classes.header}>
        <Group position="apart" sx={{ height: "100%" }}>
          <Anchor href={logoLink}>
            <Image src={logoUrl} width={100} />
          </Anchor>
          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            {sections.map((section) =>
              section.items ? (
                <HoverCard
                  position="bottom"
                  radius="md"
                  shadow="md"
                  withinPortal
                >
                  <HoverCard.Target>
                    <Anchor href="#" className={classes.link}>
                      <Center inline>
                        <Box component="span" mr={5}>
                          {section.label}
                        </Box>
                        {linksOpened ? (
                          <IconChevronUp size={16} color={"var(--white)"} />
                        ) : (
                          <IconChevronDown size={16} color={"var(--white)"} />
                        )}
                      </Center>
                    </Anchor>
                  </HoverCard.Target>

                  <HoverCard.Dropdown
                    sx={{
                      overflow: "hidden",
                      backgroundColor: "var(--secondary)",
                      border: "unset",
                    }}
                  >
                    <SimpleGrid cols={1} spacing={0}>
                      {links(section.items)}
                    </SimpleGrid>
                  </HoverCard.Dropdown>
                </HoverCard>
              ) : (
                <Anchor className={classes.link} href={section.link}>
                  {section.label}
                </Anchor>
              )
            )}
          </Group>

          <Group className={classes.hiddenMobile}>
            <AnButton variant="subtle">Login</AnButton>
            <AnButton variant="outline">Contact Sales</AnButton>
            <AnButton variant="filled">Sign up</AnButton>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
            color="var(--white)"
          />
          {drawerOpened && (
            <AnButton variant="outline" className={classes.hiddenDesktop}>
              Contact Sales
            </AnButton>
          )}
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        title={<AnButton variant="outline">Contact Sales</AnButton>}
        size="100%"
        padding="md"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          {sections.map((section) =>
            section.items ? (
              <>
                <UnstyledButton
                  className={classes.link}
                  onClick={() => clickToggle(section.label)}
                >
                  <Center inline>
                    <Box component="span" mr={5}>
                      {section.label}
                    </Box>
                    {linksOpened && activeLink === section.label ? (
                      <IconChevronUp size={16} color={"var(--white)"} />
                    ) : (
                      <IconChevronDown size={16} color={"var(--white)"} />
                    )}
                  </Center>
                </UnstyledButton>
                <Collapse
                  in={linksOpened && activeLink === section.label}
                  sx={{
                    backgroundColor: "var(--secondary)",
                    borderRadius: "25px",
                    margin: "20px",
                    padding: "20px",
                  }}
                >
                  {links(section.items)}
                </Collapse>
              </>
            ) : (
              <Anchor className={classes.link} href={section.link}>
                {section.label}
              </Anchor>
            )
          )}
          <Anchor href="#" className={classes.link}>
            Start free
          </Anchor>
          <Anchor href="#" className={classes.link}>
            Login
          </Anchor>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};
