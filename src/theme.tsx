import { extendTheme } from "@chakra-ui/react";

import "@animaapp/anima-design-tokens/dist/tokens.css";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: "normal",
        borderRadius: "25px",
      },
      variants: {
        outline: {
          borderColor: "var(--tomato-9)",
          color: "var(--tomato-9)",
          padding: "0 32px",
          _hover: {
            bg: "var(--tomato-9)",
            color: "var(--white)",
          },
          _active: {
            bg: "var(--tomato-11)",
          },
        },
        solid: {
          color: "var(--white)",
          bg: "var(--tomato-9)",
          padding: "0 32px",
          _hover: {
            bg: "var(--tomato-10)",
          },
          _active: {
            bg: "var(--tomato-11)",
          },
        },
        link: {
          padding: "0 16px",
          color: "var(--white)",
          _hover: {
            textDecoration: "none",
          },
          _active: {
            color: "var(--white)",
          },
        },
      },
    },
    Link: {
      variants: {
        ghost: {
          textDecoration: "none",
          _hover: {
            textDecoration: "none",
          },
          _focus: {
            textDecoration: "none",
          },
        },
      },
    },
    Card: {
      baseStyle: {
        header: {
          textAlign: "left",
          color: "var(--white)",
          padding: "40px",
        },
        container: {
          color: "var(--white)",
        },
        body: {
          padding: "40px 40px",
        },
      },
      variants: {
        filled: {
          container: {
            borderColor: "var(--secondary)",
            bg: "var(--secondary)",
          },
        },
        highlighted: {
          container: {
            border: "1px solid var(--white)",
            bg: "var(--secondary)",
            overflow: 'hidden',
          },
          header: {
            bg: "var(--white)",
            borderColor: "var(--white)",
            color: "var(--secondary)",
          },
        },
      },
      defaultProps: {
        variant: "filled",
      },
    },
    Divider: {
      variants: {
        solidRed: {
          borderColor: "var(--tomato-9)",
          opacity: 1,
          h: "6px",
          background: "var(--tomato-9)",
          borderRadius: "25px",
          margin: "0px",
        },
        solidLight: {
          borderColor: "var(--white)",
          opacity: 1,
          h: "6px",
          background: "var(--white)",
          borderRadius: "25px",
        },
      },
    },
    Menu: {
      baseStyle: {
        list: {
          marginTop: "24px",
          backgroundColor: "var(--secondary)",
          borderColor: "var(--secondary)",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "8px 10px 24px rgba(0, 0, 0, 0.35)",
        },
        item: {
          color: "var(--white)",
          bg: "transparent",
        },
      },
    },
  },
});
export default theme;
