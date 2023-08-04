"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Loading.module.scss";
import clsx from "clsx";
import animationData from "./loading.json";
import Lottie, { LottieProps } from "react-lottie";

export type LoadingProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function Loading({ children, delay = 3600 }: LoadingProps) {
  const [show, setShow] = useState(true);
  const [afterDelay, setAfterDelay] = useState<boolean>(false);

  setTimeout(() => {
    setAfterDelay(true);
  }, delay);

  useEffect(() => {
    if (afterDelay) {
      setShow(false);
    }
  }, [afterDelay]);

  const defaultOptions: LottieProps["options"] = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className={clsx(styles.Loading, show && styles.isLoading)}>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      {!show && <div className={clsx(styles.Children)}>{children}</div>}
    </>
  );
}
