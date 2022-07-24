import NextHead from "next/head";

export const Head = ({ children = "Title" }) => {
  return (
    <NextHead>
      <title>{children}</title>
    </NextHead>
  );
};
