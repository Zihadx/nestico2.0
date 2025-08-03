"use client";

import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

interface Props {
  children: React.ReactNode;
}

export default function ParallaxWrapper({ children }: Props) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
