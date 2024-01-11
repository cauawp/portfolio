"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.header className="fixed bottom-0 left-0 w-full">
        <motion.nav className="flex justify-around">
          <motion.ul>
            <motion.li>Inicio</motion.li>
          </motion.ul>
          <motion.ul>
            <motion.li>Skills</motion.li>
          </motion.ul>
          <motion.ul>
            <motion.li>Trabalhos</motion.li>
          </motion.ul>
          <motion.ul>
            <motion.li>Sobre</motion.li>
          </motion.ul>
          <motion.ul>
            <motion.li>Contato</motion.li>
          </motion.ul>
        </motion.nav>
        <motion.div
          className="progress-bar fixed bottom-0 left-0 right-0 h-1 origin-[0%] w-full baseColorBg"
          style={{
            scaleX: scrollYProgress,
            transition: ".5s linear",
          }}
        />
      </motion.header>
    </>
  );
};

export default Header;
