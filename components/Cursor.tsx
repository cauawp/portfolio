"use client";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

interface CursorProps {
  x: number;
  y: number;
  cursorVariant: string;
  setCursorVariant: React.Dispatch<React.SetStateAction<string>>;
}

const Cursor: React.FC<CursorProps> = ({
  x,
  y,
  cursorVariant,
  setCursorVariant,
}) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };
  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </>
  );
};

export default Cursor;
