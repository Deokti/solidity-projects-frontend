import NextHead from "next/head";

export const Head = ({ children }: { children: string }) => {
  return (
    <NextHead>
      <title>{children}</title>
    </NextHead>
  );
};
