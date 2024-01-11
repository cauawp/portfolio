"use client";
import React, { useState } from "react";
import Hero from "../components/Hero";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import LogoTop from "@/components/LogoTop";
import Header from "@/components/Header";

export default function Home() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [loaderComplete, setLoaderComplete] = useState(false);

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const handleLoaderComplete = () => {
    setLoaderComplete(true);
  };

  return (
    <main>
      <Loader onLoaderComplete={handleLoaderComplete} />
      {loaderComplete && (
        <>
          <LogoTop />
          <Cursor
            cursorVariant={cursorVariant}
            setCursorVariant={setCursorVariant}
          />
          <Hero mouseEnterTitle={textEnter} mouseLeaveTitle={textLeave} />
          <div style={{ height: "100vh" }}></div>
          <Header />
        </>
      )}
    </main>
  );
}
