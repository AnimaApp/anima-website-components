import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

type AnMenuItemProps = {
  label: string;
  iconSource?: string;
  link: string;
};
type AnMenuProps = {
  label: React.ReactNode;
  items: AnMenuItemProps[];
};
export const AnMenu = ({ label, items }: AnMenuProps) => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            variant="link"
            rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          >
            {label}
          </MenuButton>
          <MenuList>
            {items.map((item, index) => (
              <Link variant="ghost" key={index} href={item.link}>
                <MenuItem>
                  {item.iconSource && (
                    <Image
                      src={item.iconSource}
                      alt={item.label}
                      mr="12px"
                    />
                  )}
                  {item.label}
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};
