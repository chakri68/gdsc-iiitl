"use client";

import CanvasBackground from "@/components/CanvasBackground/CanvasBackground";
import { CanvasManager } from "@/components/CanvasBackground/CanvasManager";
import Layout from "@/components/Layout/Layout";
import Page from "@/components/Page/Page";
import { SimpleCircles } from "@/lib/canvas-animations/SimpleCircles";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const canvasManagerRef = useRef<CanvasManager>(
    new SimpleCircles(30, undefined, [10, 40], [1, 5])
  );
  return (
    <>
      <CanvasBackground manager={canvasManagerRef.current}>
        <Page.Hero
          gap="2.5rem"
          size="full"
          title={
            <Layout.Flex align="flex-start" direction="row" gap="2rem">
              <Image
                alt="gdsc logo"
                src={"/logo.png"}
                width={100}
                height={100}
              />
              <Layout.Flex direction="column">
                <span style={{ fontWeight: "700" }}>
                  Developer Student Club
                </span>
                <span style={{ fontWeight: "600" }}>IIIT Lucknow</span>
              </Layout.Flex>
            </Layout.Flex>
          }
          subtitle={
            <Layout.Flex align="center" direction="column" gap="0.5rem">
              <span style={{ fontWeight: "500" }}>
                Powered By Google Developers
              </span>
              <span style={{ fontWeight: "500", color: "#ff69b4" }}>
                #developerstudentclubs #googlestudents #growwithgoogle{" "}
              </span>
            </Layout.Flex>
          }
        />
      </CanvasBackground>
      <Page.Section
        size="full"
        type="media"
        mediaItems={[
          {
            type: "node",
            node: (
              <Layout.Flex align="center" direction="column" gap="0.5rem">
                <span style={{ fontWeight: "500" }}>
                  Developer Student Club
                </span>
                <span style={{ fontWeight: "500" }}>IIIT Lucknow</span>
              </Layout.Flex>
            ),
          },
          {
            type: "image",
            src: "/logo.png",
            alt: "gdsc logo",
          },
        ]}
      />
    </>
  );
}
