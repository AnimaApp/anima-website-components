import { Divider, SimpleGrid, Image } from "@chakra-ui/react";

type AnLogoProps = {
  name: string;
  url: string;
};

type AnLogoListProps = {
  items: AnLogoProps[];
};
export const AnLogoList = ({ items }: AnLogoListProps) => {
  return (
    <>
      <Divider mb={5} color={"var(--white)"} />
      <SimpleGrid minChildWidth="10vw" spacing="40px" alignContent={"center"}>
        {items.map((item, index) => (
          <Image key={index} src={item.url} alt={item.name} />
        ))}
      </SimpleGrid>
      <Divider mt={5} color={"var(--white)"} />
    </>
  );
};
