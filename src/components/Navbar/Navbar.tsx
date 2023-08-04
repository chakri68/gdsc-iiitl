"use client";

import clsx from "clsx";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { IconBrandGithub, IconMail } from "@tabler/icons-react";
import { motion } from "framer-motion";

export type NavbarProps = {};

type LinkButtonProps = {
  icon?: React.ReactNode;
  text?: string;
  className?: string;
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
} & LinkProps;

function NavLink({
  icon,
  text,
  className,
  iconPosition = "left",
  children,
  ...linkProps
}: LinkButtonProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(styles.LinkButton, styles.NavLink, className)}
    >
      {iconPosition === "left" && icon}
      {text && <span className={styles.LinkButton__Text}>{text}</span>}
      {children}
      {iconPosition === "right" && icon}
    </Link>
  );
}

export default function Navbar({}: NavbarProps) {
  return (
    <div className={clsx(styles.NavbarWrapper)}>
      <div className={clsx(styles.Navbar)}>
        <div className={styles.LeftContainer}>
          {/* Left Part */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link className={styles.BrandLogo} href={"/"}>
              <div className={styles.Logo}>
                <Image alt="logo" src={"/logo.png"} width={50} height={50} />
              </div>
              <span className={styles.Brand}>DSC IIITL</span>
            </Link>
          </motion.div>
        </div>
        <div className={styles.RightContainer}>
          {/* Right Part */}
          <NavLink href={"/events"}>
            <span>About Us</span>
          </NavLink>
          <NavLink href={"/team"}>
            <span>Events</span>
          </NavLink>
          <NavLink href={"/projects"}>
            <span>Our Team</span>
          </NavLink>
          <NavLink
            href="mailto:chakridevireddy69+gdsc-iiitl@gmail.com"
            icon={<IconMail size={24} />}
            text="Email"
          />
          <NavLink
            href="https://github.com/chakri68/gdsc-iiitl"
            icon={<IconBrandGithub size={24} />}
            text="Github"
          />
        </div>
      </div>
    </div>
  );
}
