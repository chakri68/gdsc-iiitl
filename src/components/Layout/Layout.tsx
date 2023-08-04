import clsx from "clsx";
import styles from "./Layout.module.scss";

type LayoutProps = { children?: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return <>{children}</>;
};

type FlexProps = {
  children?: React.ReactNode;
  direction?: "row" | "column";
  align?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string;
};
const Flex = ({
  children,
  align,
  direction,
  justify,
  wrap,
  gap = "0rem",
}: FlexProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        gap: gap,
      }}
      className={clsx(styles.Flex)}
    >
      {children}
    </div>
  );
};

Layout.Flex = Flex;

export default Layout;
