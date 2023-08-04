import { motion } from "framer-motion";
import styles from "./Page.module.scss";
import clsx from "clsx";
import Image from "next/image";

const Page = () => {
  return <h1>PAGE</h1>;
};

// HERO

type HeroProps = {
  size?: "small" | "medium" | "large" | "half" | "full";
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  gap?: string;
};

const Hero = ({
  size = "small",
  title = "",
  subtitle = "",
  gap,
}: HeroProps) => {
  return (
    <div className={clsx(styles.Hero, styles[size])}>
      <motion.div
        className={styles.Hero__body}
        style={{
          gap: gap,
        }}
        animate={{
          opacity: [0, 1],
        }}
      >
        <div className={styles.Hero__title}>{title}</div>
        <div className={styles.Hero__subtitle}>{subtitle}</div>
      </motion.div>
    </div>
  );
};

// Section

type MediaItemProps = {
  type: "image" | "node";
  src?: string;
  alt?: string;
  node?: React.ReactNode;
};

const MediaItem = ({ type, node, src = "", alt = "" }: MediaItemProps) => {
  return (
    <div className={styles.MediaItem}>
      {type === "image" && (
        <div className={styles.MediaItem__imagewrapper}>
          <Image
            className={styles.MediaItem__image}
            alt={alt}
            src={src}
            fill={true}
          />
        </div>
      )}
      {type === "node" && (
        <div className={styles.MediaItem__nodewrapper}>{node}</div>
      )}
    </div>
  );
};

type SectionProps = {
  children?: React.ReactNode;
  // TODO: size?: "small" | "medium" | "large" | "half" | "full";
  size?: "full";
  type?: "custom" | "media" | "titlemedia";
  mediaItems?: MediaItemProps[];
  title?: React.ReactNode;
};

const Section = ({
  children,
  size = "full",
  mediaItems,
  title,
  type = "media",
}: SectionProps) => {
  return (
    <div className={clsx(styles.Section, styles[size], styles[type])}>
      {type === "media" && (
        <div className={styles.Section__media}>
          {mediaItems?.map((mediaItemProps, idx) => (
            <MediaItem key={idx} {...mediaItemProps} />
          ))}
        </div>
      )}
      {type === "custom" && children}
      {type === "titlemedia" && (
        <div className={styles.Section__titlemedia}>
          <div className={styles.Section__title}>{title}</div>
          <div className={styles.Section__media}>
            {mediaItems?.map((mediaItemProps, idx) => (
              <MediaItem key={idx} {...mediaItemProps} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Page.Hero = Hero;
Page.Section = Section;

export default Page;
